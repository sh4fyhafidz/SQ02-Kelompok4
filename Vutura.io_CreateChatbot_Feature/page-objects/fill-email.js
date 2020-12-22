module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fillEmail: by.xpath("//*[@id='email-login']")
    },

    performFill : function () {

        var selector = page.fillEmail.elements.fillEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};
