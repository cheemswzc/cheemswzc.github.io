alert(Date())

function img(){
        document.getElementById("Cheems/Doge").src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDekUqahrCTLtixk24KsORMiFX0be1Tc7tQ&usqp=CAU';
}

function Cheems(){
        var textChange = document.getElementById('First');
        textChange.innerHTML = 'Doge';
}

function Doge(){
        var a = document.getElementById('Second');
                a.style.backgroundColor = 'green';
                a.style.textAlign = 'center';
                a.style.fontFamily = 'Arial';
}

function temp(f){
        return(f-32)*5/9;
}

function temp2(){
        var b = document.getElementById('temp');
        b.innerHTML = temp(20);
}

function cal(){
        var one = parseFloat(prompt('give me a number'));
        var two = parseFloat(prompt('give me an other number then I will add them together'));
        alert(one + two);
}

function nameee(){
        var three = prompt('First Name');
        var four = prompt('Last Name');
        var str =('Nice to meet you ' + three +' '+ four)
        alert(str);
}


