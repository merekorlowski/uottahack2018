
import Piece from './Piece';
import black_image from '../images/black_queen.png';
import white_image from '../images/white_queen.png';

export default class Queen extends Piece {
    constructor(colour) {
        super(colour, 'queen', colour === 'black' ? black_image : white_image);
    }
}