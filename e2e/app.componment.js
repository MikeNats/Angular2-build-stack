describe('E2E Test', function () {

  let expectedMsg = 'Angular 2';

  beforeEach(function () {
    browser.get(browser.baseUrl);
  });

  it('should display: ' + expectedMsg, function () {
  	
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});