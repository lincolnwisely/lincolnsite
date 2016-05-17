<!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"<?php
    if(isset($metaD) && !empty($metaD)) {
   echo $metaD;
    }
    else {
   echo "Personal website and portfolio for Lincoln Wisely, based in St. Louis, MO.";
    }  ?>"/>
    <title>
      <?php
      if(isset($title) && !empty($title)) {
      echo $title;
      }
      else {
      echo "Lincoln Wisely | Designer & Web Developer";
      }
      ?>
    </title>
  <!--   <link rel="stylesheet" href="css/normalize.css"> -->
  <!-- <link href="css/bootstrap.min.css" rel="stylesheet"> -->

  <link rel="stylesheet" href="css/normalize.css" type="text/css">
  <link rel="stylesheet" href="css/bootstrap.css">
  <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="css/style.css">
  <link rel='shortcut icon' href='img/favicon.ico' type='image/x-icon'/ >
   </head>
  <body>

  	<header class="main-header clearfix">
  		<div class="main-navigation">
        <ul class="main-nav">
          <li <?php if($active == 'home') {echo 'class="active"';} ?>><a href="index.php" >home</a></li>
          <li <?php if($active == 'about') {echo 'class="active"';} ?>><a href="about.php">about</a></li>
          <li <?php if($active == 'work') {echo 'class="active"';} ?>><a href="work.php">work</a></li>
          <li <?php if($active == 'contact') {echo 'class="active"';} ?>><a href="contact.php" >contact</a></li>
          <li><a href="http://lincolnwisely.com/blog">blog</a></li>


    		</ul>
      </div>
    <div class="background-image">
    <div class="header-text">
      <h1 >lincoln<br>wisely</h1>
  		</div>
    </div>
    </header>

    <div class="container">
