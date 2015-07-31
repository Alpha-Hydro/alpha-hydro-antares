<?php

class Fonts{
	
	protected static $fonts = array(
									'Franklin Gothic Demi Cond'				=>	'Franklin Gothic Demi Cond.ttf',
									'Arial Narrow Bold'						=>	'Arial Narrow Bold.ttf',
									'Arial Narrow'							=>	'Arial Narrow.ttf',
									'Arial'									=>	'Arial.ttf'
									);
	protected static $loaded = array();
	
	
	public static function get( $font ){
		
		if ( empty(Fonts::$loaded[$font]) ){
			if ( !isset(Fonts::$fonts[$font]) ) exit('NO FONT SELECTED');
			Fonts::$loaded[$font] = Zend_Pdf_Font::fontWithPath( "__fonts/".Fonts::$fonts[$font] );
		}
		return Fonts::$loaded[$font];
	}
}

?>