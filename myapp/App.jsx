import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route,Redirect} from 'react-router-dom'
import Home from '@/components/home.jsx'
class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    
    return (
      <div className="container">
         <Switch>
          <Route path='/home' component={Home} />
          <Redirect to={{pathname: "/home"}}/>
          </Switch>
						
					
      </div>
    )
  }
}

export default App