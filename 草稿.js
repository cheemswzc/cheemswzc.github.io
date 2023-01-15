    function big_P(){
      var a = document.getElementById('img');
      a.style.height = '350px';
      a.style.width = '450px';
    }
    function normal_P(){
      var a = document.getElementById('img');
      a.style.height = '300px';
      a.style.width = '400px';
    }
    function big_P1(){
      var a = document.getElementById('img1');
      a.style.height = '350px';
      a.style.width = '450px';
    }
    function normal_P1(){
      var a = document.getElementById('img1');
      a.style.height = '300px';
      a.style.width = '400px';
    }
    function big_P2(){
      var a = document.getElementById('img2');
      a.style.height = '350px';
      a.style.width = '450px';
    }
    function normal_P2(){
      var a = document.getElementById('img2');
      a.style.height = '300px';
      a.style.width = '400px';
    }
        var output = document.getElementById('output_P');
 
    var randomNumber = Math.ceil(Math.random()*101);
 
    function checkNumber(){
      var input = document.getElementById('Input_P').value;
      if(input == randomNumber){
        output.innerHTML="You guessed right "+ ", "+ " it was "+ randomNumber;
        output.style.color="green";
      }
      else if(input>randomNumber && input<=100){
        output.innerHTML="You guessed too high";
      }
      else if(input<randomNumber && input>=0){
        output.innerHTML="You guessed too low";
      }
      else if(input<0){
        output.innerHTML="Too small, it has to be between 0 and 100";
      }
      else if(isNaN(input)){
        output.innerHTML="That's not a number!";
      }
      else{
        output.innerHTML="Too big, it has to be between 0 and 100";
      }
 
    }

    function reload(){
      location.reload();
    }

      let imgs=document.getElementsByTagName('img')
  for(let i=0;i<3;i++){
    imgs[i].onclick=function(){
      game(this,i)
       
    }
  }
  
  function game(src,i){
    let str=src.src;
    let user=document.getElementsByTagName('img')[3]
    user.src=str
     

    setTimeout(function (){
      let user=document.getElementsByTagName('img')[4]
      let imgSrc=['images1.jpg','images2.jpg','images3.jpg']
      let num = Math.floor(Math.random() * imgSrc.length)
      console.log(num)
      user.src=imgSrc[num]
      i=i*1

    let rs=document.getElementsByTagName('p')[0]
    if(i==0&&num==1 || i==1&&num==2
      || i==2&&num==0){
        rs.innerHTML="Congratulations on winning"
      }else if(i==num){
        rs.innerHTML="Deuce"
      }else{
        rs.innerHTML="Game failed"
         
      }
    },200)
    
  }

    function scrollWindow(){
    window.scrollTo({ top: 0, behavior: "smooth" });
}

        const container = document.getElementById("gameContainer");
        const squareArray = [];
        let nextMove = "X";

        //determine if game is over

        function gameOver(message) {
          document.getElementById("winner").innerHTML = message;
          container.style.display = "none";
          document.getElementById("gameOver").style.display = "block";
        }

        //determine if game is a tie
        function isDraw() {
          let shouldReturn = true;
          squareArray.forEach(({ state }) => {
            if (state == "") shouldReturn = false;
          });
          return shouldReturn;
        }

        //determine who won the game
        function wonGame() {
          const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
              squareArray[a].state !== "" &&
              squareArray[a].state === squareArray[b].state &&
              squareArray[a].state === squareArray[c].state
            ) {
              return true;
            }
          }
          return false;
        }

        class ClassSquare {
          constructor(element, index) {
            this.element = element;
            this.index = index;
            this.state = "";
          }
          clicked() {
            this.state = nextMove;
            this.element.classList.remove("notClicked");
            this.element.onclick = function () {
              return false;
            };
            this.element.querySelector("p").innerHTML = this.state;
            if (wonGame()) return gameOver("the winner is player " + this.state);
            if (isDraw()) return gameOver("it is a draw");
            nextMove == "X" ? (nextMove = "O") : (nextMove = "X");
          }
        }

        for (let index = 0; index < 9; index++) {
          const div = document.createElement("div");
          div.classList.add("square", "notClicked");
          const square = new ClassSquare(div, index);
          div.onclick = function () {
            square.clicked();
          };
          div.appendChild(document.createElement("p"));
          container.appendChild(div);
          squareArray.push(square);
        }
