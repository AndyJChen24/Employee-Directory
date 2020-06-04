import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import EmployeeTable from "../components/EmployeeTable";
import Row from "../components/Row";
import SearchBar from "../components/SearchBar"

class Search extends Component {
    state ={
        search: "",
        results: [],
        error: ""
    };

    componentDidMount() {
      console.log("mounted")
        API.getEmployee()
            .then(res=> {
              this.setState({ results: res.data.results})
              console.log(this.state.results)
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        console.log(this.state.search)
    };

    filterByName = event =>{
      event.preventDefault();
      if(this.state.search !== ""){
        const sortedLastName = this.state.results.filter(result => this.state.search ===result.name.last);
        const sortedFirstName = this.state.results.filter(result => this.state.search ===result.name.first);
        const newResult = sortedLastName.concat(sortedFirstName)
        this.setState({results:newResult})
      }else{
        API.getEmployee()
          .then(res=> {
            this.setState({ results: res.data.results})
            console.log(this.state.results)
          })
          .catch(err => console.log(err));
      }
    }

    handleSort = event =>{
      event.preventDefault();
      console.log("Sort")
      console.log(this.state.results.sort(function(a,b){
        return a.name.last - b.name.last
      }))
      this.setState({results: this.state.results.sort(function(nameA,nameB){
        if (nameA.name.last < nameB.name.last) {
          return -1;
        }
        if (nameA.name.last > nameB.name.last) {
          return 1;
        }
        // names must be equal
        return 0;
      })})
    }

      
  render() {
    return (
      
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search By Employee!</h1>
        
        <SearchBar
          value={this.state.search}
          handleFormSubmit={this.filterByName}
          handleInputChange={this.handleInputChange}

        />
        <EmployeeTable handleSort={this.handleSort}>
          {this.state.results.map(result =>
            (
              <Row                                 
                key={result.id.value}
                picture={result.picture.medium}
                firstName={result.name.first}
                lastName={result.name.last}
                phone={result.phone}
                email={result.email}
              />
            )
          )}
        </EmployeeTable>
        
      </Container>
          
        );
      }
}
    
export default Search;