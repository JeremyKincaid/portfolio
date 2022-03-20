import { Group, Mesh } from 'three';

class TetrisBlock {
    box0 = new Mesh();
    box1 = new Mesh();
    box2 = new Mesh();
    box3 = new Mesh();

    constructor(box0, box1, box2, box3) {
        this.group = new Group();
        this.group.add(box0);
        this.group.add(box1);
        this.group.add(box2);
        this.group.add(box3);
    }

    positionBoxes = () => {
        let boxArr = [this.box0, this.box1, this.box2, this.box3]
        for (let i = 1; i < boxArr.length(); i++) {
            if (Math.floor(Math.random() * 2) === 0) {
                boxArr[i].position.set(boxArr[i - 1].position.x + 2, boxArr[i - 1].position.y, boxArr[i - 1].position.z)
            } else {
                boxArr[i].position.set(boxArr[i - 1].position.x, boxArr[i - 1].position.y + 2, boxArr[i - 1].position.z)
            }

        }
    }

}

export default TetrisBlock;