// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  let lowCaseD = drivers.map(driver => driver.toLowerCase());
  return lowCaseD;
}

function nameToAttributes(drivers) {
   return drivers.map(function(aDriver) {
     let splitName = aDriver.split(" ");
     return Object.assign({},
       {firstName: splitName[0]},
       {lastName: splitName[1]}
     );
   });
 }
