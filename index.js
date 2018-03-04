// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  let lowCaseD = drivers.map(driver => driver.toLowerCase());
  return lowCaseD;
}

function nameToAttributes(drivers) {
  // let fullName = drivers.map(function (aDriver) {
  //   return Object.assign({}, aDriver, { firstName: aDriver.firstName, lastName: aDriver.lastName });
  let splitName = drivers.split(" ");
  const fullName = return Object.assign({}, { firstName: splitName[0], lastName: splitName[1]});
}


const old = [
  {name: 'a', value: 'b', other: 'c'}, 
  {name: 'd', value: 'e', other: 'f'}
]

const transformed = Object.assign(
  {}, 
  ...old.map(({name, value}) => ({ [name]: value }))
);

console.log(transformed);