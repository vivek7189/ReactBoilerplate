import React from 'react';

class FriendList extends React.Component{
    constructor(){
        super();
    }
    render(){
       let divStyle={
           float:'left',
           marginLeft:'10px'
       }
        return (
           <div>
               <h2>Friend list </h2>
               {
                     this.props.friends.length >=0 && this.props.friends.map((friend,index)=>{
                       return( 
                                <li key={index}>
                                   <div style={divStyle}> {friend.name} {friend.completed ? "Complete":'Not completed'}</div> 
                                   <div style={divStyle} onClick={this.props.deleteFriend.bind(this,friend.id)}> Del</div>
                                   <div style={divStyle} onClick={this.props.addFriend.bind(this,this.props.friends.length+1)}> Add</div>
                                   <div style={divStyle} onClick={this.props.starFriend.bind(this,friend.id)}> Toggle</div>
                                </li>
                                )
                    })
               }
           </div>
        )
    }
}


export default FriendList;