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

let Threme = () => {
    const scene = new Scene;
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = BasicShadowMap;
    document.body.appendChild(renderer.domElement);

    const boxGeo = new BoxGeometry(15, 15, 15, 1, 1, 1);

    const material = new MeshStandardMaterial();

    let randomInt = () => {
        return Math.floor(Math.random() * 4);
    }

    let rgbValueGenerator = () => {
        return Math.floor(Math.random() * 256);
    }

    let tetrisGenerator = (rand) => {
        let color = `rgb(${rgbValueGenerator()}, ${rgbValueGenerator()}, ${rgbValueGenerator()})`;
        let box0 = new Mesh(boxGeo, new MeshStandardMaterial({ color: color}));
        for(let i = 0; i < 4; i++) {
            let pos = randomInt();
            
        }
    }

    function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
    }
    animate();
}

export default Threme();