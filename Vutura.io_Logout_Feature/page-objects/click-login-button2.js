module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        clickLoginButton2: by.xpath("//button[@id='login-button']")
    },

    perform: function () {
        var selector = page.clickLoginButton2.elements.clickLoginButton2;
        driver.manage().timeouts().implicitlyWait(500);
        return driver.findElement(selector).click();
        
    }
};