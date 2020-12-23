module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        Pass: by.xpath("//input[@id='password-login']")
    },

    performFill: function() {

        var selector = page.fillPass.elements.Pass;
        return driver.findElement(selector).sendKeys(shared.id.password);
    }
};
