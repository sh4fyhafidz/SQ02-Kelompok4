module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fillEmailSignIn2: by.xpath("//input[@id='email-login']")
    },

    perform: function () {

        var selector = page.fillEmailSignIn2.elements.fillEmailSignIn2;
        return driver.findElement(selector).sendKeys(shared.id.email2);
        
    }
};