import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  width: 100px;
  height: 100px;
  border: black solid 1px;
  background-color: ${props =>
    props.morpionCell === 0 ? 'white' : props.morpionCell};
  &:hover {
    cursor: pointer;
  }
`;

const CellElem = props => {
  const onClickCell = () => {
    console.log(props.morpionId, props.playerColor);
    props.changeGameTabOnClick(props.morpionId, props.playerColor);
  };

  return (
    <Cell
      onClick={onClickCell}
      color={props.playerColor}
      morpionCell={props.morpionCell}
    />
  );
};

export default CellElem;
