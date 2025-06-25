window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const lat = parseFloat(params.get('lat'));
  const lng = parseFloat(params.get('lng'));
  if (!lat || !lng) return;

  const arrow = document.createElement('a-entity');
  arrow.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${lng}`);
  arrow.setAttribute('gltf-model', 'arrow.glb');
  arrow.setAttribute('scale', '3 3 3');
  arrow.setAttribute('rotation', '0 0 0');
  document.querySelector('a-scene').appendChild(arrow);
};

const asrama = [
  {
    id: '0',
    name: 'Gedung Hall Mina',
    image: 'assets/image/hall_mina.jpg',
    coordinates: {
      latitude: -7.284952331606736,
      longitude: 112.77897043496384,
    },
  },
  {
    id: '1',
    name: 'Gedung Muzdalifah',
    image: 'assets/image/musdhalifah.jpg',
    coordinates: {
      latitude: -7.2852341338859725,
      longitude: 112.77900526197112,
    },
  },
  {
    id: '2',
    name: 'Gedung Zam-Zam',
    image: 'assets/image/zam-zam.jpg',
    coordinates: {
      latitude: -7.28526975568221,
      longitude: 112.778024470646,
    },
  },
  {
    id: '3',
    name: 'Masjid',
    image: 'assets/image/masjid.jpg',
    coordinates: {
      latitude: -7.282747114926446,
      longitude: 112.77830549612212,
    },
  },
];

function addFacilityMarkers() {
  asrama.forEach(facility => {
    const position = new THREE.Vector3(facility.coordinates.longitude, facility.coordinates.latitude, 0);
    createMarker(facility.name, facility.image, position);
  });
}

function createMarker(name, image, position) {
  const marker = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  );
  marker.position.set(position.x, position.y, position.z);
  scene.add(marker);

  const label = new THREE.SpriteText(name);
  label.position.set(position.x, position.y + 0.5, position.z);
  scene.add(label);

  const texture = new THREE.TextureLoader().load(image);
  const imageMaterial = new THREE.SpriteMaterial({ map: texture });
  const imageSprite = new THREE.Sprite(imageMaterial);
  imageSprite.position.set(position.x, position.y + 1, position.z);
  scene.add(imageSprite);
}

document.getElementById("startAR").addEventListener("click", () => {
  addFacilityMarkers();
  startARNavigation();
});
