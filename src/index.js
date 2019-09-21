import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ProjectHeader from './Components/ProjectHeader';
import WikiSearch from './Components/WikiSearch'
import ProjectFooter from './Components/ProjectFooter';

class WikepediaViewer extends React.Component {
   render() {
      return (
         <div>
            <div className="header">
               <ProjectHeader />
            </div>
            <WikiSearch />
            <div className="footer">
               <ProjectFooter />
            </div>
         </div>
      );
   }
}

ReactDOM.render(<WikepediaViewer />, document.getElementById('root'));
