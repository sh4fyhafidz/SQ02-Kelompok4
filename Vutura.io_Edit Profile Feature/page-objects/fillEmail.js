module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        Email: by.xpath("//input[@id='email-login']")
    },

    performFill: function() {

        var selector = page.fillEmail.elements.Email;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};
