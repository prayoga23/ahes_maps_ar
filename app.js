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
