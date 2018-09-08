//实现左侧列表动画
var icons = document.getElementsByClassName('icon-list-item');
var iconsContent = document.getElementsByClassName('icon-content');


for(let i = 0; i<icons.length; i++){
    icons[i].onmouseover = function(){
        iconsContent[i].style.opacity = 1;
    }
    icons[i].onmouseout = function(){
        iconsContent[i].style.opacity = 0;
    }
}

//实现发送栏动画
var smile = document.getElementById('smile');
var send = document.getElementById('send');

smile.onmouseover = function(){
    smile.src = '../public/image/icon/smile-active.png';
}
smile.onmouseout = function(){
    smile.src = '../public/image/icon/smile.png';
}
send.onmouseover = function(){
    send.src = '../public/image/icon/send-active.png';
}
send.onmouseout = function(){
    send.src = '../public/image/icon/send.png';
}

//时间
var timeDiv = document.getElementsByClassName('contactTime')[0];
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    timeDiv.innerHTML = hour + ':' + minute;
}
setInterval(showTime,1000);

