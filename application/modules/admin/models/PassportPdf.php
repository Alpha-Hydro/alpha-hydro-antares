<?php
/**
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

/**
 * Created by PhpStorm.
 * User: mvl
 * Date: 20.07.2015
 * Time: 10:37
 */

require_once 'tcpdf/tcpdf.php';

class Admin_Model_PassportPdf extends TCPDF
{

    protected $_product = null;

    protected $_propertiesProduct = array();

    protected $_aModificationsProduct = array();

    protected $_widthWorkspacePage;

    protected $_last_page_flag = false;

    protected $_modification_table_head = null;

    protected $_modification_table_body = null;

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
        $title = 'Паспорт № '. $this->getProduct()->getId() . '/'.count($this->getAModificationsProduct()).' от '. date('d.m.Y') . ' г.';
        $this->Cell(0, 0, $title, 0, 1, 'C', false, '', 0, false, 'M');

        $image_rst = APPLICATION_ROOT .'/files/pdf/znak_rst.png';
        $this->Image($image_rst, $this->getPageWidth()-$this->original_rMargin-10, 5, 11, '', 'PNG', '', 'M', true, 300, '', false, false, 0, false, false, false);

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
        $this->SetY(20);
        $this->SetFont('', '', 12);
        $this->Write(0, $this->getProduct()->getName());
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
            $this->Write(0, $this->getProduct()->getSku());
        }

        $this->Ln(10);
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
        $y = $this->y;
        if($this->getProduct()->getImage()){
            //$this->SetXY($this->x, $this->y);
            $image_file = APPLICATION_ROOT . $this->getProduct()->getUploadPath() . $this->getProduct()->getImage();
            $this->Image($image_file,$this->x,$this->y,'', 45);
            $this->SetY($this->getImageRBY());
        }

        if($this->getProduct()->getDraft()){
            $image_draft_file = APPLICATION_ROOT  . $this->getProduct()->getUploadPathDraft() . $this->getProduct()->getDraft();
            $this->SetXY($this->x + 50, $y);
            $this->Image($image_draft_file,$this->x,$this->y, '', 45,'','','',true,190);
            $this->SetY($this->getImageRBY());
        }

        $this->Ln(5);

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
        $properties = $this->getPropertiesProduct();

        if(!empty($properties)){
            //$this->SetXY($this->original_lMargin, $this->y);
            $this->SetFont('','B',11);
            $this->Write(0, 'Свойства');
            $this->Ln(8);

            $w = array(60, $this->getPageWidth()-$this->original_lMargin-$this->original_rMargin-60);
            foreach($properties as $property){
                $this->SetFont('','B',10);
                $this->Cell($w[0], 5, $property->getName(), 0, 0, 'L', false);
                $this->SetFont('','',10);
                $this->MultiCell($w[1], 0, $property->getValue(), 0, 'L', false, 0, '', '', true, 0, false, true, 0);
                $this->Ln();
            }
            $this->Cell(array_sum($w), 0, '', 0);
        }

        $this->Ln(5);

        return $this;
    }

    /**
     * Таблица параметров выбранных модификаций
     * @return $this
     */
    public function showModificatonTable()
    {
        $html = <<<EOD
<style>
.modification{
	max-width: 650px;
	font-size: 8pt;
	background-color: #aaa;
	text-align: center;
}
th, td{
	background-color: #fff;
	vertical-align: middle;
}
th{
    background-color: #F9F9F9;
}

</style>
<table cellspacing="1" cellpadding="5" width="600px" class="modification">
	<thead>
		{$this->getModificationTableHead()}
	</thead>
	<tbody>
	   {$this->getModificationTableBody()}
	</tbody>
</table>
EOD;

        if(0 != count($this->getAModificationsProduct())){
            $this->SetFont('','',8);
            $this->writeHTML($html, true, false, true, false, '');
            //$this->Ln();
        }

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
     * @param Catalog_Model_Products $product
     * @return $this
     * @throws Zend_Exception
     */
    public function setProduct(Catalog_Model_Products $product)
    {
        $this->_product = $product;
        return $this;
    }

    /**
     * Получение модели основного товара
     *
     * @return Catalog_Model_Products $product
     * @throws Zend_Exception
     */
    public function getProduct()
    {
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
     * @return $this
     */
    public function setAModificationsProduct($aModificationsProduct)
    {
        $this->_aModificationsProduct = $aModificationsProduct;
        return $this;
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
     * @return $this
     */
    public function setWidthWorkspacePage($widthWorkspacePage)
    {
        $this->_widthWorkspacePage = $widthWorkspacePage;
        return $this;
    }

    /**
     * @param array $propertiesProduct
     * @return Admin_Model_PassportPdf
     */
    public function setPropertiesProduct($propertiesProduct)
    {
        $this->_propertiesProduct = $propertiesProduct;
        return $this;
    }

    /**
     * @return Catalog_Model_ProductParams[]
     */
    public function getPropertiesProduct()
    {
        return $this->_propertiesProduct;
    }

    /**
     * @param null $modification_table_head
     * @return Admin_Model_PassportPdf
     */
    public function setModificationTableHead($modification_table_head)
    {
        $this->_modification_table_head = $modification_table_head;
        return $this;
    }

    /**
     * @return null
     */
    public function getModificationTableHead()
    {
        return $this->_modification_table_head;
    }

    /**
     * @param null $modification_table_body
     * @return Admin_Model_PassportPdf
     */
    public function setModificationTableBody($modification_table_body)
    {
        $this->_modification_table_body = $modification_table_body;
        return $this;
    }

    /**
     * @return null
     */
    public function getModificationTableBody()
    {
        return $this->_modification_table_body;
    }

}