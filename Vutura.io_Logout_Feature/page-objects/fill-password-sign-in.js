module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fillPasswordSignIn: by.xpath("//input[@id='password-login']")
    },

    perform: function () {

        var selector = page.fillPasswordSignIn.elements.fillPasswordSignIn;
        return driver.findElement(selector).sendKeys(shared.id.password);
        
    }
};