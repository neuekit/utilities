import getIndex from '../../src/data/getIndex';

describe('Modules', function(){

   it('Can correctly run getIndex and return the desired object index', function() {
      const arr = [{ testA: 1, testB: 2 }, { testA: 3, testB: 4 }]
      expect(getIndex(arr, 'testA', 3)).to.eq(1)
   })
})
