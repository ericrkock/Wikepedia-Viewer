import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import './WikiSearch.css';

class WikiSearch extends React.Component {
   render() {
      return (
         <div className="wiki-input">
            <a href="https://en.wikipedia.org/wiki/Special:Random" target="blank" alt="Random Articles">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Wikipedia%27s_W.svg"></img>
            </a>
            <input 
               type="text" 
               value = {this.props.wikisearch}
               onChange = {this.props.handleChange}
               placeholder="Enter a keyword ..." 
            />
            <Button 
               onClick = {this.props.clicked} 
               variant = {this.props.variant} 
               size="lg">
               {this.props.button}
            </Button>
         </div>
      );
   }
}

export default WikiSearch;