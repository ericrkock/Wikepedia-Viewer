import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ProjectHeader from './Components/ProjectHeader';
import WikiSearch from './Components/WikiSearch';
import WikiResults from './Components/WikiResults';
import ProjectFooter from './Components/ProjectFooter';

class WikepediaViewer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         test: undefined,
         wikisearch: undefined,
         button: "SUBMIT",
         variant: "outline-dark"
      }
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({wikisearch: event.target.value});
   }

   search = () => {
      console.log(this.state.wikisearch);
      if (this.state.button === "SUBMIT") {
         this.setState({
            test: "Submit Button Clicked",
            button: "RESET",
            variant: "warning"
         });
      } else {
         this.setState({
            test: "Reset Button Clicked",
            wikisearch: "",
            button: "SUBMIT",
            variant: "outline-dark"
         });
      }
   }

   render() {
      return (
         <div className="bg">
            <div>
               <ProjectHeader />
            </div>
            <div>
               <WikiSearch 
                  wikisearch = {this.state.wikisearch}
                  handleChange = {this.handleChange}
                  clicked = {this.search}
                  variant = {this.state.variant}
                  button = {this.state.button}
               />
               <WikiResults 
                  test = {this.state.test}
                  wikisearch = {this.state.wikisearch}
               />
            </div>
            <div>
               <ProjectFooter />
            </div>
         </div>
      );
   }
}

ReactDOM.render(<WikepediaViewer />, document.getElementById('root'));
