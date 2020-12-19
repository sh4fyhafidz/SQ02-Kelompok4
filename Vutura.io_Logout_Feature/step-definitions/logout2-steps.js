module.exports = function () {
    this.Given(/^user load login page$/, function () {
        helpers.loadPage(shared.pages2.vuturaSignInPage)
    });

    this.Given(/^user fill email on login$/, function () {
        driver.then(function () {
            return page.fillEmailSignIn2.perform();
        })
    });

    this.Given(/^user fill password on login$/, function () {
        driver.then(function () {
            return page.fillPasswordSignIn2.perform();
        })
    });

    this.When(/^user click on login button$/, function () {
        driver.then(function () {
            return page.clickLoginButton2.perform();
        })
    });
    this.Then(/^user still see dashboard$/, function () {
        driver.manage().timeouts().implicitlyWait(15000);
    });
    
}