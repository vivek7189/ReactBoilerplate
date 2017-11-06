import React from 'react';
import {Link,Switch,Route} from 'react-router-dom'

const Rendering = ()=>(
    <h3>Rendering</h3>
)

const Comp = ()=>(
    <h3>Compenent</h3>
)
export default class Topics extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${this.props.match.url}/rendering`}>
                        Rendering with React
                </Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/components`}>
                        Components
                    </Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/props-v-state`}>
                        Props v. State
                     </Link>
                </li>
            </ul>
           <Switch> 
            <Route path="/topics/rendering" component={Rendering} />
            <Route path="/topics/components" component={Comp} />
            <Route path="/topics/props-v-state" render={()=><h1>hiiiiiiii</h1>} />
           
            </Switch>
        </div>
        )
    }
}