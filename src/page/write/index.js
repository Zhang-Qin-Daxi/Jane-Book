import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Redirect,Link } from 'react-router-dom'
import './style.css'
import * as actionCreator from'./store/actionCreators';

class Write extends Component {
   render() {
    const { loginStatus, focus,handleNewWrite,cancelWrite } = this.props;
		if (loginStatus) {
      return(
        <div className="writeMain">
          <div className="WriteLeft Left">
            <div className="homePage">
              <Link to="/">回首页</Link>
            </div>
          <div className="New">
            <div className="newButton"
            onClick={handleNewWrite}
            >
              <span>新建文集</span>
            </div>
            <div className={focus ? 'newConstruction' : 'Construction' }>
              <form className="newForm">
                <input placeholder="请输入文集名..." className="newFormInput" />
                <button type="submit" className="submit"><span>提 交</span></button>
                <button
                type="button"
                className="cancel"
                onClick={cancelWrite}
                ><span>取 消</span></button>
              </form>
            </div>
          </div>
          <ul className="">
            <li className="diaryLi" title="日记本">
            <div className="diary">
              {/* <span>
              <ul className="">
                <li className="" title=""><span className=""><i className=""></i>修改文集</span></li>
                <li className="" title=""><span className=""><i className=""></i>删除文集</span></li>
              </ul></span> */}
            </div>
              <span>日记本</span></li>
            <li className="essayLi" title="随笔">
              <span>随笔</span>
            </li>
          </ul>
          <div role="button" className="footer">
            <span className="setting"><span>设置</span></span>
            <span className="issue">遇到问题</span>
          </div>
          </div>
          <div className="WriteCenter">
            <div className="WriteCenterMain">
              <div className="newWrite">
                <span> 新建文章</span>
              </div>
              <ul className="Writes"></ul>
              <div className="bottomWrite">
                <span> 在下方新建文章</span>
              </div>
            </div>
          </div>
          <div className="WriteRight"></div>
       </div>
       )
    }else {
      return <Redirect to='/login'/>
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
  focus:state.getIn(['Write','focus'])
})

const mapDispath = (dispatch) => ({
  handleNewWrite() {
    dispatch(actionCreator.changleNewWrite())
  },
  cancelWrite() {
    dispatch(actionCreator.changeCancelWrite())
  }
})


export default connect(mapState,mapDispath)(Write);