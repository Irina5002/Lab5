/*const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]*/
var step = 0;
var b = false;

var allblock = document.getElementsByClassName('block');

document.getElementById('main').onclick = function (Event)
{
    if (Event.target.className == 'block' && b == false)
    {
        if (step % 2 == 0 && Event.target.innerHTML == '')
        {
            Event.target.innerHTML = 'о';
            step++;
		}
		check();
	}
}
function comp()
{
    if (step % 2 == 1 && b == false)
    {
        while (true)
        {
            var rand = Math.round(Math.random() * (8 - 0) + 0);
            if (allblock[rand].innerHTML == '')
            {
                allblock[rand].innerHTML = 'x';
                step++;
                check();
                break;
            } 
        }
    }
    
}

function check(){
	var a = 0;
	//Компьютер
	if (allblock[0].innerHTML == 'x' && allblock[1].innerHTML == 'x' && allblock[2].innerHTML == 'x') {
		alert ('Победил компьютер');
		a = 1;
		b = true;
	}
	else if (allblock[0].innerHTML == 'x' && allblock[3].innerHTML == 'x' && allblock[6].innerHTML == 'x'){
		 alert ('Победил компьютер');
		 a = 1;
		 b = true;
	}
	else if (allblock[0].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[8].innerHTML == 'x') {
		alert ('Победил компьютер');
		a = 1;
		b = true;
	}
	else if (allblock[3].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[5].innerHTML == 'x') {
		alert ('Победил компьютер');
		a = 1;
		b = true;
	}	
	else if (allblock[6].innerHTML == 'x' && allblock[7].innerHTML == 'x' && allblock[8].innerHTML == 'x') {
		alert ('Победил компьютер');
		a = 1;
		b = true;
	}
	else if (allblock[1].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[7].innerHTML == 'x') {
		alert ('Победил компьютер');
		a = 1;
		b = true;
	}
	else if (allblock[2].innerHTML == 'x' && allblock[5].innerHTML == 'x' && allblock[8].innerHTML == 'x') {
		alert ('Победил компьютер');
		a = 1;
		b = true;
	}	
	else if (allblock[6].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[2].innerHTML == 'x') {
		alert ('Победил компьютер');
		a = 1;
		b = true;
	}	
	//Игрок
	else if (allblock[0].innerHTML == 'о' && allblock[1].innerHTML == 'о' && allblock[2].innerHTML == 'о') {
		alert ('Победил игрок');
		a = 1;
		b = true;
	}
	else if (allblock[0].innerHTML == 'о' && allblock[3].innerHTML == 'о' && allblock[6].innerHTML == 'о') {
		alert ('Победил игрок');
		a = 1;
	}
	else if (allblock[0].innerHTML == 'о' && allblock[4].innerHTML == 'о' && allblock[8].innerHTML == 'о') {
		alert ('Победил игрок');
		a = 1;
		b = true;
	}
	else if (allblock[3].innerHTML == 'о' && allblock[4].innerHTML == 'о' && allblock[5].innerHTML == 'о') {
		alert ('Победил игрок');
		a = 1;
		b = true;
	}
	else if (allblock[6].innerHTML == 'о' && allblock[7].innerHTML == 'о' && allblock[8].innerHTML == 'о') {
		alert ('Победил игрок');
		a = 1;
		b = true;
	}
	else if (allblock[1].innerHTML == 'о' && allblock[4].innerHTML == 'о' && allblock[7].innerHTML == 'о') {
		alert ('Победил игрок');
		a = 1;
		b = true;
	}
	else if (allblock[2].innerHTML == 'о' && allblock[5].innerHTML == 'о' && allblock[8].innerHTML == 'о') {
		alert ('Победил игрок');
		a = 1;
		b = true;
	}
	else if (allblock[6].innerHTML == 'о' && allblock[4].innerHTML == 'о' && allblock[2].innerHTML == 'о') {
		alert ('Победил игрок');
		a = 1;
		b = true;
	}
	else if (a == 0 && allblock[0].innerHTML != '' && allblock[1].innerHTML != '' && allblock[3].innerHTML != '' && allblock[4].innerHTML != '' && allblock[5].innerHTML != '' && allblock[6].innerHTML != '' && allblock[7].innerHTML != '' && allblock[8].innerHTML != '' && allblock[2].innerHTML != '') {
		alert ('Ничья');
	}
}
function startGame()
{
    for (var i=0; i<9; i++)
    {
        allblock[i].innerHTML = ''; 
        b = false;
        step = 0;
    }
}
