describe('Bubble Sort', function() {
  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual([])
  });

  it('handles a single array', function(){
    expect(bubbleSort([3])).toEqual([3])
  });

  it('handles an array with multiple elements', function(){
    expect(bubbleSort([7,3,6,1])).toEqual([1,3,6,7])
  });
  before(function() {
    spyOn('swap').and.callThrough();

  });

  it('counts the number of times swap is used',function() {
    bubbleSort([5,3,7]);
    expect(swap.calls.count()).toEqual(2);
  });

});
