import React, { Component } from 'react';
import '../css/index.css';
import { Input, Col, Row, Select, Radio,DatePicker, AutoComplete,Button } from 'antd';
import moment from 'moment';
// import exportPDF from '../tool/exportPDF'
import internWord from '../tool/internWord'
const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';
const degree = ["博士以上","博士","研究生","本科","大专","高中","初中",'小学',"小学以下"]

class NewEmployee extends Component {
  state = {
    companyName:'瞎说',
    dataSource: [],
    employeeInfo:{
      name:'张三',
      id:'1',
      phoneCode:'',
      phoneNumber:'',
      email:'',
      firstName:'',
      lastName:'',
      country:'',
      pinying:'',
      englishName:'',
      birthDay:'2000/01/01',
      gender:'',
      degree:'',
      birthCountry:'',
      nation:'',
      maritalStatus:"",
      fertilityStatus:'',
      healthStatus:''
    }
  };
  generateOption = (arg) =>{
    let children = []
    arg.forEach((element,index) => {
      children.push(<Option key={index} value={element}>{element}</Option>)
    });
    return children
  }
  handleChange = value => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
    });
    this.changeValue('email',value)
  };
  changeDate = (date, dateString) => {
    // console.log(date);
    // console.log(dateString);
    this.changeValue('birthDay',dateString)
  }
  changeValue = (from,event) => {
    // console.log('===============')
    // console.log(from);
    // console.log(event);
    // // console.log(event.target.value);
    // console.log('===============')
    let name = from
    let data 
    switch (from) {
      case 'phoneCode' || 'email' || 'country' || 'degree' || 'birthDay':
        data = event
        break;
      case 'email':
        data = event
        break;
      case 'country':
        data = event
        break;
      case 'degree':
        data = event
        break;
      case 'birthDay':
        data = event
        break;
      default:
        data = event.target.value
        break;
    }
    let setStateObj = this.state.employeeInfo
    setStateObj[name] = data
    this.setState(setStateObj);
  };
  // 导出word
  exportWord(){
    internWord()
    // exportPDF()
    // let word = null
    // try {
    //   word = new ActiveXObject("Word.Application"); 
    // } catch (error) {
    //   console.error(error)
    //   alert("IE的安全级别过高!请在IE的菜单栏中:工具——INTERNET选项——安全---本地Intranet——自定义级别——对没有标记为安全的activeX控件...那句改为启用或提示!");
    // }
    
    console.log(this.state)
  }
  render() {
    return (
      <div className="ne-main" id="employee-info">
        <div className="info-title">人事资料表</div>
        <div className="info-sub-title">{this.state.employeeInfo.name} , 您好！欢迎您加入{this.state.companyName}，请认真并如实填写下表信息。 <a>[退出登录]</a></div>
        {/* 联系信息 */}
        <div className="contact-info-wrap">
          <h3>联系信息</h3>
          <Row >
            <Col span={2}> 联系电话</Col>
            <Col span={2}> 
              <Select onChange={event=>{this.changeValue('phoneCode',event)}} value={this.state.employeeInfo.phoneCode} style={{ width: 100 }}>
                <Option value="+86">+86</Option>
              </Select>
            </Col>
            <Col span={3}> 
              <Input onChange={event=>{this.changeValue('phoneNumber',event)}} value={this.state.employeeInfo.phoneNumber} placeholder='请输入手机号' />
            </Col>
          </Row>
          <Row className="contact-info-wrap-b">
            <Col span={2}> 个人邮箱</Col>
            <Col span={4}> 
            <AutoComplete className="contact-info-wrap-b-ac"
              dataSource={this.state.dataSource}
              onChange={this.handleChange}
              value={this.state.employeeInfo.email}
              placeholder="Email"
            />
            </Col>
          </Row>
        </div>
        {/* 基本信息一 */}
        <div className="contact-info-wrap">
          <h3>基本信息</h3>
          <Row gutter={5}>
            <Col span={2}> 姓*</Col>
            <Col span={8}> 
              <Input onChange={event=>{this.changeValue('firstName',event)}} value={this.state.employeeInfo.firstName} placeholder='请输入姓' />
            </Col>
            <Col span={4}></Col>
            <Col span={2}> 名*</Col>
            <Col span={8}> 
              <Input onChange={event=>{this.changeValue('lastName',event)}} value={this.state.employeeInfo.lastName} placeholder='请输入名' />
            </Col>
          </Row>

          <Row className="contact-info-wrap-b" gutter={5}>
            <Col span={2}> 国籍*</Col>
            <Col span={8}> 
              <Select onChange={event=>{this.changeValue('country',event)}} value={this.state.employeeInfo.country} className="full-widh" defaultValue="中国" >
                <Option value="中国">中国</Option>
                <Option value="法国">法国</Option>
                <Option value="中国香港">中国香港</Option>
              </Select>
            </Col>
            <Col span={4}></Col>
            <Col span={2}> 拼音*</Col>
            <Col span={8}> 
              <Input onChange={event=>{this.changeValue('pinying',event)}} value={this.state.employeeInfo.pinying} placeholder='请输入拼音' />
            </Col>
          </Row>

          <Row gutter={5}>
            <Col span={2}> 英文名</Col>
            <Col span={8}> 
              <Input onChange={event=>{this.changeValue('englishName',event)}} value={this.state.employeeInfo.englishName} placeholder='请输入' />
            </Col>
            <Col span={4}></Col>
            <Col span={2}> 出生日期</Col>
            <Col span={8}> 
              <DatePicker onChange={this.changeDate} value={moment(this.state.employeeInfo.birthDay, dateFormat)} className="full-widh" defaultValue={moment('2000/01/01', dateFormat)} format={dateFormat} />
            </Col>
          </Row>

          <Row className="contact-info-wrap-b" gutter={5}>
            <Col span={2}> 性别</Col>
            <Col span={8}> 
              {/* <Radio.Group onChange={this.onChange} value={this.state.value}> */}
              <Radio.Group onChange={event=>{this.changeValue('gender',event)}} value={this.state.employeeInfo.gender}>
                <Radio value={'男'}>男</Radio>
                <Radio value={'女'}>女</Radio>
                <Radio value={'保密'}>保密</Radio>
              </Radio.Group>
            </Col>
            <Col span={4}></Col>
            <Col span={2}> 最高学历</Col>
            <Col span={8}>
              <Select className="full-widh" onChange={event=>{this.changeValue('degree',event)}} value={this.state.employeeInfo.degree}>
                  {this.generateOption(degree)}
              </Select>
            </Col>
          </Row>

          <Row gutter={5}>
            <Col span={2}> 出生国家</Col>
            <Col span={8}> 
              <Input onChange={event=>{this.changeValue('birthCountry',event)}} value={this.state.employeeInfo.birthCountry} placeholder='请输入' />
            </Col>
            <Col span={4}></Col>
            <Col span={2}> 民族</Col>
            <Col span={8}> 
              <Input onChange={event=>{this.changeValue('nation',event)}} value={this.state.employeeInfo.nation} placeholder='请输入' />
            </Col>
          </Row>

          <Row className="contact-info-wrap-b" gutter={5}>
            <Col span={2}> 婚姻状况</Col>
            <Col span={8}> 
            <Radio.Group onChange={event=>{this.changeValue('maritalStatus',event)}} value={this.state.employeeInfo.maritalStatus}>
                <Radio value={'未婚'}>未婚</Radio>
                <Radio value={'已婚'}>已婚</Radio>
                <Radio value={'离异'}>离异</Radio>
                <Radio value={'丧偶'}>丧偶</Radio>
              </Radio.Group>
            </Col>
          </Row>

          <Row gutter={5}>
            <Col span={2}> 生育状况</Col>
            <Col span={8}> 
            <Radio.Group onChange={event=>{this.changeValue('fertilityStatus',event)}} value={this.state.employeeInfo.fertilityStatus}>
                <Radio value={'已育'}>已育</Radio>
                <Radio value={'未育'}>未育</Radio>
              </Radio.Group>
            </Col>
          </Row>

          <Row className="contact-info-wrap-b" gutter={5}>
            <Col span={2}> 健康状况</Col>
            <Col span={8}> 
            <Radio.Group onChange={event=>{this.changeValue('healthStatus',event)}} value={this.state.employeeInfo.healthStatus}>
                <Radio value={'健康'}>健康</Radio>
                <Radio value={'残疾'}>残疾</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Button>Normal</Button>
        <Button onClick={this.exportWord.bind(this)} type="primary" shape="round" icon="download">
          Download
        </Button>
        </div>
      </div>
    );
  }
}
export default NewEmployee;