module.exports = {

    url: 'https://www.gmail.com/',

    elements: {
        nextToFillPassword: by.xpath("//div[@id='identifierNext']//span//span")
    },

    perform: function () {

        var selector = page.nextToFillPassword.elements.nextToFillPassword;
        return driver.findElement(selector).click(selector);
    }
};