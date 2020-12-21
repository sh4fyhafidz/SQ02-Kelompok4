module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        Email: by.xpath("//body/div[@id='__nuxt']/div[@id='__layout']/div[@id='app']/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/section[1]/div[3]/div[1]/input[1]")
    },

    performFill: function() {

        var selector = page.fillEmailField.elements.Email;
        return driver.findElement(selector).sendKeys(shared.id.email1);
    }
};
