let friends=[{name:'viv1',id:1},{name:'viv2',id:2},{name:'kapilv3',id:3},{name:'viv4',id:4}]

export  default function friends(state=friends,action){

       switch (action.type){
           case 'ADD_FRIEND':
            return [...state,{name:'viek45'+action.id,id:action.id}];
           case 'DELETE_FRIEND':{
            let newState = Object.assign([], state);
             newState = state.filter(cat => {
              return cat.id !== action.id
            })
           // newState.splice(indexOfCatToDelete, 1);
            return newState;
           }
             
           case 'STAR_FRIEND':
           let newState = Object.assign([], state);
             newState= state.map(todo =>{
             if(todo.id === action.id){
                 Object.assign( todo,{completed:!todo.completed})
               // {todo['completed']=!todo.completed}
             }
             return todo;
           })
          return newState;
           default:
              return state;    
             
       }
}