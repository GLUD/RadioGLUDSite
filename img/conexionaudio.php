<?php
$abrir = @fopen("conexionaudio.txt", "r");
if (!$abrir)
{
	$archivo = fopen("conexionaudio.txt","w+");
	fclose ($archivo);
}
else 
{
	unlink('conexionaudio.txt'); 
}
@fclose ($abrir);
echo "<SCRIPT>document.location.href ='../nautilus/cpanel/';</SCRIPT>"; 
?>
