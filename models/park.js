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
    if (a.guestsAttractedPerDay < b.guestsAttractedPerDay) {
      return 1
    }
    else if (a.guestsAttractedPerDay > b.guestsAttractedPerDay) {
      return -1
    }
    return 0;
  }
  return this.dinosaurs.sort(compare)[0];
}

Park.prototype.findBySpecies = function(species) {
  return this.dinosaurs.filter(dinosaur => dinosaur.species === species)
}

Park.prototype.removeAllBySpecies = function(species) {
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      index = this.dinosaurs.indexOf(dinosaur)
      this.dinosaurs.splice(index, 1)
    }
  }
}

module.exports = Park
