import { React } from "react";
import { Color, PointLight } from 'three';
import {
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

    positionBoxes = () => {
        let boxArr = [this.box0, this.box1, this.box2, this.box3];
        this.box0.position.set(-50, Math.floor(Math.random() * 10) * 2, Math.floor(Math.random() * 10));
        for (let i = 1; i < boxArr.length; i++) {
            if (Math.floor(Math.random() * 2) === 0) {
                boxArr[i].position.set(boxArr[i - 1].position.x + 2, boxArr[i - 1].position.y, boxArr[i - 1].position.z)
            } else {
                boxArr[i].position.set(boxArr[i - 1].position.x, boxArr[i - 1].position.y + 2, boxArr[i - 1].position.z)
            }

        }
        boxArr.forEach((b) => this.group.add(b));
    }

}


function Tetris() {
    let tetrisArr = [];

    const scene = new Scene();
    scene.background = new Color(0x0fffff);
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = 10;
    const light = new AmbientLight(0x404040);
    scene.add(light);
    const pLight = new PointLight(0x404040, 1, 0, 2);
    pLight.position.set(0, 15, 0);
    pLight.castShadow = true;
    scene.add(pLight);
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

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

    setInterval(() => {if(document.hasFocus())tetrisGenerator()}, 1000);

    let removeTetris = (t) => {
        t.group.clear();
    }

    function animate() {
        requestAnimationFrame(animate);
        tetrisArr.forEach((t) => {
            
            if(document.hasFocus()) t.group.position.x += 0.1;
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