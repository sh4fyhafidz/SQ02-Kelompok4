module.exports = {

    url: 'https://dashboard.vutura.io/account',

    elements: {
        //Update: by.css("div.v-application.v-application--is-ltr.theme--light div.v-application--wrap div.columns._bg_layout:nth-child(2) div.column.is-flex:nth-child(2) div._content_layout div.columns div.column.is-three-quarters:nth-child(1) div.box.is-round div.container div.modal.is-active form:nth-child(1) div.modal-card footer.modal-card-foot > button.button.is-primary:nth-child(2)")
        Update: by.xpath("//button[contains(text(),'Perbarui')]")
    },
    perform: function() {

        var selector = page.btnUpdate.elements.Update;
<<<<<<< HEAD
        return driver.findElement(selector).click(selector);
=======
        return driver.findElement(selector).click();
>>>>>>> d3210eb007ab9ff3ef4d909d69955ef00034f996
        console.log("clicked");
    }
};
