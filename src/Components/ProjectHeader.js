import React from 'react';
import './project.css';

class ProjectHeader extends React.Component {
   render() {
      return (
         <div className="header">
            <h1>Wikepedia Viewer</h1>
            <hr className="divide-line-header" />
            <p>A FCC Take Home Project</p>
      </div>
      );
   }
}

export default ProjectHeader;