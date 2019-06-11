const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
  index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
}

Park.prototype.bestDinosaur = function() {
  compare = function(a, b) {
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
  }
  return this.dinosaurs.sort(compare)[0];
}

Park.prototype.visitsPerDay = function() {
  total = 0;
  this.dinosaurs.forEach(dinosaur => total += dinosaur.guestsAttractedPerDay)
  return total;
}

Park.prototype.visitsPerYear = function() {
  return this.visitsPerDay() * 365;
}

Park.prototype.yearlyRevenue = function() {
  return this.visitsPerYear() * this.ticketPrice;
}

Park.prototype.findBySpecies = function(species) {
  return this.dinosaurs.filter(dinosaur => dinosaur.species === species);
}

Park.prototype.removeAllBySpecies = function(species) {
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      index = this.dinosaurs.indexOf(dinosaur);
      this.dinosaurs.splice(index, 1);
    }
  }
}

Park.prototype.dietTypes = function() {
  result = {}
  for (dinosaur of this.dinosaurs) {
    result[dinosaur.diet] = 0;
  }
  for (dinosaur of this.dinosaurs) {
    result[dinosaur.diet] += 1;
  }
  return result
}

module.exports = Park
