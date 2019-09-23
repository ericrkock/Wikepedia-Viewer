import React from 'react';
import './WikiResults.css';

class WikiResults extends React.Component {
   render() {
      const { error, wikiItems } = this.props;
      if (error) {
         return <div>Error: {error.message}</div>
      } else {

         return (
            <div className="result-wrapper">
               <ul>
                  {wikiItems.map(item => (
                     <li key={item} >
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
         );
      }
   }
}

export default WikiResults;