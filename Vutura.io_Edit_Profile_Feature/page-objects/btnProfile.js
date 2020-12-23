module.exports = {

    url: 'https://dashboard.vutura.io/bot',

    elements: {
        Profile: by.xpath("//body/div[@id='__nuxt']/div[@id='__layout']/div[@id='app']/div[1]/div[1]/a[1]/div[2]")
    },

    perform: function() {

        var selector = page.btnProfile.elements.Profile;
        return driver.findElement(selector).click(selector);
        console.log("clicked");
    }
};
