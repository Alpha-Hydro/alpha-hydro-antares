<?php
/**
 * Products catalog controller
 *
 * @author Bakin Vlad
 * @package Catalog
 * @category Site
 * @subpackage Controllers
 */

/**
 * Products catalog controller
 *
 * @package Catalog
 * @author Bakin Vlad
 * @subpackage Controllers
 */
class Catalog_ProductsController extends Zend_Controller_Action {
	
	public function init()
	{
		$ajaxContext = $this->_helper->getHelper('AjaxContext');
		$ajaxContext
			->addActionContext('ajax', 'html')
			->initContext('html');
	}

	/**
	 * Show list of products in selected category
	 *
	 * @var int $category Category
	 */
	public function indexAction() {
		$productsModel = new Model_DbTable_Products ();
		$categoriesModel = new Model_DbTable_Categories ();
		
		if (NULL != ($category = $this->getRequest ()->getParam ( "category" ))) {
			$category = $categoriesModel->find ( $category )->current ();
			$this->view->category = $category;
			
			if ($category) {
				$productsSelect = $productsModel->select()->order('order ASC');
				$this->view->rowset = $category->findManyToManyRowset ( "Model_DbTable_Products", "Model_DbTable_CategoryXref",null,null,$productsSelect);
			}
		} elseif (NULL != ($search = $this->getRequest ()->getParam ( "search" ))) {
			$search = str_replace ( array ('.',',',' ','-','_','/','\\','*','+','&','^','%','#','@','!','(',')','~','<','>',':',';','"',"'","|"), '', $search );
			$search = strtolower ( $search );
			
			$this->view->rowset = $productsModel->fetchAll ( $productsModel->select ()->where ( "`s_name` LIKE '%$search%'" )->orWhere ( "`name` LIKE '%" . $this->getRequest ()->getParam ( "search" ) . "%'" )->order ( "CHAR_LENGTH(sku) ASC" ) );
		}
	}
	
	/**
	 * Show selected product
	 *
	 * @var int $category Parent category
	 * @var int $id Selected product
	 */
	public function viewAction() {
		$productsModel = new Model_DbTable_Products ();
		$subproductsModel = new Model_DbTable_Subproducts ();
		$categoriesModel = new Model_DbTable_Categories();
		$select = $subproductsModel->select()->order('order ASC');
		$id = $this->getRequest ()->getParam ( "id" );
		$category_id = $this->getRequest ()->getParam ( "category" );
		$product = $productsModel->find ( $id )->current ();
		$subproducts = $product->findDependentRowset ( "Model_DbTable_Subproducts", 'SubproductsRel' , $select );

		$this->view->product = $product;
		$keywords = $product['name']. ',';
		for ( $i = 0; $i < count($subproducts); $i++ ){
			$keywords .= $subproducts[$i]['sku'].',';
			$keywords .= str_replace('A', '', $subproducts[$i]['sku']).',';
			$keywords .= str_replace(' ', '', $subproducts[$i]['sku']).',';
			$keywords .= str_replace(array(' ','A'), '', $subproducts[$i]['sku']).',';
		}
		$keywords .= $product['sku'];
		$category = $categoriesModel->find ( $category_id )->current ();
		$description = "РВД,гидравлика,Рукава высокого давления,фитинги,шланги высокого давления,фланцы SAE,гидравлические рукава,гидравлические компоненты,";
		$description .= $category->name;
		while ( $category->parent_id ) {
			$category = $category->findParentRow ( 'Model_DbTable_Categories' );
			$description .= ','.$category->name;
		}
		$this->view->headMeta()->appendName('keywords', $keywords); 
		$this->view->headMeta()->appendName('description', $description);
		$this->view->headTitle()->prepend ( $product['sku'].' - '.$product['name']);
		$this->view->subproducts = $subproducts;
		$this->view->prod_db = $productsModel;
		
	}
	
