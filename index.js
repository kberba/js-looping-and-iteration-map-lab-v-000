// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  let lowCaseD = drivers.map(driver => driver.toLowerCase());
  return lowCaseD;
}

function nameToAttributes(drivers) {
  // let fullName = drivers.map(function (aDriver) {
  //   return Object.assign({}, aDriver, { firstName: aDriver.firstName, lastName: aDriver.lastName });
  let fullName = drivers.map(driv => {
    let rName = {};
    rName[driv.key] = driv.value;
    return rName;
  })
}

var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
})
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],
