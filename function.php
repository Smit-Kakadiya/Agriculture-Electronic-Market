<?php
require 'connection.php';

 function login(){
$con=$GLOBALS['con'];
	$userid = $_POST['userid'];
	$password = $_POST['password'];
	$password=sha1($password);
	$sql="SELECT * from users WHERE userid='$userid' and pass='$password'";
	$res=mysqli_query($con,$sql);
	$rowcount = mysqli_num_rows($res);
$row = mysqli_fetch_assoc($res);
	if ($rowcount == 1)
	 {		

	 $_SESSION['userid']=$userid;
	 		if($row['type']=='admin')
					{
						$_SESSION['usertype']=$row['type'];
						$_SESSION['login']='yes';
                    $_SESSION['msg']="Login  successfully.";
                $_SESSION['style']="alert-success";
                $_SESSION['count']= 2;
	 				 echo '<script>window.location.href = "dashboard/admin.php";</script>';
					}
	 				$_SESSION['login']='yes';
	 				$_SESSION['userid']=$userid;
	 			 unset($_SESSION['count']);

                    $_SESSION['msg']="Login  successfully.";
                $_SESSION['style']="alert-success";
                $_SESSION['count']= 2;
	 				 echo '<script>window.location.href = "profile.php";</script>';


	 }
	
}

function signup()
{
	$con=$GLOBALS['con'];
	$mobno = $_POST['mobno'];
	$type = $_POST['type'];
	$userid=$_POST['userid'];
	$password=$_POST['password'];
	$password=sha1($password);
	$sql1="SELECT mobile FROM users WHERE mobile='$mobno'";
	 $sql2="SELECT mobile FROM users WHERE userid='$userid'";

	$res=mysqli_query($con,$sql1);		
	$rowcount = mysqli_num_rows($res);
	if ($rowcount >0)
   {	   
   			 echo '<script>alert("Mobile number is already registered.")</script>';

		 	 echo '<script>window.location.href = "index.php";</script>';


	 }
	 else if($rowcount == 0)
	 {
			$res1=mysqli_query($con,$sql2);		
			$rowcount1 = mysqli_num_rows($res1);
			if ($rowcount1 >0)
				 {	 
				 	echo '<script>alert("Please enter unique userid.")</script>';

				 	 echo '<script>window.location.href = "index.php";</script>';


			 }
			else if ($rowcount1 == 0)
			{

					$sql="INSERT INTO users VALUES(DEFAULT,'$userid','$type',DEFAULT,DEFAULT,DEFAULT,'$mobno','$password',DEFAULT,DEFAULT,DEFAULT,DEFAULT)";
						$re=mysqli_query($con,$sql);
						if($re)
						{		

							$_SESSION['login']='yes';
								$_SESSION['userid']=$userid;


								$mob=$mobno;
				$msg='Use ';
				$otp=rand(000001, 999999);
				$otpstr=(string)$otp;
				$msg=$msg.$otpstr.' as your phone number verification code for Agriemart.ml,do not share this code.';
				$msg=str_replace(' ','%20', $msg);

				$mob='91'.$mobno;
				$url='http://world.msg91.com/api/otp.php?authkey=3409ArfrOEgxa6C65d651751&mobile='.$mob.'&message='.$msg.'&sender=AGRIEM&otp='.$otp;
				echo $url;
				echo '<br>';
				$json = file_get_contents($url); 
				$response = json_decode($json, true);
				if($response['type']){
						$_SESSION['otp']=sha1($otp);
							 echo '<script>window.location.href = "v.php?q='.sha1($otp).'";</script>';

						}
					}
		}
}

}
function update(){
	
}
function forgot($number)
{
	$con=$GLOBALS['con'];
	$mob=$number;
	$sql="SELECT * FROM users WHERE mobile='$mob'";
	

	$res=mysqli_query($con,$sql);
	$rowcount = mysqli_num_rows($res);
if($res)
{
	 	if ($rowcount >= 1)
	 {	
   	

				$msg='Use ';
				$otp=rand(000001, 999999);
				$otpstr=(string)$otp;
				$msg=$msg.$otpstr.' as your phone number verification code for Agriemart.ml,do not share this code.';
				$msg=str_replace(' ','%20', $msg);
				$abc=$mob;
				$mob='91'.$mob;
				$url='http://world.msg91.com/api/otp.php?authkey=3409ArfrOEgxa6C65d651751&mobile='.$mob.'&message='.$msg.'&sender=AGRIEMART&otp='.$otp;
				echo $url;
				echo '<br>';
				$json = file_get_contents($url); 
				$response = json_decode($json, true);
				if($response['type']){
						$_SESSION['otp']=sha1($otp);
						$_SESSION['mobile']=$abc;
							 echo '<script>window.location.href = "forgot.php?q='.sha1($otp).'";</script>';

						}
   }
	else
	{
		echo '<script>alert("PLease Enter Valid Number '.$number.'");</script>';
	}
}
else{
	echo '<script>alert("Failed");</script>';
}
	
}
?>