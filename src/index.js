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
         SearchResult01: "",
         SearchResult02: "",
         SearchResult03: "",
         SearchResult04: "",
         SearchResult05: "",
         SearchResult06: "",
         SearchResult07: "",
         SearchResult08: "",
         SearchResult09: "",
         SearchResult10: "",
         wikiItems: undefined
      };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({ wikiSearch: event.target.value });
   }

   search = () => {
      if (this.state.wikiItems != undefined || this.state.wikiSearch != "") {
         const keyWord = this.state.wikiSearch;
         const url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${keyWord}&callback=?`
         axios.get(url).then((res) => {
            const data = res.data;
               if (this.state.button === "SEARCH") {
                  for (let x = 0; x <= 10; x++) {
                     this.setState({
                        SearchResult01: data[3][i]
                     })
                  }
               this.setState({
                  button: "RESET",
                  variant: "warning",
                  wikiItems: data
               });
            } else {
               this.setState({
                  wikiSearch: "",
                  button: "SEARCH",
                  variant: "outline-dark",
                  SearchResult01: "",
                  SearchResult02: "",
                  SearchResult03: "",
                  SearchResult04: "",
                  SearchResult05: "",
                  SearchResult06: "",
                  SearchResult07: "",
                  SearchResult08: "",
                  SearchResult09: "",
                  SearchResult10: "",
                  wikiItems: undefined
               });
            };   
         });
      } else {
         this.setState({wikiItems: "Enter a Keyword ..."})
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
