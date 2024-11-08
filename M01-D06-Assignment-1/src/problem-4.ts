/**
 * Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;
 */

type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };

function calculateShapeArea(newShape: Circle | Rectangle): number | undefined {
  if (newShape.shape === "circle") {
    return Math.PI * Math.pow(newShape.radius, 2);
  } else if (newShape.shape === "rectangle") {
    return newShape.width *newShape.height;
  } else return undefined;
}

const circleArea = calculateShapeArea({ shape: 'circle', radius: 5 });
console.log(circleArea)
const rectangleArea = calculateShapeArea({
  shape: 'rectangle',
  width: 4,
  height: 6,
});

console.log(rectangleArea)

