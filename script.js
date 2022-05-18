const personFactory = (name, score) => {
    const sayHello = () => console.log('hello!');
    return { name, score, sayHello };
  };
  
  const player1 = personFactory('Player One', 27);
  
  console.log(player1.name); 
  
  player1.sayHello();

  console.log(player1.name+ " has won " + player1.score + " times!");

  const player2 = personFactory('Second Player', 15);
  
  console.log(player2.name); 
  player2.sayHello(); 

  console.log(player2.name+ " has won " + player2.score + " times!");


  const btn = [];
  const spot= [];
  btn[0] = document.createElement("button");
  btn[0].innerHTML = "Click Me";
  //document.body.appendChild(btn[0]);
  console.log( document.getElementById("grid"));
  pmove=[];

  for(i=0;i<9;i++){
    spot[i] = document.createElement("div");
//spot[i].setAttribute('class',"cool");
//document.getElementById("grid").appendChild(spot[i]);
  btn[i] = document.createElement("button");
  pmove[i]=i+i;
btn[i].innerHTML = pmove[i];
document.getElementById("grid").appendChild(btn[i]);
btn[i].style.width = '50px'; // setting the width to 200px
btn[i].style.height = '50px'; // setting the height to 200px
}