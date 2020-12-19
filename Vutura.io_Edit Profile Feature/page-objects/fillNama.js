module.exports = {

    url: 'https://dashboard.vutura.io/account',

    elements: {
        Nama: by.xpath("//body/div[@id='__nuxt']/div[@id='__layout']/div[@id='app']/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/section[1]/div[1]/div[1]/input[1]")
    },

    performFill1: function() {

        var selector = page.fillNama.elements.Nama;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Nama1);
    },

    performFill2: function() {

        var selector = page.fillNama.elements.Nama;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Nama2);
    },

    performFill3: function() {

        var selector = page.fillNama.elements.Nama;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Nama3);
    },

    performFill4: function() {

        var selector = page.fillNama.elements.Nama;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Nama4);
    },

    performFill5: function() {

        var selector = page.fillNama.elements.Nama;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Nama5);
    },

    performFill6: function() {

        var selector = page.fillNama.elements.Nama;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Nama6);
    },

    performFill7: function() {

        var selector = page.fillNama.elements.Nama;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Nama7);
    },
    
    performFill8: function() {

        var selector = page.fillNama.elements.Nama;
        driver.findElement(selector).clear(selector);
        return driver.findElement(selector).sendKeys(shared.id.Nama8);
    },
};
