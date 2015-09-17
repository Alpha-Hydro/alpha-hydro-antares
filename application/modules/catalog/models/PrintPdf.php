<?php
require_once 'tcpdf/tcpdf.php';

class Catalog_Model_PrintPdf extends TCPDF
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
        //$this->setPrintHeader(false);
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
        $this->SetFont('', 'B', 16);
        $this->Write(0, $this->_product->sku);
        $this->Ln();
        $this->SetFontSize(12);
        $this->Write(0, $this->_product->name);

        $style = array('width' => 0.1, 'cap' => 'butt', 'join' => 'miter', 'dash' => 0, 'color' => $this->footer_line_color);
        $this->SetY(20);
        $this->Line($this->original_lMargin, $this->y, $this->getPageWidth()-$this->original_rMargin, $this->y, $style);
    }

    /**
     * Подвал страницы
     * Page footer
     */
    public function Footer() {
        if($this->_last_page_flag){
            $this->SetY(-15);
            $this->showSignature();
        }
    }

    public function showSignature(){
        $image_file = APPLICATION_ROOT .'/files/pdf/alfa-hydro.png';
        $this->Image($image_file, $this->original_lMargin, $this->y, 50, '', 'PNG', '', 'M', true, 150, '', false, false, 0, false, false, false);

        $this->SetFontSize(10);
        $this->SetXY($this->x + 3, $this->y + 1);
        $this->SetFillColor(228,228,228);
        $numberPageWith = 20;
        $this->Cell($this->getPageWidth() - $this->x - $numberPageWith - 3, 7, 'www.alpha-hydro.com', 0, 0, 'C', true, 'http://alpha-hydro.loc/catalog/shlangi/gidravlika/shlangi-vysokogo-davlenija/kompaktnye-shlangi/AKP1001SC/', 0, false, 'M');
        $this->SetX($this->x + 3);
        $this->SetFillColor(0,148,218);
        $this->SetTextColor(255);
        $this->SetFont('', 'B', 10);
        $this->Cell($numberPageWith, 7, $this->getAliasNumPage(), 0, 1, 'C', true, '', 0, false, 'M');

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
        $this->Image($image_file,$this->x,$this->y,'', 25, '', '', 'T');
        $this->SetX($this->getImageRBX() + 5);

        $images_draft = unserialize($product->getAImages());
        if(is_array($images_draft) && !empty($images_draft)){
            $image_draft_file = APPLICATION_ROOT  . '/files/images/product/' . $images_draft[0];
            $this->Image($image_draft_file,$this->x,$this->y, '', 25, '', '', 'T',true,190);
            $this->SetX($this->x + 5);
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
        $products = new Model_Mapper_Products();

        $product = $this->getProduct();
        $productsParams = new Model_Mapper_ProductParams();
        $select = $productsParams->getDbTable()->select()->order('order ASC');
        $properties = $products->findProductParams($product->getId(), $select);

        if(!empty($properties)){

            //$this->SetXY($this->original_lMargin, $this->y);

            $w = array(40, $this->getPageWidth()-$this->original_lMargin-$this->original_rMargin-40);
            foreach($properties as $property){

                $this->SetFont('','B',10);
                $this->Cell($w[0], 5, $property->name, 0, 0, 'L', false);
                $this->SetFont('','',10);
                $this->Cell($w[1], 5, $property->value, 0, 0,'L', false);
                //$this->MultiCell($w[1], 0, $property->value, 0, 'L', false, 0, '', '', true, 0, false, true, 0);
                $this->Ln();
            }
            //$this->Cell(array_sum($w), count($properties)*5, '', 0);
        }

        $this->Ln(5);

        return $this;
    }



    /**
     * @param mixed $product
     * @return Catalog_Model_PrintPdf
     */
    public function setProduct($product)
    {
        $this->_product = $product;
        return $this;
    }

    /**
     * @param array $aModificationsProduct
     * @return Catalog_Model_PrintPdf
     */
    public function setAModificationsProduct($aModificationsProduct)
    {
        $this->_aModificationsProduct = $aModificationsProduct;
        return $this;
    }

    /**
     * @param mixed $widthWorkspacePage
     * @return Catalog_Model_PrintPdf
     */
    public function setWidthWorkspacePage($widthWorkspacePage)
    {
        $this->_widthWorkspacePage = $widthWorkspacePage;
        return $this;
    }

    /**
     * @param boolean $last_page_flag
     * @return Catalog_Model_PrintPdf
     */
    public function setLastPageFlag($last_page_flag)
    {
        $this->_last_page_flag = $last_page_flag;
        return $this;
    }

    /**
     * @return mixed
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
     * @return mixed
     */
    public function getWidthWorkspacePage()
    {
        return $this->_widthWorkspacePage;
    }

    /**
     * @return boolean
     */
    public function isLastPageFlag()
    {
        return $this->_last_page_flag;
    }

}