	/**
	 * Generate PDF for selected product
	 *
	 * @var int $id Selected product
	 */
	public function pdfAction() {
		$this->getResponse()
			->setHeader('Content-Type', 'application/pdf');
			
		$productsModel = new Model_DbTable_Products ();
		
		// get product
		$id = $this->getRequest ()->getParam ( "id" );
		$product = $productsModel->find ( $id )->current ();
		
		// generate pdf
		$pdfBook = new Model_Static_PdfBook ('A5');
		$pdfBook->byProduct ( $product );
		$this->view->content = $pdfBook->finishBook ();
		
		$this->_helper->layout ()->disableLayout ();
	}
	
	/**
	 * autocomplete method for ajax
	 *
	 * @var string $sku SKU for auto complete
	 */
	public function searchAction() {
		if ($this->getRequest ()->isXmlHttpRequest ()) {
			$this->_helper->layout ()->disableLayout ();
		} else {
			$this->forward ( "index" );
		}
		
		$sku = $this->getRequest ()->getParam ( "sku" );
		$sku = str_replace ( array ('.',',',' ','-','_','/','\\','*','+','&','^','%','#','@','!','(',')','~','<','>',':',';','"',"'","|"), '', $sku );
		
		$productsModel = new Model_DbTable_Products ();
		$skuParam = $this->getRequest ()->getParam ( "sku" );
		
		$select = $productsModel->select ()->where ( "(`s_name` LIKE '%$sku%' OR `name` LIKE '%$skuParam%')" )->limit ( 15 )->order ( "CHAR_LENGTH(sku) ASC" );
		
		$products = $productsModel->fetchAll ( $select );
		$this->view->products = $products;
	}
	
