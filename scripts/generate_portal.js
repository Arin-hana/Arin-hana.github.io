document.addEventListener("DOMContentLoaded", function () {
    var portal_data = [
        ["els", "Esemkasa Learning System adalah portal pembelajaran siswa. Materi dan juga tugas siswa dapat di akses pada portal ini."],
        ["pilkasa", "Sebuah portal polling pemilihan ketua OSIS SMKN 1 Banyuwangi berbasis online. Guru dan juga siswa dapat melakukan polling online"],
        ["lsp", "Portal Lembaga Sertifikasi Profesi SMKN 1 Banyuwangi. Berbagai informasi mengenai sertifikasi dapat di akses di sini."],
        ["Kelulusan", "Sebuah portal informasi kelulusan siswa SMKN 1 Banyuwangi."],
        ["BKK", "BKK atau biasa di sebut Bursa Kerja Khusus adalah portal bagi alumni SMKN 1 Banyuwangi untuk mendapatkan informasi mengenai lowongan kerja"],
        ["Tracer Study", "Portal penelusuran tamatan siswa SMKN 1 Banyuwangi"],
    ];
    function splitArray(arr, columns) {
        var result = [];
        for (var i = 0; i < arr.length; i += columns) {
            result.push(arr.slice(i, i + columns));
        }
        return result;
    }

    // Splitting portal_data into columns and rows
    var columns = 3;
    var o = 0;
    var portal_data_columns = splitArray(portal_data, columns);
    // Generating HTML markup
    var container = document.getElementById("portal");
    portal_data_columns.forEach(function(rowData) {
        var columnDiv = document.createElement("div");
        columnDiv.classList.add("row", "pb-4", "ps-2");
        rowData.forEach(function(item) {
            o+=1;
            var button = "<a class='btn card_button background_secondary d-flex align-items-center justify-content-center text-capitalize stretched-link' id='card"+o+"' href=''><div class='col color_black'>ke halaman</div><div class='col-2'><img src='./materials/textures/icons/keyboard_tab.svg'></div></a>";
            var col = document.createElement("div");
            col.classList.add("col-4");
            col.innerHTML = "<div class='card card_style'><div class='card-body card_body'><p class='card-title card_title color_primary bold text-uppercase'>"+item[0]+"</p><p class='card-text card_text color_black'>"+item[1]+"</p>"+button+"</div></div>";
            columnDiv.appendChild(col);
            
        });
        container.appendChild(columnDiv);
    });
    
    document.getElementById("card1").href = "#";
    document.getElementById("card2").href = "##";
    document.getElementById("card3").href = "###";
    document.getElementById("card4").href = "####";
    document.getElementById("card5").href = "#####";
    document.getElementById("card6").href = "######";

});