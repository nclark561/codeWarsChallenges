function distanceBetweenPoints(a, b) {
    let distance = Math.sqrt(((a.x - b.x) ** 2) + ((a.y - b.y) ** 2));
    return distance; // your code here
  };
  
  console.log(distanceBetweenPoints({x:9, y:5}, {x:3, y:4}));