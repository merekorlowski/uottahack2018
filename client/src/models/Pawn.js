
import Piece from './Piece';
import black_image from '../images/black_pawn.png';
import white_image from '../images/white_pawn.png';

export default class Pawn extends Piece {
    constructor(colour) {
        super(colour, 'bishop', colour === 'black' ? black_image : white_image);
    }
}