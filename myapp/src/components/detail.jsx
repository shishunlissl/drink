import React, {Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
//require('../css/Home.less')

class Detail extends Component {
  constructor (props) {
    super(props)
	
  }
  componentDidMount () {
  	
  	
  }
  render () {
    
    return (
		<div className="container">
      <div className="main">
					 <div className="conent">
					 </div> 
				 <div className="footer">
					 <ul>
							 <li>
									<i className="iconfont icon-xiazai46"></i>
									 <p>客服</p>
							 </li>
							 <li>
									<i className="iconfont icon-dianpu"></i>
									<p>店铺</p>
							</li>
							<li>
									<i className="iconfont icon-icon--1"></i>
									<p>购物车</p>
							</li>
						</ul>
						<p className="p_1">加入购物车</p>
						<p className="p_2">加入购物车</p>
				</div>
				
			 </div>
	  </div>
    )
  }
}

export default Detail