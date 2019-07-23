window.onload = init;

function init() {
  var kalimat = prompt("Masukan Kalimat : ");
  var Desimal, Binner, Heksa, Okta, i, nilai, tampung;
  Desimal = [];
  Binner = [];
  Heksa = [];
  Okta = [];
  
  var panjang = kalimat.length;
  
  for (i=0; i<panjang; i++) {
    //ambil desimal
    nilai = kalimat.charCodeAt(i);
    Desimal.push(nilai);
    
    //ambil biner
    tampung = parseInt(nilai, 10).toString(2);
    Binner.push(tampung);
    
    //ambil heksa
    tampung = parseInt(nilai, 10).toString(16);
    Heksa.push(tampung);
    
    //ambil okta
    tampung = parseInt(nilai, 10).toString(8);
    Okta.push(tampung);
  }
  
  var inputannya = document.getElementById("info");
  inputannya.innerHTML = kalimat;
  
  var converBiner = document.getElementById("biner");
  converBiner.innerHTML = Binner.join(" | ");
  
  var converHexa = document.getElementById("heksa");
  converHexa.innerHTML = Heksa.join(" | ");
  
  var converOcta = document.getElementById("okta");
  converOcta.innerHTML = Okta.join(" | ");
  
  var converDesimal = document.getElementById("desimal");
  converDesimal.innerHTML = Desimal.join(" | ");
  
  }
