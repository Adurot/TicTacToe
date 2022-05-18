

const personFactory = (name, score) => {
    const sayHello = () => console.log('hello!');
    return { name, score, sayHello };
};
document.getElementById("grid").style.backgroundColor = "black";
document.getElementById("grid").style.width = "156px";


const player1 = personFactory('Player One', 27);

console.log(player1.name);

player1.sayHello();

console.log(player1.name + " has won " + player1.score + " times!");

const player2 = personFactory('Second Player', 15);

console.log(player2.name);
player2.sayHello();

console.log(player2.name + " has won " + player2.score + " times!");

player1.name = prompt("Enter Player 1's name", "<name goes here>");


player2.name = prompt("Enter Player 2's name", "<name goes here>");



const btn = [];
const spot = [];
btn[0] = document.createElement("button");
btn[0].innerHTML = "Click Me";
//document.body.appendChild(btn[0]);
console.log(document.getElementById("grid"));
var pmove = [];
var tes = 3;
let turn = 0;
for (i = 0; i < 9; i++) {
    spot[i] = document.createElement("div");
    //spot[i].setAttribute('class',"cool");
    //document.getElementById("grid").appendChild(spot[i]);
    btn[i] = document.createElement("button");
    pmove[i] = 72 + i;
    pmove[5] = 23;
    document.getElementById("grid").appendChild(btn[i]);

    btn[i].setAttribute("id", i);

    document.getElementById(i).onclick = function (e) {
        if (e.target.innerHTML == "X" || e.target.innerHTML == "0") {
            alert("That spot has already been chosen!")
        }
        else {
            turn++;

            if (turn % 2 == 1) {
                e.target.innerHTML = "X";
                pmove[e.target.id] = "X";
            }
            else {
                e.target.innerHTML = "0";
                pmove[e.target.id] = "0";
            }

        }
        //btn[i].innerHTML = pmove[i];
        stat.win();
        tes = 7;
        //pmove1.cli();
        console.log(pmove[5]);
        for (j = 0; j < 9; j++) {
            console.log(pmove[j])
        }
    };
    btn[i].style.width = '50px'; // setting the width to 200px
    btn[i].style.height = '50px'; // setting the height to 200px
    btn[i].addEventListener('click', function handleClick(i) {
        var a = i;
        //btn[a-1].textContent= 'Button clicked';
    });
    pmove[1] = 'x';

}
function e(id) {
    return document.getElemenetby(id);
}

console.log('test' + btn[3].id)

const pmovef = (value, integer) => {
    const sayHello = () => console.log('hello!');

    const cli = () =>
        console.log('hello!');
    //pmove[integer]="X";
};

const pmove1 = pmovef(1, 1);

const stat = (() => {
    function win() {
        if (pmove[0] == pmove[1] && pmove[2] == pmove[1]||
            pmove[3] == pmove[4] && pmove[4] == pmove[5]||
            pmove[6] == pmove[7] && pmove[7] == pmove[8]||
            pmove[0] == pmove[4] && pmove[4] == pmove[8]||
            pmove[0] == pmove[3] && pmove[3] == pmove[6]||
            pmove[1] == pmove[4] && pmove[4] == pmove[7]||
            pmove[2] == pmove[5] && pmove[5] == pmove[8]||
            pmove[0] == pmove[1] && pmove[2] == pmove[1]||
            pmove[0] == pmove[1] && pmove[2] == pmove[1]
            
            
            ) {
            if (turn % 2 == 0) {
                alert(player2.name+" is the winner!")
            } else {
                alert(player1.name+" is the winner!")
            }
        }
        else { console.log("no winner yet!") }
    }
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        win,
        add,
        sub,
        mul,
        div,
    };
})();
stat.win();