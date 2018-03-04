// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  let lowCaseD = drivers.map(driver => driver.toLowerCase());
  return lowCaseD;
}

function nameToAttributes(drivers) {
   let fullName = drivers.map(function (aDriver) {
     return Object.assign({}, aDriver, { firstName: aDriver.firstName, lastName: aDriver.lastName });
}

 // const newEngineers = map(oldAccounts, function (account) {
 //   return Object.assign({}, account, { accessLevel: 'admin' });
 // });
