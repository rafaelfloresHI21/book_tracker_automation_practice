const Page = require("./page.js");

class Header extends Page {
    get MyBooksButton(){
        return $(".siteHeader__primaryNavInline > ul[role='menu'] > li:nth-of-type(2) > .siteHeader__topLevelLink")
    }

    async goToMyBooks(){
        await (await this.MyBooksButton).click()
    }
}

module.exports = new Header()