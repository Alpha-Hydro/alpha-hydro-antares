<?php
require_once 'tcpdf/tcpdf.php';

class Catalog_Model_PrintPdf extends TCPDF
{
    /**
     * @var Catalog_Model_Products
     */
    protected $_product;

    protected $_aModificationsProduct = array();

    protected $_widthWorkspacePage;

    protected $_last_page_flag = false;

    protected $_hostName;

    protected $_aHostName = array(
        'alfa-hydro.loc',
        'alfa-hydro.com',
    );


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

        $this->setWidthWorkspacePage($this->getPageWidth()-PDF_MARGIN_LEFT-PDF_MARGIN_RIGHT);

        $this->setHostName(Zend_Controller_Front::getInstance()->getRequest()->getServer('HTTP_HOST'));
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
        $this->Write(0, $this->transformSku($this->getProduct()->getSku()));
        $this->Ln();
        $this->SetFontSize(12);
        $this->Write(0, $this->getProduct()->getName());

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
        $this->Cell($this->getPageWidth() - $this->x - $numberPageWith - 3, 7, 'www.'.$this->getHostName(), 0, 0, 'C', true, 'http://'.$this->getHostName().'/catalog/'.$this->getProduct()->getFullPath(), 0, false, 'M');
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

        $image_file = APPLICATION_ROOT . '/files/images/product/' . $product->image;
        $this->Image($image_file,$this->x,$this->y,'', 25, '', '', 'T');
        $this->SetX($this->getImageRBX() + 5);

        $images_draft = unserialize($product->getAImages());
        if(is_array($images_draft) && !empty($images_draft)){
            $image_draft_file = APPLICATION_ROOT  . '/files/images/product/' . $images_draft[0];
            $this->Image($image_draft_file,$this->x,$this->y, '', 25, '', '', 'T',true,190);
            $this->SetX($this->x + 5);
        }

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
        $products = new Catalog_Model_Mapper_Products();

        $product = $this->getProduct();
        $productsParams = new Catalog_Model_Mapper_ProductParams();
        $select = $productsParams->getDbTable()->select()->order('order ASC');
        $properties = $products->findProductParams($product->getId(), $select);

        $x = $this->getImageRBX()+5;
        if(!empty($properties)){
            $w = array(60, $this->getPageWidth()-$this->original_rMargin-$x-60);
            foreach($properties as $property){
                $this->SetFont('','B',10);
                $this->MultiCell($w[0], 0, $property->name, 0, 'L', false, 0, $x, '', true, 0, false, true, 0);
                $this->SetFont('','',10);

                $this->MultiCell($w[1], 0, $property->value, 0, 'L', false, 0, '', '', true, 0, false, true, 0);
                $this->Ln();
            }
        }

        $this->Ln(5);

        if($this->y < $this->getImageRBY()+5)
            $this->SetX($x);

        return $this;
    }

    public function showDescription()
    {

        $product = $this->getProduct();
        if($product->description != ''){
            $html = <<<EOF
<style>
    table{
        font-size: 8pt;
        vertical-align: middle;
        text-align: center;
    }
    th {
        background-color: rgb(0, 148, 218);
        color: #ffffff;
        font-weight: bold;
        height: 20px;
        border-top: 1px solid #ddd;
    }
    tr.odd td{
        background-color: rgb(228, 228, 228);
    }
</style>
EOF;
            $html .= $product->description;
            $this->writeHTMLCell(0, '', '', '', $html, 0, 1);
            $this->Ln(5);
        }

        return $this;
    }


    /**
     * Таблица модификаций
     *
     * @param $table
     * @return $this
     */
    public function showModificatonTable($table)
    {
        $this->SetFont('','B');
        $this->Write(0, 'Модификации и размеры');
        $this->ln(5);

        if($this->GetY() < $this->getImageRBY()+5)
            $this->SetY($this->getImageRBY()+5);

        $this->SetFont('','',8);
        $headTable = array_shift ($table);

        if(count($headTable) > 1) {
            $widthName = 25;
            $w = array($widthName, ($this->getWidthWorkspacePage() - $widthName) / (count($headTable) - 1));

            $this->setCellPaddings('', 1, '', 1);
            $this->SetFillColor(0, 148, 218);
            $this->SetTextColor(255);
            foreach ($headTable as $key => $column) {
                $wKew = ($key == 0) ? $w[0] : $w[1];
                $this->MultiCell($wKew, 17, $column, 0, 'C', true, 0, '', '', true, 0, false, true, 0, 'M', true);
            }
            $this->ln();
            $this->SetTextColor(0);
            foreach ($table as $key => $row) {
                $this->SetFillColor(255, 255, 255);
                if ($key & 1)
                    $this->SetFillColor(228, 228, 228);
                foreach ($row as $k => $value) {
                    $wk = ($k == 0) ? $w[0] : $w[1];
                    $this->Cell($wk, 0, $value, 0, 0, 'C', true);
                }
                $this->ln();
            }

            $product = $this->getProduct();
            if ($product->note != '') {
                $this->Write(0, '*' . $product->note);
            }
        }

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
     * @return Catalog_Model_Products
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

    public function transformSku($sku)
    {
        $hostName = $this->getHostName();
        if(in_array($hostName, $this->_aHostName) && $sku[0] === 'A'){
            $sku = substr($sku, 1);
        }

        return $sku;
    }

    /**
     * @param mixed $hostName
     * @return Catalog_Model_PrintPdf
     */
    public function setHostName($hostName)
    {
        $this->_hostName = $hostName;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getHostName()
    {
        return $this->_hostName;
    }

}

