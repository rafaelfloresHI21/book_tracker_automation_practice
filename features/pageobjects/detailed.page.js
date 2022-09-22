const Page = require("./page.js");

class Detailedpage extends Page {
  detailedBookName(name) {
    this.bookName = name;
  }

  get welcomeNewBookpage(){
    return $("div[role='dialog'] .Button.Button--block.Button--primary.Button--small")
  }

  get wantToReadButton(){
    return $(".wtrUp.wtrLeft button")
  }

  get wantToReadButtonNew(){
    return $(".Sticky .Button.Button--block.Button--medium.Button--wtr")
  }

  get wantToReadStatus(){
    return $(".wtrStatusToRead")
  }

  get wantToReadStatusNew(){
    return $(".Sticky .PencilIcon")
  }

  get title() {
    return $("#bookTitle");
  }

  async addBookToBookshelf(){
    if (await browser.getData("/isNewPage")){
      await this.welcomeNewBookpage.click()
      await this.wantToReadButtonNew.click()
    }else{
      await this.wantToReadButton.click()      
    }
  }
}

module.exports = new Detailedpage();
