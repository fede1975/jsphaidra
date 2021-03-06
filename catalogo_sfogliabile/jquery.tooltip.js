<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Demo Gallery Semplice jQuery</title>
<script src="../jquery.js" type="text/javascript"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/jquery-ui.js" type="text/javascript"></script>
<script src="jquery.tooltip.js" type="text/javascript"></script>

<script type="text/javascript">
$(document).ready(function() {
        $('.list a').click(function(){
        var  link = $(this).attr('href'); //crea una variabile link = all'src su cui ho cliccato
        $('.big-img img').fadeOut(function() {
		$(this).attr('src', link ).fadeIn();
		})
        return false;
        });
		$('body a').tooltip({ 
		track: true, 
		delay: 0, 
		showURL: false, 
		showBody: " - ", 
		fade: 250 
});
});

</script>
<style type="text/css">
img {
	border:0;
	}
ul {
	list-style:none;
	margin:0;
	padding:0;
	border:0;
	}
ul li {
	display:inline;
	}
	
#tooltip {
	position: absolute;
	z-index: 3000;
	border: 1px solid #999;
	background-color: #eee;
	padding: 5px;
	opacity: 0.85;
	font-family:Verdana, Geneva, sans-serif;
	font-size:10px;
}
#tooltip h3, #tooltip div { margin: 0; }
</style>
</head>

<body>

<div class="big-img">
	<img src="01.jpg" alt="immagine" style="display: inline;" height="400" width="400">
</div>

<div class="list">
	<ul>
		<li><a href="01.jpg"><img src="01-m.jpg" alt="immagine1" height="40" width="40"></a></li>
		<li><a href="02.jpg"><img src="02-m.jpg" alt="immagine2" height="40" width="40"></a></li>
	</ul>
</div>



<div id="tooltip" style="display: none; left: 106px; right: auto; top: 431px;"><h3>immagine2</h3><div class="body" style="display: none;"></div><div class="url" style="display: none;"></div></div></body></html>