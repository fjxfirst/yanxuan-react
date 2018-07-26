import React, {Component} from 'react'
import './Login.less'
import HeaderGuide from '../HeaderGuide/HeaderGuide'
export default class Login extends Component {
  state = {
    phoneNumber: '',
    verificationCode:'',
    password:'',
    isPwdLogin:false
  };
  loginMethod(){
    this.setState({
      isPwdLogin:!this.state.isPwdLogin
    })
  }
  phoneNumberChange(event) {
    console.log(event);
    this.setState({phoneNumber: event.target.value});
  }
  codeChange(event) {
    this.setState({verificationCode: event.target.value});
  }
  pwdChange(event){
    this.setState({password:event.target.value})
  }
  render() {
    const{isPwdLogin}=this.state;
    return (
      <div className="regist-wrap">
        <HeaderGuide/>
        <div className="regist-content">
          <header className="regist-title">
            <img src={require("./img/login.png")}/>
          </header>
          <form action="#" autoComplete="off">
            <div className="input-info phoneNumber">
              <label htmlFor="phoneN">请输入手机号</label>
              <input type="text" id="phoneN" className="input-phoneNumber" onChange={()=>{this.phoneNumberChange()}}/>
              <img src={require("./img/quxiao.png")}/>
            </div>
            {!isPwdLogin&&
            <div className="input-info VerificationCode">
              <label htmlFor="code">请输入短信验证码</label>
              <div className="getCode">获取验证码</div>
              <input type="text" id="code" className="input-VerificationCode" onChange={()=>{this.codeChange()}}/>
            </div>
            }
            {isPwdLogin&&
            <div className="input-info password">
              <label htmlFor="pwd">请输入密码</label>
              <input type="password" id="pwd" className="input-password" onChange={()=>{this.pwdChange()}}/>
              <img src={require("./img/quxiao.png")}/>
            </div>
            }
            <div className="error"></div>
            <div className="input-info question">
              <span>{isPwdLogin ? '遇到问题？' : '忘记密码？'}</span><span onClick={()=>{this.loginMethod()}}>{isPwdLogin ? '使用密码验证登录' : '使用短信验证登录'}</span>
            </div>
            <div className="regits-btn">登录</div>
            <div className="login-btn">其他登录方式</div>
          </form>
          <div className="email-regist">注册账号<i className="icon-goahead"></i></div>
        </div>
      </div>
    )
  }
}