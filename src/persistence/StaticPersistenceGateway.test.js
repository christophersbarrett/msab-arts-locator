const assert = require('assert');
const { createMockApplicationContext } = require('../utilities/TestUtils');
const { readAllLocationsByCity } = require('./StaticPersistence');
const mockData = require('./mockData');
describe('StaticPersistence', () => {
  let mockApplicationContext = createMockApplicationContext({ mockData });

  describe('readAllLocationsByCity()', () => {
    it('returns no locations when a city is not provided', () => {
      const locations = readAllLocationsByCity({
        city: '',
        applicationContext: mockApplicationContext,
      });
      assert.deepStrictEqual(locations, mockData); // no input brings back all data
    });
    it('returns locations when city is provided', () => {
      const locations = readAllLocationsByCity({
        city: 'Mankato',
        applicationContext: mockApplicationContext,
      });

      assert.ok(locations.length > 0);
    });
  });
});
