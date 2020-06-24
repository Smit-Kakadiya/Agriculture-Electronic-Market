<?php
error_reporting(0);
ini_set('display_errors', 0);
session_start();
if(isset($_SESSION['userid']))
{

}
else
{
$profile="1.png";
}
$con=mysqli_connect("localhost","root","","agriemart");
?>