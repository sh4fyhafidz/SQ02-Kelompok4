module.exports = {

    url: 'https://dashboard.vutura.io/account',

    elements: {
        Telepon: by.xpath("//body/div[@id='__nuxt']/div[@id='__layout']/div[@id='app']/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/section[1]/div[4]/div[1]/input[1]")
    },

    performFill1: function() {

        var selector = page.fillTelepon.elements.Telepon;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Telepon1);
    },

    performFill2: function() {

        var selector = page.fillTelepon.elements.Telepon;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Telepon2);
    },

    performFill3: function() {

        var selector = page.fillTelepon.elements.Telepon;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Telepon3);
    },

    performFill4: function() {

        var selector = page.fillTelepon.elements.Telepon;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Telepon4);
    },

    performFill5: function() {

        var selector = page.fillTelepon.elements.Telepon;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Telepon5);
    },

    performFill6: function() {

        var selector = page.fillTelepon.elements.Telepon;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Telepon6);
    },

    performFill7: function() {

        var selector = page.fillTelepon.elements.Telepon;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Telepon7);
    },

    performFill8: function() {

        var selector = page.fillTelepon.elements.Telepon;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Telepon8);
    }
};
