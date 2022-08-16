const Page = require("./page.js");

class Searchpage extends Page {
  //Resultados de la búsqueda, exactament los titulos por cada resultado
  get tableResults() {
    return $$(".bookTitle");
  }

  get NoReultsHeader() {
    return $(
      "body > div.content > div.mainContentContainer > div.mainContent > div.mainContentFloat > div.leftContainer > h3"
    );
  }
  //body > div.content > div.mainContentContainer > div.mainContent > div.mainContentFloat > div.leftContainer > table > tbody >

  get searchFilter(){
    return $("input#search_field_title")
  }

  get searchButton(){
    return $(".searchBox--large__button")
  }

  async clickOnFirstBook() {
    await (await this.tableResults[0])
      .click();
  }

  async searchByTitle(){
    const filter = await this.searchFilter
    await filter.click()
    const search = await this.searchButton
    await search.click()
  }


  open() {
    return super.open("");
  }
}

module.exports = new Searchpage();
