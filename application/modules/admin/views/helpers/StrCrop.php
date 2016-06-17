<?php
class Zend_View_Helper_StrCrop extends Zend_View_Helper_Abstract
{
	
	function strCrop($string, $len = 180) {

		$string = strip_tags($string);
		
		if (strlen($string) > $len){
            $string = substr($string, 0, $len);
            $string = rtrim($string, "!,.-");
            $string = substr($string, 0, strrpos($string, ' '));
            $string .= "… ";
        }

        return $string;
	}
}
