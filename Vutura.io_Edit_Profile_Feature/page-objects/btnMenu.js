module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        line: by.css("div.v-application.v-application--is-ltr.theme--light div.v-application--wrap main.v-content div.v-content__wrap div:nth-child(1) section.vutura.pt-2.pt-sm-5.pb-14.px-4.px-sm-12:nth-child(1) div.d-flex.justify-space-between.align-center > button.btn-menu.pa-1:nth-child(3)")
    },

    perform: function() {

        var selector = page.btnMenu.elements.line;
        return driver.findElement(selector).click(selector);
        console.log("clicked");
    }
};
