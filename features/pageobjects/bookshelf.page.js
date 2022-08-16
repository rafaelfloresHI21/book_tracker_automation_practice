const Page = require("./page.js");
const utils = require("../../utils/General");


class Bookshelf extends Page{
    get first() {
        return 0;
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
        return $$(`.userShelf`)
    }

    get editButton(){
        return $("#shelvesSection .smallText");
    }

    get bookshelfRow(){
        return ".elementList"
    }

    get bookshelfName(){
        return ".displayShelfNameLnk"
    }

    get bookShelDeleteButton(){
        return "a[title='delete this shelf']"
    }

    get imDoneButton(){
        return $(".right .gr-button")
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
        const custom = await this.customShelf
        const bookshelf = await custom[custom.length-1].$("a")
        await expect(bookshelf).toHaveAttrContaining("title", (await browser.getData("/defaultCustomBookshelf")).toLowerCase())
    }

    async clickEditButton(){
        const button = await this.editButton
        await button.click()
    }

    async deleteBookShelf(){
        const rows = await $$(this.bookshelfRow)
        rows.forEach(async (elem) => {
            const name = await elem.$(this.bookshelfName).getText()
            const trueName = await browser.getData("/defaultCustomBookshelf")
            console.log(name)
            if (name === trueName){
                console.log("Found it")
                await (await elem.$(this.bookShelDeleteButton)).click()
            }
        })
    }

    async deletionConfirmation(){
        const rows = await $$(this.bookshelfRow)
        const titles = await Promise.all( 
            rows.map(async (elem) => {
                return await elem.$(this.bookshelfName).getText()
            }
        ))
        await expect.not.arrayContaining(titles)
        await this.imDoneButton.click()
    }
}

module.exports = new Bookshelf();