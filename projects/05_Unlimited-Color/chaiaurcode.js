const randomcolor=function () {
     const hex= '0123456789ABCDEF ';
     let color = '#';
     for (let index = 0; index < 6; index++) {
          color+=hex[Math.floor(Math.random()*16)];            
     }
     return color;
};

let intrvalId
const startchangingcolor=function () {
     if(!intrvalId){
          intrvalId=setInterval(changeBgColor,1000);
     }
     function changeBgColor() {
          document.body.style.backgroundColor=randomcolor();  
     }  
}
const stopchangingcolor=function () {
     clearInterval(intrvalId)
     intrvalId=null;
}

document.querySelector(`#start`).addEventListener(`click`,startchangingcolor)

document.querySelector(`#stop`).addEventListener(`click`,stopchangingcolor)