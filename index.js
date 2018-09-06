// Code your solution here:
function driversWithRevenueOver(drivers,string) {

  return drivers.filter(function(x){return x.revenue > string})
}

function driverNamesWithRevenueOver(drivers,string) {
  debugger;
  const array = driversWithRevenueOver(drivers,string)
  return array.map(function(y) {y.name})
}
