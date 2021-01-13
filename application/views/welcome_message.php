<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    // $murid = '';
    if($murid){
        foreach ($murid as $key => $value) {
           echo "<!-- \n".print_r($value, TRUE)."\n-->\n\n";
       }
    }

?>
<!--<!DOCTYPE html>-->
<html lang="en">
<head>

    <!--important meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

     <!--Title -->
    <title>Maungaji I Pesan Guru Ngaji Privat</title>

     <!--Basic SEO -->
    <meta name="description" content="Privat ngaji di tempat yang kamu tentukan, murah, mudah dan sesuai syariah.">
    <meta name="keywords" content="guru ngaji online, belajar ngaji, belajar iqro, belajar al-quran, belajar tahsin, hafidz qur'an, aplikasi ngaji online, belajar iqro online, belajar al-quran online, ngaji online, privat ngaji, guru ngaji, guru ngaji profesional, privat ngaji online, ngaji, guru ngaji berkualitas">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

     <!--Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo base_url('/img/favicon/apple-icon-57x57.png') ?>">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo base_url('/img/favicon/apple-icon-60x60.png') ?>">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo base_url('/img/favicon/apple-icon-72x72.png') ?>">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo base_url('/img/favicon/apple-icon-114x114.png') ?>">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo base_url('/img/favicon/apple-icon-120x120.png') ?>">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo base_url('/img/favicon/apple-icon-144x144.png') ?>">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo base_url('/img/favicon/apple-icon-152x152.png') ?>">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo base_url('/img/favicon/apple-icon-180x180.png') ?>">
    <link rel="icon" type="image/png" sizes="192x192" href="<?php echo base_url('/img/favicon/android-icon-192x192.png') ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo base_url('/img/favicon/favicon-32x32.png') ?>">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo base_url('/img/favicon/favicon-96x96.png') ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo base_url('/img/favicon/favicon-16x16.png') ?>">
    <link rel="manifest" href="img/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="img/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <link href="https://fonts.googleapis.com/?css=Sans+Serif:300,400,600,700" rel="stylesheet">

     <!--Fontawesome -->
    <link rel="stylesheet" href="https://maungaji.co.id/css/font-awesome/css/font-awesome.min.css">

     <!--Bootstrap CSS -->
    <link href="https://maungaji.co.id/css/bootstrap/bootstrap.min.css" rel="stylesheet">

     <!--Owl Carousel CSS -->
    <link rel="stylesheet" href="https://maungaji.co.id/css/owl-carousel/owl.carousel.min.css">
    <link rel="stylesheet" href="https://maungaji.co.id/css/owl-carousel/owl.theme.default.min.css">

     <!--Responsive Tabs CSS -->
    <link rel="stylesheet" href="https://maungaji.co.id/css/responsive-tabs/responsive-tabs.min.css">

     <!--Magnific Popup -->
    <link rel="stylesheet" href="https://maungaji.co.id/css/magnific-popup/magnific-popup.min.css">

     <!--Animate CSS -->
    <link rel="stylesheet" href="https://maungaji.co.id/css/animate/animate.min.css">

     <!--Custom CSS -->
    <link rel="stylesheet" href="https://maungaji.co.id/css/style.css">

     <!--Responsive CSS -->
    <link rel="stylesheet" href="https://maungaji.co.id/css/responsive.css">

      <!--Slick  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css">

     <!--jQuery library -->
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>-->

     <!--Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>

     <!--Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

     <link href="https://fonts.googleapis.com/css?family=Roboto:400,700|Open+Sans" rel="stylesheet"> 

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>-->
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <!--Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '523156341768942');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=523156341768942&ev=PageView&noscript=1"
    /></noscript>
    <!--End Facebook Pixel Code -->
    
    <!--Tiktok Pixel Code -->
    <script>
    (function(root) {
      var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;
      ta.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=BSA25667TJFGI7V4JB20';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ta, s);
    })(window);
    </script>
     <!--End Tiktok Pixel Code -->
    
    <style type="text/css">
        h3 {
            color: #333;
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            position: relative;
        }
        .col-center {
            margin: 0 auto;
            float: none !important;
        }
        .carousel {
            margin: 50px auto;
            padding: 0 70px;
        }
        .carousel .item {
            color: #999;
            font-size: 14px;
            text-align: center;
            overflow: hidden;
            min-height: 290px;
        }
        .carousel .item .img-box {
            width: 135px;
            height: 135px;
            margin: 0 auto;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
        .carousel .img-box img {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 50%;
        }
        .carousel .testimoni {
            padding: 30px 0 10px;
            color: #333;
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            font-size: 18px;
        }
        .carousel .overview {   
            font-style: italic;
        }
        .carousel .overview b {
            text-transform: uppercase;
            color: #089ED1;;
        }
        .carousel .carousel-control {
            width: 40px;
            height: 40px;
            margin-top: -20px;
            top: 50%;
            background: none;
        }
        .carousel-control i {
            font-size: 68px;
            line-height: 42px;
            position: absolute;
            display: inline-block;
            color: rgba(0, 0, 0, 0.8);
            text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
        }
        .carousel .carousel-indicators {
            bottom: -30px;
        }
        .carousel-indicators li, .carousel-indicators li.active {
            width: 10px;
            height: 10px;
            margin: 1px 3px;
            border-radius: 50%;
        }
        .carousel-indicators li {   
            background: #999;
            border-color: transparent;
            box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
        }
        .carousel-indicators li.active {    
            background: #555;       
            box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
        }
        {
        box-sizing: border-box;
        }

      /* Style the search field */
      form.example input[type=text] {
        padding: 10px;
        font-size: 17px;
        border: 1px solid grey;
        float: left;
        width: 80%;
        background: #f1f1f1;
      }

      /* Style the submit button */
      form.example button {
        float: left;
        width: 20%;
        padding: 10px;
        background: #2196F3;
        color: white;
        font-size: 17px;
        border: 1px solid grey;
        border-left: none; /* Prevent double borders */
        cursor: pointer;
      }

      form.example button:hover {
        background: #0b7dda;
      }

      /* Clear floats */
      form.example::after {
        content: "";
        clear: both;
        display: table;
      }
      
      .top-space{
        padding-top:100px;
      }
      .top-space-icon{
        padding-top:50px;
      }
      .jdcolor {
        color: #fff;
      }
      @keyframes blink{
        0%{opacity: 0;}
        50%{opacity: .5;}
        100%{opacity: 1;}
      }
      body {
        height: 1600px;
        }
        .bottomMenu {
        display: none;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100px;
        border-top: 2px solid rgb(255, 253, 253);
        background:#089ED1;
        z-index: 1;
        left:0;
        }
    </style>
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="65">
     <!--Header -->
    <header>
        <nav class="navbar navbar-fixed-top">
            <div class="container-fluid">
                <div class="site-nav-wrapper">
                    <div class="navbar-header">
                         <!--Mobile Menu Open Button -->
                        <span id="mobile-nav-open-btn">&#9776;</span>
                         <!--Logo -->
                        <a class="navbar-brand smooth-scroll" href="#home">
                            <img class="logo-non-text" src="./logo.png" alt="logo" width="auto" class="img-responsive" height="50px" style="margin-top: -10px;">
                        </a>
                         <!--Logo -->
                        <a class="navbar-brand-mobile smooth-scroll" href="#home">
                            <img src="https://i.ibb.co/ZTdPn9T/Mau-Ngaji-Logo-3.png" alt="maungaji" border="0" class="img-responsive">
                        </a>
                    </div>

                    <!--Main Menu -->
                    <div class="container">
                        <div class="collapse navbar-collapse">
                            <ul class="nav navbar-nav pull-right">
                                <li><a href="https://maungaji.co.id/">Beranda</a></li>
                                <li><a href="https://maungaji.co.id/artikel/">Artikel</a></li>
                                <li><a href="https://play.google.com/store/apps/details?id=com.maungaji.guruapp" target="_blank">Gabung Sebagai Pengajar</a></li>
                            </ul>
                        </div>
                    </div>

                    <!--Mobile Menu -->
                    <div id="mobile-nav">
                         <!--Mobile Menu Close Button -->
                        <span id="mobile-nav-close-btn">&times;</span>
                        <div id="mobile-nav-content">
                            <ul class="nav">
                                <li><a href="https://maungaji.co.id/">Beranda</a></li>
                                <li><a href="https://maungaji.co.id/artikel/">Artikel</a></li>
                                <li><a href="https://play.google.com/store/apps/details?id=com.maungaji.guruapp" target="_blank">Gabung Sebagai Pengajar</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <!--Header Ends -->

<!--About 01 -->
<div id="about-01">
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <br>
            <div class="text-center top-space">
              <p><h3><strong>Belajar Mengaji dengan Guru Ngaji Terbaik Se-Indonesia! Tatap Muka ataupun Kelas Online, Mudah, Murah dan Sesuai Syariah</strong></h3></p>
            <br>
            </div>
            <div style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                <div class="button-download">
                    <a href="https://play.google.com/store/apps/details?id=com.maungaji" target="_blank">
                        <img src="https://maungaji.co.id/img/logo/playstore.svg">
                    </a>
                    <a href="https://apps.apple.com/id/app/maungaji/id1497420237" target="_blank">
                        <img src="https://maungaji.co.id/img/logo/appstore.svg">
                    </a>
                </div>
            </div>   
            <br>
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <div style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                    <br> 
                    <form class="example" action="/teacher" method="POST">
                      <div class="col-md-12">
                        <div class="text-center">
                          <h3><strong>Kamu mau belajar apa?</strong></h3>
                        </div>
                        <div style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                            <select class="form-control selectpicker" id="category">
                              <option value="4" name="category">Iqro</option>
                              <option value="5" name="category">Tajwid</option>
                              <option value="6" name="category">Tahfidz</option>
                            </select>
                        </div>
                        <div style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                           <a href="https://maungaji.co.id/teacher/" class='daftar' target="_blank" disabled>Cari Guru Ngaji</a>
                           
                        
                        </div>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 top-space-icon">
            <img src="<?php echo base_url('/img/icon/draft-01.png') ?>" width="100%" class="img-responsive" height="auto" alt="Belajar Ngaji">  
          </div>
        </div>
      </div>
    </section>
</div>

<section id="statement">
    <div class="content-box-lg">
        <div class="container">
            <div class="row">
                <div class="col-md-12 wow fadeIn">
                    <div id="statement-text" class="text-center">
                        <div class="col-md-6">
                            <h2><strong>
                            <?php if (!empty($value)) { ?>
                            <?php echo $value[0]['count'] ?>
                            <?php } ?>
                            </strong></h2>
                            <p><strong>
                            <?php if (!empty($value)) { ?> 
                            <?php echo $value[0]['name'] ?>
                            <?php } ?>
                            </strong></h2></strong></p>
                        </div>
                        <div class="col-md-6">
                           <h2><strong>
                            <?php if (!empty($value)) { ?>
                            <?php echo $value[1]['count'] ?>
                            <?php } ?>
                            </strong></h2>
                            <p><strong>
                            <?php if (!empty($value)) { ?>
                            <?php echo $value[1]['name'] ?>
                            <?php } ?>
                            </strong></h2></strong></p>
                        </div>
                        <!--<div class="col-md-4">-->
                        <!--   <h2><strong>-->
                        <!--    <?php if (!empty($value)) { ?>-->
                        <!--    <?php echo $value[2]['count'] ?>-->
                        <!--    <?php } ?>-->
                        <!--    </strong></h2>-->
                        <!--    <p><strong>-->
                        <!--    <?php if (!empty($value)) { ?>-->
                        <!--    <?php echo $value[2]['name'] ?>-->
                        <!--    <?php } ?>-->
                        <!--    </strong></h2></strong></p>-->
                        <!--</div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div id="pengajar" style="background-color: #fff;">
    <div class="content-box-md">
        <div class="container">
            <div class="row">
                <div id="tech-statement" class="text-center">
                    <div class="vertical-heading">
                        <h3><strong>InsyaAllah Mitra Guru Ngaji Kami</strong></h3>
                    </div>
                </div>
                <br />
               <div class="col-md-4 col-sm-4">
                    <div class="about-item text-center">
                        <div id="tech-statement">
                            <h3><strong>TERPERCAYA</strong></h3>
                        </div>
                        <hr>
                         <p><h4><strong>Guru Ngaji Kami berasal dari Universitas serta Pondok Pesantren Favorit dan Pengalaman Mumpuni serta Metode Pengajaran Terkini.</strong></h4></p>
                    </div>  
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="about-item text-center">
                        <div id="tech-statement">
                            <h3><strong>BERPENGALAMAN</strong></h3>
                        </div>
                        <hr>
                         <p><h4><strong>Semua Guru Ngaji kami memiliki minimal 2 tahun pengalaman mengajar Al-Quran.</p></h4></strong>
                    </div>
                </div>
               <div class="col-md-4 col-sm-4">
                    <div class="about-item text-center">
                        <div id="tech-statement">
                            <h3><strong>TERKUALIFIKASI</strong></h3>
                        </div>
                        <hr>
                         <p><h4><strong>Semua Guru Ngaji kami sudah melalui proses kurasi yang diselenggarakan oleh Maungaji.</p></h4></strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div id="tech-statement" class="text-center">
        <div class="vertical-heading">
            <h3><strong>Kategori Belajar</strong></h3>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="about-item text-center">
                <h3><strong>Tajwid</strong></h3>
                <img src="<?php echo base_url('/img/icon/iqra-01.png') ?>" alt="iqra" border="0">
                <p><h4><strong>Bagi muslim yang sudah bisa membaca Al-Qur’an dan ingin memperdalam ilmu tajwid dan muslim yang belum bisa membaca Al-Qur’an sama sekali.</strong></h4></p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="about-item text-center">
                <h3><strong>Tahfidzh</strong></h3>
                <img src="<?php echo base_url('/img/icon/quran-iqra-01.png') ?>" alt="quran iqra" border="0">
                <p><h4><strong> Bagi muslim yang ini menambahkan jumlah hafalan surah serta kualitas hafalan yang lebih baik.<strong></h4></p>
            </div>
        </div>
    </div>
</div>

<section id="testimonials" class="new-section-how-to-use">
    <div class="left-phone">
        <div class="half-phone">
            <img src="<?php echo base_url('/img/icon/fullphone.jpg') ?>">
            <div class="new-slide-phone" id="slidePhone">
            <div>
                <img src="img/app/homepage-2.jpeg" alt="Daftar Ngaji">
            </div>
            <div>
                <img src="img/app/materi.jpeg">
            </div>
            <div>
                <img src="img/app/guru.jpeg">
            </div>
            </div>
        </div>
    </div>
    <div class="right-phone">
    </div>
    <div class="content">
        <div class="table-display">
            <div class="mid-table">
                <div class="number" id="numberControl">
                    <div data-number="0" class="active">1</div>
                    <div data-number="1" class="">2</div>
                    <div data-number="2" class="">3</div>
                </div>
                <div class="slide-content" id="contentSlide">

                    <div><span class='dot-title'></span>Kamu Bisa Pilih Guru Ngaji Berdasarkan : <br> Lokasi Terdekat, Materi Belajar. Lembaga Qur'an dan Lain-Lain.</div>

                    <div><span class='dot-title'></span>Pilih Materi & Paket Belajarmu : <br> Pilih Materi, Hari dan Waktu Belajar Sesuai yang Kamu Inginkan Melalui Aplikasi.</div>

                    <div><span class='dot-title'></span>Guru Ngaji Tiba di Lokasi Belajar: <br> Guru Ngaji Favoritemu Langsung Datang ke Tempat Belajar yang Kamu Tentukan.</div>

                </div>
            </div>
        </div>
    </div>
</section>

<div id="tech-statement" class="text-center">
    <div class="vertical-heading">
        <h3><strong>Pilih Paket yang di Inginkan</strong></h3>
    </div>
</div>
<br>
<section class="pricing py-5">
  <div class="container">
    <div class="row">
      
      <!--Kelas online-->  
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center"><strong>Personal</strong></h3>
            <h4 class="card-title text-center"><strong>(Belajar Ngaji Privat Online 1 Orang)</strong></h4>
              <h4 class="card-title text-center">
                <strong>
                <div class="text-center">
                Rp.25.000  
                </strong>
              </h4>
            <h6 class="card-price text-center"><span class="period"><img src="img/icon/personal_new.png" width="100px" height="auto" alt="Belajar Ngaji Privat Online"></span></h6>
            <hr>
            <div class="text-center"> 
                <div class="form-group">
                    <h4 class="card-title text-uppercase text-center"><strong>PILIH PERTEMUAN</strong></h4>
                        <select name="tot_pin_requested" class="form-control" onchange="calculateAmount(this.value)" required>
                            <option value="1">1x Pertemuan</option>
                            <option value="2">2x Pertemuan</option>
                            <option value="3">3x Pertemuan</option>
                            <option value="4">4x Pertemuan</option>
                            <option value="5">5x Pertemuan</option>
                            <option value="6">6x Pertemuan</option>
                            <option value="7">7x Pertemuan</option>
                            <option value="8">8x Pertemuan</option>
                            <option value="9">9x Pertemuan</option>
                            <option value="10">10x Pertemuan</option>
                            <option value="11">11x Pertemuan</option>
                            <option value="12">12x Pertemuan</option>
                        </select>
                </div>
                <h4 class="card-title text-uppercase text-center"><strong>TOTAL INFAQ</strong></h4>
                <input type="text" class="form-control" id="tot_amount_personnel" readonly>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center"><strong>Keluarga</strong></h3>
             <h4 class="card-title text-center"><strong>(Belajar Ngaji Privat Online Maks.4 Orang)</strong></h4>
             <h4 class="card-title text-center">
                <strong>
                    <div class="text-center">
                    Rp.50.000  
                </strong>
            </h4>
            <h6 class="card-price text-center"><span class="period"><img src="img/icon/keluarga_new.png" width="100px" height="auto" alt="Belajar Ngaji Privat Online"></span></h6>
            <hr>
            <div class="text-center"> 
                <div class="form-group">
                    <h4 class="card-title text-uppercase text-center"><strong>PILIH PERTEMUAN</strong></h4>
                        <select name="tot_pin_requested" class="form-control" onchange="calculateAmountFamily(this.value)" required>
                            <option value="1">1x Pertemuan</option>
                            <option value="2">2x Pertemuan</option>
                            <option value="3">3x Pertemuan</option>
                            <option value="4">4x Pertemuan</option>
                            <option value="5">5x Pertemuan</option>
                            <option value="6">6x Pertemuan</option>
                            <option value="7">7x Pertemuan</option>
                            <option value="8">8x Pertemuan</option>
                            <option value="9">9x Pertemuan</option>
                            <option value="10">10x Pertemuan</option>
                            <option value="11">11x Pertemuan</option>
                            <option value="12">12x Pertemuan</option>
                        </select>
                </div>
                <h4 class="card-title text-uppercase text-center"><strong>TOTAL INFAQ</strong></h4>
                <input type="text" class="form-control" id="tot_amount_family" readonly>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center"><strong>Kelompok</strong></h3>
            <h4 class="card-title text-center"><strong>(Belajar Ngaji Privat Online Maks.10 Orang)</strong></h4>
            <h4 class="card-title text-center">
                <strong>
                    <div class="text-center">
                    Rp.75.000  
                </strong>
            </h4>
            <h6 class="card-price text-center"><span class="period"></span><img src="img/icon/kelompok_new.png" width="100px" height="auto" alt="Belajar Ngaji Privat Online"></h6>
            <hr>
            <div class="text-center"> 
               <div class="form-group">
                    <h4 class="card-title text-uppercase text-center"><strong>PILIH PERTEMUAN</strong></h4>
                        <select name="tot_pin_requested" class="form-control" onchange="calculateAmountGroup(this.value)" required>
                            <option value="1">1x Pertemuan</option>
                            <option value="2">2x Pertemuan</option>
                            <option value="3">3x Pertemuan</option>
                            <option value="4">4x Pertemuan</option>
                            <option value="5">5x Pertemuan</option>
                            <option value="6">6x Pertemuan</option>
                            <option value="7">7x Pertemuan</option>
                            <option value="8">8x Pertemuan</option>
                            <option value="9">9x Pertemuan</option>
                            <option value="10">10x Pertemuan</option>
                            <option value="11">11x Pertemuan</option>
                            <option value="12">12x Pertemuan</option>
                        </select>
                </div>
                <h4 class="card-title text-uppercase text-center"><strong>TOTAL INFAQ</strong></h4>
                <input type="text" class="form-control" id="tot_amount_group" readonly>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <!--end kelas online-->
      
      <!--Kelas offline-->
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center"><strong>Personal</strong></h3>
            <h4 class="card-title text-center"><strong>(Belajar Ngaji Privat di Rumah Maks.1 Orang)</strong></h4>
            <h4 class="card-title text-center">
                <strong>
                    <div class="text-center">
                    Rp.100.000  
                </strong>
            </h4>
            <h6 class="card-price text-center"><span class="period"></span><img src="img/icon/personal_offline.png" width="100px" height="auto" alt="Belajar Ngaji Privat di Rumah"></h6>
            <hr>
            <div class="text-center"> 
               <div class="form-group">
                    <h4 class="card-title text-uppercase text-center"><strong>PILIH PERTEMUAN</strong></h4>
                        <select name="tot_pin_requested" class="form-control" onchange="calculateAmountOffline(this.value)" required>
                            <option value="1">1x Pertemuan</option>
                            <option value="2">2x Pertemuan</option>
                            <option value="3">3x Pertemuan</option>
                            <option value="4">4x Pertemuan</option>
                            <option value="5">5x Pertemuan</option>
                            <option value="6">6x Pertemuan</option>
                            <option value="7">7x Pertemuan</option>
                            <option value="8">8x Pertemuan</option>
                            <option value="9">9x Pertemuan</option>
                            <option value="10">10x Pertemuan</option>
                            <option value="11">11x Pertemuan</option>
                            <option value="12">12x Pertemuan</option>
                        </select>
                </div>
                <h4 class="card-title text-uppercase text-center"><strong>TOTAL INFAQ</strong></h4>
                <input type="text" class="form-control" id="tot_amount_personnel_offline" readonly>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center"><strong>Keluarga</strong></h3>
            <h4 class="card-title text-center"><strong>(Belajar Ngaji Privat di Rumah Maks.4 Orang)</strong></h4>
            <h4 class="card-title text-center">
                <strong>
                    <div class="text-center">
                    Rp.125.000  
                </strong>
            </h4>
            <h6 class="card-price text-center"><span class="period"></span><img src="img/icon/keluarga_offline.png" width="100px" height="auto" alt="Belajar Ngaji Privat di Rumah"></h6>
            <hr>
            <div class="text-center"> 
               <div class="form-group">
                    <h4 class="card-title text-uppercase text-center"><strong>PILIH PERTEMUAN</strong></h4>
                        <select name="tot_pin_requested" class="form-control" onchange="calculateAmountFamilyOffline(this.value)" required>
                            <option value="1">1x Pertemuan</option>
                            <option value="2">2x Pertemuan</option>
                            <option value="3">3x Pertemuan</option>
                            <option value="4">4x Pertemuan</option>
                            <option value="5">5x Pertemuan</option>
                            <option value="6">6x Pertemuan</option>
                            <option value="7">7x Pertemuan</option>
                            <option value="8">8x Pertemuan</option>
                            <option value="9">9x Pertemuan</option>
                            <option value="10">10x Pertemuan</option>
                            <option value="11">11x Pertemuan</option>
                            <option value="12">12x Pertemuan</option>
                        </select>
                </div>
                <h4 class="card-title text-uppercase text-center"><strong>TOTAL INFAQ</strong></h4>
                <input type="text" class="form-control" id="tot_amount_family_offline" readonly>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-uppercase text-center"><strong>Kelompok</strong></h3>
            <h4 class="card-title text-center"><strong>(Belajar Ngaji Privat di Rumah Maks.10 Orang)</strong></h4>
            <h4 class="card-title text-center">
                <strong>
                    <div class="text-center">
                    Rp.150.000  
                </strong>
            </h4>
            <h6 class="card-price text-center"><span class="period"></span><img src="img/icon/kelompok.jpeg" width="100px" height="100px" alt="Belajar Ngaji Privat di Rumah"></h6>
            <hr>
            <div class="text-center"> 
               <div class="form-group">
                    <h4 class="card-title text-uppercase text-center"><strong>PILIH PERTEMUAN</strong></h4>
                        <select name="tot_pin_requested" class="form-control" onchange="calculateAmountGroupOffline(this.value)" required>
                            <option value="1">1x Pertemuan</option>
                            <option value="2">2x Pertemuan</option>
                            <option value="3">3x Pertemuan</option>
                            <option value="4">4x Pertemuan</option>
                            <option value="5">5x Pertemuan</option>
                            <option value="6">6x Pertemuan</option>
                            <option value="7">7x Pertemuan</option>
                            <option value="8">8x Pertemuan</option>
                            <option value="9">9x Pertemuan</option>
                            <option value="10">10x Pertemuan</option>
                            <option value="11">11x Pertemuan</option>
                            <option value="12">12x Pertemuan</option>
                        </select>
                </div>
                <h4 class="card-title text-uppercase text-center"><strong>TOTAL INFAQ</strong></h4>
                <input type="text" class="form-control" id="tot_amount_group_offline" readonly>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <!--end kelas offline-->
    </div>
  </div>
</section>

<section id="about">
<div id="about" style="background-color: #fff;">
    <div class="content-box-md">
        <div class="container">
            <div class="row">
                <div class="text-center">
                    <div id="tech-statement"class="horizontal-heading">
                        <h3><strong>Dengan Memilih Maungaji, Insya Allah</strong></h3>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="about-item text-center">
                        <img src="<?php echo base_url('/img/icon/shield.png') ?>" width="100px" height="auto" alt="Verifikasi Guru">
                    </div>
                    <div id="tech-statement" style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <h3><strong>Aman dan Nyaman</strong></h3>
                    </div>
                    <div style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <p><h4><strong>Kenali dan Verifikasi Guru Ngaji mu dengan fitur scan barcode di aplikasi.</strong></h4></p>
                    </div>
                </div>
                 <div class="col-md-6 col-sm-6">
                     <div class="about-item text-center">
                        <img src="<?php echo base_url('/img/icon/Bersyari_ah.png') ?>" width="100px" height="auto" alt="Bersyariah">
                    </div>
                    <div id="tech-statement" style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <h3><strong>Berdasarkan Syari’ah</strong></h3>
                    </div>
                    <div style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <p><h4><strong>Demi menjalani syariah, kami menyarankan para santri untuk memilih gender guru ngaji sesuai dengan gender santri pemesan, laki laki dengan laki laki, perempuan dengan perempuan.</strong></h4></p>
                    </div>
                </div>
                 <div class="col-md-6 col-sm-6">
                     <div class="about-item text-center">
                        <img src="<?php echo base_url('/img/icon/analytics.png') ?>" width="100px" height="auto" alt="Laporan Belajar">
                    </div>
                    <div id="tech-statement" style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <h3><strong>Laporan Belajar</strong></h3>
                    </div>
                    <div style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                         <p><h4><strong>Kamu dapat melihat perkembangan belajarmu melalui aplikasi.</strong></h4></p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="about-item text-center">
                        <img src="<?php echo base_url('/img/icon/diploma.png') ?>" width="100px" height="auto" alt="Sertifikat">
                    </div>
                    <div id="tech-statement" style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <h3><strong>Dapat Sertifikat</strong></h3>
                    </div>
                    <div style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <p><h4><strong>Pelajari apa yang anda inginkan dan dapatkan sertifikasi pada mata pelajaran tertentu.</strong></h4></p>
                    </div>
                </div>
        </div>
    </div>
</div>
</section>

<div id="lembaga" style="background-color: #fff;">
    <div class="container">
        <div class="row">
            <div id="tech-statement" class="text-center">
                <div class="vertical-heading">
                    <h3><strong>Daftar Menjadi Guru Ngaji</strong></h3>
                </div>
            </div>
            <div class="text-center">
                <div class="vertical-heading">
                    <h4><strong>Jadilah bagian dari dakwah kami dalam mengentaskan baca huruf Al-Quran dan dapatkan amal jariyahnya.</strong></h4>
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="about-item text-center">
                    <div id="tech-statement-2" style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <h3><strong>Buat Profile Mengajar</strong></h3>
                    </div>
                    <img src="<?php echo base_url('/img/icon/draft-01.png') ?>" width="100%" height="auto" alt="Profile Guru">
                    <hr>
                    <p><h4><strong>Isi Data Diri Ustadz/ah dan Pilih Materi Qur'an yang ingin Diajarkan, Seperti Tajwid & Tahsin Serta Tahfidz Qur'an. </strong></h4></p>
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="about-item text-center">
                    <div id="tech-statement-2" style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <h3><strong>Isi Jadwal Mengajar</strong></h3>
                    </div>
                    <img src="<?php echo base_url('/img/icon/jadwal-sholat-01.png') ?>" width="100%" height="auto" alt="Jadwal Mengajar">
                    <hr>
                    <p><h4><strong>Tentukan Sendiri Jadwal Mengajar Part-time maupun Full-time.</strong></h4></p>
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="about-item text-center">
                    <div id="tech-statement-2" style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <h3><strong>Siap Mengajar</strong></h3>
                    </div>
                    <img src="<?php echo base_url('/img/icon/Draft 2-04.png') ?>" width="100%" height="auto" alt="Santri">
                    <hr>
                    <p><h4><strong>Ribuan Santri Siap Belajar Qur'an dengan Ustadz/zah.</strong></h4></p>
                </div>
            </div>
             <div class="col-md-12">
                <div style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                        <a target='_blank' href="https://play.google.com/store/apps/details?id=com.maungaji.guruapp" class='daftar'>Download Aplikasi Guru Ngaji</a>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>
<div class="container">   
    <div id="tech-statement" class="text-center">
        <div class="vertical-heading">
            <h3><strong>Artikel Terbaru</strong></h3>
        </div>
    </div>      
    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <img src="<?php echo base_url('/img/icon/sudah-gajian.png') ?>" alt="" width="100%" height="auto">
            <div class="caption">
                <h3>Sisihkan Gaji Mu Untuk Belajar AL-Qur’an</h3>
                <p><a href="https://maungaji.co.id/artikel/index.php/2020/07/01/sudah-gajian-yuk-sisihkan-gaji-mu-untuk-belajar-al-quran/" class="btn btn-primary" role="button">Lihat</a></p>
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <img src="<?php echo base_url('/img/icon/1000-muslim.png') ?>" alt="" width="100%" height="auto">
            <div class="caption">
                <h3>Sudah 1000 Muslim Belajar Al Quran Di Aplikasi Maungaji</h3>
                <p><a href="https://maungaji.co.id/artikel/index.php/2020/07/13/sudah-1000-muslim-belajar-al-quran-di-aplikasi-maungaji-kamu-kapan/" class="btn btn-primary" role="button">Lihat</a></p>
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <img src="<?php echo base_url('/img/icon/kabar-gembira.png') ?>" alt="" width="100%" height="auto">
            <div class="caption">
                <h3>Kabar Gembira Bagi Anda Yang Rutin Membaca Al Qur’an</h3>
                <a href="https://maungaji.co.id/artikel/index.php/2020/07/14/kabar-gembira-bagi-anda-yang-rutin-membaca-al-quran/" class="btn btn-primary" role="button">Lihat</a></p>
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <img src="<?php echo base_url('/img/icon/al-mulk.png') ?>" alt="" width="100%" height="auto" width="100%" height="auto">
            <div class="caption">
                <h3>Dahsyatnya Fadhillah Surah Al-Mulk</h3>
                <p><a href="https://maungaji.co.id/artikel/index.php/2020/07/16/dahsyatnya-fadhillah-surah-al-mulk-dibaca-ya-sebelum-tidur/" class="btn btn-primary" role="button">Lihat</a></p>
            </div>
        </div>
    </div>
</div>
<hr>
<br/>

<div class="container">
    <div class="row">
        <div id="tech-statement" class="text-center">
            <div class="vertical-heading">
                <h3><strong>Testimoni Maungaji</strong></h3>
            </div>
        </div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="6"></li>
                <li data-target="#myCarousel" data-slide-to="7"></li>
                <li data-target="#myCarousel" data-slide-to="8"></li>
                <li data-target="#myCarousel" data-slide-to="9"></li>
                <li data-target="#myCarousel" data-slide-to="10"></li>
            </ol>   
            <div class="carousel-inner">
                <div class="item carousel-item active">
                    <div class="img-box"><img src="img/icon/hijab.png" width="100px" height="auto"></div>
                    <p class="testimoni"><b>Maungaji sangat bermanfaat dan memudahkan umat untuk mencari guru ngaji berkualitas.</b></p>
                    <p class="overview"><b>Putri Dewi Puspita</b></p>
                </div>
                <div class="item carousel-item">
                    <div class="img-box"><img src="img/icon/personal.png" width="100px" height="auto"></div>
                    <p class="testimoni"><b>Yang terbaik dan istimewa.</b></p>
                    <p class="overview"><b>Amir Arfah</b></p>
                </div>
                <div class="item carousel-item">
                    <div class="img-box"><img src="img/icon/personal.png" width="100px" height="auto"></div>
                    <p class="testimoni"><b>Sangat bermanfaat untuk menemukan guru ngaji sesuai jadwal yang diinginkan.</b></p>
                    <p class="overview"><b>Coretaninay</b></p>
                </div>
                <div class="item carousel-item">
                    <div class="img-box"><img src="img/icon/hijab.png" width="100px" height="auto"></div>
                    <p class="testimoni"><b>Maungaji sangat bermanfaat bagi siapa saja yang ingin belajar ngaji, bagi guru yang ingin mengajar maupun bagi murid yang ingin belajar.Dapat memilih jadwal yang sesuai, guru dan materi yang diinginkan juga. Sangat Memudahkan dan fleksibel.</b></p>
                    <p class="overview"><b>Desi Aulia Pratama</b></p>
                </div>
                <div class="item carousel-item">
                    <div class="img-box"><img src="img/icon/personal.png" width="100px" height="auto"></div>
                    <p class="testimoni"><b>Barakallah fikum.</b></p>
                    <p class="overview"><b>Nur Muhammad Iskandar</b></p>
                </div>
                <div class="item carousel-item">
                    <div class="img-box"><img src="img/icon/personal.png" width="100px" height="auto"></div>
                    <p class="testimoni"><b>Awesome.</b></p>
                    <p class="overview"><b>Ii Saidin</b></p>
                </div>
                <div class="item carousel-item">
                    <div class="img-box"><img src="img/icon/personal.png" width="100px" height="auto"></div>
                    <p class="testimoni"><b>Lightweight, complete application with iqra and quran too.. thank you.</b></p>
                    <p class="overview"><b>Official Arcery Cirebon</b></p>
                </div>
                <div class="item carousel-item">
                    <div class="img-box"><img src="img/icon/personal.png" width="100px" height="auto"></div>
                    <p class="testimoni"><b>It's worth that people "love to travel and need prayer time reminders".</b></p>
                    <p class="overview"><b>Abi Wijaya</b></p>
                </div>
                <div class="item carousel-item">
                    <div class="img-box"><img src="img/icon/personal.png" width="100px" height="auto"></div>
                    <p class="testimoni"><b>Aplikasi belajar Ngaji terbaik di Indonesia. Semoga selalu mendapatkan keberkahan dari Allah.</b></p>
                    <p class="overview"><b>Al Trader</b></p>
                </div>
                <div class="item carousel-item">
                    <div class="img-box"><img src="img/icon/hijab.png" width="100px" height="auto"></div>
                    <p class="testimoni"><b>Sangat membantu dan memudahkan bagi mualaf seperti saya dalam belajar mengaji. Guru nya juga mempuni. Makasih banyak Maungaji, recomended!.</b></p>
                    <p class="overview"><b>Yuniar Fella Anggraeni</b></p>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>

<div class="container">
    <div id="tech-statement" class="text-center">
        <div class="vertical-heading">
            <h3><strong>FAQ</strong></h3>
        </div>
    </div>
    <div class="panel-group" id="faqAccordion">
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle question-toggle collapsed" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question0">
                 <h4 class="panel-title">
                    <strong>1. <i class="fa fa-money"></i> Berapa tarif rata-rata dari kursus mengaji ?</strong>
              </h4>
            </div>
            <div id="question0" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Jawaban</span></h5>
                     <p>Tarif rata-rata dari kursus mengaji adalah sebesar Rp 25.000</p>
                     <p>Tarif masing-masing guru juga akan bergantung pada :</p>
                     <p>Pengalaman mengajar dari guru mengaji lokasi kursus (online atau langsung) dan jarak yang di tempuh untuk ke tempat mengajar durasi dan frekuensi kursus.
                     99% guru kami menawarkan kursus gratis untuk 1 jam pertama.</p>
                     <p><strong>Segera cek tarif guru ngaji kami yang siap mengajar di dekat wilayah anda.</strong></p>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question1">
                 <h4 class="panel-title">
                    <strong>2. <i class="fa fa-lightbulb-o"></i> Kenapa harus mengambil kursus mengaji ?</strong>
                </h4>
            </div>
            <div id="question1" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Jawaban</span></h5>
                     <p>Karena mengaji adalah pondasi penting yang harus kita pupuk sejak dini dan terus kita dawamkan hingga tua nanti, menjadi pedoman hidup serta apabila di amalkan secara istiqomah mampu menjadikan amal jariyah di akhirat kelak.</p>
                     <p>Kursus mengaji dengan guru ngaji yang berpengalaman memberikan kamu pengalaman untuk belajar mengaji dengan pendekatan yang berbeda yang lebih efektif dan efisien.</p>
                     <p>Segera pilih guru ngaji kamu dan pilih kursus nya, apakah itu kursus secara langsung atau online, semua terserah kamu !</p>
                     <p>Fitur chat dengan guru ngaji memungkinkan untuk berkomunikasi langsung dengan Guru Ngaji kamu serta dapat memilih waktu dan mengatur kursus ngaji kamu dengan tenang.</p>
                     <p><strong>Cari guru ngaji sekarang hanya dengan 1 klik.</strong></p>    
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question2">
                 <h4 class="panel-title">
                    <strong>3. <i class="fa fa-laptop"></i> Apakah kami bisa kursus mengaji secara online ?</a></strong>
              </h4>
            </div>
            <div id="question2" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Jawaban</span></h5>
                     <p>Di Maungaji, 100% guru mengaji kami menawarkan <strong>kursus mengaji secara online</strong></p>
                     <p><strong>kursus mengaji secara online : </strong></p>
                     <p>Alat yang digunakan untuk dapat menunjang kursus online diserahkan antara kesepakatan guru ngaji dan murid, bisa menggunakan Skype, Zoom, Google Meet, Facetime, Video call WA, dll.</p>
                </div>
            </div>
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question3">
                 <h4 class="panel-title">
                    <strong>4. <i class="fa fa-graduation-cap"></i> Ada berapa guru yang tersedia untuk memberikan kursus mengaji ?</a></strong>
              </h4>
            </div>
            <div id="question3" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Jawaban</span></h5>
                     <p>Terdapat 124 guru mengaji dan akan terus bertambah yang menawarkan kursus mengaji dan siap membantu Anda.</p>
                     <p>Kamu bisa cek profil mereka dan pilih guru ngaji yang paling sesuai dengan kebutuhan dan keinginan Anda.</p>   
                     <p><strong>Pilih guru ngaji kamu di lebih dari 124 profil guru ngaji yang ada di aplikasi kami.</strong></p>  
                </div>
            </div>
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question4">
                 <h4 class="panel-title">
                    <strong>5. <i class="fa fa-pencil"></i> Berapa nilai rata-rata yang diberikan oleh para murid kepada para guru mengaji ?</a></strong>
              </h4>
            </div>
            <div id="question4" class="panel-collapse collapse" style="height: 0px;">
                <div class="panel-body">
                     <h5><span class="label label-primary">Jawaban</span></h5>
                     <p>Para murid memberikan nilai kepada guru mereka sebesar 5.0 dari skala 5.</p>
                     <p>Jika kamu memiliki masalah dengan kursus kamu, layanan customer service kami tersedia untuk dapat memberikan kamu solusi terbaik (via telepon atau via email dari Senin sampai Minggu).</p>   
                </div>
            </div>
        </div>
    </div>
    <!--/panel-group-->
</div>
<!--END FAQ-->

<div id="tech-statement" class="text-center">
    <div class="vertical-heading">
        <h3><strong>Maungaji Telah diliput Oleh</strong></h3>
    </div>
</div>

<section id="pers" style="background-color: #089ED1;">
    <div class="container">
        <div class="row">
            <div class="col-md-12 wow fadeIn">
                <div id="logo" class="text-center">
                        <div class="vertical-heading">
                            <ul>
                            <img src="<?php echo base_url('/img/icon/koran-tempo.png') ?>" class="img-responsive" width="200px" height="auto" alt="Koran Tempo" style="display: inline-block; margin-right: 15px;">
                            <img src="<?php echo base_url('/img/icon/go-muslim.png') ?>" class="img-responsive" width="200px" height="auto" alt="gomuslim" style="display: inline-block; margin-right: 15px;">
                            <img src="<?php echo base_url('/img/icon/republika.png') ?>" class="img-responsive" width="200px" height="auto" style="display: inline-block; margin-right: 15px;">
                            <img src="https://maungaji.co.id/img/icon/republika_ramadhan.png" class="img-responsive" width="200px" height="auto" alt="Republika" style="display: inline-block; margin-right: 15px;">
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--FOOTER START -->
<footer class="ct-footer">
  <div class="container">
    <ul class="ct-footer-list text-center-sm">
        <li>
            <h2 class="ct-footer-list-header">Info Perusahaan</h2>
            <ul><li><a href="">Tentang Kami</a></li>
                <li><a href="">Kebijakan Privasi</a></li>
                <li><a href="https://maungaji-2019.s3-ap-southeast-1.amazonaws.com/additional/tnc.html">Syarat dan Ketentuan</a></li>
                <li><a href="https://maungaji-2019.s3-ap-southeast-1.amazonaws.com/additional/faq.html">FAQ</a></li>
                <li><a href="">Karir</a></li>
                <li><a href="https://maungaji.co.id/artikel/">blog</a></li>
            </ul>
        </li>
        <li>
            <h2 class="ct-footer-list-header">Follow</h2>
            <ul><li style="color:white"><a href="https://www.instagram.com/maungaji/" target="_blank"><i class="fa fa-instagram"></i><span>&nbsp;maungaji</span></a></li>
            <li style="color:white"><a href="https://www.facebook.com/maungaji/" target="_blank"><i class="fa fa-facebook"></i><span>&nbsp; maungaji</span></a></li>
            <li style="color:white"><a href="https://twitter.com/MaungajiIndo" target="_blank"><i class="fa fa-twitter"></i><span>&nbsp; maungajiIndo</span></a></li>
            <li style="color:white"><a href="https://www.youtube.com/channel/UCIp6c79qyzU98400W253WYQ" target="_blank"><i class="fa fa-youtube"></i><span>&nbsp; maungaji official</span></a></li>
            </ul>
        </li>
        <li>
            <h2 class="ct-footer-list-header">Hubungi Kami</h2>
            <ul><li style="color:white"><a href="" target="_blank"><i class="fa fa-envelope-square"></i><span>&nbsp;support@maungaji.co.id</span></a></li>
            <li style="color:white"><a href="" target="_blank"><i class="fa fa-whatsapp"></i><span>&nbsp; +6281213419253</span></a></li>
            <li style="color:white"><a href="" target="_blank"><i class="fa fa-map-marker"></i><span>&nbsp; 
            Menara 165 lantai 4 Jl TB Simatupang kav1 Cilandak Jakarta Selatan.</span></a></li></ul>
        </li>
        <li>
            <h2 class="ct-footer-list-header">Download</h2>
            <ul>
                <li>
                    <div style="text-align: center;display: flex;flex-wrap: wrap;justify-content: center;">
                       <div class="button-download">
                            <a href="https://play.google.com/store/apps/details?id=com.maungaji" target="_blank">
                                <img src="<?php echo base_url('/img/icon/playstore.png') ?>" class="img-responsive">
                            </a>
                            <br>
                            <a href="https://apps.apple.com/id/app/maungaji/id1497420237" target="_blank">
                                <img src="<?php echo base_url('/img/icon/appstore.png') ?>" class="img-responsive">
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
</div>
<div class="bottomMenu jdcolor">
<p><h3 class="jdcolor" style="animation: blink 1s linear infinite;"><a class="jdcolor" href="https://www.jd.id/product/maungaji-tahsin-online-personal-12x-meetings_610939596/610940180.html">Belajar Ngaji dengan Beli Voucher Ngaji Di JD.ID</a></h3></p>
</div>
<div class="inner-center">
    <p>Copyright © 2020 PT Maungaji Teknologi Indonesia.&nbsp;<a href="">Privacy Policy</a></p>
</div>

</footer>
 <!--FOOTER END -->

<script src="<?php echo base_url('/js/calculate.js') ?>"></script>

<script src="https://maungaji.co.id/js/jquery.min.js"></script>

<!--Bootstrap JS -->
<script src="https://maungaji.co.id/js/bootstrap/bootstrap.min.js"></script>

<!--Owl Carousel JS -->
<script src="https://maungaji.co.id/js/owl-carousel/owl.carousel.min.js"></script>

<!--Waypoints -->
<script src="https://maungaji.co.id/js/waypoints/jquery.waypoints.min.js"></script>

<!--Responsive Tabs JS -->
<script src="https://maungaji.co.id/js/responsive-tabs/jquery.responsiveTabs.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>

<!--Gojek  -->
<script type="text/javascript" src="https://maungaji.co.id/js/slick.js"></script>

 <!--Isotope -->
<script src="https://maungaji.co.id/js/isotope/isotope.pkgd.min.js"></script>

 <!--Magnific Popup -->
<script src="https://maungaji.co.id/js/magnific-popup/jquery.magnific-popup.min.js"></script>

<!--Counter -->
<script src="https://maungaji.co.id/js/counter/jquery.counterup.min.js"></script>

<!--Easing -->
<script src="https://maungaji.co.id/js/easing/jquery.easing.1.3.min.js"></script>

<!--WOW JS -->
<script src="https://maungaji.co.id/js/wow/wow.min.js"></script>

<!--Custom JS -->
<script src="https://maungaji.co.id/js/script.js"></script>

<script async data-id="16951" src="https://cdn.widgetwhats.com/script.min.js"></script>

<script type="text/javascript">
  $(function() {
  $('.selectpicker').selectpicker();
});
</script>

<script>
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }
});
</script>

</body>

</html>
