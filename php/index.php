<?php


function dd()
{
    echo '<pre>';
    array_map(function($x) {var_dump($x);}, func_get_args());
    die;
}

$url = 'http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml';
$data = file_get_contents($url);
$xml = simplexml_load_string($data);

$result = json_encode($xml);
echo  $result;
