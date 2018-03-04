// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  let lowCaseD = drivers.map(driver => driver.toLowerCase());
  return lowCaseD;
}

function nameToAttributes(drivers) {
  let fullName = drivers.map(driver => [driver.firstName + ' ' + driver.lastName]);
  return fullName;
}
