module.exports = {

    url: 'https://dashboard.vutura.io/account',

    elements: {
        Edit: by.xpath("//body/div[@id='__nuxt']/div[@id='__layout']/div[@id='app']/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]")
    },

    perform: function() {

        var selector = page.btnEdit.elements.Edit;
        return driver.findElement(selector).click(selector);
        console.log("clicked");
    }
};
