import React, { Component } from 'react';
import '../../css/index.css';

class TimeLine extends Component {
  render() {
   let renderList = () =>{
    let timeArrary = ['2019-01-02','2019-02-02','2019-03-12','2019-04-29']
    let timeArraryValue = []
    let timeArraryObj=[]
    timeArrary.forEach((item)=>{
      timeArraryValue.push(new Date(item).valueOf())
    })
    let max = Math.max.apply(null,timeArraryValue)
    let min = Math.min.apply(null,timeArraryValue)
    let count = max-min
    timeArrary.forEach((item)=>{
      let val = new Date(item).valueOf()
      
      timeArraryObj.push({
        date:item,
        width:Math.round((val-min)/count * 10000) / 10.00 + "px"
      })
    })
    console.log(timeArraryObj)
    let div=[]
    timeArraryObj.forEach((item,index)=>{
      if (index===0) item.width='90px';
      div.push(
        <div key={index} className="time-line-block" style={{width: item.width}}>
            <div className="time-line-tip1">
              <div className="time-line-tip1-content">备注一{item.value}</div>
            </div>
            <div className="time-line-content">备注一备注一备注一备注一备注一备注一备注一备注一备注一备注一</div>
            <div className="time-line-tip2">
              <div className="time-line-tip2-content">备注一</div>
            </div>
          </div>
      )
    })
    return div
    }
    return (
      <div>
        <div className='time-line-wrap'>
          {renderList()}
        </div>
        {/* {renderList()} */}
      </div>
    );
  }
}

export default TimeLine;
