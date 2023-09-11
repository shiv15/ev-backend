const jasmine = require('jasmine');
const handler = require('../handler');

describe("getData", (() => {
    it("contains spec with an expectation", (() => {
        const event = {
            version: '2.0',
            routeKey: 'GET /get',
            headers: {
              Authorization: 'Basic 27487e0ee0d35d777c91b639fa0c396c',
              'User-Agent': 'PostmanRuntime/7.31.3',
              Accept: '*/*',
              'Postman-Token': '5fd95041-0640-4eb9-b653-2ae03d6083ca',
              Host: 'localhost:3000',
              'Accept-Encoding': 'gzip, deflate, br',
              Connection: 'keep-alive'
            },
          }

        jasmine.createSpyObj(getData, [getUser])
        handler.getData(event, null, null);

        // mock getUser function to return a hash equal to the one
        // verify the callback parameters

        // write a test without the authorization headers.
        // write a test for user not found


        expect(true).toBe(true);
    }));
}));