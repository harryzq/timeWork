import React, { Component } from 'react';
import '../../css/index.css';
// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
// 引入action
import { setPageTitle, setInfoList } from '../../store/actions.js'
  // mapStateToProps：将state映射到组件的props中
  const mapStateToProps = (state) => {
    return {
      pageTitle: state.pageTitle,
      infoList: state.infoList
    }
  }

  // mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitle (data) {
        // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
        dispatch(setPageTitle(data))
        // 执行setPageTitle会返回一个函数
        // 这正是redux-thunk的所用之处:异步action
        // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    },
    setInfoList (data) {
        dispatch(setInfoList(data))
    }
  }
}
class TimeLine extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    let { setPageTitle, setInfoList } = this.props
    
    // 触发setPageTitle action
    setPageTitle('新的标题')
    
    // 触发setInfoList action
    setInfoList()
  }

  render() {
    // 从props中解构store
    let { pageTitle, infoList } = this.props
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
    // console.log(timeArraryObj)
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
              <div className="time-line-tip2-content">{pageTitle}</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(TimeLine)
// export default TimeLine;
