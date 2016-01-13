<?php

class Utils_TreeCatalogController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        //Основной массив
        $expArray = array();
        $categoryMapper = new Catalog_Model_Mapper_Categories();

        //$treeCategories = $categoryMapper->fetchTreeSubCategoriesInArray();
        $treeCategories = $categoryMapper->fetchTreeSubCategories();

        $iterator = new RecursiveArrayIterator($treeCategories);
        //var_dump($iterator->getChildren());

        foreach ($iterator as $item) {
            $children = $item->getSubCategories();
            $it = new RecursiveArrayIterator($children);
            var_dump($it->hasChildren());
            //$expArray[] = $item['name'];
            $arr['name'] = $item->name;
            $arr['children'] = $it->current()->name;
            $expArray[] = $arr;
        }

        /*foreach ($treeCategories as $category) {
            $item['name'] = $category->getName();
            $subCategory = $category->getSubCategories();

            $item['subCategory'] = (!is_array($subCategory))
                ? 'false'
                : $subCategory;
                //: $this->recursiveSubCategories($subCategory, 1);

            $expArray[] = $item;
        }*/
        $this->view->array = $expArray;
        //$this->view->array = $treeCategories;
    }

    /**
     * @param null $category_id
     * @return array
     */
    public function fetchCategoriesWithProducts($category_id = null)
    {
        if(is_null($category_id))
            $category_id = 0;

        $categoryMapper = new Catalog_Model_Mapper_Categories();
        $select = $categoryMapper->getDbTable()
            ->select()
            ->where('deleted != ?', 1)
            ->where('active != ?', 0)
            ->limit(13)
            ->order('sorting ASC');

        $result = array();
        $categories = $categoryMapper->fetchSubCategoriesRel($category_id, $select);
        $item = array();
        if(!empty($categories)){
            foreach ($categories as $category) {
                $category_id = $category->getId();
                $subCategories = $categoryMapper->fetchSubCategoriesRel($category_id, $select);
                if(0 == count($subCategories)){
                    //$item[] = $category_id;
                    var_dump($category_id);
                }
                else{
                    $this->fetchCategoriesWithProducts($category_id);
                }
                $result[] = $item;
            }

        }
        /*else{
            $result[] = $category_id;
        }*/


        /*$categories = $this->getSubCategories($category_id);

        if(!empty($categories)){
            $item = array();
            foreach ($categories as $category) {
                $subCategories = $this->getSubCategories($category->getId());
                $item['name'] = $category->getName();
                if(!empty($subCategories)){
                    $item['subCategories'] = $this->fetchCategoriesWithProducts($category->getId());
                }
//                $categoryProducts = $categoryMapper->fetchProductsRel($category->getId(),$selectProduct);
//                if(!empty($categoryProducts))
//                    $item['products'] = count($categoryProducts);

                $result[] = $item;
            }
        }*/
        return $result;
    }

    public function recursiveSubCategories($data, $level = 0, $p_counter = 1, $prefix = '')
    {
        $i = 0;
        foreach ($data as $item) {
            $parent_id = $item->getParentId();
            if($parent_id == 0){
                $name = $item->getName();
                $p_counter++;
            }

            elseif($parent_id !=0){
                $name = $item->getName();
            }
            else{
                $name = $item->getName();
            }
        }

        //return $result;
    }

}
