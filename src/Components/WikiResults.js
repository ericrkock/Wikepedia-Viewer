import React from 'react';
import './WikiResults.css';

class WikiResults extends React.Component {
   render() {
      return (
         <div className="result-wrapper">
            <ul>
               {this.props.wikiItems &&
                  <li><h1>{this.props.wikiItems}</h1></li>}
               {this.props.wikiTitle &&
                  <li><h1><a href={this.props.wikiLink} rel="noopener noreferrer" target="_blank">{this.props.wikiTitle}</a></h1>
                     <p>{this.props.wikiDescription}</p>
                  </li>}
            </ul>
         </div>
      );
   }
}


export default WikiResults;