import React, {Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
//import {NavLink} from 'react-router-dom'
//require('../css/Home.less')

class Home extends Component {
  constructor (props) {
    super(props)
	this.state={
		
		data: ['1', '2', '3'],
		imgHeight: 176,
	}
  }
goBank () {
    this.props.history.push({
    	pathname: '/detail',
    	state: {
    		flag: '/home'
    	}
    })
  }
  componentDidMount () {
  	
  		setTimeout(() => {
  		this.setState({
  			data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
  		});
  	}, 100);
  }
  render () {
    
    return (
      <div className="main">
	      <header>
		     <div className="left">
			   <input type="text" />
			 
			  </div>
		      <div className="right" onClick={this.goBank.bind(this)}>
				  <i className="iconfont icon-icon--"></i>
				  <p>消息</p>
		      </div>
		  
		  </header>
	     <div className="conent">
		   <Carousel
		   	autoplay={true}
		   	infinite
		   >
		   	{this.state.data.map(val => (
		   		<a
		   			key={val}
		   			href="http://www.alipay.com"
		   			style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
		   		>
		   			<img
		   				src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
		   				alt=""
		   				style={{ width: '100%', verticalAlign: 'top' }}
		   				onLoad={() => {
		   					// fire window resize event to change height
		   					window.dispatchEvent(new Event('resize'));
		   					this.setState({ imgHeight: 'auto' });
		   				}}
		   			/>
		   		</a>
		   	))}
		   </Carousel>
				 <div className="news">
				  <p>快报</p>
				 
				 </div>
		   	   <div className="list">
			     <ul>
				 </ul>
			   
			   </div>
		 </div>
		  
	  </div>
    )
  }
}

export default Home