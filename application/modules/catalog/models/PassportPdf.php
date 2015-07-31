<?php
/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 20.07.2015
 * Time: 10:37
 */
require_once 'tcpdf/tcpdf.php';

class Catalog_Model_PassportPdf extends TCPDF
{

    protected $_product;

    protected $_aModificationsProduct = array();

    protected $_widthWorkspacePage;

    protected $_last_page_flag = false;


    public function __construct()
    {
        parent::__construct(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

        // set document information
        $this->SetCreator(PDF_CREATOR);

        // set default monospaced font
        $this->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

        // set margins
        $this->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
        $this->SetHeaderMargin(PDF_MARGIN_HEADER);

        // set image scale factor
        $this->setImageScale(PDF_IMAGE_SCALE_RATIO);

        // set default font subsetting mode
        $this->setFontSubsetting(true);

        // remove default header/footer
        //$pdf->setPrintHeader(false);
        //$this->setPrintFooter(false);

        $this->setWidthWorkspacePage($this->getPageWidth()-$this->original_rMargin-$this->original_lMargin);
    }

    public function Close() {
        $this->_last_page_flag = true;
        parent::Close();
    }

    /**
     * Шапка страницы
     * Page header
     */
    public function Header() {
        // Logo
        $image_file = APPLICATION_ROOT .'/files/pdf/alfa-hydro.png';
        $this->Image($image_file, $this->original_lMargin, 5, 50, '', 'PNG', '', 'M', true, 150, '', false, false, 0, false, false, false);

        // Set font
        $this->SetFont('', 'B', 16);

        // Title
        $title = 'Паспорт № '. $this->_product->id . '/'.$this->getAliasNumPage().' от '. date('d.m.Y') . ' г.';
        $this->Cell(0, 0, $title, 0, 1, 'R', false, '', 0, false, 'M');

        $style = array('width' => 0.1, 'cap' => 'butt', 'join' => 'miter', 'dash' => 0, 'color' => $this->footer_line_color);
        $this->SetY(17);
        $this->Line($this->original_lMargin, $this->y, $this->getPageWidth()-$this->original_rMargin, $this->y, $style);
    }

    /**
     * Подвал страницы
     * Page footer
     */
    public function Footer() {
        if($this->_last_page_flag){
            $this->SetY(-25);
            $this->showSignature();
        }
    }

    /**
     * Наименование основного товара
     * Серийный номер основного товара
     *
     * @return $this
     */
    public function showName()
    {
        $product = $this->getProduct();

        $this->SetY(20);
        $this->SetFont('', '', 12);
        $this->Write(0, $product->name);
        $this->Ln(5);

        return $this;
    }

    /**
     * Модификации основного товара
     *
     * @return $this
     */
    public function showModificationsList()
    {
        $modifications = $this->getAModificationsProduct();

        //$this->SetXY($this->original_lMargin, $this->y);
        $this->SetFont('','B',14);

        if(!empty($modifications)){
            $total = count($modifications);
            $counter = 1;
            foreach($modifications as $modification){
                $comma = ($counter != $total)?', ':'';
                $this->Write(0, $modification->sku.$comma);
                $counter++;
            }
        }
        else{
            $this->Write(0, $this->_product->sku);
        }

        $this->Ln(8);
        return $this;
    }

    /**
     * Изображение основного товара
     * Чертеж основного товара (если есть)
     *
     * @return $this
     */
    public function showImages()
    {
        $product = $this->getProduct();

        //$this->SetXY($this->x, $this->y);
        $image_file = APPLICATION_ROOT . '/files/images/product/' . $product->image;
        $this->Image($image_file,$this->x,$this->y,'', 45);

        if(is_array($product->a_images) && !empty($product->a_images)){
            $image_draft_file = APPLICATION_ROOT  . '/files/images/product/' . $product->a_images[0];
            $this->SetX($this->x + 50);
            $this->Image($image_draft_file,$this->x,$this->y, '', 45,'','','',true,190);
        }
        $this->SetY($this->getImageRBY());
        $this->ln(5);

        return $this;
    }

    /**
     * Свойства основного товара
     *
     * @return $this
     * @throws Zend_Exception
     */
    public function showProperty()
    {
        $product = $this->getProduct();
        $properties = $product->getParams();

        if(!empty($properties)){
            //$this->SetXY($this->original_lMargin, $this->y);
            $this->SetFont('','B',11);
            $this->Write(0, 'Свойства');
            $this->Ln(8);

            $w = array(60, $this->getPageWidth()-$this->original_lMargin-$this->original_rMargin-60);
            foreach($properties as $property){
                $this->SetFont('','B',10);
                $this->Cell($w[0], 5, $property->name, 0, 0, 'L', false);
                $this->SetFont('','',10);
                $this->MultiCell($w[1], 0, $property->value, 0, 'L', false, 0, '', '', true, 0, false, true, 0);
                $this->Ln();
            }
            $this->Cell(array_sum($w), 0, '', 0);
        }

        $this->Ln(5);

        return $this;
    }

    /**
     * Таблица параметров выбранных модификаций
     *
     * @param $html
     * @return $this
     */
    public function showModificatonTable($html)
    {
        $this->SetFont('','',8);
        $this->writeHTML($html, true, false, true, false, '');
        //$this->Ln();

        return $this;
    }

    /**
     * Гарантийные обязательства
     *
     * @param string $title
     * @param string $text
     * @return $this
     */
    public function showGarant($title = '', $text = '')
    {
        $this->SetFont('','B',10);
        $this->Write(0, $title);
        $this->Ln(5);

        $this->SetFont('','',10);
        $this->Write(0, $text);
        $this->Ln(15);

        return $this;
    }

    public function showSignature(){
        $n = 3;
        for($i = 0; $i < $n; ++$i){
            $this->SetFont('','B',11);
            $this->Cell($this->getWidthWorkspacePage()/$n, 5, 'Генеральный директор', 0, 0, 'R', false);
            $this->SetFont('','',11);
            $this->Cell($this->getWidthWorkspacePage()/$n, 5, 'М.П.', 0, 0, 'C', false);
            $this->Cell($this->getWidthWorkspacePage()/$n, 5, 'Подпись', 0, 0, 'L', false);
        }
        $this->Cell($this->getWidthWorkspacePage(), 0, '', 0);
    }

    /**
     * Загрузка модели основного товара.
     *
     * @param Model_DbRow_Product $product
     * @return $this
     * @throws Zend_Exception
     */
    public function setProduct(Model_DbRow_Product $product)
    {
        $this->_product = $product;
    }

    /**
     * Получение модели основного товара
     *
     * @return Model_DbRow_Product $product
     * @throws Zend_Exception
     */
    public function getProduct()
    {
        if (!$this->_product)
            throw new Zend_Exception("No product found", 404 );

        return $this->_product;
    }

    /**
     * @return array
     */
    public function getAModificationsProduct()
    {
        return $this->_aModificationsProduct;
    }

    /**
     * @param array $aModificationsProduct
     */
    public function setAModificationsProduct($aModificationsProduct)
    {
        $this->_aModificationsProduct = $aModificationsProduct;
    }

    /**
     * @return mixed
     */
    public function getWidthWorkspacePage()
    {
        return $this->_widthWorkspacePage;
    }

    /**
     * @param mixed $widthWorkspacePage
     */
    public function setWidthWorkspacePage($widthWorkspacePage)
    {
        $this->_widthWorkspacePage = $widthWorkspacePage;
    }

}