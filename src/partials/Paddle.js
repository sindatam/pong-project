import { SVG_NS } from '../settings';
   
export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 15;
        this.score = 0;

        document.addEventListener('keydown', event => {
            switch (event.key) {
                case up:
                    // console.log("up");
                    this.up();
                    break;
                case down:
                // console.log("down");
                this.down();
                    break;

            }
        });
    }



    up() {
        // Find the max
        // Paddle either needs to be at 0 or the y position minus the speed
        this.y = Math.max(0, this.y - this.speed);
        console.log(this.y - this.speed)

    }

    down() {
        // get the min number
        // either the height of the board minus the height of the paddle
        // or the y position plus the speed
        this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);

    }

    coordinates(x, y, width, height) {
        let leftX = x;
        let rightX = x + width;
        let topY = y;
        let bottomY = y + height;
        return [leftX, rightX, topY, bottomY];
    }

    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');


        // Paddles from the index.html:
        // Create rectangle matching element below
        // <rect height="?" width="?" fill="white" x="1?" y="?" />
        rect.setAttributeNS(null, 'fill', 'white');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);

        // Append to svg
        svg.appendChild(rect);



    }
}
