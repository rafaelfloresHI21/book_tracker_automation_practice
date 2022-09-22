const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ReviewPage extends Page {
  /**
   * define selectors using getter methods
   */
  
  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open(`review/show/${"var"}`);
  }
}

module.exports = new LoginPage();
