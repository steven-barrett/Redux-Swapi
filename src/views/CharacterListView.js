import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { getCharacter } from '../actions/index';
import Loader from 'react-loader-spinner';

class CharacterListView extends React.Component {
  constructor() {
    super();    
  }

  componentDidMount() {    
    this.props.getCharacter();
  }

  render() {
    if (this.props.isLoading) {
             return (
              <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
             )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />        
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({  
  error: state.charsReducer.error,
  isLoading: state.charsReducer.isLoading,
  characters: state.charsReducer.characters
});

export default connect(
  mapStateToProps,
  { getCharacter }
)(CharacterListView);
