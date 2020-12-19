module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        clickLogoutButton: by.xpath("//div[contains(text(),'Keluar')]")
    },

    perform: function () {
        var selector = page.clickLogoutButton.elements.clickLogoutButton;
        return driver.findElement(selector).click();
        
    }
};