<?php
$online = "rojo.gif";
$offline = "gris.gif";
$enlace = "conexionvideo.txt";
$estado = @fopen("$enlace", "r");
if (!$estado)
{ header("Location: $offline"); }
else 
{ header("Location: $online"); }
@fclose ($estado);
?>
