module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        clickLoginButton3: by.xpath("//button[@id='login-button']")
    },

    perform: function () {
        var selector = page.clickLoginButton3.elements.clickLoginButton3;
        driver.manage().timeouts().implicitlyWait(500);
        return driver.findElement(selector).click();
        
    }
};