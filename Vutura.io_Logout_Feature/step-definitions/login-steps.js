module.exports = function () {
    this.Given(/^user browse login page$/, function () {
        helpers.loadPage(shared.pages.vuturaSignInPage)
    });

    this.Given(/^user fill email to login$/, function () {
        driver.then(function () {
            return page.fillEmailSignIn.perform();
        })
    });

    this.Given(/^user fill password to login$/, function () {
        driver.then(function () {
            return page.fillPasswordSignIn.perform();
        })
    });

    this.Given(/^user click login button$/, function () {
        driver.then(function () {
            return page.clickLoginButton.perform();
        })
    });
    this.Given(/^user see homepage$/, function () {
        driver.manage().timeouts().implicitlyWait(15000);
    });
    this.When(/^user click menu button$/, function () {
        driver.then(function () {
            return page.clickMenuButton.perform();
        })
    });
    this.Then(/^user click logout button$/, function () {
        driver.then(function () {
            return page.clickLogoutButton.perform();
        
        })
    });
    
}