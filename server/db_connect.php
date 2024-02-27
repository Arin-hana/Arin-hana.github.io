<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php  
$connect = mysqli_connect('localhost','root','',"portfolio_sekolah");
if (!$connect) {
  die('Could not connect: ' . mysqli_error($connect));
}
echo ("connection success");
?>
</body>
</html>