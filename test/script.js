document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'example.php', true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            document.getElementById('result').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
