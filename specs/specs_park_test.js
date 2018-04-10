const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')
const assert = require('assert');

describe('Park', function(){

  let park;
  let dino1, dino2, dino3;

  beforeEach(function(){
    park = new Park();
    dino1 = new Dinosaur("TRex", 1);
    dino2 = new Dinosaur("Steg", 5);
    dino3 = new Dinosaur("Steg", 5);
  });

  it('enclosure should start empty', function(){
    const result = park.dinosaurs;
    assert.deepStrictEqual(result, []);
  });


  it('should be able to return number of dinosaurs', function(){
    const result = park.numberOfDinos();
    assert.strictEqual(result, 0);
  })

  it('should be able to add dinosaur', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    const result = park.numberOfDinos();
    assert.strictEqual(result, 2);
  });

  it('should be able to remove all dinosaurs of type', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.clearAll();
    const result = park.numberOfDinos();
    assert.strictEqual(result, 0);
  })

  it('should get all dinosaurs with offspring of more than 2', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    const result = park.getDinosWithLotsOfBabies();
    const expected = dino2

    assert.deepStrictEqual(result, [expected]);
  })

  describe('Extension', function(){

    it('dinos should not reproduce if left by themselves', function(){
      park.addDino(dino2);
      const result = park.howManyDinosAfter(1);
      assert.strictEqual(result, 1);
    });

    it('dinos should not reproduce by themselves, even if left after two years', function(){
      park.addDino(dino2);
      const result = park.howManyDinosAfter(2);
      assert.strictEqual(result, 1);
    });

    it('dinos can reproduce if there are more than two of the same type, for one year', function(){
      park.addDino(dino2);
      park.addDino(dino3);
      const result = park.howManyDinosAfter(1);
      assert.strictEqual(result, 12);
    });

    it('2 dinos (plus their babies) can reproduce in two years', function(){
      park.addDino(dino2);
      park.addDino(dino3);
      const result = park.howManyDinosAfter(2);
      assert.strictEqual(result, 52);
    });
  });
});
