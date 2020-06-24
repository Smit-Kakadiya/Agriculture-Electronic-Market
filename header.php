 <header class="header-global" style="z-index: 1050;">
    <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
      <div class="container">
        <a class="navbar-brand mr-lg-5" href="index.php"><img src="assets/img/brand/logo.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
           <i class="fa fa-list" style="color: black;"></i>
        </button>
        <div class="navbar-collapse collapse" id="navbar_global">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a href="../index.html">
                  <img src="assets/img/brand/logo.png">
                </a>
              </div>
              <div class="col-6 collapse-close">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
         <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
            <li class="nav-item dropdown">
              <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                <i class="ni ni-ui-04 d-lg-none"></i>
                <span class="nav-link-inner--text">Services</span>
              </a>
              <div class="dropdown-menu dropdown-menu-xl">
                <div class="dropdown-menu-inner">
                  
                  <a href="dashboard/vendor.php" class="media d-flex align-items-center">
                    <div class="icon icon-shape bg-gradient-success rounded-circle ">
                      <i class="ni ni-spaceship"></i>
                    </div>
                    <div class="media-body ml-3">
                      <h6 class="heading text-primary mb-md-1">Trading Platform</h6>
                      <p class="description d-none d-md-inline-block mb-0">A dedicated trading platform to a farmer for trading their crops online.</p>
                    </div>
                  </a>
                  <a href="prediction.php" class="media d-flex align-items-center">
                    <div class="icon icon-shape bg-gradient-warning rounded-circle ">
                      <i class="ni ni-ui-04"></i>
                    </div>
                    <div class="media-body ml-3">
                      <h5 class="heading text-warning mb-md-1">Prediction</h5>
                      <p class="description d-none d-md-inline-block mb-0">A stock prediction and price prediction for farmers.</p>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                <i class="ni ni-collection d-lg-none"></i>
                <span class="nav-link-inner--text">Tools</span>
              </a>
              <div class="dropdown-menu">
                <a href="dashboard/msp.php" class="dropdown-item">Knowledge Hub</a>
                <a href="calc.php" class="dropdown-item">Subsidy Calculator</a>
                <a href="weather.php" class="dropdown-item">Weather Update</a>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav align-items-lg-center ml-lg-auto">
            <li class="nav-item dropdown " style="border-radius: border-radius:17px;">
              <a href="#"  class="btn btn-neutral btn-icon bg-default" style="padding: 0.35rem 0.35rem;" data-toggle="dropdown" role="button">
             
                <span class="nav-link-inner--text"><img src="assets/img/theme/<?php echo $profile; ?>" style="border-radius: 16px;" width="32px" style="32px"></span>
              </a>
              <?php if(isset($_SESSION['login']))
              {
                echo' <div class="dropdown-menu">
                <a href="profile.php" class="dropdown-item"><i class="ni ni-single-02"></i>
              <span>Profile</span></a>';
                
                 if($type=='admin')
       {
             echo '<a href="dashboard/admin.php" class="dropdown-item"><i class="ni ni-circle-08"></i>
              <span>User management</span></a>';
       }
       echo '
                <a href="dashboard/vendor.php" class="dropdown-item"> <i class="ni ni-calendar-grid-58"></i>
              <span>Explore</span></a>
                <a href="profile.php" class="dropdown-item"> <i class="ni ni-settings-gear-65"></i>
              <span>Settings</span></a>
                <a href="logout.php" class="dropdown-item"><i class="ni ni-button-power"></i>
              <span>Logout</span></a>
              </div>';}?>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>