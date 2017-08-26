const {log} = console;

// Parameter Defaults
function areaOfRectangle(width, height = width) {
  return width * height;
}

log(areaOfRectangle(5));
log(areaOfRectangle(5, 4));

// Destructuring Defaults
const [width, height] = [5, 4];

log({
  width,
  height,
  area: width * height
});

const areaOfRectangle2 = ( a, b ) => {
  let width = a;
  let height = (typeof b === 'number') ? b : a;
  return width * height;
};

console.log(areaOfRectangle2(5, 4));
