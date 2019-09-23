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
         wikiSearch: "",
         button: "SUBMIT",
         variant: "outline-dark",
         error: null,
         isLoaded: false,
         wikiItems: []
      };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({ wikiSearch: event.target.value });
   }



   search = () => {
      if (this.state.button === "SUBMIT") {
         this.setState({
            button: "RESET",
            variant: "warning",
         });
         fetch("https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + this.state.wikiSearch + "&callback=?")
            .then(res => res.json())
            .then(
               (result) => {
                  console.log("Result:", result);
                  this.setState({
                     isLoaded: true,
                     wikiItems: result
                  });
               },
               (error) => {
                  this.setState({
                     isLoaded: true,
                     error
                  });
               }
            )
      } else {
         this.setState({
            wikiSearch: "",
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
                  wikiSearch={this.state.wikiSearch}
                  handleChange={this.handleChange}
                  clicked={this.search}
                  variant={this.state.variant}
                  button={this.state.button}
               />
               <WikiResults
                  wikiItems={this.state.wikiItems}
                  error={this.state.error}
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
