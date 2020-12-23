module.exports = {

    url: 'https://dashboard.vutura.io/bot',


    elements: {
        cancel: by.css("div.v-application.v-application--is-ltr.theme--light div.v-dialog__content.v-dialog__content--active div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card.v-sheet.theme--light div.v-card__actions.px-5.pb-5 button.text-none.v-btn.v-btn--depressed.v-btn--flat.v-btn--outlined.theme--light.v-size--default:nth-child(2) > span.v-btn__content")
    },

    perform : function () {

        var selector = page.cancel.elements.cancel;
        return driver.findElement(selector).click(selector);
    }
};