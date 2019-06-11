const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('stegosaurus', 'herbivore', 20);
    dino3 = new Dinosaur('brontosaurus', 'herbivore', 30);
    dinosaurs = [dino1, dino2]
    park = new Park("Jurassic Park", 10, dinosaurs);
  })

  it('should have a name', function() {
    assert.strictEqual(park.name, "Jurassic Park")
  });

  it('should have a ticket price', function() {
    assert.strictEqual(park.ticketPrice, 10)
  });

  it('should have a collection of dinosaurs', function() {
    assert.deepStrictEqual(park.dinosaurs, dinosaurs)
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dino3);
    const numberOfDinosaurs = park.dinosaurs.length;
    const dinosaurIncluded = park.dinosaurs.includes(dino3);
    assert.strictEqual(numberOfDinosaurs, 3);
    assert.strictEqual(dinosaurIncluded, true);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dino2);
    const numberOfDinosaurs = park.dinosaurs.length;
    const dinosaurIncluded = park.dinosaurs.includes(dino2);
    assert.strictEqual(numberOfDinosaurs, 1);
    assert.strictEqual(dinosaurIncluded, false)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.bestDinosaur();
    assert.strictEqual(actual, dino1)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.findBySpecies('stegosaurus');
    assert.deepStrictEqual(actual, [dino2])
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    let actual = park.dinosaurs;
    park.removeAllBySpecies('t-rex');
    assert.deepStrictEqual(actual, [dino2])
  });

});
