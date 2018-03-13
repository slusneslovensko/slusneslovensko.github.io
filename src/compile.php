<?php

$compile="";

$js = file_get_contents("./script.js");
$markup = file_get_contents("./markup.html");
$css = file_get_contents("./style.css");

//inject markup and css into the javascript
$inject_into_javascript='var _b=d.querySelector("body"); var _c=d.createElement("div"); var _cs=d.createElement("style");';
	$inject_into_javascript.='_c.innerHTML=\''.$markup.'\'; ';
	$inject_into_javascript.='_b.insertBefore( _c.firstChild, _b.firstChild);';
	
	$inject_into_javascript.='_cs.innerHTML=\''.$css.'\'; ';
	$inject_into_javascript.='_b.insertBefore( _cs, _b.firstChild);';
	
 
$js = str_replace("//dynamic__insert__markup", $inject_into_javascript, $js);

file_put_contents('../slusneslovensko.min.js', removeExtraWhitespace($js) );

function removeExtraWhitespace($str){
	$str = preg_replace( "/\r|\n|\r\n/", "", $str );
	$str = preg_replace('/\v(?:[\v\h]+)/', '', $str);
	return preg_replace('/[ \t]+/', ' ', $str);
}

?>