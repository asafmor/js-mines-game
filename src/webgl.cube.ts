import {
    BoxGeometry, Clock, Mesh, MeshLambertMaterial, PerspectiveCamera, PointLight, Scene,
    WebGLRenderer
} from "three";

var canvasWidth = 400; //or window.innerWidth
var canvasHeight = 400; //or window.innerHeight

var scene = new Scene();
var camera = new PerspectiveCamera(75, canvasWidth / canvasHeight, 0.1, 1000);

var renderer = new WebGLRenderer({'antialias': true});
renderer.setSize(canvasWidth, canvasHeight);
document.body.appendChild(renderer.domElement);

var geometry = new BoxGeometry(2, 2, 2);
var material = new MeshLambertMaterial({color: 0xcc8f52});
var cube = new Mesh(geometry, material);
scene.add(cube);

// create a point light
const pointLight = new PointLight(0xFFFFFF);
// set its position
pointLight.position.x = 0;
pointLight.position.y = 50;
pointLight.position.z = 130;
// add to the scene
scene.add(pointLight);

camera.position.z = 5;

var clock = new Clock();

var rotationSpeed = 10;

var render = function () {
    requestAnimationFrame(render);

    let deltaTime = clock.getDelta();
    cube.rotation.x += 0.1 * deltaTime * rotationSpeed;
    cube.rotation.y += 0.1 * deltaTime * rotationSpeed;

    renderer.render(scene, camera);
};

export function drawCube() {
    render();
}
