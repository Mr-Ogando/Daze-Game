// ? using disctruting getting the objects from the Matter.js libary 
// ! world= All the shapes that are on out app.
//* Engine is an object which contains diffrent functions
//* Will read the current state of the world and make changesn
// Runner makes the World and Engine work together
// Todo Render
const {World, Render, Runner, Bodies, Engine}=Matter;

const cells = 3;
const width = 600;
const height = 600;

const unitLength = width / cells;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];
World.add(world, walls);