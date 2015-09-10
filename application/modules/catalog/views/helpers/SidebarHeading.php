<?php
class Zend_View_Helper_sidebarHeading extends Zend_View_Helper_Abstract
{
    public function sidebarHeading(Application_Model_Categories $category = null)
    {
        $html = '<li class="list-group-item sidebar-heading">';

        if(!is_null($category)){

            $html .= '<span class="badge"><i class="fa fa-level-up fa-fw"></i></span>';

            $categories = new Application_Model_Mapper_Categories();

            $parent_id = 0;

            if($parentCategory = $categories->find($category->getParentId(), new Application_Model_Categories()))
                $parent_id = $parentCategory->getId();

            $url = '/catalog/';
            $textLink = 'Каталог продукции';


            if($parent_id != 0){
                $url .=  $parentCategory->getFullPath() .'/';
                $textLink = $parentCategory->getName();
            }

            $html .= '<a href="'.$url.'">'.$textLink.'</a>';
        }
        else{
            $html .= 'Каталог продукции';
        }
        $html .= '</li>';

        return $html;
    }

}