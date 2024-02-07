import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight,1,5000);
camera.lookAt(0,0,0);
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set(0,0,1050);
controls.update();

// Set the scene background to the loaded texture
scene.background = new THREE.TextureLoader().load('assests/8k_stars_milky_way.jpg');
// scene.fog = new THREE.Fog(0xcccccc,10,15);

 // Load sun texture
const SunMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/8k_sun.jpg'
) });

//Sun
const SunGeometry = new THREE.SphereGeometry( 50, 32, 16 ); 
// const SunMaterial = new THREE.MeshBasicMaterial({color:0xFDB813});
const SunMesh = new THREE.Mesh(SunGeometry,SunMaterial);
scene.add(SunMesh);


//Mercury Orbit
const MercuryRingGeometry = new THREE.TorusGeometry( 100, 0.29, 30,200); 
const MercuryRingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const MercuryRingMesh = new THREE.Mesh( MercuryRingGeometry, MercuryRingMaterial );
scene.add(MercuryRingMesh);
//Mercury Planet
const MercuryGeometry = new THREE.SphereGeometry(3,64, 32,.283185307179586);
const MercuryMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/8k_mercury.jpg'
) });
const MercuryMesh = new THREE.Mesh(MercuryGeometry, MercuryMaterial);
MercuryMesh.position.set(80, 0, 0);
scene.add(MercuryMesh);

//Venus Orbit
const VenusRingGeometry = new THREE.TorusGeometry( 130, 0.29, 30,200); 
const VenusRingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const VenusRingMesh = new THREE.Mesh( VenusRingGeometry, VenusRingMaterial );
scene.add(VenusRingMesh);
//Venus Planet
const VenusGeometry = new THREE.SphereGeometry(6,64, 32,.283185307179586);
const VenusMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/8k_venus_surface.jpg'
) });
const VenusMesh = new THREE.Mesh(VenusGeometry, VenusMaterial);
scene.add(VenusMesh);

//Earth Orbit
const EarthRingGeometry = new THREE.TorusGeometry( 160, 0.29, 30,200); 
const EarthRingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const EarthRingMesh = new THREE.Mesh( EarthRingGeometry, EarthRingMaterial );
scene.add(EarthRingMesh);
//Earth Planet
const EarthGeometry = new THREE.SphereGeometry(7,64, 32);
const EarthMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/8k_earth_daymap.jpg'
) });
const EarthMesh = new THREE.Mesh(EarthGeometry, EarthMaterial);
scene.add(EarthMesh);
//Earth Planet
const MoonGeormetry = new THREE.SphereGeometry(3,64, 32);
const MoonMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/8k_moon.jpg'
) });
const MoonMesh = new THREE.Mesh(MoonGeormetry, MoonMaterial);
MoonMesh.position.x = 15;
EarthMesh.add(MoonMesh);

//Mars Orbit
const MarsRingGeometry = new THREE.TorusGeometry( 200, 0.29, 30,200); 
const MarsRingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const MarsRingMesh = new THREE.Mesh( MarsRingGeometry, MarsRingMaterial );
scene.add(MarsRingMesh);
//Mars Planet
const MarsGeometry = new THREE.SphereGeometry(5,64, 32,.283185307179586);
const MarsMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/8k_mars.jpg'
) });
const MarsMesh = new THREE.Mesh(MarsGeometry, MarsMaterial);
scene.add(MarsMesh);

//Jupiter Orbit
const JupiterRingGeometry = new THREE.TorusGeometry( 240, 0.29, 30,200); 
const JupiterRingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const JupiterRingMesh = new THREE.Mesh( JupiterRingGeometry, JupiterRingMaterial );
scene.add(JupiterRingMesh);
//Mars Planet
const JupiterGeometry = new THREE.SphereGeometry(13,64, 32,.283185307179586);
const JupiterMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/8k_jupiter.jpg'
) });
const JupiterMesh = new THREE.Mesh(JupiterGeometry, JupiterMaterial);
scene.add(JupiterMesh);

