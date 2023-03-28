import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Roller tests", ()=> {
  test("Description", () => {
  });

describe('Roller class', () => {
  let roller: Roller;

  beforeEach(() => {
    roller = new Roller(6);
  });
  

  describe('testing the constructor', () => {

    it('should set _faces to 6 if the argument is less than 2', () => {
      roller = new Roller(1);
      expect(roller.get_faces()).toEqual(6);
    });

    it('it should set _faces to the given value if it is valid and within the allowed range', () => {
      roller = new Roller(10);
      expect(roller.get_faces()).toEqual(10);
    });

    
  });



    describe('testing the roll functionality roll', () => {
    it('should return 0 if the provided value is not valid testing with alot of improper values', () => {
      expect(roller.roll(0)).toEqual(0);
      expect(roller.roll(7)).toEqual(0);
      expect(roller.roll(21)).toEqual(0);
      expect(roller.roll(42)).toEqual(0);
    });

    it('the rolling should return the value passed in if its valid', () => {
      expect(roller.roll(3)).toEqual(3);
      expect(roller.roll(5)).toEqual(5);
      expect(roller.roll(1)).toEqual(1);
    });

    it('the roller class should be able to store the last value rolled and then return it when last is called', () => {
      roller.roll(5);
      expect(roller.last()).toEqual(5);
      roller.roll(3);
      expect(roller.last()).toEqual(3);
      roller.roll(123);
      expect(roller.last()).toEqual(3);
    });

    it('testing the distribution functions', () => {
      roller.roll(3);
      let distribution_map = roller.distribution();
      expect(distribution_map.get(3)).toEqual(1);
      roller.roll(3);
      distribution_map = roller.distribution();
      expect(distribution_map.get(3)).toEqual(2);
    });
  });
  


  });

 

});







//   describe('distribution', () => {
//     it('should return a Map with the correct size and values', () => {
//       roller.roll(2);
//       roller.roll(2);
//       roller.roll(4);
//       const distribution = roller.distribution();
//       expect(distribution.size).toEqual(6);
//       expect(distribution.get(1)).toEqual(0);
//       expect(distribution.get(2)).toEqual(2);
//       expect(distribution.get(3)).toEqual(0);
//       expect(distribution.get(4)).toEqual(1);
//       expect(distribution.get(5)).toEqual(0);
//       expect(distribution.get(6)).toEqual(0);
//     });
//   });
// });