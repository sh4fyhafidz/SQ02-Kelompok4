module.exports = function () {
    this.Given(/^user will load login page$/, function () {
        helpers.loadPage(shared.pages3.vuturaSignInPage)
    });

    this.Given(/^user fill email at login$/, function () {
        driver.then(function () {
            return page.fillEmailSignIn3.perform();
        })
    });

    this.Given(/^user fill password at login$/, function () {
        driver.then(function () {
            return page.fillPasswordSignIn3.perform();
        })
    });

    this.When(/^user click at login button$/, function () {
        driver.then(function () {
            return page.clickLoginButton3.perform();
        })
    });
    this.Then(/^user will still see dashboard$/, function () {
        driver.manage().timeouts().implicitlyWait(15000);
    });
    
}