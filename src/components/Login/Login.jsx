import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './Login.less'
import HeaderGuide from '../HeaderGuide/HeaderGuide'
class Login extends Component {
  state = {
    phoneNumber: {
      value: '',
      isError: false,
      valid: false,//有效性
      errorMsg:''
    },
    VerificationCode: {
      value: '',
      isError: false,
      valid: false,
      errorMsg:''
    },
    password: {
      value: '',
      isError: false,
      valid: false,
      errorMsg:''
    },
    errorMsg:'',
    isPwdLogin:false
  };
  loginMethod(){
    this.setState({
      isPwdLogin:!this.state.isPwdLogin
    })
  }
  goTo(path){
    this.props.history.replace(path)
  }
  handleChange = (e, field) => {
    const {phoneNumber,VerificationCode,password}=this.state
    let value = e.target.value;
    switch (field) {
      case 'phoneNumber':phoneNumber.value=value;this.setState({phoneNumber});
        break;
      case 'VerificationCode':VerificationCode.value=value;this.setState({VerificationCode});
        break;
      case 'password':password.value=value;this.setState({password});
        break;
    }
  }

  handleBlur = (e, field) => {
    const {phoneNumber,VerificationCode,password}=this.state
    this.setState({
      errorMsg:''
    })
    switch (field) {
      case 'phoneNumber':
        if (phoneNumber.value) {
          if (!/^1[3|4|5|7|8][0-9]{9}$/.test(phoneNumber.value)) {
            phoneNumber.isError=true
            phoneNumber.valid=false
            phoneNumber.errorMsg='手机号格式错误'
            this.setState({phoneNumber})
          } else {
            phoneNumber.isError=false
            phoneNumber.valid=true
            phoneNumber.errorMsg=''
            this.setState({phoneNumber})
          }
        }
        break;
      case 'VerificationCode':
        if (VerificationCode.value) {
          if (!/^\d{6}$/.test(VerificationCode.value)) {
            VerificationCode.isError=true
            phoneNumber.valid=false
            VerificationCode.errorMsg='短信验证码格式错误'
            this.setState({VerificationCode})
          } else {
            VerificationCode.isError=false
            VerificationCode.valid=true
            VerificationCode.errorMsg=''
            this.setState({VerificationCode})
          }
        }
        break;
      case 'password':
        if (password.value) {
          if (!/^.{6,16}$/.test(password.value)) {
            password.isError=true
            password.valid=false
            password.errorMsg='密码须由6-16个字符组成，区分大小写'
            this.setState({password})
          } else {
            password.isError=false
            password.valid=true
            password.errorMsg=''
            this.setState({password})
          }
        }
        break;
    }
    return
  }

  clearValue = (e, field) => {
    console.log(field);
    switch (field) {
      case 'phoneNumber':
        this.setState({
          phoneNumber: {
            value: '',
            isError: false,
            valid: false,
            errorMsg: ''
          },
          errorMsg:''
        });

        break;
      case 'VerificationCode':
        this.setState({
          VerificationCode: {
            value: '',
            isError: false,
            valid: false,
            errorMsg: ''
          },
          errorMsg:''
        });
        break;
      case 'password':
        this.setState({
          password: {
            value: '',
            isError: false,
            valid: false,
            errorMsg: ''
          },
          errorMsg:''
        });
        break;
    }
  }

  handleFocus = (e, field) => {
    const {phoneNumber,VerificationCode,password}=this.state
    switch (field) {
      case 'phoneNumber':
        if(phoneNumber.isError){
          // phoneNumber.isError=false
          phoneNumber.errorMsg=''
          this.setState({phoneNumber})
        }
        break;
      case 'VerificationCode':
        if(VerificationCode.isError){
          // VerificationCode.isError=false;
          VerificationCode.errorMsg=''
          this.setState({VerificationCode});
        }
        break;
      case 'password':
        if(password.isError){
          // password.isError=false;
          password.errorMsg=''
          this.setState({password})
        }
        break;
    }
  }

  login() {
    let {phoneNumber,VerificationCode,password,errorMsg}=this.state
    if (!phoneNumber.value) {
      this.setState({
        errorMsg: '请输入手机号'
      })
      return;
    }else {
      if(phoneNumber.valid){
        if (!VerificationCode.value) {
          this.setState({
            errorMsg: '请输入短信验证码'
          })
          return;
        }
        else{
          if(VerificationCode.valid){
            if (!password.value) {
              this.setState({
                errorMsg: '请输入密码'
              })
              return;
            }else{
              if(password.valid){
                console.log('注册成功')
              }else{
                this.setState({
                  errorMsg: ''
                })
              }
            }
          }else{
            this.setState({
              errorMsg: ''
            })
          }
        }
      }else{
        this.setState({
          errorMsg: ''
        })
      }

    }



  }
  render() {
    let {phoneNumber, VerificationCode, password,errorMsg} = this.state;
    if(!errorMsg){
      if(phoneNumber.isError&&phoneNumber.value){
        errorMsg=phoneNumber.errorMsg
      }else if(VerificationCode.isError&&VerificationCode.value){
        errorMsg=VerificationCode.errorMsg
      }else if(password.isError&&password.value){
        errorMsg=password.errorMsg
      }
    }
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
              {!phoneNumber.value &&
              <label htmlFor="phoneN">请输入手机号</label>}
              <input type="text" id="phoneN" className="input-phoneNumber" value={phoneNumber.value}
                     onChange={(e) => {this.handleChange(e, 'phoneNumber')}}
                     onBlur={(e) => {this.handleBlur(e, 'phoneNumber')}}
                     onFocus={(e) => {this.handleFocus(e, 'phoneNumber')}}/>
              {phoneNumber.value &&
              <img src={require("./img/quxiao.png")} onClick={(e) => {
                this.clearValue(e, 'phoneNumber')
              }}/>}
            </div>
            {!isPwdLogin&&
            <div className="input-info VerificationCode">
              {!VerificationCode.value &&
              <label htmlFor="code">请输入短信验证码</label>}
              <div className="getCode">获取验证码</div>
              <input type="text" id="code" className="input-VerificationCode"
                     onChange={(e) => {this.handleChange(e, 'VerificationCode')}}
                     onBlur={(e) => {this.handleBlur(e, 'VerificationCode')}}
                     onFocus={(e) => {this.handleFocus(e, 'VerificationCode')}}/>
            </div>
            }
            {isPwdLogin&&
            <div className="input-info password">
              {!password.value &&
              <label htmlFor="pwd">请输入密码</label>}
              <input type="password" id="pwd" className="input-password" value={password.value}
                     onChange={(e) => {this.handleChange(e, 'password')}}
                     onBlur={(e) => {this.handleBlur(e, 'password')}}
                     onFocus={(e) => {this.handleFocus(e, 'password')}}/>
              {password.value&&
              <img src={require("./img/quxiao.png")} onClick={(e) => {
                this.clearValue(e, 'password')
              }}/>}
            </div>
            }
            {errorMsg&&
            <div className="error">{errorMsg}</div>}
            <div className="input-info" id='question'>
              <span>{isPwdLogin ? '遇到问题？' : '忘记密码？'}</span><span onClick={()=>{this.loginMethod()}}>{isPwdLogin ? '使用密码验证登录' : '使用短信验证登录'}</span>
            </div>
            <div className="regits-btn" onClick={()=>{this.login()}}>登录</div>
            <div className="login-btn" onClick={()=>{this.goTo('/Personage')}}>其他登录方式</div>
          </form>
          <div className="email-regist" onClick={()=>{this.goTo('/Regist')}}>注册账号<i className="icon-goahead"></i></div>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)