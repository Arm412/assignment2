function display_name(name){
    document.getElementById('error_text1').style.display = 'none';
    if(name.length==0){
        document.getElementById('error_text1').style.display = 'inline';
    }
    var header = document.getElementById('show_name')
    header.style.display = 'inline';
    header.innerHTML = name;
    return;
}

function change_background(color){
    document.getElementById('error_text2').style.display = 'none';
    if(color.length == 0){
        document.getElementById('error_text2').style.display = 'inline';
    }
    document.getElementById('colors').style.backgroundColor = color;
    return;
}

function isItAHoverboard(answer){
    document.getElementById('hidden_text_y').style.display = 'none';
    document.getElementById('hidden_text_n').style.display = 'none';
    document.getElementById('error_text').style.display = 'none';
    if(answer == "yes"){
        document.getElementById('hidden_text_y').style.display = 'inline';
    } else if(answer == "no"){
        document.getElementById('hidden_text_n').style.display = 'inline';
    } else {
        document.getElementById('error_text').style.display = 'inline';
    }
}

function disappear(){
    document.getElementById('formHolder').style.display = 'none';
    appear();
}

function appear(){
    document.getElementById('successDiv').style.display = 'block'
}

$(document).ready(function(){
    $('#myForm1').click(function (e){
        e.preventDefault();
    })
})