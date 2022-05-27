import { MOVE_PIECE, 
         movePiece,
         ACTIVATE_PIECE,
         activatePiece 
       } from '../actions';


const initialState = {
                       board: [
                                [ 
                                  {
                                    piece: '♜',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♞',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♝',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♛',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♚',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♝',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♞',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♜',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                ],
                                [ 
                                  {
                                    piece: '♟',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♟',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♟',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♟',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♟',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♟',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♟',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♟',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                ],
                                [ 
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                ],
                                [
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  }, 
                                ],
                                [
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  }, 
                                ],
                                [
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  }, 
                                ],
                                [ 
                                  {
                                    piece: '♙',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♙',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♙',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♙',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♙',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♙',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♙',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♙',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                ],
                                [
                                  {
                                    piece: '♖',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♘',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♗',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♕',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♔',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♗',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♘',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  },
                                  {
                                    piece: '♖',
                                    active: false,
                                    moves: [],
                                    captures: [],
                                  }, 
                                ],
                              ],

                       activeDiv: [null,null],
                     };

function reducer (state = initialState, action) {
  switch(action.type) {
    case ACTIVATE_PIECE:
      return {
               ...state,
               activeDiv: [action.payload.y,action.payload.x]
             }
    case MOVE_PIECE:
      const newBoard = [...state.board];

      newBoard[c][d].piece = state.board[state.activeDiv.y][state.activeDiv.x].piece;

      newBoard[a][b].piece = '';

      return { ...state, 
               board: newBoard,
               activeDiv: [null,null],
             }; 
    default:
      return state;
  }
}

export default reducer;
