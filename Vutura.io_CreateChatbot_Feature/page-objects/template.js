module.exports = {

    url: 'https://dashboard.vutura.io/bot',


    elements: {
        templates: by.xpath("/html/body/div[1]/div/div/div[1]/div/div/div[1]/div")
    },

    perform : function () {

        var selector = page.template.elements.templates;
        return driver.findElement(selector).click(selector);
    }
};