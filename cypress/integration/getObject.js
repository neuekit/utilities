import getObject from '../../src/vanilla/getObject';

describe('Modules', function(){

   it('Can correctly run getObject and return the desired object', function() {
      const arr = [{ testA: 1, testB: 2 }, { testA: 3, testB: 4 }]
      expect(getObject(arr, 'testA', 3)).to.eq(arr[1])
   })
})
