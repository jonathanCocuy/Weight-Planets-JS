    let peso = getElementById("peso").innerHTML;
    let planeta = prompt('Ingresa el planeta que quieres saber tu peso, entre: marte, luna, jupiter, saturno, venus, urano. neptuno y mercurio');

        let marte = peso * 3.7 / 9.8;
        let luna = peso * 1.6 / 9.8;
        let jupiter = peso * 24.7 / 9.8;
        let saturno = peso * 10.4 / 9.8;
        let venus = peso * 8.8 / 9.8;
        let urano = peso * 8.8 / 9.8;
        let neptuno = peso * 11.1 / 9.8;
        let mercurio = peso * 3.7 / 9.8;

    if (planeta == 'marte'){
        alert(`En la tierra tu peso es de ${peso} kg - tu peso en marte es ${Math.round(marte)} kg`)

    }else if (planeta == 'luna'){
        alert(`En la tierra tu peso es de ${peso} kg - tu peso en la luna es ${Math.round(luna)} kg`)

    }else if (planeta == 'jupiter'){
        alert(`En la tierra tu peso es de ${peso} kg - tu peso en jupiter es ${Math.round(jupiter)} kg`)
    
    }else if (planeta == 'saturno'){
        alert(`En la tierra tu peso es de ${peso} kg - tu peso en jupiter es ${Math.round(saturno)} kg`)

    }else if (planeta == 'venus'){
        alert(`En la tierra tu peso es de ${peso} kg - tu peso en venus es ${Math.round(venus)} kg`)

    }else if (planeta == 'urano'){
        alert(`En la tierra tu peso es de ${peso} kg - tu peso en urano es ${Math.round(urano)} kg`)

    }else if (planeta == 'neptuno'){
        alert(`En la tierra tu peso es de ${peso} kg - tu peso en neptuno es ${Math.round(neptuno)} kg`)

    }else if (planeta == 'mercurio'){
        alert(`En la tierra tu peso es de ${peso} kg - tu peso en mercurio es ${Math.round(mercurio)} kg`)

    }else if (planeta == ''){
        alert('No es válido')

    }else{ 

    }

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