	/**
	 * Admin action.
	 * Create or edit selected product
	 *
	 * @var int $id Product
	 */
	public function editAction() {
		if ( !Zend_Auth::getInstance()->hasIdentity() ) {
			throw new Zend_Exception ( "Access Forbidden", 403 );
		}

		$parent_id = $this->getRequest ()->getParam ( "parent_id" );
		if ($parent_id) {
			// отдельный action для подтоваров
			$this->forward("subedit");
			return;
		}

		$product_id = $this->getRequest ()->getParam ( "id" );
		$productsModel = new Model_DbTable_Products ();

		// признаки вида операции и вида товара
		$newRecord = ($product_id == null);


		$this -> view -> newRecord = $newRecord;

		if( $product_id ){
			$product = $productsModel->find ( $product_id )->current ();
		}

		// новый продукт
		if($newRecord){
			$product = $productsModel->createRow ();
		}

		$editForm = Model_Static_Loader::loadForm ( "product" );

		if ($this->getRequest ()->isPost ()) { // отправка формы
			if( $editForm->isValid ( $_POST )){
				$file = $editForm -> image -> getFileInfo();		
				$ext = pathinfo($file['image']['name'], PATHINFO_EXTENSION);
				$name = pathinfo($file['image']['name'], PATHINFO_FILENAME);				
				$newName = time().'_'.$name.'.'.$ext; 			

				$editForm -> image -> addFilter('Rename', APPLICATION_ROOT."/files/images/product/".$newName);		
				$editForm -> image -> receive();        			
				// here save data
				// product first
				$values = $editForm->getValues ();

				$newImages = isset ( $_FILES ["images"] ) ? $_FILES ["images"] : array ();
				$images = $this->getRequest ()->getParam ( "images", array () );

				if (count($newImages)>0){
					foreach ( $newImages ['name'] as $i => $image ){
						if ($image) {
							$name = date ( "ymd-" ) . $image;
							$images [] = $name;

							move_uploaded_file ( $_FILES ["images"] ["tmp_name"] [$i], APPLICATION_ROOT . "/files/images/product/$name" );
						}
					}
				}
				$product->a_images = $images;

				if ( !$values["image"] ) unset($values["image"]);

				foreach ( $values as $name => $value ) {
					if (isset ( $product->$name ) )
						$product->$name = $value;
				}
				$product->mod_date = date ( "Y-m-d H:i:s" );

				if (! $product->add_date)
					$product->add_date = $product->mod_date;

				$product->save ();
			}

			// перезаписываем отношения категорий
			$categories = $this->getRequest ()->getParam ( "categories" );

			$xrefModel = new Model_DbTable_CategoryXref();
			$xrefModel -> delete( "product_id = ".$product->id );
			
			if ( $categories ) foreach ( $categories as $category ){
				try{
					$xref = $xrefModel -> createRow( array("product_id" => $product->id, "category_id"=>$category) );
					$xref -> save();
				} catch (Exception $e){
					continue;
				}
			}

			// save productParams

			$newParams = $this->getRequest ()->getParam ( "productparams" );
			if ($newParams) {
				$newParams = array_values ( $newParams );
			} else {
				$newParams = array();
			}
			
			$productParams = new Model_DbTable_ProductParams ();
			$oldParams = $product->getParams ();
			
			$pCount = count ( $newParams ) > count ( $oldParams ) ? count ( $newParams ) : count ( $oldParams );
			
			for($i = 0; $i < $pCount; $i ++) {
				if (isset ( $newParams [$i] )) {
					$newParam = ( object ) $newParams [$i];
					
					try {
						$oldParam = $oldParams->getRow ( $i );
					} catch ( Zend_Exception $e ) {
						$oldParam = $productParams->createRow ( array (
								'product_id' => $product->id 
						) );
					}
					
					$oldParam->name = $newParam->name;
					$oldParam->value = $newParam->value;
					$oldParam->order = $newParam->order;

					$oldParam->save ();
				} else {
					$oldParam = $oldParams->getRow ( $i );
					$oldParam->delete ();
				}
			}

			$this->redirect("/catalog/products/view/category/".$this->getRequest ()->getParam("category")."/id/".$product->id);

		}
		
		$editForm->setDefaults ( $product->toArray () );


		$this->view->newproduct = $editForm;
		$this->view->category = $this->getRequest ()->getParam("category");

		if (!$newRecord) {
			// редактируем основной продукт
			$this->view->row = $product;
			$this->view->productParams = $product->getParams();
			$select = $productsModel->select()->order('order ASC');
			$this->view->subProducts = $product->findDependentRowset("Model_DbTable_Subproducts", 'SubproductsRel', $select);
		} else {
			// Новый продукт
			$this->view->row = $productsModel->createRow ();
			$this->view->productParams = array ();
			$this->view->subProducts = array ();
		}
	}

	/**
	 * Admin action.
	 * Create or edit selected subproduct
	 *
	 * @var int $id Product
	 */
	public function subeditAction() {
		if ( !Zend_Auth::getInstance()->hasIdentity() ) {
			throw new Zend_Exception ( "Access Forbidden", 403 );
		}

		$parent_id = $this->getRequest ()->getParam ( "parent_id" );
		$subid = $this->getRequest ()->getParam ( "subid" );

		$productsModel = new Model_DbTable_Products ();
		$subproductsModel = new Model_DbTable_Subproducts();


		// признаки вида операции
		$newRecord = ($subid == null);
		$this -> view -> newRecord = $newRecord;

		if( $subid ){
			$product = $subproductsModel->find ( $subid )->current ();
		} else {
			$product = $subproductsModel->createRow();
			$product->parent_id = $parent_id;
		}

		$editForm = Model_Static_Loader::loadForm ( "subproduct" );

		if ($this->getRequest ()->isPost ()) { // отправка формы
			if( $editForm->isValid ( $_POST )){
				// product first
				$values = $editForm->getValues ();

				foreach ( $values as $name => $value ) {
					if (isset ( $product->$name ) )
						$product->$name = $value;
				}
				$product->mod_date = date ( "Y-m-d H:i:s" );

				if (! $product->add_date)
					$product->add_date = $product->mod_date;

				$product->save ();
			}


			// save productParams

			$newParams = $this->getRequest ()->getParam ( "productparams" );
			if ($newParams) {
				$newParams = array_values ( $newParams );
			} else {
				$newParams = array();
			}

			$product -> saveNewParams($newParams);

			$this->redirect("/catalog/products/edit/category/".$this->getRequest ()->getParam("category")."/id/".$parent_id);
			return;

		}


		$editForm->setDefaults ( $product->toArray () );


		$this->view->newproduct = $editForm;

		if (!$newRecord) {
			// редактируем подпродукт
			$this->view->row = $product;
			$this->view->productParams = $product->getParamsValues();
		} else {
			// новый подпродукт
			$this->view->row = $subproductsModel->createRow ();
			$this->view->row->parent_id = $parent_id;
			$parentProduct = $productsModel->find ( $parent_id )->current ();
			if ($parentProduct) {
				$this->view->productParams = $parentProduct -> getSubParams();
			} else {
				$this->view->productParams = array ();
			}

		}
	}


