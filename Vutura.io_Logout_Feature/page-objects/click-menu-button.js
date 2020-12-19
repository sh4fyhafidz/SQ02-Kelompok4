module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        clickMenuButton: by.xpath("//*[@id='hero']/div[1]/button")
    },

    perform: function () {
        var selector = page.clickMenuButton.elements.clickMenuButton;
        driver.manage().timeouts().implicitlyWait(500);
        return driver.findElement(selector).click(); 
        
    }
};