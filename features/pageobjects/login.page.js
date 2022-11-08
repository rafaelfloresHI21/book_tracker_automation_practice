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

  // Methods on Login page
  async login(defaultUser, defaultPass) {
    await (await this.withEmailButton.click())
    await this.inputUsername.setValue(defaultUser || process.env.USER_GG);
    await this.inputPassword.setValue(defaultPass || process.env.PASS_GG);
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
