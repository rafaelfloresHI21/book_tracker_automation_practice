const Page = require("./page.js");

class Header extends Page {
    get MyBooksButton(){
        return $(".siteHeader__primaryNavInline > ul[role='menu'] > li:nth-of-type(2) > .siteHeader__topLevelLink")
    }

    get MyBooksButtonNew(){
        return $(".HeaderPrimaryNav__list > li:nth-of-type(2) > a")
    }

    async goToMyBooks(){
        if (await browser.getData("/isNewPage") && (await browser.getUrl()).includes("show")){
            await (await this.MyBooksButtonNew).click()
        }else{
            await (await this.MyBooksButton).click()
        }
    }
}

module.exports = new Header()