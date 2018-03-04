// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  let lowCaseD = drivers.map(driver => driver.toLowerCase());
  return lowCaseD;
}

function nameToAttributes(drivers) {
  const fullName = drivers.map(driver => return Object.assign({}, driver, { firstName: driver.firstName, lastName: driver.lastName });
}

 // const newEngineers = map(oldAccounts, function (account) {
 //   return Object.assign({}, account, { accessLevel: 'admin' });
 // });
