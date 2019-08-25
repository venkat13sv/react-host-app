import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.searchCases=this.searchCases.bind(this);
    this.inputobj={
      //user input to search
      searchobj:{
        "caseId":"",
        "caseName":"",
        "caseType":""
      },
      //user roles and additional data can be sent here
      userobj:{
        "role":"admin",
        "name":"username"
      }
    };

  }


  searchCases(){
    this.inputobj.searchobj= {
      "caseId":this.caseId.value,
      "caseName":this.caseName.value,
      "caseType":this.caseType.value
    };
    console.log(this.inputobj);
    this.forceUpdate();

  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Case Information Search.</h1>
          <div className="title"></div>
            <div className="search ">
               <input type="text" name="caseId"  className="searchTerm" placeholder="Case Id" defaultValue="" ref={(caseId) => { this.caseId = caseId }} />
               <input type="text" name="caseName" className="searchTerm" placeholder="Case Name" defaultValue="" ref={(caseName) => { this.caseName = caseName }}/>
               <input type="text" name="caseType" className="searchTerm" placeholder="Case Type" defaultValue="" ref={(caseType) => { this.caseType = caseType}} />
               <button type="submit" className="searchButton" onClick={this.searchCases}>
                  <i className="fa fa-search"></i>
                </button>
              </div>
          </header>
          <case-search inputobj={JSON.stringify(this.inputobj)}></case-search>
          </div>
    );
  }
}

export default App;
