<?php  
$connect = mysqli_connect('localhost','root','',"portfolio_sekolah");
if (!$connect) {
  die('Could not connect: ' . mysqli_error($connect));
}
mysqli_query($connect, "SELECT * FROM user");
echo "connection success";
?>