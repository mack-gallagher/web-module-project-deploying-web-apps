export const MOVE_PIECE = "MOVE_PIECE";
export const ACTIVATE_PIECE = "ACTIVATE_PIECE";

export const activatePiece = ([y,x]) => {
  return (
    {
      type: ACTIVATE_PIECE,
      payload: {
                 y: y,
                 x: x,
               }
    }
  )
}

export const movePiece = ([a,b],[c,d]) => {
  return (
    {
      type: MOVE_PIECE,
      payload: {
                 a: a,
                 b: b,
                 c: c,
                 d: d,
               }
    }
  )
}
