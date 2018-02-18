
import Piece from './Piece';
import black_image from '../images/black_rook.png';
import white_image from '../images/white_rook.png';

export default class Rook extends Piece {
    constructor(colour) {
        super(colour, 'rook', colour === 'black' ? black_image : white_image);
    }
}