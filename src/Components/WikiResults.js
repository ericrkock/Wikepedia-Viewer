import React from 'react';
import './WikiResults.css';

class WikiResults extends React.Component {
   render() {
      const WikiContent = (data) => {
         const contents = [];
         for (let x = 0; x < 10; x++) {
            const item = {};
            item.title = data[1][x];
            item.description = data[2][x];
            item.link = data[3][x];
            item.key = x;
            contents.push(item);
         };
         const contentToRender = contents.map((element) =>
            <li key={element.key}>
               <h1><a href={element.link} rel="noopener noreferrer" target="_blank">{element.title}</a></h1>
               <p>{element.description}</p>
            </li>
         );
         return contentToRender;
      }

      return (
         <div className="result-wrapper">
            <ul>
               {this.props.wikiItems &&
                  <li><h1>{this.props.wikiItems}</h1></li>}

               {this.props.content &&
                  <ul>{WikiContent(this.props.content)}</ul>}
            </ul>
         </div>
      );
   }
}


export default WikiResults;