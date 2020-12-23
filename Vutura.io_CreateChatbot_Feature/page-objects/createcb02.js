module.exports = {

    url: 'https://dashboard.vutura.io/bot',


    elements: {
        createCB02: by.xpath("//div[@class='v-card__actions px-5 pb-5']//button[@type='button']//span[@class='v-btn__content'][contains(text(),'Buat Chatbot')]")
    },

    perform : function () {

        var selector = page.createcb02.elements.createCB02;
        return driver.findElement(selector).click();
    }
};