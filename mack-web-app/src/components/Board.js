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
           active: state.activeDiv[0]!==null?true:false,
           activePiece: state.activeDiv,
         }
}

function Board(props) {

  const { board, active, activePiece, dispatch } = props;

  console.log('active?',active);

  console.log('board: ',board);

  return (
    <div className="Board">
      <div className="row y0">
        <div 
          className="square y0 x0 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[0,0])):() => dispatch(activatePiece([0,0])) }
        >
          { board[0][0].piece }
        </div>
        <div 
          className="square y0 x1 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[0,1])):() => dispatch(activatePiece([0,1])) }
        >
          { board[0][1].piece }
        </div>
        <div 
          className="square y0 x2 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[0,2])):() => dispatch(activatePiece([0,2])) }
        >
          { board[0][2].piece }
        </div>
        <div 
          className="square y0 x3 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[0,3])):() => dispatch(activatePiece([0,3])) }
        >
          { board[0][3].piece }
        </div>
        <div 
          className="square y0 x4 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[0,4])):() => dispatch(activatePiece([0,4])) }
        >
          { board[0][4].piece }
        </div>
        <div 
          className="square y0 x5 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[0,5])):() => dispatch(activatePiece([0,5])) }
        >
          { board[0][5].piece }
        </div>
        <div 
          className="square y0 x6 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[0,6])):() => dispatch(activatePiece([0,6])) }
        >
          { board[0][6].piece }
        </div>
        <div 
          className="square y0 x7 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[0,7])):() => dispatch(activatePiece([0,7])) }
        >
          { board[0][7].piece }
        </div>
      </div>  
      <div className="row y1">
        <div 
          className="square y1 x0 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[1,0])):() => dispatch(activatePiece([1,0])) }
        >
          { board[1][0].piece }
        </div>
        <div 
          className="square y1 x1 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[1,1])):() => dispatch(activatePiece([1,1])) }
        >
          { board[1][1].piece }
        </div>
        <div 
          className="square y1 x2 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[1,2])):() => dispatch(activatePiece([1,2])) }
        >
          { board[1][2].piece }
        </div>
        <div 
          className="square y1 x3 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[1,3])):() => dispatch(activatePiece([1,3])) }
        >
          { board[1][3].piece } 
        </div>
        <div 
          className="square y1 x4 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[1,4])):() => dispatch(activatePiece([1,4])) }
        >
          { board[1][4].piece }
        </div>
        <div 
          className="square y1 x5 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[1,5])):() => dispatch(activatePiece([1,5])) }
        >
          { board[1][5].piece }
        </div>
        <div 
          className="square y1 x6 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[1,6])):() => dispatch(activatePiece([1,6])) }
        >
          { board[1][6].piece }
        </div>
        <div 
          className="square y1 x7 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[1,7])):() => dispatch(activatePiece([1,7])) }
        >
          { board[1][7].piece }
        </div>
      </div>
      <div className="row y2">
        <div 
          className="square y2 x0 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[2,0])):() => dispatch(activatePiece([2,0])) }
        >
          { board[2][0].piece }
        </div>
        <div 
          className="square y2 x1 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[2,1])):() => dispatch(activatePiece([2,1])) }
        >
          { board[2][1].piece }
        </div>
        <div 
          className="square y2 x2 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[2,2])):() => dispatch(activatePiece([2,2])) }
        >
          { board[2][2].piece }
        </div>
        <div 
          className="square y2 x3 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[2,3])):() => dispatch(activatePiece([2,3])) }
        >
          { board[2][3].piece }
        </div>
        <div 
          className="square y2 x4 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[2,4])):() => dispatch(activatePiece([2,4])) }
        >
          { board[2][4].piece }
        </div>
        <div 
          className="square y2 x5 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[2,5])):() => dispatch(activatePiece([2,5])) }
        >
          { board[2][5].piece }
        </div>
        <div 
          className="square y2 x6 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[2,6])):() => dispatch(activatePiece([2,6])) }
        >
          { board[2][6].piece }
        </div>
        <div 
          className="square y2 x7 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[2,7])):() => dispatch(activatePiece([2,7])) }
        >
          { board[2][7].piece }
        </div>
      </div>
      <div className="row y3">
        <div 
          className="square y3 x0 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[3,0])):() => dispatch(activatePiece([3,0])) }
        >
          { board[3][0].piece }
        </div>
        <div 
          className="square y3 x1 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[3,1])):() => dispatch(activatePiece([3,1])) }
        >
          { board[3][1].piece }
        </div>
        <div 
          className="square y3 x2 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[3,2])):() => dispatch(activatePiece([3,2])) }
        >
          { board[3][2].piece }
        </div>
        <div 
          className="square y3 x3 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[3,3])):() => dispatch(activatePiece([3,3])) }
        >
          { board[3][3].piece }
        </div>
        <div 
          className="square y3 x4 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[3,4])):() => dispatch(activatePiece([3,4])) }
        >
          { board[3][4].piece }
        </div>
        <div 
          className="square y3 x5 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[3,5])):() => dispatch(activatePiece([3,5])) }
        >
          { board[3][5].piece }
        </div>
        <div 
          className="square y3 x6 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[3,6])):() => dispatch(activatePiece([3,6])) }
        >
          { board[3][6].piece }
        </div>
        <div 
          className="square y3 x7 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[3,7])):() => dispatch(activatePiece([3,7])) }
        >
          { board[3][7].piece }
        </div>
      </div>
      <div className="row y4">
        <div 
          className="square y4 x0 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[4,0])):() => dispatch(activatePiece([4,0])) }
        >
          { board[4][0].piece }
        </div>
        <div 
          className="square y4 x1 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[4,1])):() => dispatch(activatePiece([4,1])) }
        >
          { board[4][1].piece }
        </div>
        <div 
          className="square y4 x2 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[4,2])):() => dispatch(activatePiece([4,2])) }
        >
          { board[4][2].piece }
        </div>
        <div 
          className="square y4 x3 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[4,3])):() => dispatch(activatePiece([4,3])) }
        >
          { board[4][3].piece }
        </div>
        <div 
          className="square y4 x4 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[4,4])):() => dispatch(activatePiece([4,4])) }
        >
          { board[4][4].piece }
        </div>
        <div 
          className="square y4 x5 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[4,5])):() => dispatch(activatePiece([4,5])) }
        >
          { board[4][5].piece }
        </div>
        <div 
          className="square y4 x6 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[4,6])):() => dispatch(activatePiece([4,6])) }
        >
          { board[4][6].piece }
        </div>
        <div 
          className="square y4 x7 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[4,7])):() => dispatch(activatePiece([4,7])) }
        >
          { board[4][7].piece }
        </div>
      </div>
      <div className="row y5">
        <div 
          className="square y5 x0 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[5,0])):() => dispatch(activatePiece([5,0])) }
        >
          { board[5][0].piece }
        </div>
        <div 
          className="square y5 x1 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[5,1])):() => dispatch(activatePiece([5,1])) }
        >
          { board[5][1].piece }
        </div>
        <div 
          className="square y5 x2 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[5,2])):() => dispatch(activatePiece([5,2])) }
        >
          { board[5][2].piece }
        </div>
        <div 
          className="square y5 x3 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[5,3])):() => dispatch(activatePiece([5,3])) }
        >
          { board[5][3].piece }
        </div>
        <div 
          className="square y5 x4 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[5,4])):() => dispatch(activatePiece([5,4])) }
        >
          { board[5][4].piece }
        </div>
        <div 
          className="square y5 x5 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[5,5])):() => dispatch(activatePiece([5,5])) }
        >
          { board[5][5].piece }
        </div>
        <div 
          className="square y5 x6 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[5,6])):() => dispatch(activatePiece([5,6])) }
        >
          { board[5][6].piece }
        </div>
        <div 
          className="square y5 x7 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[5,7])):() => dispatch(activatePiece([5,7])) }
        >
          { board[5][7].piece }
        </div>
      </div>
      <div className="row y6">
        <div 
          className="square y6 x0 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[6,0])):() => dispatch(activatePiece([6,0])) }
        >
          { board[6][0].piece }
        </div>
        <div 
          className="square y6 x1 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[6,1])):() => dispatch(activatePiece([6,1])) }
        >
          { board[6][1].piece }
        </div>
        <div 
          className="square y6 x2 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[6,2])):() => dispatch(activatePiece([6,2])) }
        >
          { board[6][2].piece }
        </div>
        <div 
          className="square y6 x3 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[6,3])):() => dispatch(activatePiece([6,3])) }
        >
          { board[6][3].piece }
        </div>
        <div 
          className="square y6 x4 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[6,4])):() => dispatch(activatePiece([6,4])) }
        >
          { board[6][4].piece }
        </div>
        <div 
          className="square y6 x5 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[6,5])):() => dispatch(activatePiece([6,5])) }
        >
          { board[6][5].piece }
        </div>
        <div 
          className="square y6 x6 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[6,6])):() => dispatch(activatePiece([6,6])) }
        >
          { board[6][6].piece }
        </div>
        <div 
          className="square y6 x7 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[6,7])):() => dispatch(activatePiece([6,7])) }
        >
          { board[6][7].piece }
        </div>
      </div>
      <div className="row y7">
        <div 
          className="square y7 x0 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[7,0])):() => dispatch(activatePiece([7,0])) }
        >
          { board[7][0].piece }
        </div>
        <div 
          className="square y7 x1 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[7,1])):() => dispatch(activatePiece([7,1])) }
        >
          { board[7][1].piece }
        </div>
        <div 
          className="square y7 x2 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[7,2])):() => dispatch(activatePiece([7,2])) }
        >
          { board[7][2].piece }
        </div>
        <div 
          className="square y7 x3 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[7,3])):() => dispatch(activatePiece([7,3])) }
        >
          { board[7][3].piece }
        </div>
        <div 
          className="square y7 x4 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[7,4])):() => dispatch(activatePiece([7,4])) }
        >
          { board[7][4].piece }
        </div>
        <div 
          className="square y7 x5 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[7,5])):() => dispatch(activatePiece([7,5])) }
        >
          { board[7][5].piece }
        </div>
        <div 
          className="square y7 x6 dark"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[7,6])):() => dispatch(activatePiece([7,6])) }
        >
          { board[7][6].piece }
        </div>
        <div 
          className="square y7 x7 light"
          onClick={ active?() => dispatch(movePiece([activePiece[0],activePiece[1]],[7,7])):() => dispatch(activatePiece([7,7])) }
        >
          { board[7][7].piece }
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Board);
