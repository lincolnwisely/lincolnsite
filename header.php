
<!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
    <meta name="viewport" content="<?php

if(isset($metaD) && !empty($metaD)) { 
   echo $metaD; 
} 
else { 
   echo "Some meta description"; 
} ?>">
    <title><?php

	if(isset($title) && !empty($title)) {

	echo $title;

	}

	else {

	echo "Default title tag";

	}

	?>
      </title>
  <!--   <link rel="stylesheet" href="css/normalize.css"> -->
  <!-- <link href="css/bootstrap.min.css" rel="stylesheet"> -->
  <link rel="stylesheet" href="css/style.css">
   <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'
   >
   <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet' type='text/css'>
   <script src="jquery.js"></script>

  </head>
  <body>

  	<header>
  		<div class="background-image">
  		<nav>
  			<p><a href="contact.html">contact</a></p>
  			<p><a href="work.html">work</a></p>
  			<p><a href="about.html">about</a></p>
        <p><a href="index.html" class="activepage">home</a></p>
  		</nav>
    <div class="header-text">
      <h1 >lincoln wisely</h1>
  		</div>
    </header>
