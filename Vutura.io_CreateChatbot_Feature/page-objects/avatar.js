module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        fillAva: by.css("div.v-application.v-application--is-ltr.theme--light div.v-dialog__content.v-dialog__content--active div.v-dialog.v-dialog--active.v-dialog--persistent div.v-card.v-sheet.theme--light div.px-5.mb-2 div.d-flex.flex-column.mb-5:nth-child(1) div.d-flex.flex-column.flex-sm-row.justify-sm-space-between.align-center.mb-0.mb-sm-3 div.card-avatar.d-flex.flex-wrap.pa-3.v-card.v-card--flat.v-sheet.theme--light > div.ma-1.d-flex.align-center.avatar-container:nth-child(3)")
    },

    perform : function () {

        var selector = page.avatar.elements.fillAva;
        return driver.findElement(selector).sendKeys(shared.id.ava);
    }
};
