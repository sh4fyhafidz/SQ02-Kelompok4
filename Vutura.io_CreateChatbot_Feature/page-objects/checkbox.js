module.exports = {

    url: 'https://dashboard.vutura.io/bot',


    elements: {
        checkBox: by.xpath("//div[@class='v-input--selection-controls__ripple']")
    },

    perform : function () {

        var selector = page.checkbox.elements.checkBox;
        return driver.findElement(selector).click(selector);
    }
};