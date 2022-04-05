import { React } from "react";
import {
    Color,
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    BoxGeometry,
    MeshToonMaterial,
    Mesh,
    AmbientLight,
    Group
}
    from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

class TetrisBlock {
    box0 = new Mesh();
    box1 = new Mesh();
    box2 = new Mesh();
    box3 = new Mesh();
    group = new Group();

    constructor(box0, box1, box2, box3) {
        this.box0 = box0;
        this.box1 = box1;
        this.box2 = box2;
        this.box3 = box3;
    }

    genericBlockMaker(boxes) {
        for (let i = 1; i < boxes.length; i++) {
            if (Math.floor(Math.random() * 2) === 0) {
                boxes[i].position.set(boxes[i - 1].position.x + 2, boxes[i - 1].position.y, boxes[i - 1].position.z);
            } else {
                boxes[i].position.set(boxes[i - 1].position.x, boxes[i - 1].position.y + 2, boxes[i - 1].position.z);
            }
        }
    }

    tBlockMaker(boxes) {
        for (let i = 1; i < boxes.length - 1; i++) {
            boxes[i].position.set(boxes[i - 1].position.x + 2, boxes[i - 1].position.y, boxes[i - 1].position.z);
        }
        Math.floor(Math.random() * 2) < 1 ? boxes[3].position.set(boxes[1].position.x, boxes[1].position.y + 2, boxes[1].position.z) :
            boxes[3].position.set(boxes[1].position.x, boxes[1].position.y - 2, boxes[1].position.z);
    }

    squareBlockMaker(boxes) {
        for (let i = 1; i < boxes.length; i++) {
            i === 2 ? boxes[i].position.set(boxes[0].position.x, boxes[0].position.y + 2, boxes[0].position.z) :
                i === 3 ? boxes[i].position.set(boxes[1].position.x, boxes[1].position.y + 2, boxes[1].position.z) :
                    boxes[i].position.set(boxes[0].position.x + 2, boxes[0].position.y, boxes[0].position.z);
        }
    }

    positionBoxes = () => {
        let boxArr = [this.box0, this.box1, this.box2, this.box3];
        this.box0.position.set(-50, Math.floor(Math.random() * 10) * 2, Math.floor(Math.random() * 10));
        let roll = Math.floor(Math.random() * 10);
        if (roll < 7) {
            this.genericBlockMaker(boxArr);
        } else if (roll > 6 && roll < 9) {
            this.tBlockMaker(boxArr);
        } else {
            this.squareBlockMaker(boxArr);
        }
        boxArr.forEach((b) => this.group.add(b));
    }
}


function Tetris() {
    let tetrisArr = [];

    const scene = new Scene();
    scene.background = new Color(0x7a9cff);
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = 10;
    const light = new AmbientLight(0x404040, 4);
    scene.add(light);
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    document.body.appendChild(VRButton.createButton(renderer));
    renderer.xr.enabled = true;
    // let xr = renderer.xr;
    // let xrSessionEvent = new xr.XRSession();
    let vrButton = document.getElementById('VRButton');
    vrButton.addEventListener(onclick, e => {
        camera.position(0, 40, 40);
    })
    const boxGeo = new BoxGeometry(2, 2, 1, 1, 1, 1);
    let rgbValueGenerator = () => {
        return Math.floor(Math.random() * 256);
    }

    let tetrisGenerator = () => {
        let box0 = new Mesh(boxGeo, new MeshToonMaterial({ color: `rgb(${rgbValueGenerator()}, ${rgbValueGenerator()}, ${rgbValueGenerator()})` }));
        let box1 = new Mesh(boxGeo, new MeshToonMaterial({ color: `rgb(${rgbValueGenerator()}, ${rgbValueGenerator()}, ${rgbValueGenerator()})` }));
        let box2 = new Mesh(boxGeo, new MeshToonMaterial({ color: `rgb(${rgbValueGenerator()}, ${rgbValueGenerator()}, ${rgbValueGenerator()})` }));
        let box3 = new Mesh(boxGeo, new MeshToonMaterial({ color: `rgb(${rgbValueGenerator()}, ${rgbValueGenerator()}, ${rgbValueGenerator()})` }));
        let tetris = new TetrisBlock(box0, box1, box2, box3);
        tetris.positionBoxes();

        tetrisArr.push(tetris);

        scene.add(tetris.group);
    }
    
    // setInterval(() => { if (document.hasFocus()) tetrisGenerator() }, 1000);
    setInterval(() => tetrisGenerator(), 1000);

    let removeTetris = (t) => {
        t.group.clear();
    };

    renderer.setAnimationLoop(function() {
        renderer.render(scene, camera);
    });

    function animate() {
        requestAnimationFrame(animate);
        renderer.setAnimationLoop(function() {
            renderer.render(scene, camera);
            tetrisArr.forEach((t) => {

                t.group.position.x += 0.1;
                if (t.group.position.x >= 101) {
                    removeTetris(t);
                }
            });
    
        });
    
        tetrisArr.forEach((t) => {

            if (document.hasFocus()) t.group.position.x += 0.1;
            if (t.group.position.x >= 101) {
                removeTetris(t);
            }
        });
        renderer.render(scene, camera);
    }
    animate();



    return (
        <>

        </>
    )
}

export default Tetris;