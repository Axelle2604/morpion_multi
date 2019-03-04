import React, { Component } from 'react';
import StartScreen from './components/StartScreen';
import GameContainer from './components/GameContainer';
import { launchGame, checkWhoPlays, checkGameIsWon } from './services/socket';
import _ from 'lodash';
import './App.css';
import { otherTurn } from './services/socket';

const morpionTabBase = [0, 0, 0, 0, 0, 0, 0, 0, 0];

class App extends Component {
  state = {
    isLoading: true,
    isPlaying: false,
    socketId: '',
    playerColor: '',
    morpionTab: morpionTabBase,
    isWin: false,
  };

  componentDidMount = () => {
    launchGame((socketId, playerColor) => {
      this.setState({ isLoading: false, socketId, playerColor });
    });

    checkWhoPlays((socketId, currentMorpionTab) => {
      this.setState({ morpionTab: currentMorpionTab }, () =>
        console.log(this.state.morpionTab)
      );
      if (this.state.socketId === socketId) {
        this.setState({ isPlaying: true }, () => console.log('play'));
      } else {
        this.setState({ isPlaying: false }, () => console.log("don't play"));
      }
    });

    checkGameIsWon(socket => {
      if (socket === this.state.socketId) {
        console.log('Gagné');
      } else {
        console.log('Perdu');
      }
    });
  };

  changeGameTabOnClick = (cellTab, colorId) => {
    const { socketId, morpionTab } = this.state;
    morpionTab.splice(cellTab, 1, colorId);

    otherTurn(socketId, morpionTab, cellTab);
  };

  render() {
    const {
      isLoading,
      isPlaying,
      playerColor,
      socketId,
      morpionTab,
    } = this.state;
    return (
      <div className="App">
        {isLoading && <StartScreen />}
        {!isLoading && (
          <GameContainer
            isPlaying={isPlaying}
            playerColor={playerColor}
            socketId={socketId}
            morpionTab={morpionTab}
            changeGameTabOnClick={this.changeGameTabOnClick}
          />
        )}
      </div>
    );
  }
}

export default App;
