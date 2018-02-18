
import Piece from './Piece';
import black_image from '../images/black_king.png';
import white_image from '../images/white_king.png';

export default class King extends Piece {
    constructor(colour) {
        super(colour, 'king', colour === 'black' ? black_image : white_image);
    }
}