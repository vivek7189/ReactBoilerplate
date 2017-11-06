import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/action';

import FriendList from './friendlist'
class Friends extends React.Component{
  

    render(){ 
        return (
           <div>
              <div>Friend list container</div>
               <FriendList  {...this.props}></FriendList>
          </div>
        )
    }
}

function mapStateToProps(state,props){
    return{
       friends:state.friends
    }
} 

function mapDispatchToProps(dispatch){
       return bindActionCreators(actions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Friends);