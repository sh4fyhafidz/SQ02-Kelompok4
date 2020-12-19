module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fillEmailSignIn: by.xpath("//input[@id='email-login']")
    },

    perform: function () {

        var selector = page.fillEmailSignIn.elements.fillEmailSignIn;
        return driver.findElement(selector).sendKeys(shared.id.email);
        
    }
};