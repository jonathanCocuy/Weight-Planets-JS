let comenzar = function(){

    let peso = document.getElementById("peso").value;
    let planeta = document.getElementById("opcion").value

        let marte = peso * 3.7 / 9.8;
        let luna = peso * 1.6 / 9.8;
        let jupiter = peso * 24.7 / 9.8;
        let saturno = peso * 10.4 / 9.8;
        let venus = peso * 8.8 / 9.8;
        let urano = peso * 8.8 / 9.8;
        let neptuno = peso * 11.1 / 9.8;
        let mercurio = peso * 3.7 / 9.8;


    if (planeta == 'Marte'){
        document.getElementById("resultado").innerHTML = (`Tu peso en marte es de: ${Math.round(marte)} kg`)

    }else if (planeta == 'Luna'){
        document.getElementById("resultado").innerHTML = (`Tu peso en la luna es de: ${Math.round(luna)} kg`)

    }else if (planeta == 'Jupiter'){
        document.getElementById("resultado").innerHTML = (`Tu peso en jupiter es de: ${Math.round(jupiter)} kg`)
    
    }else if (planeta == 'Saturno'){
        document.getElementById("resultado").innerHTML = (`Tu peso en saturno es de: ${Math.round(saturno)} kg`)

    }else if (planeta == 'Venus'){
        document.getElementById("resultado").innerHTML = (`Tu peso en venus es de: ${Math.round(venus)} kg`)

    }else if (planeta == 'Urano'){
        document.getElementById("resultado").innerHTML = (`Tu peso en urano es de: ${Math.round(urano)} kg`)

    }else if (planeta == 'Neptuno'){
        document.getElementById("resultado").innerHTML = (`Tu peso en neptuno es de: ${Math.round(neptuno)} kg`)

    }else if (planeta == 'Mercurio'){
        document.getElementById("resultado").innerHTML = (`Tu peso en mercurio es de: ${Math.round(mercurio)} kg`)

    }else{
        alert('De nuevo');
    }
}

let todos = function(){

    document.getElementById("1").innerHTML = 
    `Peso en la tierra ${peso} kg`;

    document.getElementById("2").innerHTML = 
        `Peso en marte ${Math.round(marte)} kg`;

    document.getElementById("3").innerHTML = 
        `Peso en la luna ${Math.round(luna)} kg`;

    document.getElementById("4").innerHTML = 
        `Peso en jupiter ${Math.round(jupiter)} kg`;

    document.getElementById("5").innerHTML = 
        `Peso en la saturno ${Math.round(saturno)} kg`;

    document.getElementById("6").innerHTML = 
        `Peso en la venus ${Math.round(venus)} kg`;

    document.getElementById("7").innerHTML = 
        `Peso en la urano ${Math.round(urano)} kg`;

    document.getElementById("8").innerHTML = 
        `Peso en la neptuno ${Math.round(neptuno)} kg`;

    document.getElementById("9").innerHTML = 
        `Peso en la mercurio ${Math.round(mercurio)} kg`;
}