	public function deleteAction() {
		if (Zend_Auth::getInstance ()->hasIdentity ()) {

			$id = $this->getRequest ()->getParam ( "id" );

			$productsModel = new Model_DbTable_Products ();
			$product = $productsModel->find ( $id )->current ();

			if (! $product)
				throw new Zend_Exception ( "No product found", 404 );

			if ($this->getRequest ()->getParam ( "confirmed" ) == 'true') {
				$product->delete ();
				$this->forward ( "index" );
			} else {
				$this->view->product = $product;
			}
		} else
			throw new Zend_Exception ( "Access Forbidden", 403 );
	}

	// удаление подтовара
	public function deletesubAction() {
		if (Zend_Auth::getInstance ()->hasIdentity ()) {

			$subid = $this->getRequest ()->getParam ( "subid" );

			$subproductsModel = new Model_DbTable_Subproducts ();
			$subproduct = $subproductsModel->find ( $subid )->current ();
			$parent_id = $subproduct->parent_id;

			if (! $subproduct)
				throw new Zend_Exception ( "No product found", 404 );

			if ($this->getRequest ()->getParam ( "confirmed" ) == 'true') {
				$subproduct->delete ();
				$this->redirect("/catalog/products/edit/category/".$this->getRequest ()->getParam("category")."/id/".$parent_id);

				//$this->forward ( "index" );
			} else {
				$this->view->subproduct = $subproduct;
			}
		} else
			throw new Zend_Exception ( "Access Forbidden", 403 );
	}

