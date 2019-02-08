import { SVG_NS } from '../settings';

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;

        // Reset the ball
        this.reset();
    }

    reset() {
     this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    }


    render(svg, player1, player2) {
        // draw ball
        let circle = document.createElementNS(SVG_NS, 'circle');
        // <circle id="ball" r="8" cx="256" cy="128" fill="white" />
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        circle.setAttributeNS(null, 'fill', 'white');
        // append to svg in game

        svg.appendChild(circle);

    }
 
}