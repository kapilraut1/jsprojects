const choose= document.getElementById("choose");
const declare=document.getElementById("declare");



let random = Math.random();
console.log(random);

let data = prompt(`Choose "S" or "W" or "G"`);
let comp;
if(random<0.33){
comp="S";
}
else if (random<0.66){
    comp="W";
}
else{
    comp="G";
}
choose.innerText=`Your choice is ${data} and computer choice is ${comp};`
if(data===comp){
declare.innerHTML=`You have tied with computer`;
console.log("Tied")
}
else if(data=="S"&& comp=="W"||data=="W"&& comp=="G"||data=="G"&& comp=="S"){
    declare.innerHTML=`You have won`;
    console.log("Won")

}
else{
    declare.innerHTML=`You have lost`;
    console.log("Lost")

}