//Saturn Orbit
const SaturnRingGeometry = new THREE.TorusGeometry( 280, 0.29, 30,200); 
const SaturnRingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const SaturnRingMesh = new THREE.Mesh( SaturnRingGeometry, SaturnRingMaterial );
scene.add(SaturnRingMesh);
//Saturn Planet
const SaturnGeometry = new THREE.SphereGeometry(13,64, 32,.283185307179586);
const SaturnMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/8k_saturn.jpg'
) });
const SaturnMesh = new THREE.Mesh(SaturnGeometry, SaturnMaterial);
scene.add(SaturnMesh);
//Saturn Ring
const SaturnRing = new THREE.RingGeometry( 15, 25, 32 ); 
const SaturnRingMat = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/8k_saturn_ring_alpha.png'
) });
const SatrunRingMeshh = new THREE.Mesh( SaturnRing, SaturnRingMat );
SatrunRingMeshh.rotation.x = 30; 
SaturnMesh.add( SatrunRingMeshh );


//Uranus Orbit
const UranusRingGeometry = new THREE.TorusGeometry( 320, 0.29, 30,200); 
const UranusRingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const UranusRingMesh = new THREE.Mesh( UranusRingGeometry, UranusRingMaterial );
scene.add(UranusRingMesh);
//Uranus Planet
const UranusGeometry = new THREE.SphereGeometry(10,64, 32,.283185307179586);
const UranusMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/2k_uranus.jpg'
) });
const UranusMesh = new THREE.Mesh(UranusGeometry, UranusMaterial);
scene.add(UranusMesh);

//Neptune Orbit
const NeptuneRingGeometry = new THREE.TorusGeometry( 360, 0.29, 30,200); 
const NeptuneRingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const NeptuneRingMesh = new THREE.Mesh( NeptuneRingGeometry, NeptuneRingMaterial );
scene.add(NeptuneRingMesh);
//Neptune Planet
const NeptuneGeometry = new THREE.SphereGeometry(8,64, 32,.283185307179586);
const NeptuneMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/2k_neptune.jpg'
) });
const NeptuneMesh = new THREE.Mesh(NeptuneGeometry, NeptuneMaterial);
scene.add(NeptuneMesh);

//Pluto Orbit
class CustomEllipticalCurve extends THREE.Curve {
    constructor(scaleX = 1, scaleY = 1, scaleZ=1) {
        super();
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.scaleZ = scaleZ
    }

    getPoint(t, optionalTarget = new THREE.Vector3()) {
        const tx = Math.cos(2 *  Math.PI * t) * this.scaleX;
        const ty = Math.sin(2 * Math.PI * t) * this.scaleY;
        const tz = Math.sin(2 * Math.PI * t) * this.scaleZ;

        return optionalTarget.set(tx, ty, tz);
    }
}

// Create an elliptical curve with custom scales
const ellipticalPath = new CustomEllipticalCurve(359, 330,90);

// Use TubeGeometry to create a tube along the elliptical curve
const PlutoRingGeometry = new THREE.TubeGeometry(ellipticalPath, 100, 0.29, 20, false);

// const PlutoRingGeometry = new THREE.TorusGeometry( 280, 0.29, 50); 
const PlutoRingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff});
const PlutoRingMesh = new THREE.Mesh( PlutoRingGeometry, PlutoRingMaterial );
scene.add(PlutoRingMesh);
//Pluto Planet
const PlutoGeometry = new THREE.SphereGeometry(8,64, 32,.283185307179586);
const PlutoMaterial = new THREE.MeshBasicMaterial({ map:new THREE.TextureLoader().load(
    'assests/4k_pluto.jpg'
) });
const PlutoMesh = new THREE.Mesh(PlutoGeometry, PlutoMaterial);
scene.add(PlutoMesh);


function createStars() {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 2 });

    const starsVertices = [];

    for (let i = 0; i < 1000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;

        starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
}
createStars();

