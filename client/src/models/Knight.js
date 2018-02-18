
import Piece from './Piece';
import black_image from '../images/black_knight.png';
import white_image from '../images/white_knight.png';

export default class Knight extends Piece {
    constructor(colour) {
        super(colour, 'knight', colour === 'black' ? black_image : white_image);
    }
}