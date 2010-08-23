require('./helper');

var exception = new Error('Catch me!');

expect('halt1');
expect('halt2');
Step(
  function haltAlways (err){
    fulfill('halt1');
    assert.equal(exception, err, "error should be halted after being passed through");
  },
  function () {
    var callback = this;
    setTimeout(function () {
      callback(exception);
    });
  }
);
Step(
  function haltAlways (err){
    fulfill('halt2');
    assert.equal(exception, err, "error should be halted after being caught");
  },
  function () {
    throw exception;
  }
);
