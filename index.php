<?php
  if ( !function_exists('_') or !function_exists('gettext') ) {
    function _($string) {
    	return $string;
	}
	echo "<h1>Tal vez necesita installar gettext que está en la extensión php_gettext.</h1>";
  }
  include("cod/header.html");
  include("cod/content.html");
  include("cod/footer.html");
?>
