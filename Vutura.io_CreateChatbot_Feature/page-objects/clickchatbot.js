module.exports = {

    url: 'https://dashboard.vutura.io/bot',


    elements: {
        clickChatBot: by.css("div.v-application.v-application--is-ltr.theme--light div.v-application--wrap main.v-content div.v-content__wrap section.px-0.px-sm-6:nth-child(2) div.px-4.px-sm-12.pb-0.mx-0.mx-sm-12.mt-n10em div.row div.col-sm-12.col-lg-4.col:nth-child(1) div.d-flex.flex-row.flex-sm-column.justify-center.align-center.add-bot-card.v-card.v-card--link.v-sheet.theme--light button.v-btn.v-btn--contained.v-btn--fab.v-btn--round.theme--light.v-size--x-small span.v-btn__content > i.v-icon.notranslate.mdi.mdi-plus.theme--light.white--text")
    },

    perform : function () {

        var selector = page.clickchatbot.elements.clickChatBot;
        return driver.findElement(selector).click(selector);
    }
};