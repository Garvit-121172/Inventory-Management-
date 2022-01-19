let getType = (weight, length, breadth, height) => {
  if (weight > 300 || length * breadth * height > 20) return "Truck";
  if (weight > 50 || length * breadth * height > 10) return "Mini-Truck";
  return "Bike";
};
module.exports = getType;
