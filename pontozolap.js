function Szamol(){
    var ir1 = Number(document.getElementById('szovegsz').value);
    var ir2 = Number(document.getElementById('prez').value);
    var ir3 = Number(document.getElementById('tabla').value);
    var ir4 = Number(document.getElementById('adatb').value);
    var sz1 = Number(document.getElementById('tart').value);
    var sz2 = Number(document.getElementById('felep').value);
    var sz3 = Number(document.getElementById('szakny').value);
    var sz4 = Number(document.getElementById('komm').value);
    var osszsz = document.getElementById('szobeli').innerHTML = sz1+sz2+sz3+sz4;
    var osszir = document.getElementById('irasbeli').innerHTML = ir1+ir2+ir3+ir4;
    var ossz = document.getElementById('osszes').innerHTML = osszsz+osszir;
    var szazalek = document.getElementById('szaz').innerHTML = (100*ossz)/150;
    var erdemjegy = 0;
    var idez =0;
    var idezet =["Ez aztán szép munka volt!", "Nagyszerű!", "Lehetne jobb is, de nem rossz!", "Átmentél, nincs baj.", "Nyugi, van még pótérettségi."]
    
    if (szazalek>=80) {
        erdemjegy = 5;
        idez = 0;
    }
    if (szazalek>=60) {
        erdemjegy = 4;
        idez = 1;
    }
    if (szazalek>=40) {
        erdemjegy = 3;
        idez = 2;
    }
    if (szazalek>=25) {
        erdemjegy = 2;
        idez = 3;
    }
    else {
        erdemjegy = 1;
        idez = 4;
    }
    
    
    document.getElementById('eredmenyek').style.visibility = "visible";
    document.getElementById('jegy').innerHTML = erdemjegy + idezet[idez];
    
    return false;
}