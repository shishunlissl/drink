import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from './ErrorBoundary.jsx'
import { HashRouter as Router, Route,Switch} from 'react-router-dom'
import Detail from '@/components/detail.jsx'
import App from './App.jsx'
//import 'antd-mobile/dist/antd-mobile.css'
import './main.scss'


ReactDOM.render(
<ErrorBoundary>
  
    <Router>
		   <Switch>
					<Route path='/detail' component={Detail}/>
					<Route path = '/' component = {App} />
        </Switch>
      </Router>
</ErrorBoundary>,
document.getElementById('root')
)