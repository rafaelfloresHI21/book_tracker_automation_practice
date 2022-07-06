const Page = require("./page.js");

class Detailedpage extends Page {
  detailedBookName(name) {
    this.bookName = name;
  }

  get wantToReadButton(){
    return $(".wtrUp.wtrLeft button")
  }

  get wantToReadStatus(){
    return $(".wtrStatusToRead")
  }

  get title() {
    return $("#bookTitle");
  }

  async addBookToBookshelf(){
    await this.wantToReadButton.click();
  }
}

module.exports = new Detailedpage();
