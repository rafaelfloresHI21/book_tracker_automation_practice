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

  async clickOnFirstBook() {
    await (await this.tableResults[0])
      .click();
  }

  open() {
    return super.open("");
  }
}

module.exports = new Searchpage();
