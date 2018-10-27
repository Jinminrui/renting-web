var $$ = mdui.JQ
sessionStorage.setItem('isLogin', '未登录');
JudgeStatus()

/**
 * 绑定关闭登陆界面事件
 */
$$('.close').on('click', function (e) {
  $$('body').removeClass('mdui-locked')
  $$('#tologin').css('display', 'none')
  $$('.mdui-overlay').remove()
})

/**
 * 判断是否登陆
 */
function JudgeStatus() {
  if ((sessionStorage.getItem('isLogin')) === '未登录') {
    if ($$('#user-status').length === 1) {
      $$('#user-status').empty()
    }
    $$('#user-status').append(`
    <a href="javascript:ToLogin();" class="mdui-btn">登陆</a> 
    <a href="javascript:ToRegister;" class ="mdui-btn" >注册</a>`)
  } else {
    if ($$('#user-status').length === 1) {
      $$('#user-status').empty()
    }
    $$('#user-status').append(`
    <a href="personalcenter.html" class="mdui-btn">个人中心</a>
    <a href="inbox.html" class="mdui-btn">消息</a>
    <a href="javascript:Exit()" class="mdui-btn">退出</a>`)
  }
}

/**
 * 弹出登陆界面
 */
function ToLogin() {
  $$('body').addClass('mdui-locked')
  $$('#tologin').css('display', 'block')
  $$('body').append('<div class="mdui-overlay mdui-overlay-show" style="z-index: 5100;"></div>')
}


/**
 * 登陆按钮判断
 */
function Login() {
  var username = $$('input[name="username"]').prop('value')
  var password = $$('input[name="password"]').prop('value')
  if (username === '123' && password === '123') {
    sessionStorage.setItem('isLogin', true)
    JudgeStatus()
    $$('body').removeClass('mdui-locked')
    $$('#tologin').css('display', 'none')
    $$('.mdui-overlay').remove()
  }
}

/**
 * 退出登陆
 */
function Exit() {
  if ($$('#user-status').length === 1) {
    $$('#user-status').empty()
  }
  $$('#user-status').append(`
    <a href="javascript:ToLogin();" class="mdui-btn">登陆</a> 
    <a href="javascript:ToRegister();" class ="mdui-btn" >注册</a>`)
  sessionStorage.setItem('isLogin', '未登录');
}