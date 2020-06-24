<?php
require 'connection.php';

    $userid=$_SESSION['userid']; 
  $result = mysqli_query($con, "SELECT * FROM users where userid='$userid'");

  
  while($res = mysqli_fetch_array($result))
  {
  $id=$res['id'];
  $userid=$res['userid'];
  $type=$res['type'];
  $fname=$res['fname'];
  $lname=$res['lname'];
  $email=$res['email'];
  $mobile=$res['mobile'];
  $pass=$res['pass'];
  $adrs=$res['adrs'];
    $status=$res['status'];
    $profile=$res['profile'];
  }

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Start your development with a Design System for Bootstrap 4.">
    <meta name="author" content="Creative Tim">
    <title>Agriemart || Weather</title>
        
    <!-- Favicon -->
    <link href="assets/img/brand/logo.png" rel="icon" type="image/png">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    <!-- Icons -->
    <link href="assets/vendor/nucleo/css/nucleo.css" rel="stylesheet">
    <link href="assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- Argon CSS -->
    <link type="text/css" href="assets/css/argon.css" rel="stylesheet">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css'>

    <style>
        .wi {}

        .weather-app {
            position: relative;
            height: 90vh;

            min-height: 620px;


            box-shadow: 0 0 10px 5px #ddd;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
        }

        .weather-app .weather-main-screen {
            flex: 1;
            position: relative;
            border-radius: 10px 10px 0 0;
            overflow: hidden;
        }

        .weather-app .weather-info-panel {
            position: relative;
            height: 20%;
            border-radius: 0 0 10px 10px;
        }

        .weather-app .weather-info-panel .info-tiles-container {
            height: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
        }

        .weather-app .weather-info-panel .info-tiles-container .info-tiles-row {
            width: 100%;
            padding: 0 5px;
            display: flex;
        }

        .weather-app .weather-info-panel .info-tiles-container .info-tiles-row>div {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 10px 0;
            margin: 0 2.5px;
            text-align: center;
            color: white;
            opacity: 0.75;
        }

        .weather-app .weather-info-panel .info-tiles-container .info-tiles-row>div i {
            font-size: 2.5em;
        }

        .weather-app .weather-info-panel .info-tiles-container .info-tiles-row>div span {
            margin-top: 15px;
            font-size: 1.25em;
        }

        .weather-app .weather-info-panel .info-tiles-container .info-tiles-row p {
            font-weight: bold;
            font-size: 0.85em;
            text-transform: uppercase;
            color: white;
            opacity: 0.8;
        }

        @media only screen and (max-width: 767px) {
            .weather-app {
                font-size: 0.75em;
            }
        }

        .weather-animated-view .cloud {
            opacity: 0.2;
            width: 120px;
            height: 80px;
            background-color: white;
            position: absolute;
            top: 100px;
            border-radius: 35px;
            animation: move-clouds 40s linear infinite;
        }

        .weather-animated-view .cloud::after {
            content: "";
            width: 110px;
            height: 110px;
            border-radius: 50%;
            position: absolute;
            right: -15px;
            top: -30px;
            background-color: white;
        }

        .weather-animated-view .cloud::before {
            content: "";
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            left: -15px;
            top: 0px;
            background-color: white;
        }

        .weather-animated-view .cloud:nth-child(2) {
            opacity: 0.15;
            top: 30px;
            transform: scale(0.55);
            animation: move-clouds 60s linear alternate infinite;
        }

        .weather-animated-view .cloud:nth-child(3) {
            opacity: 0.25;
            top: 80px;
            transform: scale(1.2);
            animation: move-clouds 60s alternate infinite;
        }

        .weather-animated-view .hill {
            position: absolute;
        }

        .weather-animated-view .hill .tree {
            height: 30px;
            width: 5px;
            position: absolute;
            top: -27.5px;
            right: calc(37.5% + 70px);
            background-color: inherit;
        }

        .weather-animated-view .hill .tree:last-child {
            top: -22.5px;
            right: calc(37.5% + 85px);
        }

        .weather-animated-view .hill .tree:after {
            content: "";
            border: 10px solid transparent;
            border-bottom: 30px solid;
            border-bottom-color: inherit;
            top: -22.5px;
            left: -7px;
            position: absolute;
        }

        .weather-animated-view .hill .house {
            position: absolute;
            top: -40px;
            right: 37.5%;
            height: 50px;
            width: 50px;
            background-color: inherit;
        }

        .weather-animated-view .hill .house .window {
            position: absolute;
            top: 10px;
            left: 20px;
            width: 10px;
            height: 15px;
            background-color: white;
        }

        .weather-animated-view .hill .house:after {
            content: "";
            position: absolute;
            top: -55px;
            left: -5px;
            border: 30px solid transparent;
            border-bottom: 30px solid;
            border-bottom-color: inherit;
        }

        .weather-animated-view .hill:last-child {
            width: 110%;
            height: 100px;
            border-radius: 30%;
            bottom: -40px;
            transform: rotate(-3.5deg);
        }

        .weather-animated-view .hill:nth-child(3) {
            width: 100%;
            height: 100px;
            border-radius: 100%;
            bottom: 20px;
            right: -30%;
            transform: rotate(-5deg);
        }

        .weather-animated-view .hill:nth-child(2) {
            width: 100%;
            height: 100px;
            border-radius: 100%;
            bottom: 0px;
            left: -50%;
        }

        .weather-animated-view .hill:first-child {
            width: 100vw;
            height: 300px;
            max-width: 1200px;
            border-radius: 100%;
            bottom: -150px;
            left: -5%;
        }

        .weather-basic-info {
            position: relative;
            padding: 3.5vh;
            color: white;
            font-size: 1.25em;
            z-index: 1;
        }

        .weather-basic-info p:last-child {
            padding-top: 3.5vh;
            font-size: 1.25em;
            text-transform: capitalize;
        }

        .weather-temperature {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            position: absolute;
            left: 3.5%;
            bottom: 27.5%;
            padding: 10px;
            font-size: 6.5em;
            font-weight: 700;
            color: white;
        }

        .weather-temperature .temperature-boundaries-container {
            position: relative;
            display: inline-block;
            min-width: 30px;
            padding-top: 15%;
        }

        .weather-temperature .temperature-boundaries-container .temperature-boundaries {
            position: absolute;
            right: 10%;
            bottom: -20%;
            display: flex;
            flex-direction: column;
        }

        .weather-temperature .temperature-boundaries-container .temperature-boundaries .temperature-boundary {
            flex: 1;
            display: inline-block;
            font-size: 0.2em;
            font-weight: normal;
            opacity: 0.8;
            white-space: nowrap;
        }

        .weather-temperature .temperature-boundaries-container .temperature-boundaries .temperature-boundary [class^="wi"] {
            font-size: 0.75em;
            margin-right: 5px;
        }

        .weather-temperature>span:not(.wi-thermometer) {
            position: relative;
            top: 7.5px;
            font-size: 0.5em;
            vertical-align: top;
        }

        .weather-temperature .wi-thermometer {
            margin-right: 10px;
            font-size: 0.5em;
            vertical-align: middle;
        }

        @media only screen and (max-width: 767px) {
            .weather-temperature .temperature-boundaries-container {
                right: 1.5%;
            }
        }

        .weather-temperature-options {
            position: absolute;
            top: 7.5px;
            right: 7.5px;
            font-size: 14px;
        }

        .weather-temperature-options i {
            opacity: 0.5;
            cursor: pointer;
        }

        .weather-temperature-options i:hover {
            opacity: 1;
        }

        .weather-temperature-options .temperature-settings {
            position: absolute;
            background-color: white;
            top: 17.5px;
            color: gray;
            padding: 5px 10px;
            border-radius: 0 10px 10px 10px;
            white-space: nowrap;
            cursor: pointer;
            font-weight: normal;
        }

        .weather-temperature-options .temperature-settings span {
            font-size: 1.5em;
            vertical-align: sub;
        }

        .weather-icon {
            position: absolute;
            top: 5%;
            right: 5%;
            font-size: 5em;
            text-align: center;
            color: white;
        }

        .weather-icon-main {
            padding: 45px 0 0;
        }

        .weather-icon .weather-day-length {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            padding: 15px;
            margin-top: 3.5vh;
        }

        .weather-icon .weather-day-length>div {
            display: flex;
            align-items: center;
        }

        .weather-icon .weather-day-length>div span {
            flex: 1;
            font-size: 0.33em;
            text-align: right;
        }

        .weather-icon .weather-day-length-icon {
            min-width: 40px;
            margin-right: 10px;
            font-size: 0.375em;
            text-align: center;
        }

        @media only screen and (max-width: 767px) {
            .weather-icon .weather-day-length-icon {
                min-width: 30px;
            }
        }

        .refresh-button {
            position: absolute;
            right: 5%;
            bottom: 20.5%;
            height: 60px;
            width: 60px;
            background-color: white;
            border-radius: 30px;
            box-shadow: 0 7.5px 5px 1px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 30;
        }

        .refresh-button i {
            font-size: 2.5em;
        }

        .refresh-button:hover {
            bottom: 20.75%;
        }

        @media only screen and (max-width: 767px) {
            .refresh-button {
                bottom: 19.25%;
            }

            .refresh-button:hover {
                bottom: 19.5%;
            }
        }

        .simple-switch-container {
            position: absolute;
            right: 15px;
            top: 15px;
            z-index: 10;
            display: flex;
            align-items: center;
        }

        .simple-switch-container span {
            color: white;
            font-size: 12px;
            font-weight: bold;
            margin: 0 5px;
        }

        .simple-switch-container .simple-switch {
            cursor: pointer;
        }

        .simple-switch-container .simple-switch-track {
            position: relative;
            height: 8px;
            width: 35px;
            background-color: white;
            border-radius: 10px;
        }

        .simple-switch-container .simple-switch-track:after {
            content: "";
            position: absolute;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            left: 0px;
            top: -5px;
            background-color: white;
            box-shadow: 0 0 5px 2.5px rgba(0, 0, 0, 0.15);
        }

        .simple-switch-container .simple-switch--checked .simple-switch-track {
            background-color: gray;
        }

        .simple-switch-container .simple-switch--checked .simple-switch-track:after {
            left: auto;
            right: 0;
        }

        @keyframes move-clouds {
            0% {
                right: -200px;
            }

            100% {
                right: 125%;
            }
        }


        #hellobar-bar {
            font-family: "Open Sans", sans-serif;
            width: 100%;
            margin: 0;
            height: 30px;
            display: table;
            font-size: 17px;
            font-weight: 400;
            padding: .33em .5em;
            -webkit-font-smoothing: antialiased;
            color: #5c5e60;
            position: fixed;
            bottom: 0px;
            background-color: white;
            box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.15);
            z-index: 15;
        }

        #hellobar-bar.regular {
            height: 30px;
            font-size: 14px;
            padding: .2em .5em;
        }

        .hb-content-wrapper {
            text-align: center;
            text-align: center;
            position: relative;
            display: table-cell;
            vertical-align: middle;
        }

        .hb-content-wrapper p {
            margin-top: 0;
            margin-bottom: 0;
        }

        .hb-text-wrapper {
            margin-right: .67em;
            display: inline-block;
            line-height: 1.3;
        }

        .hb-text-wrapper .hb-headline-text {
            font-size: 1em;
            display: inline-block;
            vertical-align: middle;
        }

        #hellobar-bar .hb-cta {
            display: inline-block;
            vertical-align: middle;
            margin: 5px 0;
            color: #ffffff;
            background-color: #0099cc;
            border-color: #0099cc;
        }

        .hb-close-wrapper {
            display: table-cell;
            width: 1.6em;
        }

        .hb-close-wrapper .icon-close {
            font-size: 14px;
            top: 15px;
            right: 25px;
            width: 15px;
            height: 15px;
            opacity: .3;
            color: #000;
            cursor: pointer;
            position: absolute;
            text-align: center;
            line-height: 15px;

            text-decoration: none;
        }


        .nav-link .nav-link-inner--text {
            color: black;
            font-weight: bold;
            font-size: 16px;
            font-family: "Maven Pro", sans-serif;
        }

        .one-edge-shadow {

            border-bottom: 1px solid #f0f0f0;

        }

        .headroom--not-top {
            background-color: white !important;
        }

        .navbar-nav .dropdown-menu:before {
            left: 4px;
        }



        /*  google translate baanner*/
        .goog-te-banner-frame.skiptranslate {
            display: none !important;
        }

        .goog-logo-link {

            display: none !important;
        }

        .goog-te-combo {
            border: 2px solid black;
            border-radius: 5px;
        }

        div.goog-te-gadget {
            color: transparent !important;

        }

        body {
            top: 0px !important;
        }
