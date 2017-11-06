import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemsFetchData} from '../actions/action';
class ItemsList extends Component{
    constructor(){
        super()
    }
    componentDidMount() {
       
    }
    getList(){
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }
    render(){
        if(this.props.isLoading){
           return (<h3>Loading list.......</h3>)
        }
        return (
            <div>
                 <h1>List items</h1>
                 <ul>
                     <button onClick={this.getList.bind(this)}>Fetch List data</button>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
             </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);