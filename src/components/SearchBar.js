import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    // Todo: make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Searchbar</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              //onChange={e => this.setState({ term: e.target.value })} equivalent to onInputChange fn above
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;