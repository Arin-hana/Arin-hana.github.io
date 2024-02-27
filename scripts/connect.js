document.onload= function connectdb() {
    fetch("../server/db_connect.php")
    .then(Response=>Response.json())
    .then(data=>{
        document.getElementById("debug").innerHTML = data.message;
    })
    .catch(error=> document.getElementById("debug".innerHTML) = error)
}