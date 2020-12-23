module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        fillDesc: by.css("#input-97")
    },

    perform : function () {

        var selector = page.filldesc.elements.fillDesc;
        return driver.findElement(selector).sendKeys(shared.id.desc);
    }
};
