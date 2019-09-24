import React from 'react';
import './WikiResults.css';

class WikiResults extends React.Component {
   render() {
      return (
         <div className="result-wrapper">
            <ul>
               {this.props.wikiItems && 
                  <li>{this.props.wikiItems}</li>}
            </ul>
         </div>
      );
   }
}


export default WikiResults;