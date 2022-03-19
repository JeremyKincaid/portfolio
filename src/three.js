import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    BasicShadowMap,
    BoxGeometry,
    MeshStandardMaterial,
    Mesh
}
    from 'three';
import TetrisBlock from './blockGroup';

let Threme = () => {
    let tetrisArr = [];
    const isRunning = true;

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = BasicShadowMap;
    document.body.appendChild(renderer.domElement);

    const boxGeo = new BoxGeometry(4, 4, 4, 1, 1, 1);

    let randomPosition = () => {
        return Math.floor(Math.random() * 100);
    }

    let randomInt = () => {
        return Math.floor(Math.random() * 2);
    }

    let rgbValueGenerator = () => {
        return Math.floor(Math.random() * 256);
    }

    let tetrisGenerator = () => {
        let box0 = new Mesh(boxGeo, new MeshStandardMaterial({ color: `rgb(${rgbValueGenerator()}, ${rgbValueGenerator()}, ${rgbValueGenerator()})`}));
        let box1 = new Mesh(boxGeo, new MeshStandardMaterial({ color: `rgb(${rgbValueGenerator()}, ${rgbValueGenerator()}, ${rgbValueGenerator()})`}));
        let box2 = new Mesh(boxGeo, new MeshStandardMaterial({ color: `rgb(${rgbValueGenerator()}, ${rgbValueGenerator()}, ${rgbValueGenerator()})`}));
        let box3 = new Mesh(boxGeo, new MeshStandardMaterial({ color: `rgb(${rgbValueGenerator()}, ${rgbValueGenerator()}, ${rgbValueGenerator()})`}));
        let tetris = new TetrisBlock(box0, box1, box2, box3);
        tetris.group.position.set(-100, randomPosition(), 25);
        tetrisArr.push(tetris);
        scene.add(tetris);
    }

    while(isRunning) {
        setTimeout(tetrisGenerator(), 1000);
    }

    function animate() {
        requestAnimationFrame(animate);
        tetrisArr.forEach((t) => t.position.x += 0.05);
        renderer.render(scene, camera);
    }
    animate();
}

export default Threme();