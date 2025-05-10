function calculatecube(){
    const side = parseFloat(document.getElementById('cube-side').value);
  if (isNaN(side) || side <= 0) {
    alert('Please enter a valid side length.');
    return;
  }
  const surfaceArea = 6 * side * side;
  const volume = Math.pow(side, 3);
  document.getElementById('cube-result').innerHTML =
    `Surface Area: ${surfaceArea.toFixed(2)}<br>Volume: ${volume.toFixed(2)}`;
}

function calculatesphere() {
  const radius = parseFloat(document.getElementById('sphere-radius').value);
  if (isNaN(radius) || radius <= 0) {
    alert('Please enter a valid radius.');
    return;
  }
  const surfaceArea = 4 * Math.PI * radius * radius;
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById('sphere-result').innerHTML =
    `Surface Area: ${surfaceArea.toFixed(2)}<br>Volume: ${volume.toFixed(2)}`;
}

function calculatecylinder() {
  const radius = parseFloat(document.getElementById('cylinder-radius').value);
  const height = parseFloat(document.getElementById('cylinder-height').value);
  if (isNaN(radius) || radius <= 0 || isNaN(height) || height <= 0) {
    alert('Please enter valid dimensions.');
    return;
  }
  const surfaceArea = 2 * Math.PI * radius * (radius + height);
  const volume = Math.PI * radius * radius * height;
  document.getElementById('cylinder-result').innerHTML =
    `Surface Area: ${surfaceArea.toFixed(2)}<br>Volume: ${volume.toFixed(2)}`;
}

function calculatecone(){
    const radius = parseFloat(document.getElementById('cone-radius').value);
    const height = parseFloat(document.getElementById('cone-height').value);
    if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
    alert("Please enter valid positive numbers for cone dimensions.");
    return;
    }

    const slantHeight = Math.sqrt(radius ** 2 + height ** 2);
    const surfaceArea = Math.PI * radius * (radius + slantHeight);
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    document.getElementById('cone-result').innerHTML =
    `Surface Area: ${surfaceArea.toFixed(2)}<br>Volume: ${volume.toFixed(2)}`;
}

function calculaterectangular() {
  const length = parseFloat(document.getElementById('rectangular-length').value);
  const breadth = parseFloat(document.getElementById('rectangular-breadth').value);
  const height = parseFloat(document.getElementById('rectangular-height').value);

  if (isNaN(length) || isNaN(breadth) || isNaN(height) || length <= 0 || breadth <= 0 || height <= 0) {
    alert("Please enter valid positive numbers for rectangle dimensions.");
    return;
  }

  const surfaceArea = 2 * (length * breadth + breadth * height + length * height);
  const volume = length * breadth * height;

  document.getElementById('rectangular-result').innerHTML =
    `Surface Area: ${surfaceArea.toFixed(2)}<br>Volume: ${volume.toFixed(2)}`;
}

