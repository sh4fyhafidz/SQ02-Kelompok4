module.exports = {

    url: 'https://dashboard.vutura.io/signIn',


    elements: {
        signInBtn: by.xpath("//button[@id='login-button']")
    },

    perform : function () {

        var selector = page.signinbtn.elements.signInBtn;
        return driver.findElement(selector).click();
    }
};