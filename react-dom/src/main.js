import React from 'react';
import ReactDom from 'react-dom';

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>main component1</div>
        )
    }
}


document.body.style.backgroundColor = "red";

document.getElementById("p1").innerHTML = "New text!";
var tt=document.getElementById("myBtn")
tt.addEventListener("click", loadDoc);

function displayDate() {
   // document.getElementById("demo").innerHTML = "vivek";
}




function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhttp.send();
}
function myFunction(xml) {
  
  document.getElementById("demo").innerHTML = xml;
}

ReactDom.render(<Main/>,document.getElementById('app'));