.navbar-transparent{
    background-color: white;
}
    </style>
    <script type="text/javascript">
 

        var lat;
        var long;
        let l = "lat";
        let lo = "long";
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            document.cookie = l + '=' + lat;
            document.cookie = lo + '=' + long;

        });

    </script>
        <script type="text/javascript">
        
        history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    </script>
</head>

<body>

    <?php require("header.php");?>
    <?php require("modal.php");?>
    <?php 

$lat=$_COOKIE['lat'];
$long=$_COOKIE['long'];
$api='https://api.darksky.net/forecast/dbc4f476fa4ea8923264334e8f6875b8/'.$lat.','.$long;
$forecast=json_decode(file_get_contents($api));
    
    
$api_key = 'dbc4f476fa4ea8923264334e8f6875b8';
$units = 'auto';  // Read the API docs for full details // default is auto

$json = 'https://api.forecast.io/forecast/'.$api_key.'/'.$lat.','.$long.'?units='.$units; 
//$json = 'sample.json';  //for testing
$json = file_get_contents($json); 
$response = json_decode($json, true);


if ($response != null) {
    $alert_title=$response['alerts']['title'];
    $alert=$response['alerts']['description'];

  $lat = $response['latitude'];
  $lon = $response['longitude'];
  $tz = $response['timezone'];
     date_default_timezone_set($tz);
  $offset = $response['offset'];

    

  //Current Conditions
  $curTime = $response['currently']['time'];
 
  $curSummary = $response['currently']['summary'];
  $curIcon = $response['currently']['icon'];
  $curPrecipProb = ($response['currently']['precipProbability'])*100;
    if (isset($response['currently']['precipType'])) {
      $curPrecipType = $response['currently']['precipType'];
    }     
  $curTemp = round($response['currently']['temperature']);
  $curFeelsLike = round($response['currently']['apparentTemperature']);
  $curHumidity = ($response['currently']['humidity'])*100;
  $curDewPoint = $response['currently']['dewPoint'];
  $curWindSpeed = $response['currently']['windSpeed'];
    $curpressure = $response['currently']['pressure'];
  $curWindBearing = $response['currently']['windBearing'];
  $curCloudCover = ($response['currently']['cloudCover'])*100;
  $curPressure = round(($response['currently']['pressure'])*0.0295301, 2);
  $curVis = round($response['currently']['visibility']);

  //Now Conditions
  $nowSumamry = $response['minutely']['summary'];
  $nowIcon = $response['minutely']['icon'];

  //Hourly Forecast
  $hourlySumamry = $response['hourly']['summary'];
  $hourlyIcon = $response['hourly']['icon'];
  $hourlyCond= array();
    foreach ($response['hourly']['data'] as $td) {
      $hourlyCond[] = $td;
    } 

  //Daily Forecast
  $dailySumamry = $response['daily']['summary'];
  $dailyIcon = $response['daily']['icon'];
  $dailyCond= array();
    foreach ($response['daily']['data'] as $d) {
      $dailyCond[] = $d;
    }


}
    
    $ti = 1;
    foreach ($dailyCond as $cond) {
      $tTime = $cond['time'];
      $tSummary = $cond['summary'];
      $tIcon = $cond['icon'];
      $tPrecipProb = ($cond['precipProbability'])*100;
        if (isset($cond['precipType'])) {
          $tPrecipType = $cond['precipType'];
        } 
      $tTempHigh = round($cond['temperatureMax']);
      $tTempLow = round($cond['temperatureMin']);
      $tClouds = ($cond['cloudCover'])*100;
      $tHumidity = ($cond['humidity'])*100;
      $tSunRise = $cond['sunriseTime'];
      $tSunSet = $cond['sunsetTime'];
      $tWindSpeed = round($cond['windSpeed']);
    if ($ti++ == 1) break;  
    }
    
    ?>
    <main>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section section-lg">
                <div class="shape shape-style-1 shape-default">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container py-lg-md d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  ">A Weather forecast<span>Using Dark sky</span></h1>
                                <p class="lead  ">Agriemart provides platform for farmers to find their weather details online.</p>
                                <div class="btn-wrapper"  id="logintab">
                                    <button type="button" class="btn mr-lg-2 custom-btn btn btn-info btn-icon mb-3 mb-sm-0" data-toggle="modal" data-target="#login"><i class="ni ni-single-02"></i></a> Login</button>
                                    <button type="button" class="btn mr-lg-2 custom-btn btn btn-white btn-icon mb-3 mb-sm-0" data-toggle="modal" data-target="#register"><i class="ni ni-fat-add"></i></a> Register</button>

                                </div>
                                              <?php

  if(isset($_SESSION['login']))
       {
                 echo '<script>document.getElementById("logintab").remove();</script>';
       }
 ?>
                            </div>
                            <div class="col-lg-6">

                                <img src="assets/img/theme/weather7.png" width="100%" height="90%">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container pt-lg">
                    <div class="row text-center justify-content-center">
                        <div class="col-lg-10">
                            <h2 class="display-3 ">Weather forecast</h2>
                            <p class="lead ">Information will be generated according to the dark sky sources.</p>
                        </div>
                    </div>
                    <div class="row row-grid mt-5" style="text-align: center;">
                        <div class="col-lg-6">
                            <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i class="ni ni-app"></i>
                            </div>
                            <h5 class=" mt-3">Set Location</h5>
                            <p class=" mt-3">Set your location.</p>
                        </div>

                        <div class="col-lg-6">
                            <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i class="ni ni-book-bookmark"></i>
                            </div>
                            <h5 class=" mt-3">Find Weather</h5>
                            <p class=" mt-3">Find your weather information.</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row text-center justify-content-center">

                        <div class="col-lg-12 ">
                            <div class="card bg-gradient-secondary shadow">
                                <div class="card-body">
                                    <h4 class="mb-1">Lets try this!</h4>

                                    <div class="nav-wrapper">
                                        <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link mb-sm-3 mb-md-0 active" id="tabs-icons-text-1-tab" data-toggle="tab" href="#tabs-icons-text-1" role="tab" aria-controls="tabs-icons-text-1" aria-selected="true"><i class="fa fa-sun-o"> </i> Current Weather</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-2-tab" data-toggle="tab" href="#tabs-icons-text-2" role="tab" aria-controls="tabs-icons-text-2" aria-selected="false"><i class="ni ni-bell-55 mr-2"></i>Weather Forecast</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-3-tab" data-toggle="tab" href="#tabs-icons-text-3" role="tab" aria-controls="tabs-icons-text-3" aria-selected="false"><i class="ni ni-calendar-grid-58 mr-2"></i>Messages</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="card shadow">
                                        <div class="card-body" style="padding:0px;">
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">

                                                    <div class="weather-app">

                                                        <div class="weather-main-screen" style="background-color: rgb(5, 18, 35);">
                                                            <div class="weather-animated-view">
                                                                <div class="cloud"></div>
                                                                <div class="cloud"></div>
                                                                <div class="cloud"></div>
                                                                <div>
                                                                    <div class="hill" style="background-color: rgb(29, 41, 56);"></div>
                                                                    <div class="hill" style="background-color: rgb(17, 29, 45);"></div>
                                                                    <div class="hill" style="background-color: rgb(19, 29, 43);">
                                                                        <div class="house" style="border-color: rgb(19, 29, 43);">
                                                                            <div class="window"></div>
                                                                        </div>
                                                                        <div class="tree" style="border-color: rgb(19, 29, 43);"></div>
                                                                        <div class="tree" style="border-color: rgb(19, 29, 43);"></div>
                                                                    </div>
                                                                    <div class="hill" style="background-color: rgb(17, 26, 39);"></div>
                                                                </div>
                                                            </div>
                                                            <div class="weather-basic-info">
                                                                
                                                                <p><?php 
