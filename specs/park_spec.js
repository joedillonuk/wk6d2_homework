const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {

    park1 = new Park("Stegoland Windsor", 8);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('stegosaurus', 'herbivore', 100);
    dinosaur3 = new Dinosaur('Brontosaurus', 'herbivore', 75);
    dinosaur4 = new Dinosaur('stegosaurus', 'herbivore', 100);

  })

  it('should have a name', function(){
    const actual = park1.name;
    assert.strictEqual("Stegoland Windsor", actual)
  });

  it('should have a ticket price', function() {
    const actual = park1.price;
    assert.strictEqual(8, actual)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park1.dinosaurs.length;
    assert.strictEqual(0, actual)
  });


  it('should be able to add a dinosaur to its collection', function() {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    const actual = park1.dinosaurs.length;
    assert.strictEqual(3, actual)
  });


  it('should be able to remove a dinosaur from its collection', function() {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    park1.removeADinosaur();
    const actual = park1.dinosaurs.length;
    assert.strictEqual(2, actual)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    const actual = park1.mostPopularDinosaur();
    assert.strictEqual(dinosaur2, actual)
  });


  it('should be able to find all dinosaurs of a particular species', function() {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    park1.addDinosaur(dinosaur4);
    const actual = park1.allDinosaursBySpecies('stegosaurus');
    assert.strictEqual(2, actual.length)

  });

  it('should be able to calculate the total number of visitors per day', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    const actual = park1.visitorsPerDay();
    assert.strictEqual(225, actual)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    const actual = park1.visitorsPerYear();
    assert.strictEqual(82125, actual)
  });

  it('should be able to calculate total revenue for one year', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    const actual = park1.yearlyRevenue();
    assert.strictEqual(657000, actual)
  });

  it('should be able to remove all dinosaurs by species', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    park1.addDinosaur(dinosaur4);
    park1.removeDinosaurBySpecies('stegosaurus');
    const actual = park1.dinosaurs
    assert.strictEqual(2, actual.length)
  })

  it('should total dinosaurs by diet type (carnivore)', function() {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    park1.addDinosaur(dinosaur4);
    const actual = park1.dinosaursDiet();
    assert.strictEqual(1, actual.carnivore)
  })

  it('should total dinosaurs by diet type (herbivore)', function() {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    park1.addDinosaur(dinosaur4);
    const actual = park1.dinosaursDiet();
    assert.strictEqual(3, actual.herbivore)
  })

  it('should total dinosaurs by diet type (omnivore)', function() {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    park1.addDinosaur(dinosaur4);
    const actual = park1.dinosaursDiet();
    assert.strictEqual(0, actual.omnivore)
  })


});
