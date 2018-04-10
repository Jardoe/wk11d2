const Park = function(){
  this.dinosaurs = [];
}

Park.prototype.numberOfDinos = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDino = function (dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.clearAll = function () {
  this.dinosaurs.splice(0, this.numberOfDinos());
};

Park.prototype.getDinosWithLotsOfBabies = function () {
  let fertileDino = [];
  for(dino of this.dinosaurs){
    if (dino.offspring > 2){
      fertileDino.push(dino);
    }
  }
  return fertileDino;
};

Park.prototype.howManyDinosAfter = function(years){
  let total = 0;
  let dinos = this.getDinosWithLotsOfBabies();
  total += dinos.length;
  if(dinos.length >= 2){
    for(let dino of dinos){
      total += (dino.offspring) ** years;
    }

  }
  return total;
}

module.exports = Park;