$dateTime = new DateTime('now', new DateTimeZone('Asia/Kolkata')); 
echo $dateTime->format("d/m/y  H:i A"); 
?></p>
                                                                <p><?php echo''.$forecast->currently->precipType;?></p>
                                                            </div>
                                                            <div class="weather-temperature"><span class="wi wi-thermometer"></span><?php echo $curTemp; ?><span class="wi wi-celsius"></span>
                                                                <div class="temperature-boundaries-container">
                                                                    <div class="temperature-boundaries">
                                                                        <div class="temperature-boundary"><span class="wi wi-direction-down"></span><?php echo $tTempHigh; ?><span class="wi wi-celsius"></span></div>
                                                                        <div class="temperature-boundary"><span class="wi wi-direction-up"></span><?php echo $tTempLow; ?><span class="wi wi-celsius"></span></div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div class="weather-temperature-options"><i class="fas fa-cog"></i></div>
                                                                </div>
                                                            </div>
                                                            <div class="weather-icon">
                                                                <div class="weather-icon-main wi wi-night-cloudy"></div>
                                                                <div class="weather-day-length">
                                                                    <div>
                                                                        <div class="weather-day-length-icon"><i class="wi wi-sunrise"></i></div><span><?php echo date("g:i", $tSunRise); ?></span>
                                                                    </div>
                                                                    <div>
                                                                        <div class="weather-day-length-icon"><i class="wi wi-moonrise"></i></div><span><?php echo date("g:i", $tSunSet); ?></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="weather-info-panel" style="background-color: rgb(17, 26, 39);">
                                                            <div class="info-tiles-container">
                                                                <div class="info-tiles-row">
                                                                    <div>
                                                                        <p>Clouds</p><i class="wi wi-cloudy"></i><span><?php echo $tClouds; ?>%</span>
                                                                    </div>
                                                                    <div>
                                                                        <p>Humidity</p><i class="wi wi-raindrop"></i><span><?php echo $curHumidity; ?>%</span>
                                                                    </div>
                                                                    <div>
                                                                        <p>Pressure</p><i class="wi wi-barometer"></i><span><?php echo $curpressure; ?>hPa</span>
                                                                    </div>
                                                                    <div>
                                                                        <p>Wind</p><i class="wi wi-strong-wind"></i><span><?php echo round($curWindSpeed); ?> mph</span>
                                                                    </div>
                                                                    <div>
                                                                        <p>Visibility</p><i class="wi wi-small-craft-advisory"></i><span><?php echo $curVis; ?> mi</span>
                                                                    </div>
                                                                </div>


                                                            </div>


                                                        </div>

                                                        <a class="refresh-button" href="weather.php"><i class="wi wi-refresh" style="color: rgb(17, 26, 39);"></i></a>
                                                    </div>

                                                </div>
                                                <div class="tab-pane fade" id="tabs-icons-text-2" role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                                                    <div class="weather-app" style="min-height:0px;height:auto;">

                                                        <div class="weather-main-screen" style="background-color: rgb(5, 18, 35);">
                                                            <div class="weather-animated-view">
                                                                <div class="cloud"></div>
                                                                <div class="cloud"></div>
                                                                <div class="cloud"></div>
                                                                <div>
                                                                    <div class="hill" style="background-color: rgb(29, 41, 56);"></div>
                                                                    <div class="hill" style="background-color: rgb(17, 29, 45);"></div>
                                                                    <div class="hill" style="background-color: rgb(19, 29, 43);">
                                                                        <div class="house" style="border-color: rgb(19, 29, 43);">
                                                                            <div class="window"></div>
                                                                        </div>
                                                                        <div class="tree" style="border-color: rgb(19, 29, 43);"></div>
                                                                        <div class="tree" style="border-color: rgb(19, 29, 43);"></div>
                                                                    </div>
                                                                    <div class="hill" style="background-color: rgb(17, 26, 39);"></div>
                                                                </div>
                                                            </div>
                                                            <div class="weather-basic-info">
                                                        
                                                                <p><?php 
