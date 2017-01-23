'use strict';

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it('stores the balance, which should be 0 upon instantiation', function() {
    expect(account._balance).toEqual(0);
  });
});
