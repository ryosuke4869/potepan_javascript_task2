'use strict';
let display = document.getElementById("display");

function btn_click(target){
  let number = target.innerHTML; 
  if (number == "=") {
    display.innerHTML = eval(display.innerHTML) //displayに映っている数字で演算
    } else if(number == "AC") {
      display.innerHTML = "0" //AC押した際にdisplayを0に
    } else {
      if (display.innerHTML == "0") {
        display.innerHTML = number //displayが0表示の時、押したbtnを表示
      } else {
        display.innerHTML += number //displayの数字+numberをdisplayに加える
      }
    }
}


