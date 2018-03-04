// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  let lowCaseD = drivers.map(driver => driver.toLowerCase());
  return lowCaseD;
}

function nameToAttributes(drivers) {
  // let fullName = drivers.map(function (aDriver) {
  //   return Object.assign({}, aDriver, { firstName: aDriver.firstName, lastName: aDriver.lastName });
  let fullName = drivers.map(function (aDriver) {
    let splitName = drivers.split(" ");
    return Object.assign({}, { firstName: splitName[0], lastName: splitName[1]}); 
  };
  return fullName;
}
