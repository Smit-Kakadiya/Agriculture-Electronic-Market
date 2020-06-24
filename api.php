<?php 


$data = file_get_contents('https://data.gov.in/node/328681/datastore/export/json');
$json_arr = json_decode($data, true);

//echo $json_arr['data'][0][0]."hii";
//$ymd = DateTime::createFromFormat('d-m-Y', $json_arr['data'][0][0])->format('Y');
//echo "string".$ymd;


$data1 = file_get_contents('newdata1.json');
$json_arr1 = json_decode($data1, true);

$s=0;
$n=1;
$p='1900';
$pr=0;
  foreach ($json_arr['data'] as $key => $value)

   {
   	//echo date('z', strtotime('21 oct 2012'));
$y=DateTime::createFromFormat('d-m-Y', $json_arr['data'][$key][0])->format('y');
//$m=DateTime::createFromFormat('d-m-Y', $json_arr['data'][$key][0])->format('m');
//$d=DateTime::createFromFormat('d-m-Y', $json_arr['data'][$key][0])->format('d');





if($y>90 && $y<=99)
{
	$y='19'.$y;
}
else if($y>=0 && $y<=90)
{
	$y='20'.$y;
}


$pr=$json_arr['data'][$key][3];


if($pr=='NA')
{
	$pr='0';
	echo "NA come";
}

if($y==$p)
{
	
	$s=$s+$pr;
	$n=$n+1;
	

}
else 
{

$new=$s/$n;
$new=round($new, 2);

//$json_arr1['data'][$key][1]=$m;
//$json_arr1['data'][$key][2]=$d;
echo "string".$new;
$json_arr1['data'][0]=$y;
$json_arr1['data'][1]=$new;
	
echo"terminated";
$p=$y;
$s=$pr;
$n=1;
}


  }
  file_put_contents('newdata1.json', json_encode($json_arr1));
  
?>
