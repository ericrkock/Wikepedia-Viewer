import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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
         button: "SEARCH",
         variant: "outline-dark",
         content: undefined
      };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({ wikiSearch: event.target.value });
   }

   search = () => {
      if (this.state.wikiItems !== undefined || this.state.wikiSearch !== "") {
         const keyWord = this.state.wikiSearch;
         const url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${keyWord}&format=json`
         axios.get(url).then((res) => {
            const data = res.data;
            if (this.state.button === "SEARCH") {
               this.setState({
                  button: "RESET",
                  variant: "warning",
                  content: data
               });
            } else {
               this.setState({
                  wikiSearch: "",
                  button: "SEARCH",
                  variant: "outline-dark",
                  content: undefined
               });
            };
         });
      } else {
         this.setState({ wikiItems: "Enter a Keyword ..." })
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
                  content={this.state.content}
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
