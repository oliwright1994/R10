import React, {Component} from 'react';
const FavesContext = React.createContext();
import {createFave, deleteFave, queryFaves} from '../../config/models';

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  getFavesSessionIds = async () => {
    const savedFaves = await queryFaves();
    const faveIds = savedFaves.map(fave => fave[0]);
    this.setState({faveIds});
  };

  addFaveSession = async sessionId => {
    try {
      await createFave(sessionId);
      this.getFavesSessionIds();
    } catch (error) {
      throw error;
    }
  };

  removeFaveSession = async sessionId => {
    try {
      await deleteFave(sessionId);
      this.getFavesSessionIds();
    } catch (error) {
      throw error;
    }
  };

  componentDidMount() {
    this.getFavesSessionIds();
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          removeFaveSession: this.removeFaveSession,
          addFaveSession: this.addFaveSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export {FavesProvider};
export default FavesContext;
