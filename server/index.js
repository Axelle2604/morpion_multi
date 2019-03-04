const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const sockets = [];
const colors = ['blue', 'red'];
const morpionTabBase = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const choseWhoPlays = (socketId, currentMorpionTab) => {
  if (socketId === sockets[0].id) {
    console.log('Player 2');
    sockets.forEach(socket => {
      socket.emit('choseWhoPlays', sockets[1].id, currentMorpionTab);
    });
  } else {
    sockets.forEach(socket => {
      console.log('Player 1');
      socket.emit('choseWhoPlays', sockets[0].id, currentMorpionTab);
    });
  }
};

const checkTurnToPlay = () => {
  sockets.forEach(socket => {
    socket.on('itsYourTurn', (socketId, currentMorpionTab, cellTab) => {
      checkGameIsWin(cellTab, currentMorpionTab);
      choseWhoPlays(socketId, currentMorpionTab);
    });
  });
};

const victoryConditionsTab = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// WIP CONDITION DE VICTOIRE

const checkGameIsWin = (cellTab, currentMorpionTab) => {
  console.log('Check Win');
  console.log(cellTab);
  const filteredVictoryCond = victoryConditionsTab.filter(tab =>
    tab.find(cellTab => cellTab)
  );
  console.log(filteredVictoryCond);
};

io.on('connection', socket => {
  if (sockets.length <= 1) {
    console.log('New player is coming !');
    sockets.push(socket);
    socket.emit('startGame', socket.id, colors[sockets.length - 1]);

    if (sockets.length > 1) {
      choseWhoPlays(sockets[0].id, morpionTabBase);
    }
    checkTurnToPlay();
  } else {
    console.log(
      'The maximum number of players able to join the game is reached.'
    );
  }
});

server.listen(4000, () => console.log('Server started'));
