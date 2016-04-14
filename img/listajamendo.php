<?php
$url1 = "http://www.jamendo.com/es/player#/track//?playlist_id=210663&n=250&order=numplaylist_asc#/playlist//?id=210663#0";
$url2 = "http://www.jamendo.com/es/player#/track//?n=50#/radio//?id=9#0";
$url3 = "http://www.jamendo.com/es/player#/track//?n=50#/radio//?id=8#0";
$url4 = "http://www.jamendo.com/es/player#/track//?playlist_id=164412&n=250&order=numplaylist_asc#/playlist//?id=164412#0";
$estado = $_GET["campo"];
if ($estado == "a")
	{ 
	header("Location: $url1"); 
	}
elseif ($estado == "b")
	{ 
	header("Location: $url2");
	}
elseif ($estado == "c")
	{ 
	header("Location: $url3");
	}
else
	{
	header("Location: $url4");
	}
?>
