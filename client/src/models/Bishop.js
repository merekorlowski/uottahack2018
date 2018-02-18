
import Piece from './Piece';
import black_image from '../images/black_bishop.png';
import white_image from '../images/white_bishop.png';

export default class Bishop extends Piece {
    constructor(colour) {
        super(colour, 'bishop', colour === 'black' ? black_image : white_image);
    }
}