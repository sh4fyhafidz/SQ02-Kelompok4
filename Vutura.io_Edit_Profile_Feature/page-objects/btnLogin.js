module.exports = {

    url: 'https://dashboard.vutura.io/signIn',

    elements: {
        Button: by.css("#login-button")
    },

    perform: function() {

        var selector = page.btnLogin.elements.Button;
        return driver.findElement(selector).click(selector);
        console.log("clicked");
    }
};
