import React from 'react';
import Button from "react-bootstrap/Button";

class WikiSearch extends React.Component {
   render() {
      return (
         <div className="wiki-input">
            <a href="https://en.wikipedia.org/wiki/Special:Random" target="blank">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Wikipedia%27s_W.svg"></img>
            </a>
            <input className="from-control" id="searchTerm" />
            <Button type="submit" variant="outline-primary" size="lg" value="Submit">SUBMIT</Button>
             <ul id="output">
            
            </ul>
         </div>
      );
   }
}

export default WikiSearch;