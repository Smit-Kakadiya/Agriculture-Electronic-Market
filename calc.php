<?php
require 'connection.php';
  $data = file_get_contents('dashboard/ex.json');
  $json_arr = json_decode($data, true);

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
  <meta name="author" content="Jemis Goti">
  <title>Agriemart || Calculator</title>
  <!-- Favicon -->
    <link href="assets/img/brand/logo.png" rel="icon" type="image/png">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
  <!-- Icons -->
  <link href="assets/vendor/nucleo/css/nucleo.css" rel="stylesheet">
  <link href="assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <!-- Argon CSS -->
  <link type="text/css" href="assets/css/argon.css" rel="stylesheet">

 <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/fontawesome.min.css">
    <script src="https://kit.fontawesome.com/f13b79bff4.js"></script>


     <style>
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


    .nav-link .nav-link-inner--text{
        color: black;
        font-weight: bold;
        font-size: 16px;
        font-family: "Maven Pro", sans-serif;
        }
    
    .one-edge-shadow {
  
  border-bottom: 1px solid #f0f0f0;
       
}
    .headroom--not-top{
        background-color: white !important;
        }
    
        .navbar-nav .dropdown-menu:before{
            left: 4px;
        }



/*  google translate baanner*/
.goog-te-banner-frame.skiptranslate
{
    display: none !important;
} .goog-logo-link
{
    
    display: none !important;
} 

.goog-te-combo{
    border: 2px solid black;
    border-radius: 5px;
}
div.goog-te-gadget {
  color: transparent !important;
    
}
body 
{
    top: 0px !important; 
}


.navbar-transparent{
    background-color: white;
}
    </style>

    <script type="text/javascript">
        
        history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    </script>


</head>

<body>
  <?php 

require('modal.php');
?>
  <?php 

  require('header.php');
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
                <h1 class="display-3  ">A Subsidy Calculator<span>packed with information</span></h1>
                <p class="lead  ">Agriemart provides platform for farmers to calculate state and central Government subsidy on their equipment.</p>
                <div class="btn-wrapper" id="logintab">
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
               
                  <img src="assets/img/theme/farm6.png" width="100%" height="90%">
                </div>
            </div>
          </div>
        </div>
           <div class="container pt-lg">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 ">Subsidy Calculator</h2>
            <p class="lead ">Information will be generated according to the central government sources.</p>
          </div>
        </div>
        <div class="row row-grid mt-5" style="text-align: center;"> 
       
          <div class="col-lg-6">
            <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i class="ni ni-bullet-list-67"></i>
            </div>
            <h5 class=" mt-3">Select Equipment</h5>
            <p class=" mt-3">Select your required equipment.</p>
          </div>
          <div class="col-lg-6">
            <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i class="ni ni-book-bookmark"></i>
            </div>
            <h5 class=" mt-3">Launch time</h5>
            <p class=" mt-3">Enter equipment price.</p>
          </div>
        </div>
          <hr>
          <div class="row text-center justify-content-center">
          
                       <div class="col-lg-12 ">
            <div class="card bg-gradient-secondary shadow">
              <div class="card-body">
                <h4 class="mb-1">Lets try this!</h4>
                <p class="mt-0">Your project is very important to us.</p>
                <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
                  <div class="row">
                      <div class="col-lg-6 "><div class="form-group">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-world"></i></span>
                    </div>
                         
                  <select name="eq" class="form-control" id="option">
                      <?php 


                    foreach ($json_arr['eq'] as $key => $value) {
                        $id=$key;
                        $mx=intval($value['mx']);
                        $pr=intval($value['pr']);
                        echo '<option value="'.$id.'">'.$id.'</option>';
                      }
                        ?>
                     
                     

                   </select>
                  </div>
                </div></div>
                       <div class="col-lg-6 "><div class="form-group">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-user-run"></i></span>
                    </div> <input class="form-control" placeholder="Enter equipement price" name="number" type="text" id="number">
                  </div>
                </div></div>
                  </div>
              
                  </div>
               
               
               
                
                     
                
                  <input type="submit" name="cs" class="btn btn-default btn-round btn-block btn-lg" value="Calculate  Subsidy"></form>
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

 <?php require("footer.php");?>

  <script type="text/javascript">
        
        history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    </script>
   

    <script type="text/javascript">
 function function22(){
  $('#calc-not').modal('show');


  var number= document.getElementById("number").value;
  var x=document.getElementById("option").value;
  if(x=="tractor")
  {
    var d=number*(.2);
    if(d>60000)
    {
      var e=60000;
    }
    else
    {
      var e=d;
    }
  }
  else if(x=="drip")
  {
    var e=number*(.25);
  }
  else
  {
     var d=number*(.10);
    if(d>4500)
    {
      var e=4500;
    }
    else
    {
      var e=d;
    }
  }
var b=number*10;
     document.getElementById("totalPayment").innerHTML = "Rs." + e;

}
</script>
 
</body>

</html>

<?php 
if(isset($_POST['cs']))
{
 
  $number = $_POST['number'];
  $eq = $_POST['eq'];
  $state = $_POST['state'];

  $mx=$json_arr['eq'][$eq]['mx'];
  $pr=$json_arr['eq'][$eq]['pr'];
 $amt=$number*intval($pr)/100;

  if($amt>$mx)
  {
    $amt=$mx;
    echo'<script> $("#calc-not").modal("show");document.getElementById("totalPayment").innerHTML = "Rs.'.$amt.'";</script>';
  }
  else
  {
    
      echo'<script> $("#calc-not").modal("show");document.getElementById("totalPayment").innerHTML = "Rs.'.$amt.'";</script>';
  }
}

?>
