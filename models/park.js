const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};


Park.prototype.removeADinosaur = function () {
  this.dinosaurs.pop()
};

Park.prototype.mostPopularDinosaur = function () {
  let most_popular;
  let current_popularity = 0;
  for(dino of this.dinosaurs){
    if(dino.guestsAttractedPerDay > current_popularity){
      most_popular = dino;
      current_popularity = dino.guestsAttractedPerDay
    }
  }
  return most_popular;
};

Park.prototype.allDinosaursBySpecies = function (dinosaur) {
  found_dinosaurs = [];
  for(dino of this.dinosaurs){
    if(dino.species == dinosaur){
      found_dinosaurs.push(dinosaur);
    }
  }
  return found_dinosaurs;
};

Park.prototype.visitorsPerDay = function () {
  visitors = 0;
  for(dino of this.dinosaurs){
    visitors += dino.guestsAttractedPerDay
  }
  return visitors;
};

Park.prototype.visitorsPerYear = function () {
  return visitors = (this.visitorsPerDay() * 365);
};

Park.prototype.yearlyRevenue = function () {
  visitors = this.visitorsPerYear();
  revenue = visitors * this.price;
  return revenue;
};

module.exports = Park;
