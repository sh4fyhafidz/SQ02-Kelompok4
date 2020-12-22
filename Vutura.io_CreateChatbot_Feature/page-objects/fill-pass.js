module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        fillPass: by.xpath("//*[@id='password-login']")
    },

    performFill : function () {

        var selector = page.fillPass.elements.fillPass;
        return driver.findElement(selector).sendKeys(shared.id.pw);
    }
};
