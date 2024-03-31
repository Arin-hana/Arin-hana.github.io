
document.addEventListener('DOMContentLoaded', function(){
    var connect = new XMLHttpRequest();
    connect.open("GET", "../scripts/db_connect.php", true);
    connect.onload = function(){
        if (connect.status == 200){
            document.getElementById('test').innerHTML = connect.responseText;
            console.log("koneksi");
        }};
    connect.send();
});