const test_todolists_validation = require('./code/test-todolists-validation');
const cds = require('@sap/cds/lib');
const {
  GET,
  POST,
  PATCH,
  DELETE,
  expect
} = cds.test(__dirname + '../../', '--with-mocks');
cds.env.requires.auth = {
  kind: "dummy"
};
describe('Service Testing', () => {
  it('test todolists-validation', async () => {
    await test_todolists_validation(GET, POST, PATCH, DELETE, expect);
  });
});