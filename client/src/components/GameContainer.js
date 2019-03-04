import React from 'react';
import styled from 'styled-components';
import Cell from './CellElem';

const Morpion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: ${props => (props.isPlaying ? 'auto' : 'none')};
`;

const Row = styled.div`
  display: flex;
`;

const GameContainer = props => {
  return (
    <div>
      <h1>Game</h1>
      <Morpion isPlaying={props.isPlaying}>
        <Row>
          <Cell
            playerColor={props.playerColor}
            socketId={props.socketId}
            morpionTab={props.morpionTab}
            morpionCell={props.morpionTab[0]}
            changeGameTabOnClick={props.changeGameTabOnClick}
            morpionId={0}
          />
          <Cell
            playerColor={props.playerColor}
            socketId={props.socketId}
            morpionCell={props.morpionTab[1]}
            changeGameTabOnClick={props.changeGameTabOnClick}
            morpionId={1}
          />
          <Cell
            playerColor={props.playerColor}
            socketId={props.socketId}
            morpionCell={props.morpionTab[2]}
            changeGameTabOnClick={props.changeGameTabOnClick}
            morpionId={2}
          />
        </Row>
        <Row>
          <Cell
            playerColor={props.playerColor}
            socketId={props.socketId}
            morpionCell={props.morpionTab[3]}
            changeGameTabOnClick={props.changeGameTabOnClick}
            morpionId={3}
          />
          <Cell
            playerColor={props.playerColor}
            socketId={props.socketId}
            morpionCell={props.morpionTab[4]}
            changeGameTabOnClick={props.changeGameTabOnClick}
            morpionId={4}
          />
          <Cell
            playerColor={props.playerColor}
            socketId={props.socketId}
            morpionCell={props.morpionTab[5]}
            changeGameTabOnClick={props.changeGameTabOnClick}
            morpionId={5}
          />
        </Row>
        <Row>
          <Cell
            playerColor={props.playerColor}
            socketId={props.socketId}
            morpionCell={props.morpionTab[6]}
            changeGameTabOnClick={props.changeGameTabOnClick}
            morpionId={6}
          />
          <Cell
            playerColor={props.playerColor}
            socketId={props.socketId}
            morpionCell={props.morpionTab[7]}
            changeGameTabOnClick={props.changeGameTabOnClick}
            morpionId={7}
          />
          <Cell
            playerColor={props.playerColor}
            socketId={props.socketId}
            morpionCell={props.morpionTab[8]}
            changeGameTabOnClick={props.changeGameTabOnClick}
            morpionId={8}
          />
        </Row>
      </Morpion>
    </div>
  );
};

export default GameContainer;
