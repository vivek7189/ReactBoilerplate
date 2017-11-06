import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)
const About = () => (
    <div>
        <div>About</div>
    </div>
)
const Rendering = () => {
    
    return(
    
    <div>
        Rendering
    </div>
)}
const Comp = ({ match }) => (
    <div>
        Comp
</div>
)
const States = ({ match }) => (
    <div>
        States
</div>
)
const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
            </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                 </Link>
            </li>
        </ul>
       <Switch> 
        <Route path="/topics/rendering" component={Rendering} />
        <Route path="/topics/components" component={Comp} />
        <Route path="/topics/props-v-state" component={States} />
       
        </Switch>
    </div>
)
class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                    </Switch>
                </div>
            </Router>
        )
    }
}


ReactDom.render(<Main />, document.getElementById('app'));

