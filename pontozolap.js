function szamol(){
    var ir1 = 0, ir2 = 0, ir3 = 0, ir4 = 0, sz1 = 0, sz2 = 0, sz3 = 0, sz4 = 0;
    ir1 = parseFloat(document.getElementById('szovegsz').value);
    ir2 = parseFloat(document.getElementById('prez').value);
    ir3 = parseFloat(document.getElementById('tabla').value);
    ir4 = parseFloat(document.getElementById('adatb').value);
    sz1 = parseFloat(document.getElementById('tart').value);
    sz2 = parseFloat(document.getElementById('felep').value);
    sz3 = parseFloat(document.getElementById('szakny').value);
    sz4 = parseFloat(document.getElementById('komm').value);
    var osszsz= sz1+sz2+sz3+sz4;
    document.getElementById('szobeli').innerHTML = osszsz + " pont";
    var osszir = ir1+ir2+ir3+ir4;
    document.getElementById('irasbeli').innerHTML = osszir + " pont";
    var ossz = osszsz+osszir;
    document.getElementById('osszes').innerHTML = ossz + " pont";
    var szazalek = (100*ossz)/150;
    document.getElementById('szaz').innerHTML = szazalek + "%";
    var erdemjegy = 0;
    var idezet = [", Ha ezt látod, akkor a program hibásan futott le.", ", Elégtelen. Nyugi, van még pótérettségi.", ", Elégséges. Átmentél, nincs baj.", ", Közepes. Lehetne jobb is, de nem rossz!", ", Jó. Nagyszerű!", ", Kitűnő. Ez aztán szép munka volt!"];
    
    if (szazalek>=80 && szazalek<=100) {
        erdemjegy = 5;
    }
    if (szazalek>=60 && szazalek<80) {
        erdemjegy = 4;
    }
    if (szazalek>=40 && szazalek<60) {
        erdemjegy = 3;
    }
    if (szazalek>=25 && szazalek<40) {
        erdemjegy = 2;
    }
    if (szazalek>=0 && szazalek<25) {
        erdemjegy = 1;
    }
    
    document.getElementById('eredmenyek').style.visibility = "visible";
    document.getElementById('jegy').innerHTML = erdemjegy + idezet[erdemjegy];
    
    return false;
    e.preventDefault();
}