$dateTime = new DateTime('now', new DateTimeZone('Asia/Kolkata')); 
echo $dateTime->format("d/m/y  H:i A"); 
?></p>
                                                                <p>Hourly</p>

                                                            </div>

                                                            <div class="weather-info-panel" style="background-color: rgb(17, 26, 39);">
                                                                <div class="info-tiles-container">
                                                                    <div class="info-tiles-row">

                                                                        <?php
      $hi = 1;
      foreach ($hourlyCond as $cond) {
        $hTime = $cond['time'];
        $hSummary = $cond['summary'];
        $hIcon = $cond['icon'];
        $hPrecipProb = ($cond['precipProbability'])*100;
          if (isset($cond['precipType'])) {
            $hPrecipType = $cond['precipType'];
          } 
        $hTemp = round($cond['temperature']);
        $hClouds = $cond['cloudCover']*100;

        echo '<div class="col-md-2 col-xs-6">';
          echo '<div class="panel panel-default">';
            echo '<div class="panel-heading"><div class="text-primary inline fs20">'.$hTemp.'<i class="wi wi-celsius"></i> &nbsp; <canvas class="'.$hIcon.'" width="25" height="25"></canvas></div>'.date("ga", $hTime).'</div>';
              echo '<div class="panel-body hourly-box">';

                // echo '<canvas class="'.$hIcon.'" width="32" height="32"></canvas>';
                echo $hSummary;
                echo '<br>';
                  if (!empty ($hPrecipType)) {
                    echo '<span class="wi wi-umbrella"></span> '.$hPrecipProb.'% '.$hPrecipType;
                  } else {
                    echo '<span class="wi wi-umbrella"></span> '.$hPrecipProb.'% ';
                  }
                echo '<br> <span class="wi wi-cloudy"></span> '.$hClouds.'%';

            echo "</div>";
          echo "</div>";
        echo "</div>";
      if ($hi++ == 6) break; 
      }

    ?>
                                                                    </div>




                                                                </div>


                                                            </div>
                                                            <br>
                                                        </div>

                                                        <div class="weather-info-panel" style="background-color: rgb(17, 26, 39);">
                                                            <b><p style="color:white;font-size:24px;">Daily<br></p></b>

                                                            <div class="info-tiles-container">
                                                                <div class="info-tiles-row">

                                                                    <?php
        $wi = 0;
        $count = 0;
        foreach ($dailyCond as $cond) {

          if ($count++ == 0) continue;

            $wTime = $cond['time'];
            $wSummary = $cond['summary'];
            $wIcon = $cond['icon'];
            $wTempHigh = round($cond['temperatureMax']);
            $wTempLow = round($cond['temperatureMin']);
            $wPrecipProb = $cond['precipProbability']*100;
              if (isset($cond['precipType'])) {
                  $wPrecipType = $cond['precipType'];
                }       
            $wClouds = $cond['cloudCover']*100;
            $wHumidity = $cond['humidity']*100;
            $wWindSpeed = round($cond['windSpeed']);
            $wSunRise = $cond['sunriseTime'];
            $wSunSet = $cond['sunsetTime'];

          echo '<div class="col-lg-4 col-md-6 col-sm-6">';
            echo '<div class="panel panel-default">';
              echo '<div class="panel-heading"><div class="text-warning"><strong>'.date("l, M jS", $wTime).'</strong></div></div>';
                echo '<div class="panel-body">';

                  echo '<center><canvas class="'.$wIcon.'" width="30" height="60"></canvas></center>';
                  echo '<strong style="font-size:12px;">'.$wSummary.'</strong>';
                  echo '<br>';
                  echo '<span class="wi wi-direction-up">'.$wTempHigh.'</span><i class="wi wi-celsius"></i>&nbsp; <span class="wi wi-direction-down">'.$wTempLow.'</span><i class="wi wi-celsius"></i><br>';
                  echo '&nbsp; <span class="wi wi-umbrella"></span> &nbsp'.$wPrecipProb.'% &nbsp;&nbsp; <span class="wi wi-cloudy"></span>&nbsp'.$wClouds.'%';
                  echo '<br>';
                  echo '<small><span class="wi wi-sunrise"></span> &nbsp'.date("g:i", $wSunRise).' &nbsp; <span class="wi wi-sunset"></span>&nbsp'.date("g:i", $wSunSet).'</small>'; 

              echo "</div>";
            echo "</div>";
          echo "</div>";

          $wi++;
            if($wi<7){
          if ($wi%4 == 0) echo'</div></div><br> <div class="info-tiles-container"> <div class="info-tiles-row">';}
            
        }
      ?><div class="col-lg-4 col-md-6 col-sm-6">
                                                                        <div class="panel panel-default">

                                                                        </div>
                                                                    </div>
                                                                </div>




                                                            </div>
                                                            <br>


                                                        </div>



                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="tabs-icons-text-3" role="tabpanel" aria-labelledby="tabs-icons-text-3-tab">
                                                    <div class="weather-app" style="min-height:0px;height:auto;">

                                                        <div class="weather-main-screen" style="background-color: rgb(5, 18, 35);">
                                                            <div class="weather-animated-view">
                                                                <div class="cloud"></div>
                                                                <div class="cloud"></div>
                                                                <div class="cloud"></div>
                                                                <div>
                                                                    <div class="hill" style="background-color: rgb(29, 41, 56);"></div>
                                                                    <div class="hill" style="background-color: rgb(17, 29, 45);"></div>
                                                                    <div class="hill" style="background-color: rgb(19, 29, 43);">
                                                                        <div class="house" style="border-color: rgb(19, 29, 43);">
                                                                            <div class="window"></div>
                                                                        </div>
                                                                        <div class="tree" style="border-color: rgb(19, 29, 43);"></div>
                                                                        <div class="tree" style="border-color: rgb(19, 29, 43);"></div>
                                                                    </div>
                                                                    <div class="hill" style="background-color: rgb(17, 26, 39);"></div>
                                                                </div>
                                                            </div>
                                                            <div class="weather-basic-info">
                                                            
                                                                <p><?php 