const ambientLight = new THREE.AmbientLight(0xff0000, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xff0000, 1);
directionalLight.position.set(500, 500, 500);
directionalLight.lookAt(0,0,0)
scene.add(directionalLight);
const cameraLimits = {
    minX: -1000,
    maxX: 1000,
    minY: -1000,
    maxY: 1000,
    minZ: -1000,
    maxZ: 1000,
};
function animate(){
    requestAnimationFrame(animate);
    SunMesh.rotation.x += 0.001;
    SunMesh.rotation.y += 0.001;
    SunMesh.rotation.z += 0.003;
    // controls.update();
    MercuryMesh.position.x = 100 * Math.cos(Date.now() * 0.001);
    MercuryMesh.position.y = 100 * Math.sin(Date.now() * 0.001);
    MercuryMesh.rotation.y += 0.001;;
    MercuryMesh.rotation.x += 0.001;;
    MercuryMesh.rotation.z += 0.001;;
    //Earth Rotation
    VenusMesh.position.x = 130 * Math.cos(Date.now() * 0.00088);
    VenusMesh.position.y = 130 * Math.sin(Date.now() * 0.00088);
    VenusMesh.rotation.y += 0.001;;
    VenusMesh.rotation.x += 0.001;;
    VenusMesh.rotation.z += 0.001;;
    //Earth Rotation
    EarthMesh.position.x = 160 * Math.cos(Date.now() * 0.000365);
    EarthMesh.position.y = 160 * Math.sin(Date.now() * 0.000365);
    MoonMesh.position.y = 15 * Math.sin(Date.now() * 0.00365);
    MoonMesh.position.x = 15 * Math.cos(Date.now() * 0.00365);
    EarthMesh.rotation.y += 0.001;;
    EarthMesh.rotation.x += 0.001;;
    EarthMesh.rotation.z += 0.001;;
    //Mars Rotation
    MarsMesh.position.x = 200 * Math.cos(Date.now() * 0.000687);
    MarsMesh.position.y = 200 * Math.sin(Date.now() * 0.000687);
    MarsMesh.rotation.y += 0.001;;
    MarsMesh.rotation.x += 0.001;;
    MarsMesh.rotation.z += 0.001;;
    //Jupiter Rotation
    JupiterMesh.position.x = 240 * Math.cos(Date.now() * 0.0004380);
    JupiterMesh.position.y = 240 * Math.sin(Date.now() * 0.0004380);
    JupiterMesh.rotation.y += 0.001;;
    JupiterMesh.rotation.x += 0.001;;
    JupiterMesh.rotation.z += 0.001;;
    //Saturn Rotation
    SaturnMesh.position.x = 280 * Math.cos(Date.now() * 0.00010585);
    SaturnMesh.position.y = 280 * Math.sin(Date.now() * 0.00010585);
    SaturnMesh.rotation.y += 0.001;;
    SaturnMesh.rotation.x += 0.001;;
    SaturnMesh.rotation.z += 0.001;;
    //Uranus Rotation
    UranusMesh.position.x = 320 * Math.cos(Date.now() * 0.000030660);
    UranusMesh.position.y = 320 * Math.sin(Date.now() * 0.000030660);
    UranusMesh.rotation.y += 0.001;;
    //Neptune Rotation
    NeptuneMesh.position.x = 360 * Math.cos(Date.now() * 0.000060225);
    NeptuneMesh.position.y = 360 * Math.sin(Date.now() * 0.000060225);
    NeptuneMesh.rotation.y += 0.001;;
    NeptuneMesh.rotation.x += 0.001;;
    NeptuneMesh.rotation.z += 0.001;;
    //Pluto Rotation
    PlutoMesh.position.x = 359 * Math.cos(Date.now() * 0.001);
    PlutoMesh.position.y = 330 * Math.sin(Date.now() * 0.001);
    PlutoMesh.position.z = 90 * Math.sin(Date.now() * 0.001);
    PlutoMesh.rotation.y += 0.001;;
    PlutoMesh.rotation.x += 0.001;;
    PlutoMesh.rotation.z += 0.001;;


     // Update the camera position
     camera.position.x = Math.max(cameraLimits.minX, Math.min(cameraLimits.maxX, camera.position.x));
    camera.position.y = Math.max(cameraLimits.minY, Math.min(cameraLimits.maxY, camera.position.y));
    camera.position.z = Math.max(cameraLimits.minZ, Math.min(cameraLimits.maxZ, camera.position.z));
    renderer.render(scene,camera);
}

animate();