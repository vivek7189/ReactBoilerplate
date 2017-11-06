import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Jobs from './jobs/jobs';
import Interview from './interview/interview'
import Topics from './topics/topics';

import * as reducers from './store/reducers';
import * as actions from './actions/action';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'; 
import Friends from './components/friends'
import ItemsList from './containers/itemsList'
class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       
        return (
            <Router>
                <div>
                   viv {this.props.isSelection}
                   <button onClick={this.props.increment}>val</button>
                   <button onClick={this.props.decrement}>val</button>
                   <Friends/>
                   <ItemsList/>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">jobs</Link></li>
                        <li><Link to="/interview">Interview</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/jobs" component={Jobs} />
                        <Route path="/interview" component={Interview} />
                        <Route path="/topics" component={Topics} />
                    </Switch>
                </div>
            </Router>
        )
    }
}


function mapStateToProps(state){

      return{
          isSelection:state.CounterApp
      }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
  }
export default connect(mapStateToProps,mapDispatchToProps)(Main);


