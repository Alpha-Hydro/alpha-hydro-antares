<?php


class Zend_View_Helper_getSubCategories
{
    /**
     * @param int $category_id
     * @param int $active
     * @return array
     */
    function GetSubCategories($category_id, $active = 0){

        $categories = new Model_Mapper_Categories();

        $select = $categories->getDbTable()->select();
        $select->where('parent_id = ?', $category_id)
            ->where('active != ?', $active)
            ->order('sorting ASC');

        $entries = $categories->fetchAll($select);

        return $entries;
    }
}