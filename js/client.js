//获取url中传递的参数
var url = window.location.href.split('?')[1];
//显示当前使用者的姓名
var username = document.getElementsByClassName('user-username')[0];
username.innerHTML = url.split('=')[1];
//获取左侧源码按钮
var sourceCode = document.getElementsByClassName('icon-list-item')[0];
//获取左侧关于按钮
var aboutInfo = document.getElementsByClassName('icon-list-item')[1];
//获取左侧赞助按钮
var sponsor = document.getElementsByClassName('icon-list-item')[2];
//获取左侧注销按钮
var loginOutBtn = document.getElementsByClassName('icon-list-item')[3];
//获取聊天窗口
var chatWindow = document.getElementsByClassName('chatWindow')[0];
//获取发送表情按钮
var smile = document.getElementById('smile');
//获取发送框
var sendContent = document.getElementById('sendContent');
//获取发送按钮
var sendBtn = document.getElementById('send');
//绑定发送事件
sendBtn.addEventListener('click',sendMessage);
//绑定登出事件
loginOutBtn.addEventListener('click',loginOut);
//绑定当发送框被绑定时的enter发送事件
document.onkeydown = function(event){
    var e = event || window.event;
    if(e && e.keyCode == 13){
        sendBtn.click();
    }
}

//登出事件
function loginOut() {
    window.location.href="login.html";
}

//有关socket部分
var socket = io();

//当接收到信息且不是本机时生成气泡
socket.on('message',function (information) {
    if(information.name !== username.textContent){
        createOtherMessage(information);
    }
});
//当有人连接进来
socket.on('connected',function () {
    //do something
})
//当有人断开连接
socket.on('disconnected',function () { 
    // do something
})


//本机发送消息
function sendMessage() { 
    if(sendContent.value != ''){
        let myInformation = {
            name:username.textContent,
            chatContent:sendContent.value,
            img:'./public/image/avatar.JPG'
        };
        socket.emit('message',myInformation);
        createMyMessage();
        sendContent.value = '';
    }
 }
//生成本机聊天气泡
function createMyMessage() {
    let myMessageBox = document.createElement('div');
    myMessageBox.className = "myMessageBox";
    let messageContent = document.createElement('div');
    messageContent.className = "myMessageContent";
    let text = document.createElement('div');
    text.className = "myMessageText";
    let avatar = document.createElement('img');
    avatar.className = "myMessageAvatar";
    let chatUsername = document.createElement('span');
    chatUsername.className = "myMessageName";
    chatUsername.innerHTML = username.textContent;
    avatar.src = document.getElementsByClassName('user-avatar')[0].src;
    text.innerHTML = sendContent.value;
    messageContent.appendChild(chatUsername);
    messageContent.appendChild(text);
    messageContent.appendChild(avatar);
    myMessageBox.appendChild(messageContent);
    //添加进聊天窗口
    chatWindow.appendChild(myMessageBox);

    chatWindow.scrollTop = chatWindow.scrollHeight;
}
//生成其他用户的聊天气泡
function createOtherMessage(information) {
    let otherMessageBox = document.createElement('div');
    otherMessageBox.className = "otherMessageBox"
    let messageContent = document.createElement('div');
    messageContent.className = "otherMessageContent";
    let text = document.createElement('div');
    text.className = "otherMessageText";
    let avatar = document.createElement('img');
    avatar.className = "otherMessageAvatar";
    let chaterName = document.createElement('span');
    chaterName.className = "otherMessageName";
    chaterName.innerHTML = information.name;
    avatar.src = information.img;
    text.innerHTML = information.chatContent;
    messageContent.appendChild(chaterName);
    messageContent.appendChild(text);
    messageContent.appendChild(avatar);
    otherMessageBox.appendChild(messageContent);
    

    //添加进聊天窗口
    chatWindow.appendChild(otherMessageBox);
}


//跳转至源码界面
sourceCode.addEventListener('click',function () {
    window.open('https://github.com/Reaper622/WebChatroom');
})