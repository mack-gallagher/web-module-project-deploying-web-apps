import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import {
         MOVE_PIECE,
         movePiece,
         ACTIVATE_PIECE,
         activatePiece
       } from '../actions';

const mapStateToProps = state => {
  return {
           board: state.board,
           active: state.activeDiv[0]?true:false,
           activePiece: state.activeDiv,
         }
}

function Board(props) {

  const { board, active, activePiece, dispatch } = props;

  return (
    <div className="Board">
      <div className="row y0">
        <div className="square y0 x0 light" 
        >
          { board[0][0].piece }
        </div>
        <div className="square y0 x1 dark"
        >
          { board[0][1].piece }
        </div>
        <div className="square y0 x2 light"
        >
          { board[0][2].piece }
        </div>
        <div className="square y0 x3 dark"
        >
          { board[0][3].piece }
        </div>
        <div className="square y0 x4 light"
        >
          { board[0][4].piece }
        </div>
        <div className="square y0 x5 dark"
        >
          { board[0][5].piece }
        </div>
        <div className="square y0 x6 light"
        >
          { board[0][6].piece }
        </div>
        <div className="square y0 x7 dark"
        >
          { board[0][7].piece }
        </div>
      </div>  
      <div className="row y1">
        <div className="square y1 x0 dark"
        >
          { board[1][0].piece }
        </div>
        <div className="square y1 x1 light"
        >
          { board[1][1].piece }
        </div>
        <div className="square y1 x2 dark"
        >
          { board[1][2].piece }
        </div>
        <div className="square y1 x3 light"
        >
          { board[1][3].piece } 
        </div>
        <div className="square y1 x4 dark"
        >
          { board[1][4].piece }
        </div>
        <div className="square y1 x5 light"
        >
          { board[1][5].piece }
        </div>
        <div className="square y1 x6 dark"
        >
          { board[1][6].piece }
        </div>
        <div className="square y1 x7 light"
        >
          { board[1][7].piece }
        </div>
      </div>
      <div className="row y2">
        <div className="square y2 x0 light"
        >
          { board[2][0].piece }
        </div>
        <div className="square y2 x1 dark"
        >
          { board[2][1].piece }
        </div>
        <div className="square y2 x2 light"
        >
          { board[2][2].piece }
        </div>
        <div className="square y2 x3 dark"
        >
          { board[2][3].piece }
        </div>
        <div className="square y2 x4 light"
        >
          { board[2][4].piece }
        </div>
        <div className="square y2 x5 dark"
        >
          { board[2][5].piece }
        </div>
        <div className="square y2 x6 light"
        >
          { board[2][6].piece }
        </div>
        <div className="square y2 x7 dark"
        >
          { board[2][7].piece }
        </div>
      </div>
      <div className="row y3">
        <div className="square y3 x0 dark"
        >
          { board[3][0].piece }
        </div>
        <div className="square y3 x1 light"
        >
          { board[3][1].piece }
        </div>
        <div className="square y3 x2 dark"
        >
          { board[3][2].piece }
        </div>
        <div className="square y3 x3 light"
        >
          { board[3][3].piece }
        </div>
        <div className="square y3 x4 dark"
        >
          { board[3][4].piece }
        </div>
        <div className="square y3 x5 light"
        >
          { board[3][5].piece }
        </div>
        <div className="square y3 x6 dark"
        >
          { board[4][6].piece }
        </div>
        <div className="square y3 x7 light"
        >
          { board[4][7].piece }
        </div>
      </div>
      <div className="row y4">
        <div className="square y4 x0 light"
        >
          { board[5][0].piece }
        </div>
        <div className="square y4 x1 dark"
        >
          { board[5][1].piece }
        </div>
        <div className="square y4 x2 light"
        >
          { board[5][2].piece }
        </div>
        <div className="square y4 x3 dark"
        >
          { board[5][3].piece }
        </div>
        <div className="square y4 x4 light"
        >
          { board[5][4].piece }
        </div>
        <div className="square y4 x5 dark"
        >
          { board[5][5].piece }
        </div>
        <div className="square y4 x6 light"
        >
          { board[5][6].piece }
        </div>
        <div className="square y4 x7 dark"
        >
          { board[5][7].piece }
        </div>
      </div>
      <div className="row y5">
        <div className="square y5 x0 dark"
        >
          { board[5][0].piece }
        </div>
        <div className="square y5 x1 light"
        >
          { board[5][1].piece }
        </div>
        <div className="square y5 x2 dark"
        >
          { board[5][2].piece }
        </div>
        <div className="square y5 x3 light"
        >
          { board[5][3].piece }
        </div>
        <div className="square y5 x4 dark"
        >
          { board[5][4].piece }
        </div>
        <div className="square y5 x5 light"
        >
          { board[5][5].piece }
        </div>
        <div className="square y5 x6 dark"
        >
          { board[5][6].piece }
        </div>
        <div className="square y5 x7 light"
        >
          { board[5][7].piece }
        </div>
      </div>
      <div className="row y6">
        <div className="square y6 x0 light"
        >
          { board[6][0].piece }
        </div>
        <div className="square y6 x1 dark"
        >
          { board[6][1].piece }
        </div>
        <div className="square y6 x2 light"
        >
          { board[6][2].piece }
        </div>
        <div className="square y6 x3 dark"
        >
          { board[6][3].piece }
        </div>
        <div className="square y6 x4 light"
        >
          { board[6][4].piece }
        </div>
        <div className="square y6 x5 dark"
        >
          { board[6][5].piece }
        </div>
        <div className="square y6 x6 light"
        >
          { board[6][6].piece }
        </div>
        <div className="square y6 x7 dark"
        >
          { board[6][7].piece }
        </div>
      </div>
      <div className="row y7"
      >
        <div className="square y7 x0 dark">
          { board[7][0].piece }
        </div>
        <div className="square y7 x1 light"
        >
          { board[7][1].piece }
        </div>
        <div className="square y7 x2 dark"
        >
          { board[7][2].piece }
        </div>
        <div className="square y7 x3 light"
        >
          { board[7][3].piece }
        </div>
        <div className="square y7 x4 dark"
        >
          { board[7][4].piece }
        </div>
        <div className="square y7 x5 light"
        >
          { board[7][5].piece }
        </div>
        <div className="square y7 x6 dark"
        >
          { board[7][6].piece }
        </div>
        <div className="square y7 x7 light"
        >
          { board[7][7].piece }
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Board);
