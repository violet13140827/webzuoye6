function chat(){

    creatDia();

}

// window.ontouchmove=function(e){   /*禁止页面滚动*///但是没有用
//         e.preventDefault && e.preventDefault();
//         e.returnValue=false;
//         e.stopPropagation && e.stopPropagation();
//         return false;
// }

count=2;
function creatDia(){
    var dia=document.createElement("img");dia.src="./img/dialog/d"+count+".png";dia.style.position="absolute";
    dia.style.left="10px";dia.style.top="30px";
    dia.style.animation="dias 3s ease";
    document.body.appendChild(dia);

    dia.addEventListener("animationend",function(){
        document.body.removeChild(this);
    },false);

    if(count==5){
        //document.body.appendChild(startbt);
        return 0; 
    }
    count++;
    window.setTimeout(creatDia,3000);
}

//play代码
function ww(){
    alert("余下功能加急赶制中！");
}

