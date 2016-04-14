<?php
$online = "rojo.gif";
$offline = "gris.gif";
$enlace = "http://91.121.134.23:8000/radioglud.ogg";
$enlace = "conexionaudio.txt";
$estado = @fopen("$enlace", "r");
if (!$estado)
{ header("Location: $offline"); }
else 
{ header("Location: $online"); }
@fclose ($estado);
?>