	/**
	 * @throws Zend_Db_Table_Exception
	 * @throws Zend_Db_Table_Row_Exception
	 * @throws Zend_Exception
	 */
	public function passportAction()
	{
		if (!Zend_Auth::getInstance()->hasIdentity())
			throw new Zend_Exception ( "Access Forbidden", 403 );

		$product_id = $this->getRequest()->getParam('id');
		$productsModel = new Model_DbTable_Products();
		$product = $productsModel->find($product_id)->current();

		if (!$product)
			throw new Zend_Exception("No product found", 404 );

		$modificatons = $this->getRequest()->getParam('modifications');

		$subProducts = null;
		$html = '';

		if($modificatons && !empty($modificatons)){
			$subproductsModel = new Model_DbTable_Subproducts();
			$select = $subproductsModel->select();
			$select->where('subproducts.id IN (?)', $modificatons)
				->order('order ASC');

			$subProducts = $product->findDependentRowset("Model_DbTable_Subproducts", 'SubproductsRel', $select);
			$subProductParams = $product->getSubParams();

			if(!empty($subProductParams)){
				$thTable = '<th align="center" width="20%" style="font-weight: bolder">Название</th>';
				foreach($subProductParams as $subProductParam){
					$thTable .= '<th align="center" style="font-weight: bolder">' . $subProductParam->name . '</th>';
				}
				$trBodyTable = '';
				foreach ($subProducts as $subProduct) {
					$trBodyTable .= '<tr>';
					$trBodyTable .= '<td width="20%" nowrap="nowrap">'.$subProduct->sku.'</td>';
					$params = $subProduct->getParamsValues();
					foreach ($params as $value) {
						$trBodyTable .= '<td>'.$value->value.'</td>';
					}
					$trBodyTable .= '</tr>';
				}

				$html = <<<EOD
<style>
.modification{
	width: 100%;
	font-size: 8pt;
	background-color: #aaa;
	text-align: center;
}
th, td{
	background-color: #fff;
	vertical-align: middle;
}

</style>
<table cellspacing="1" cellpadding="5" width="600px" class="modification">
	<thead>
		<tr>
			{$thTable}
		</tr>
	</thead>
	<tbody>
	   {$trBodyTable}
	</tbody>
</table>
EOD;
			}

		}


		$pdf = new Catalog_Model_PassportPdf();

		// set document information
		$pdf->SetAuthor('Альфа Гидро');
		$pdf->SetTitle('Паспорт');
		$pdf->SetSubject('Паспорт');
		$pdf->SetKeywords('Паспорт, PDF');

		$pdf->SetFont('', '', 12, '', true);

		// Set Product
		$pdf->setProduct($product);

		// Set Modifications
		if($subProducts && !empty($subProducts)){
			$pdf->setAModificationsProduct($subProducts);
		}

		// Add a page
		$pdf->AddPage();

		$pdf->showName()
			->showModificationsList()
			->showImages()
			->showProperty()
			->showModificatonTable($html)
			->showGarant('ГАРАНТИЙНЫЕ ОБЯЗАТЕЛЬСТВА', 'Компания гарантирует работоспособность указанных изделий в течение 1 (года) с момента изготовления. При обнаружении скрытого дефекта в период гарантийного срока фирма обязуется безвозмездно заменить изделие. Организация не несет ответственности за убытки, причиненные неисправностью установленного изделия. Гарантия не распространяется на изделия неправильно установленные или поврежденные механическими и химическими воздействиями, а так же, эксплуатируемыми в условиях не соответствующих указанным в настоящем паспорте.');


		// set text shadow effect
		//$pdf->setTextShadow(array('enabled'=>true, 'depth_w'=>0.2, 'depth_h'=>0.2, 'color'=>array(196,196,196), 'opacity'=>1, 'blend_mode'=>'Normal'));

		$pdf->Output();

		$this->getResponse()
			->setHeader('Content-Type', 'application/pdf');
		$this->_helper->layout()->disableLayout();

		//var_dump(count($subProducts));

	}

	public function ajaxAction()
	{

		$product_id = $this->getRequest()->getParam('id');
		$productsModel = new Model_DbTable_Products();
		$product = $productsModel->find($product_id)->current();

		$subproductsModel = new Model_DbTable_Subproducts();
		$select = $subproductsModel->select()->order('order ASC');
		$subProducts = $product->findDependentRowset("Model_DbTable_Subproducts", 'SubproductsRel', $select);

		if (!empty($subProducts)) {
			$this->view->modifications = $subProducts;

			$subProductParams = $product->getSubParams();
			if (!empty($subProductParams)) {
				$headTable = array();
				$headTable[] = 'Название';
				foreach ($subProductParams as $subProductParam) {
					$headTable[] = $subProductParam->name;
				}
				$this->view->tableHead = $headTable;
			}

			$tableBody = array();
			foreach($subProducts as $modification){
				$tableBody[] = $modification->sku;
				$paramsVavues = $modification->getParamsValues();
				foreach($paramsVavues as $values){
					$tableBody['params'][] = $values->value;
				}
			}

		}

		$this->view->product = $product;

	}


}
