import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:4000');

export const launchGame = cb => {
  socket.on('startGame', (socketId, playerColor) => cb(socketId, playerColor));
};

export const checkWhoPlays = cb => {
  socket.on('choseWhoPlays', (socketId, currentMorpionTab) =>
    cb(socketId, currentMorpionTab)
  );
};

export const otherTurn = (socketId, currentMorpionTab, cellTab) => {
  socket.emit('itsYourTurn', socketId, currentMorpionTab, cellTab);
};

export const checkGameIsWon = cb => {
  socket.on('gameIsWon', socketId => cb(socketId));
};
