module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fillEmailSignIn3: by.xpath("//input[@id='email-login']")
    },

    perform: function () {

        var selector = page.fillEmailSignIn3.elements.fillEmailSignIn3;
        return driver.findElement(selector).sendKeys(shared.id.email);
        
    }
};