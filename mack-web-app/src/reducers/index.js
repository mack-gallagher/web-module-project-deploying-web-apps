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

      const ourPiece = state.board[state.activeDiv[0]][state.activeDiv[1]].piece;

      if (!ourPiece) {
        return { ...state, activeDiv: [null,null] };
      }

      newBoard[state.activeDiv[0]][state.activeDiv[1]].piece = '';
      newBoard[action.payload.c][action.payload.d].piece = ourPiece;

      console.log(newBoard);

      return { ...state, 
               board: newBoard,
               activeDiv: [null,null],
             }; 
    default:
      return state;
  }
}

export default reducer;
