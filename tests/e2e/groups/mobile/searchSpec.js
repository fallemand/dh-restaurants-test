module.exports = {
  'Should filter with game name': (client) => {
    const searchPage = client.page.SearchPage();
    searchPage
      .filter('Indian Curry', client)
      .waitNoLoading(client);
    client.elements('css selector', '.restaurant-info', (result) => {
      client.assert.equal(result.value.length, 1);
      searchPage.expect.element('@restaurantsFirstChildTitle').text.to.equal('Indian Curry');
    });
  },
  'Should sort games RATING': (client) => {
    const searchPage = client.page.SearchPage();
    searchPage
      .sortByRating()
      .waitNoLoading(client)
      .expect.element('@restaurantsFirstChildTitle').text.to.equal('Pizzeria Bella Vita');
  },
  beforeEach: (client) => {
    client.url(client.globals.site);
  },
  after: (client) => {
    client.end();
  },
};
