module.exports = {

    url: 'https://dashboard.vutura.io/bot',


    elements: {
        createCB01: by.xpath("//div[@class='v-card__actions px-5 pb-5']//button[@type='button']//span[@class='v-btn__content'][contains(text(),'Buat Chatbot')]")
    },

    perform : function () {

        var selector = page.createcb01.elements.createCB01;
        return driver.findElement(selector).click();
    }
};