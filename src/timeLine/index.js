import React, { Component } from 'react';
import '../css/index.css';

class TimeLine extends Component {
  render() {
   let renderList = () =>{
    let tmp = [1,2,3]
    let div=[]
     tmp.forEach((index,item)=>{
      div.push(<div key={index}>{item}</div>)
    })
    return div
    }
    return (
      <div>
        <div>timeline</div>
        {renderList()}
      </div>
    );
  }
}

export default TimeLine;
