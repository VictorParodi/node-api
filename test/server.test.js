const server = require('./../server/server').server;
const expect = require('expect');

describe('Test cases on sever.js', () => {
  let email = server.email;

  it('The user should have an email', () => {
    expect(email).toExist();
  });

  it("The email should be an string", () => {
    expect(email).toBeAn('string');
  });
});