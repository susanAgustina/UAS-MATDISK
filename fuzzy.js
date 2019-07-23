window.onload = init;

function init() {
    var Umur = prompt("Masukan Usia : ", 0);
    var nilai1, nilai2, nilai3, nilai4;
    var Muda        = [0, 25];
    var Parobaya    = [18, 42];
    var Tua         = [35, 70];
    var nilaiTengah = ((Parobaya[1] - Parobaya[0]) / 2) + Parobaya[0];

    // Linier turun
    if (Umur <= Muda[0]) {
        nilai1 = 1;
    } else if ((Umur > Muda[0]) && (Umur < Muda[1])) {
        nilai1 = (Muda[1] - Umur) / (Muda[1] - Muda[0]);
    } else if (Umur >= Muda[1]) {
        nilai1 = 0.00;
    }

    // Segitiga fuzzy, kombinasi linier naik (terhadap muda) dan linier turun (terhadap tua)
    if ((Umur <= Parobaya[0]) || (Umur > Parobaya[1])) {
        nilai2,
        nilai3 = 0.00;
    }
    else if ((Umur >= Parobaya[0]) && (Umur <= nilaiTengah)) {
        nilai2 = ((Umur - Parobaya[0]) / (nilaiTengah - Parobaya[0]));
    } else if ((Umur >= nilaiTengah) && (Umur <= Parobaya[1])) {
        nilai3 = (Parobaya[1] - Umur) / (Parobaya[1] - nilaiTengah);
    }

    // linier naik
    if (Umur <= Tua[0]) {
        nilai4 = 0.00;
    } else if ((Umur >= Tua[0]) && (Umur < Tua[1])) {
        nilai4 = (Umur - Tua[0]) / (Tua[1] - Tua[0]);
    } else if (Umur >= Tua[1]) {
        nilai4 = 1.00;
    }

    // Mencetak ke layar
    var inputan1 = document.getElementById("info");
    inputan1.innerHTML = Umur + " Tahun";


    // *Mencetak ke layar Umur Muda
    var tingkatMuda = document.getElementById("muda");
    tingkatMuda.innerHTML = nilai1.toFixed(2);

    // *Mencetak ke layar Umur Parobaya 

    // ngilangin undefine pada Umur Parobaya terhadap muda
    if (Umur > Parobaya[0] && Umur < nilaiTengah) {
        var tingkatParobaya1 = document.getElementById("parobaya1");
        tingkatParobaya1.innerHTML = nilai2.toFixed(2);
    }
    // ngilangin undefine pada Umur Parobaya terhadap tua
    if (Umur > nilaiTengah) {
        var tingkatParobaya2 = document.getElementById("parobaya2");
        tingkatParobaya2.innerHTML = nilai3.toFixed(2);
    }
    // munculin statement Tingkat Parobaya terhadap muda
    if (Umur <= Parobaya[0]) {
        var tingkatParobaya1 = document.getElementById("parobaya1");
        tingkatParobaya1.innerHTML = 0.00.toFixed(2);
    }
    // munculin statement Tingkat Parobaya terhadap tua
    if (Umur < Parobaya[0]) {
        var tingkatParobaya2 = document.getElementById("parobaya2");
        tingkatParobaya2.innerHTML = 0.00.toFixed(2);
    }
    // munculin statement Tingkat Parobaya terhadap tua
    if (Umur == nilaiTengah) {
        var tingkatParobaya2 = document.getElementById("parobaya2");
        tingkatParobaya2.innerHTML = 1.00.toFixed(2);
    }
    
    // ngilangin undefine pada nilai tengah (titik puncak segitia)
    if (Umur == nilaiTengah) {
        var tingkatParobaya2 = document.getElementById("parobaya1");
        tingkatParobaya2.innerHTML = 1.00.toFixed(2);
    }

    // *Mencetak ke layar Umur Tua
    var tingkatTua = document.getElementById("tua");
    tingkatTua.innerHTML = nilai4.toFixed(2);

}
  
