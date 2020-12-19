module.exports = {

    url: 'https://dashboard.vutura.io/account',

    elements: {
        
        Cancel: by.xpath("//button[contains(text(),'Batal')]")
    },
    perform: function() {

        var selector = page.btnCancel.elements.Cancel;
        return driver.findElement(selector).click(selector);
        console.log("clicked");
    }
};
