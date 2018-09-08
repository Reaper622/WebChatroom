
//登录
var loginBtn = document.getElementById('loginIn');
//给登录按钮增加监听事件
loginBtn.addEventListener('click',function () {
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    if(username == ""){
        alert(username);
    }
    else if(password == ""){
        alert('请输入密码');
    }
    else if(password.length < 8){
        alert('密码不应少于8位');
    }
    else{
        window.location.href = "client.html?username=" + username;
    }
  })

//Enter键绑定登录事件
document.onkeydown = function (event) {
    var e = event || window.event;
    if (e && e.keyCode == 13) {
        loginBtn.click();
    }
}
