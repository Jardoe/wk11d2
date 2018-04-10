const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  let dino, dino2;

  beforeEach(function(){
    dino1 = new Dinosaur('Stegosaurus', 5);
    dino2 = new Dinosaur('Velociraptor', 2);
  });

  it('should have type', function(){
    const result = dino1.type;
    assert.strictEqual(result, 'Stegosaurus')
  })

  it('should have a number of offspring', function(){
    const result = dino1.offspring;
    assert.strictEqual(result, 5)
  })

});
