// Code your solution here:
function driversWithRevenueOver(drivers,string) {

  return drivers.filter(function(x){return x.revenue > string})
}

function driverNamesWithRevenueOver(drivers,string) {
  debugger;
  return driversWithRevenueOver(drivers,string).map(function(x) {x.name})
}
