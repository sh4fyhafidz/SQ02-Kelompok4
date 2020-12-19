module.exports = function () {

    this.Given(/^user fill Nama3 field$/, function () {
        driver.then(function() {
            return page.fillNama.performFill3()
        })
      });
    this.Given(/^user fill NamaBisnis3 field$/, function () {
        driver.then(function() {
            return page.fillNamaBisnis.performFill3()
        })
      });
    this.Given(/^user fill Telepon3 field$/, function () {
        driver.then(function() {
            return page.fillTelepon.performFill3()
        })
      });
}
