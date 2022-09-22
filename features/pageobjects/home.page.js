const Page = require("./page.js");

class Homepage extends Page {
  // set setQuery(value) {
  //   this.query = value;
  // }

  get newBookPage(){
    return $("#__next")
  }
  
  get searchInput() {
    return $(
      "body > div.siteHeader > div > header > div.siteHeader__topLine.gr-box.gr-box--withShadow > div > div.searchBox.searchBox--navbar > form > input.searchBox__input.searchBox__input--navbar"
    );
  }
  //body > div.content > div.siteHeader > div > header > div.siteHeader__topLine.gr-box.gr-box--withShadow > div > div.searchBox.searchBox--navbar > form > input.searchBox__input.searchBox__input--navbar

  get submitButton() {
    return $(
      "body > div.siteHeader > div > header > div.siteHeader__topLine.gr-box.gr-box--withShadow > div > div.searchBox.searchBox--navbar > form > button"
    );
  }

  get minifiedResultList() {
    return $(`#bookSearchResults${this.query}5 > div`);
  }

  async search(query) {
    this.query = query;
    await expect(this.searchInput).toExist();
    await this.searchInput.setValue(query);
    await expect(this.submitButton).toExist();
    await this.submitButton.click();
  }

  open() {
    return super.open("");
  }
}

module.exports = new Homepage();
