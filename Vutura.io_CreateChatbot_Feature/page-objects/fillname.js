module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        fillName: by.css("#input-94")
    },

    perform : function () {

        var selector = page.fillname.elements.fillName;
        return driver.findElement(selector).sendKeys(shared.id.name);
    }
};
