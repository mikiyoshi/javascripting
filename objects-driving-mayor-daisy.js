const carPassing = function (cars, speed) {
  // Your code in here ...
  console.log(cars[0]);
  console.log(speed);
  console.log(Date.now(38));
  cars.push({ time: Date.now(), speed: speed });
  // cars.push({time: 11, speed: 10});
  console.log(cars);
  return cars;
}
const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)