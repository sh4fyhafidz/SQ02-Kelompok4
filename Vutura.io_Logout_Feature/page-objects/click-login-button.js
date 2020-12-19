module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        clickLoginButton: by.xpath("//button[@id='login-button']")
    },

    perform: function () {
        var selector = page.clickLoginButton.elements.clickLoginButton;
        driver.manage().timeouts().implicitlyWait(500);
        return driver.findElement(selector).click();
        
    }
};