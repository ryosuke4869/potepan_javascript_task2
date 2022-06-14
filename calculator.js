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

function ope_click(operator){
    var operator = operator.innerHTML;
    var display_ope = display.innerHTML.slice(0,-1);
    let slice = display.innerHTML.slice(-1);
  
    if (slice != "+" && slice != "-"&& slice != "*"&& slice != "/") { //+,-,*,/のいずれかが文字列の最後ではない時に処理
      display.innerHTML += operator;//displayにdisplayに入力されているものと演算子を加える
    }else if (slice == "+" || slice == "-" || slice == "*" || slice == "/"){ //+,-,*,/のいずれかが文字列の最後だった際
      display.innerHTML = display_ope + operator; //演算子を上書き
    } else {
      //処理なし
    }}