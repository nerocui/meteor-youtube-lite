import React, {Component} from 'react';
import TopBar from './Top_Bar';

class SearchBar extends Component {//extends react components to have more functionality
    constructor(probs) {
        super(probs);

        this.state = {term: ''};//as user type, we want to update
                                //this 'term' to what the user is typing
        //state is a js thing for every class based component
    }

    
	onFormSubmit(event){
		event.preventDefault();
	}

    render() {//syntax used for function in class
         return (
             <div className="search-bar search col-12 col-sm-12 col-md-12 col-lg-12">
              <TopBar/>
              <form onSubmit={this.onFormSubmit}
                    className="search-form">
                <input
                    placeholder=" Start typing to search..."
                    className="form-control"
                    value = {this.state.term} //controlled state value, when user change the input, the state gets to be set as the event, and then the value is set to the state
                    onChange={event => this.onInputChange(event.target.value)} />
              </form>
              
            </div>
         );//when write JSX elements in js we need to put curly braces
    }


    onInputChange(term) {
      this.setState({term});
      this.props.onSearch(term);
    }
}


export default SearchBar;