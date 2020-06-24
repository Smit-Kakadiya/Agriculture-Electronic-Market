<?php
session_start();
require 'connection.php';

if(isset($_SESSION['otp']))
{
if(isset($_POST['updatepassword']))
{
  $otp=$_SESSION['otp'];
if($otp==sha1($_POST['otp']))
{
   echo '<script>alert("OTP Verified.");</script>';
   $con=$GLOBALS['con'];
    $mob=$_SESSION['mobile'];
    $password=sha1($_POST['password']);
   $sql="UPDATE users SET pass='$password' WHERE mobile='$mob'";
   $res=mysqli_query($con,$sql);
   if($res)
   {
      echo '<script>alert("Password Updated.");</script>';
      echo '<script>window.location.href = "index.php";</script>';
   }


}
else{
     echo '<script>alert("otp dosent match");</script>';
    echo '<script>window.location.href = "forgot.php";</script>';
}
}
}
else{
   echo '<script>window.location.href = "index.php";</script>';
}
?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Start your development with a Design System for Bootstrap 4.">
  <meta name="author" content="Creative Tim">
  <title>Agriemart !! OTP</title>
  <!-- Favicon -->
  <link href="assets/img/brand/favicon.png" rel="icon" type="image/png">
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
  <!-- Icons -->
  <link href="assets/vendor/nucleo/css/nucleo.css" rel="stylesheet">
  <link href="assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <!-- Argon CSS -->
  <link type="text/css" href="assets/css/argon.css?v=1.1.0" rel="stylesheet">
</head>

<body>
  
  <main>
    <section class="section section-shaped section-lg">
      <div class="shape shape-style-1 bg-gradient-default">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg-md">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card bg-secondary shadow border-0">
              <div class="card-header bg-white pb-5">
               
               <center>Please enter your OTP.</center> 
               <center style="color:red;">You have only one chance for entering OTP</center>
              </div>
              <div class="card-body px-lg-5 py-lg-5">
               
                <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
             
                  <div class="form-group">
                    <div class="input-group input-group-alternative">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                      </div>
                      <input class="form-control"  placeholder="  OTP" type="text"  name="otp" pattern="[0-9]{1}[0-9]{5}"  title="OTP must be six digit number." required>
                    </div>

                  </div>
                  <div class="form-group">
                    <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-lock-circle-open""></i></span>
                                    </div>
                                    <input class="form-control" placeholder="  Password" type="password" 
                                   name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
                                </div>
                  </div>
                 
                  <div class="text-center">
                    <input type="submit" name="updatepassword" class="btn btn-primary my-4" value="Sign Up">
                  
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    <br><br><br>
      <br><br><br>

    </section>
  </main>
  
  <!-- Core -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/popper/popper.min.js"></script>
  <script src="assets/vendor/bootstrap/bootstrap.min.js"></script>
  <script src="assets/vendor/headroom/headroom.min.js"></script>
  <!-- Argon JS -->
  <script src="assets/js/argon.js?v=1.1.0"></script>
   <script type="text/javascript">
        
        history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    </script>
   
</body>

</html>
