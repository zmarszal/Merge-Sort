describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([ 1, 2, 3, 4] )).toEqual( [[ 1, 2], [ 3, 4]] );
  });
});
describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([ 1, 2, 5], [3, 4] )).toEqual( [ 1, 2, 3, 4, 5] );
  });
});
describe('Merge Sort function', function(){
  it('It is able to sort an array', function(){
    expect( mergeSort([3,9,2,5] )).toEqual( [ 2,3,5,9] );
  });
});
