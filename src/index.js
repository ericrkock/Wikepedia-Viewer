import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ProjectHeader from './Components/ProjectHeader';
import ProjectFooter from './Components/ProjectFooter';
import * as serviceWorker from './serviceWorker';

class WikepediaViewer extends React.Component {
   render() {
      return (
         <div>
            <div className="header">
               <ProjectHeader />
            </div>

            <div className="footer">
               <ProjectFooter />
            </div>
         </div>
      );
   }
}

ReactDOM.render(<WikepediaViewer />, document.getElementById('root'));
