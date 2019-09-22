import React from 'react';
import './WikiResults.css';

class WikiResults extends React.Component {
   render() {
      return (
         <div className="result-wrapper">
            <p>{this.props.test}</p>
            <p>Searching for: {this.props.wikisearch}</p>
         </div>
      );
   }
}

export default WikiResults;