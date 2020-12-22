module.exports = {

    url: 'https://dashboard.vutura.io/bot',


    elements: {
        select: by.xpath("//div[@class='v-select__selections']")
    },

    perform : function () {

        var selector = page.select.elements.select;
        return driver.findElement(selector).click(selector);
    }
};