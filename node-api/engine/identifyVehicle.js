var ruleSet = require('./ruleSet');

function countWheels(data) {
  var counts = {};
  var position = [];
  if (data && data.length) {
    data.forEach(item => {
      if (item['material'] in counts)
        counts[item['material']]++
        else
          counts[item['material']] = 1;

      position.push(item.position)
      counts['positions'] = position
    })
    return counts;
  } else {
    return "none"
  }
}


function getVehicle(data) {
  if(typeof(data) == "string") {
    data = JSON.parse(data);
  }
  return new Promise((resolve, reject) => {
    if (data && data.vehicles && data.vehicles.vehicle) {
      resolve(
        data.vehicles.vehicle.map(i => {
          var count = 0;
          var plasticcount = 0;
          var whee = {}
          return {
            id: i.id,
            frame: i && i.frame && i.frame.material,
            powertrain: Object.keys(i.powertrain)[0],
            wheels: countWheels(i && i.wheels && i.wheels.wheel)
          }
        }).map(j => {
          j.vehicle_name = ruleSet.getName(j.frame, j.wheels, j.powertrain)
          return j
        }))
    } else {
      reject("Improper Data");
    }
  })
}

module.exports = {
  getVehicle: getVehicle
}