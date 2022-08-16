const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get withEmailButton(){
    return $(".authPortalConnectButton")
  }

  get inputUsername() {
    return $("#ap_email");
  }
  get inputPassword() {
    return $("#ap_password");
  }
  get btnSubmit() {
    return $("input#signInSubmit");
  }

  //No needed anymore
  // get loginAlert() {
  //   return $("#emailForm > div > div > span");
  // }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login() {
    await (await this.withEmailButton.click())
    await this.inputUsername.setValue(process.env.USER_GG);
    await this.inputPassword.setValue(process.env.PASS_GG);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("user/sign_in");
  }
}

module.exports = new LoginPage();
