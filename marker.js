let expantion = document.getElementsByClassName('underline-before');

let expantionswitch = ["off","off"];

window.onscroll = function(){

for(let i = 0,len = expantion.length;i < len;i++){

let ex_clientRect = expantion[i].getBoundingClientRect();

let wh = window.innerHeight;

if(wh > ex_clientRect.top + 200 && expantionswitch[i] === "off") {

expantion[i].classList.add('underline-after');

expantionswitch[i] = "on";

}
}
}
