<?php
session_start();
require 'connection.php';

echo '<script>alert("You have only one chance for entering OTP")</script>';

if(isset($_POST['otpupdate']))
{
	$otp=$_SESSION['otp'];
if($otp==sha1($_POST['otp']))
{
	 $_SESSION['msg']="Register  successfully.";
                $_SESSION['style']="alert-success";
                $_SESSION['count']= 2;
                     echo '<script>window.location.href = "profile.php";</script>';

}
else{
   $userid =$_SESSION['userid'];
 $sql="DELETE FROM users WHERE userid='$userid'";
      $res=mysqli_query($con,$sql);
     if($res)
        {   
    echo '<script>window.location.href = "index.php";</script>';
}
}}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Agriculture e-market for farmers">
    <meta name="author" content="Jemis Goti">

    <title>Agriemart || Home</title>
    <link href="assets/img/brand/logo.png" rel="icon" type="image/png">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/fontawesome.min.css">

    <link rel="stylesheet" type="text/css" href="../css/argon.css?v=1.1.0">
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css?v=1.1.0">

    <link rel="stylesheet" type="text/css" href="../css/unicons.css?v=1.1.0">
    <link rel="stylesheet" type="text/css" href="../css/owl.carousel.min.css?v=1.1.0">
    <link rel="stylesheet" type="text/css" href="../css/owl.theme.default.min.css?v=1.1.0">

    <!-- MAIN STYLE -->
    <link rel="stylesheet" type="text/css" href="../css/tooplate-style.css?v=1.1.0">



    <!--



-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/f13b79bff4.js"></script>
    <style>
        	.middle{
        		vertical-align: middle;
        		

        	}
        	body{
        		background-color:black; 
        	}
        </style>
    </head>
    <body><div class="middle">
            <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
                <div class="modal-content">

                    <div class="modal-header">
                        <h6 class="modal-title" id="modal-title-default" style="color: #172b4d;">Enter OTP</h6>
                        
                    </div>

                    <div class="modal-body">
                        <form method="post" action="v.php?q=<?php echo $_SESSION['otp';?>">
                            <div class="form-group mb-3">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                    </div>
                                    <input class="form-control" placeholder="  OTP" type="number"  name="otp" required>
                                </div>
                            </div>
                         
                            <div class="text-center">
                                <input type="submit" name="otpupdate" class="btn-default my-4" value="Sign in">
                            </div>
                        </form>

                    </div>


                </div>
            </div>
</div>
        </div>
    </body>

    <script src="../js/jquery-3.3.1.min.js?v=1.1.0"></script>
    <script src="../js/popper.min.js?v=1.1.0"></script>
    <script src="../js/bootstrap.min.js?v=1.1.0"></script>
    <script src="../js/Headroom.js?v=1.1.0"></script>
    <script src="../js/jQuery.headroom.js?v=1.1.0"></script>
    <script src="../js/owl.carousel.min.js?v=1.1.0"></script>
    <script src="../js/smoothscroll.js?v=1.1.0"></script>
    <script src="../js/custom.js?v=1.1.0"></script>
    <script src="../js/translate.js?v=1.1.0"></script>
</html>