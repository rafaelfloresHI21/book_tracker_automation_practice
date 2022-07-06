const Page = require("./page.js");
const utils = require("../../utils/General");


class Bookshelf extends Page{
    get first() {
        return 0;
    }

    get customBookshelfPos(){
        return 5;
    }

    get booksInBookshelf(){
        return $$("#booksBody tr.review")
    }

    get addCustomBookshelfButton(){
        return $("div#side  .gr-button.gr-button--small")
    }

    get addShelfInput(){
        return $("input#user_shelf_name")
    }

    get addShelfSubmit(){
        return $("form#shelf_name_form > input[name='commit']")
    }

    get customShelf(){
        return $(`#paginatedShelfList .userShelf:nth-of-type(${this.customBookshelfPos}) .actionLinkLite`)
    }

    async checkNewBook(bookName){
        const books = await this.booksInBookshelf
        await expect(await books[this.first].$('td.title > div > a')).toHaveTextContaining(utils.defaultBook.name)
    }

    async addCustomBookshelf(){
        const button = await this.addCustomBookshelfButton
        await expect(button).toExist()
        await button.click()
    }

    async nameCustomBookshelf(name){
        const input = await this.addShelfInput
        await expect(input).toExist()
        await input.setValue(name)
    }

    async submitCustomBookshelf(){
        const button = await this.addShelfSubmit
        await expect(button).toExist()
        await button.click()
    }

    async assertCustomBookShelf(){
        const pane = await this.customShelf
        await pane.waitForExist({timeout: 5000})
        //await expect(pane).toHaveChildren()
        const bookshelf = await this.pane.$("a")
        expect(bookshelf).toHaveAttrContaining("title", browser.getData("/defaultCustomBookshelf"))
    }
}

module.exports = new Bookshelf();