$dateTime = new DateTime('now', new DateTimeZone('Asia/Kolkata')); 
echo $dateTime->format("d/m/y  H:i A"); 
?></p>
                                                                <p>Alerts</p>

                                                            </div>

                                                            <div class="weather-info-panel" style="background-color: rgb(17, 26, 39);">
                                                                <div class="info-tiles-container">
                                                                    <div class="info-tiles-row">
                                                                        <div>
                                                                            <p><?php if(isset($alert_title)){
                                                                                echo $alert_title;
                                                                            }
                                                                            else{
                                                                                echo "Sorry";
                                                                            } ?></p>
                                                                        </div>
                                                                        <div>
                                                                            <p><?php if(isset($alert)){
                                                                                echo $alert;
                                                                            }
                                                                            else{
                                                                                echo "No alerts available";
                                                                            } ?></p>
                                                                        </div>



                                                                    </div>


                                                                </div>
                                                            </div>
                                                            <br>





                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr>
                        <div class="row text-center justify-content-center">
                            <div class="container">
                                <div class="card bg-gradient-default shadow-lg border-0">
                                    <div class="p-5">
                                        <div class="row align-items-center">
                                            <div class="col-lg-8">
                                                <h3 class="text-white">We made website for you.</h3>
                                                <p class="lead  mt-3 text-white">We ensure you that our website would be dedicated to farmer forever,suport us by small contribution.</p>
                                            </div>
                                            <div class="col-lg-3 ml-lg-auto">
                                                <a href="" class="btn btn-lg btn-block btn-white">Support Us.</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- SVG separator -->

            </section>
            <!-- 1st Hero Variation -->
        </div>

    </main>

    <script src="assets/js/skycons.js"></script>
    <script>
        var skycons = new Skycons({
                "color": "#ebebeb"
            }),
            list = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;

        for (i = list.length; i--;) {
            var weatherType = list[i],
                elements = document.getElementsByClassName(weatherType);
            for (e = elements.length; e--;) {
                skycons.set(elements[e], weatherType);
            }
        }

        skycons.play();

        //GeoCode
        $(function() {
            $("#geocomplete").geocomplete({
                details: "form",
                types: ["geocode"],
            });
        });

    </script>

    <script src="assets/js/main.js"></script>
    <?php require("footer.php");?>
     <script type="text/javascript">
        
        history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    </script>
   

</body>

</html>


  <?php

  if(isset($_SESSION['login']))
       {
          
                 echo '<script>document.getElementById("logintab").remove();</script>';
       }
 ?>