var ruleSet = (function(frame, wheels, powertrain) {

  var vehicle_name;

  function hasMetal(wheels, powertrain) {
    vehicle_name = wheels['metal'] == 4 ? "Car" : wheels['metal'] == 2 && powertrain == "human" ? "Bicycle" : wheels['metal'] == 2 && powertrain == "internal combustion" 
    ? "Motorcycle" : "Vehicle not found"
    return vehicle_name;
  }

  function hasPlastic(wheels, powertrain) {
    vehicle_name = wheels['plastic'] == 3 ? "Big Wheel" : "Hang Glider"
    return vehicle_name;
  }

  function getName(frame, wheels, powertrain) {
    vehicle_name = frame == "metal" ? hasMetal(wheels, powertrain) : frame == "plastic" ? hasPlastic(wheels, powertrain) : "Vehicle not found"
    return vehicle_name
  }

  return {
    getName: getName
  }

})()

module.exports = ruleSet;