<?php 
session_start();
session_destroy();?>
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

    <link rel="stylesheet" type="text/css" href="assets/css/argon1.css">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="assets/css/unicons.css">
    <link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/owl.theme.default.min.css">

    <!-- MAIN STYLE -->
    <link rel="stylesheet" type="text/css" href="assets/css/tooplate-style.css">



    <!--



-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
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

        /*icon padding*/
        .rounded-circle {
            padding: 0px;
        }

        .btn-twitter {
            background-color: #1da1f2;
            color: #fff;
        }

        .btn-facebook {
            background-color: #3b5999;
            color: #fff;
        }

        .btn-github {
            background-color: #24292e;
            color: #fff;
        }

        .btn-insta {
            background-color: #ea4c89;
            color: #fff;

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

<body >
    <main>
<?php
       require('modal.php');  
   
?>



        <!-- MENU -->
        <nav class="navbar navbar-expand-sm navbar-light bg-defult">
            <div class="container">
                <a class="navbar-brand mr-lg-5" href="index.php"><img src="assets/img/brand/logo.png"></a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav" style="position: relative !important;box-shadow: none;">

                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a href="#about" class="nav-link"><span data-hover="Home">Home</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="#project" class="nav-link"><span data-hover="Services">Services</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="#team" class="nav-link"><span data-hover="Team">Team</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="dashboard/msp.php" class="nav-link"><span data-hover="Knowledge Hub">Knowledge Hub</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link"><span data-hover="Contact">Contact</span></a>
                        </li>


                    </ul>

                    <ul class="navbar-nav ml-lg-auto">
                        <div class="ml-lg-4">
                            <div class="color-mode d-lg-flex justify-content-center align-items-center">
                                <i class="color-mode-icon"></i>
                                Color mode
                            </div>
                        </div>
                    </ul>
                    
                </div>
            </div>
        </nav>

        <!-- ABOUT -->
        <section class="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
            <div class="container">
                <div class="row">

                    <div class="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                        <div class="about-text">
                            <small class="small-text">Welcome to <span class="mobile-block">a farmers website!</span></small>
                            <h1 class="animated animated-text">
                                <span class="mr-2">Hey Farmers, we're <span style="color:#ffc200;">Agriemart</span></span>

                            </h1>

                            <p>Agriemart provides platform for farmers and vendors with a service like
                                Trading crops,portal for self learning and source for reliable information.</p>

                            <div class="custom-btn-group mt-4" id="logintab">
                                <button type="button" class="btn mr-lg-2 custom-btn" data-toggle="modal" data-target="#login"><i class='uil uil-user'></i></a> Login</button>

                                <button type="button" class="btn mr-lg-2 custom-btn" data-toggle="modal" data-target="#register"><i class='uil uil-user'></i></a>Register</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-12 col-12">
                        <div class="about-image svg">
                            <img src="assets/img/brand/if11.png" class="img-fluid" alt="svg image">
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- PROJECTS -->
        <section class="project py-5" id="project">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-12">
                        <h2 class="mb-4">Services</h2>

                        <div class="timeline">
                            <div class="timeline-wrapper">
                                <div class="timeline-yr">
                                    <span></span>
                                </div>
                                <div class="timeline-info">
                                    <h3><span>Trading Platform</span> <a rel="nofollow" href="post/">⁘</a></h3>
                                    <p>A dedicated trading platform to a farmer for trading their crops online .</p>
                                </div>
                            </div>

                            <div class="timeline-wrapper">
                                <div class="timeline-yr">
                                    <span></span>
                                </div>
                                <div class="timeline-info">
                                    <h3><span>Stock Prediction</span> <a rel="nofollow" href="prediction.php">⁘</a></h3>
                                    <p>A stock prediction using machine learning and previous data.</p>
                                </div>
                            </div>

                            <div class="timeline-wrapper">
                                <div class="timeline-yr">
                                    <span></span>
                                </div>
                                <div class="timeline-info">
                                    <h3><span>Price Prediction</span> <a rel="nofollow" href="prediction.php">⁘</a></h3>
                                    <p>A price prediction using machine learning and previous data.</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div class="col-lg-6 col-12">
                        <h2 class="mb-4 mobile-mt-2">Tools</h2>

                        <div class="timeline">
                            <div class="timeline-wrapper">
                                <div class="timeline-yr">
                                    <span></span>
                                </div>
                                <div class="timeline-info">
                                    <h3><span>Weather</span> <a rel="nofollow" href="weather.php">⁘</a></h3>
                                    <p>A page for finding information on weather of a particular location.</p>
                                </div>
                            </div>

                            <div class="timeline-wrapper">
                                <div class="timeline-yr">
                                    <span></span>
                                </div>
                                <div class="timeline-info">
                                    <h3><span>Subsidy Calculator</span> <a rel="nofollow" href="calc.php">⁘</a></h3>
                                    <p>Tool to find the subsidies given bu government for a particular crop.</p>
                                </div>
                            </div>

                            <div class="timeline-wrapper">
                                <div class="timeline-yr">
                                    <span></span>
                                </div>
                                <div class="timeline-info">
                                    <h3><span>Knowledge Hub</span> <a rel="nofollow" href="dashboard/msp.php">⁘</a></h3>
                                    <p>A page which helps you to find latest developments in the agriculture.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>

        <!-- FEATURES 
        <section class="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
            <div class="container">

                <div class="row">
                    <div class="col-lg-11 text-center mx-auto col-12">

                        <div class="col-lg-8 mx-auto">
                            <h2>Visit Here.</h2>
                        </div>

                        <div class="owl-carousel owl-theme">
                            <div class="item">
                                <div class="project-info">
                                    <img src="assets/img/assets/img/images/project/project-image01.png" class="img-fluid" alt="project image">
                                </div>
                            </div>

                            <div class="item">
                                <div class="project-info">
                                    <img src="assets/img/images/project/project-image02.png" class="img-fluid" alt="project image">
                                </div>
                            </div>

                            <div class="item">
                                <div class="project-info">
                                    <img src="assets/img/images/project/project-image03.png" class="img-fluid" alt="project image">
                                </div>
                            </div>

                            <div class="item">
                                <div class="project-info">
                                    <img src="assets/img/images/project/project-image04.png" class="img-fluid" alt="project image">
                                </div>
                            </div>

                            <div class="item">
                                <div class="project-info">
                                    <img src="assets/img/images/project/project-image05.png" class="img-fluid" alt="project image">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>-->
    <section class="section section-lg" id="team">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3 notranslate">Our Team</h2>
                        <p class="lead text-muted">The amazing Team, that convert this idea into reality.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="assets/img/images/project/1.jpg" class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1 notranslate">Jemis Goti</span>
                                    <small class="h6 text-muted">Web Developer</small>
                                </h5>
                                <div class="mt-3">
                                    <a href="https://twitter.com/Jemspatel11" class="btn btn-warning btn-icon-only rounded-circle">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/jemis-goti-90264b189/" class="btn btn-warning btn-icon-only rounded-circle">
                                        <i class="fab fa-linkedin"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="assets/img/images/project/2.jpg" class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1 notranslate">Smit Kakadiya</span>
                                    <small class="h6 text-muted">Web Developer</small>
                                </h5>
                                <div class="mt-3" style="padding: 0px;">
                                    <a href="https://twitter.com/Smit_Kakdiya" class="btn btn-primary btn-icon-only rounded-circle">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/smit-kakadiya-690b74175/" class="btn btn-primary btn-icon-only rounded-circle">
                                        <i class="fab fa-linkedin"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="assets/img/images/project/3.jpeg" class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1 notranslate">Adit Patel</span>
                                    <small class="h6 text-muted">Web Developer</small>
                                </h5>
                                <div class="mt-3" style="vertical-align: middle;align-items: center;">
                                    <a href="https://www.linkedin.com/in/adit-patel-9b5587175" class="btn btn-info btn-icon-only rounded-circle">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/adit-patel-9b5587175/" class="btn btn-info btn-icon-only rounded-circle">
                                        <i class="fab fa-linkedin"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="assets/img/images/project/43.jpg" class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1 notranslate">Yash Sohagia</span>
                                    <small class="h6 text-muted">Web Developer</small>
                                </h5>
                                <div class="mt-3">
                                    <a href="#" class="btn btn-success btn-icon-only rounded-circle">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" class="btn btn-success btn-icon-only rounded-circle">
                                        <i class="fab fa-linkedin"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CONTACT -->
        <section class="contact py-5" id="contact">
            <div class="container">
                <div class="row">

                    <div class="col-lg-5 mr-lg-5 col-12">
                        <div class="google-map w-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5711253989575!2d72.922860!3d22.557937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e0d336dbc19%3A0x5a23fa1093593d32!2sSanskar+Accommodation!5e0!3m2!1sen!2sin!4v1563654500022!5m2!1sen!2sin" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div>

                        <div class="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                            <div class="contact-info-item">
                                <h3 class="mb-3 text-white">Say hello</h3>
                                <p class="footer-text mb-0">010 020 0960</p>
                                <p><a href="mailto:hello@company.co">inquiry@agriemart.ml</a></p>
                            </div>

                            <ul class="social-links">
                                <li><a href="#" class="uil uil-dribbble" data-toggle="tooltip" data-placement="left" title="Dribbble"></a></li>
                                <li><a href="#" class="uil uil-instagram" data-toggle="tooltip" data-placement="left" title="Instagram"></a></li>
                                <li><a href="#" class="uil uil-youtube" data-toggle="tooltip" data-placement="left" title="Youtube"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6 col-12">
                        <div class="contact-form">
                            <h2 class="mb-4">Interested to work together? Let's talk</h2>

                            <form action="" method="get">
                                <div class="row">
                                    <div class="col-lg-6 col-12">
                                        <input type="text" class="form-control" name="name" placeholder="Your Name" id="name">
                                    </div>

                                    <div class="col-lg-6 col-12">
                                        <input type="email" class="form-control" name="email" placeholder="Email" id="email">
                                    </div>

                                    <div class="col-12">
                                        <textarea name="message" rows="6" class="form-control" id="message" placeholder="Message"></textarea>
                                    </div>

                                    <div class="ml-lg-auto col-lg-5 col-12">
                                        <input type="submit" class="form-control submit-btn" value="Send Button">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>


    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
                    <h4 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" href="https://twitter.com/Jemspatel11" class="btn btn-neutral btn-twitter btn-round btn-lg" data-toggle="tooltip" data-original-title="Follow us">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/jemis.goti.67" class="btn btn-neutral btn-facebook btn-round btn-lg" data-toggle="tooltip" data-original-title="Like us">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/agriemart/" class="btn btn-neutral btn-dribbble btn-lg btn-round btn-insta" data-toggle="tooltip" data-original-title="Follow us">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" href="https://github.com/" class="btn btn-neutral btn-github btn-round btn-lg" data-toggle="tooltip" data-original-title="Star on Github">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; 2019 <a href="http://agriemart.ml/" target="_blank">Agriemart</a>.
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="#team" class="nav-link" >Team</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav-link" target="_blank">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="http://blog.agriemart.ml/" class="nav-link" target="_blank">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="license.txt" class="nav-link" target="_blank">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en'
            }, 'google_translate_element');
        }
    </script>

    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

    <script>
             <script 
        $(window).load(function() {

            $(".goog-logo-link").empty();
            $('.goog-te-gadget').html($('.goog-te-gadget').children());

        })
    </script>




    <script src="assets/js/jquery-3.3.1.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/Headroom.js"></script>
    <script src="assets/js/jQuery.headroom.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/smoothscroll.js"></script>
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/translate.js"></script>

    <script type="text/javascript">
        
        history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    </script>
   


</body></html>


<?php

  if(isset($_SESSION['login']))
       {
                 echo '<script>document.getElementById("logintab").remove();</script>';
       }
     
 ?>
