module.exports = {
  commands: [{
    filter(query, client) {
      this
        .waitForElementVisible('@filterOptionTitle', 2000)
        .click('@filterOptionTitle')
        .waitForElementVisible('@filterField', 2000)
        .setValue('@filterField', [query, client.Keys.ENTER]);
      return this;
    },
    sortByRating() {
      this.waitForElementVisible('@sortField', 2000)
        .click('@filterField')
        .waitForElementVisible('@sortOptionRating', 2000)
        .click('@sortOptionRating');
      return this;
    },
    waitNoLoading(client) {
      this.waitForElementVisible('@loadingNotVisible', 4000);
      client.pause(1500);
      return this;
    },
  }],
  elements: {
    filterField: '.filter__value',
    filterOptionTitle: '.filter__field option[value="name"]',
    sortField: '.sort__field[name="sort"]',
    sortOptionRating: '.sort__field[name="sort"] option[value="rating"]',
    restaurantsFirstChild: 'restaurants__list-restaurants .restaurant-info:first-child',
    restaurantsFirstChildTitle: '.restaurant-info:first-child .restaurant-info__title',
    pagination: '.pagination',
    paginationButtons: '.pagination .pagination__number',
    loadingNotVisible: '.restaurants__list-restaurants:not(.restaurants__list-restaurants--loading)',
  },
};
