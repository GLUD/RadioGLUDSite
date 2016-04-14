<?php  
$language="en_US";
putenv("LC_ALL=$language");
setlocale(LC_ALL, $language);
bindtextdomain("$language", "../locale");
textdomain("$language");
  include("../../cod/header.html");
  include("../../cod/content.html");
  include("../../cod/footer.html");
?>
