module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fillPasswordSignIn3: by.xpath("//input[@id='password-login']")
    },

    perform: function () {

        var selector = page.fillPasswordSignIn3.elements.fillPasswordSignIn3;
        return driver.findElement(selector).sendKeys(shared.id.password2);
        
    }
};