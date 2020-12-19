module.exports = function () {

    this.Given(/^user fill Nama6 field$/, function () {
        driver.then(function() {
            return page.fillNama.performFill6()
        })
      });
    this.Given(/^user fill NamaBisnis6 field$/, function () {
        driver.then(function() {
            return page.fillNamaBisnis.performFill6()
        })
      });
    this.Given(/^user fill Telepon6 field$/, function () {
        driver.then(function() {
            return page.fillTelepon.performFill6()
        })
      });

}
