import React, {Component} from 'react'
import './Regist.less'

export default class Regist extends Component {
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
    gettingCode:true,
    code:'',
    stime:30
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

  //获取验证码
  getCode(){
    let{gettingCode,phoneNumber,stime,VerificationCode}=this.state
    console.log(1);
    if(!/^1[3|4|5|7|8][0-9]{9}$/.test(phoneNumber.value)){
      console.log(2);
      return
    }
    if(!gettingCode){
      console.log(3);
      return
    }
    console.log(4);
    this.setState({gettingCode:false})
    let code='';
    let i=0;
    while(i<6){
      code+=String.fromCharCode(Math.floor(Math.random()*10+48));
      i++;
    }
    this.setState({code})

    setTimeout(()=>{VerificationCode.value=code;this.setState({VerificationCode})}, 5000);
    let intervalId=setInterval(()=>{
      stime--
      this.setState({stime})
      if(stime===-1){
        clearInterval(intervalId);
        this.setState({gettingCode:true,stime:30})
      }
    },1000)
  }

  regist() {
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
    let {phoneNumber, VerificationCode, password,errorMsg,gettingCode,stime} = this.state;
if(!errorMsg){
  if(phoneNumber.isError&&phoneNumber.value){
    errorMsg=phoneNumber.errorMsg
  }else if(VerificationCode.isError&&VerificationCode.value){
    errorMsg=VerificationCode.errorMsg
  }else if(password.isError&&password.value){
    errorMsg=password.errorMsg
  }
}
    return (
      <div className="regist-wrap">
        <header-guide/>
        <div className="regist-content">
          <header className="regist-title">
            手机号注册
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
            <div className="input-info VerificationCode">
              {!VerificationCode.value &&
              <label htmlFor="code">请输入短信验证码</label>}
              <div className="getCode" onClick={()=>{this.getCode()}}>{gettingCode ? '获取验证码' : `${stime}s后重发`}</div>
              <input type="text" id="code" className="input-VerificationCode" defaultValue={VerificationCode.value}
                     onChange={(e) => {this.handleChange(e, 'VerificationCode')}}
                     onBlur={(e) => {this.handleBlur(e, 'VerificationCode')}}
                     onFocus={(e) => {this.handleFocus(e, 'VerificationCode')}}/>
            </div>
            <div className="input-info password">
              {!password.value &&
              <label htmlFor="pwd">请输入密码</label>}
              <input type="password" id="pwd" className="input-password" value={password.value}
                     onChange={(e) => {this.handleChange(e, 'password')}}
                     onBlur={(e) => {this.handleBlur(e, 'password')}}
                     onFocus={(e) => {this.handleFocus(e, 'password')}}/>
              {password.value &&
              <img src={require("./img/quxiao.png")} onClick={(e) => {
                this.clearValue(e, 'password')
              }}/>}
            </div>
            {errorMsg &&
            <div className="error">{errorMsg}</div>}
            <div className="regits-btn" onClick={() => {
              this.regist()
            }}>注册
            </div>
            <p>我同意<span>《服务条款》</span>和<span>《网易隐私政策》</span></p>
          </form>
          <div className="email-regist">邮箱账号注册<i className="icon-goahead"></i></div>
        </div>
      </div>
    )
  }
}