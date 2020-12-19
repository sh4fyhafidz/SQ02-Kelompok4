module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fillPasswordSignIn2: by.xpath("//input[@id='password-login']")
    },

    perform: function () {

        var selector = page.fillPasswordSignIn2.elements.fillPasswordSignIn2;
        return driver.findElement(selector).sendKeys(shared.id.password);
        
    }
};