function display_name(name){
    document.getElementById('errorText1').style.display = 'none';
    if(name.length==0){
        document.getElementById('errorText1').style.display = 'inline';
    }
    var header = document.getElementById('show_name')
    header.style.display = 'inline';
    header.innerHTML = name;
    return;
}

function change_background(color){
    document.getElementById('errorText2').style.display = 'none';
    if(color.length == 0){
        document.getElementById('errorText2').style.display = 'inline';
    }
    document.getElementById('colors').style.backgroundColor = color;
    return;
}

function isItAHoverboard(answer){
    document.getElementById('hiddenTextY').style.display = 'none';
    document.getElementById('hiddenTextN').style.display = 'none';
    document.getElementById('errorText').style.display = 'none';
    if(answer == "yes"){
        document.getElementById('hiddenTextY').style.display = 'inline';
    } else if(answer == "no"){
        document.getElementById('hiddenTextN').style.display = 'inline';
    } else {
        document.getElementById('errorText').style.display = 'inline';
    }
}

function disappear(name, color, answer){
    a_ok=0;
    if(name.length == 0){
        display_name(name);
        a_ok=1;
    }
    if(color.length == 0){
        change_background(color);
        a_ok=1;
    }
    if(answer.length == 0){
        isItAHoverboard(answer);
        a_ok=1;
    }
    if(a_ok==1){
        return;
    }
    document.getElementById('formHolder').style.display = 'none';
    appear(name, color, answer);
}

function appear(name, color, answer){
    if(answer == 'no'){
        answer = 'Not a Hover board';
    } else {
        answer = 'Hover board'
    }
    document.getElementById('successDiv').style.display = 'block';
    document.getElementById('showInput').innerHTML = 'Name: ' + name + '<br>Color: ' + color + '<br>Answer: ' + answer;
}

$(document).ready(function(){
    $('#myForm1').click(function (e){
        e.preventDefault();
    })
})