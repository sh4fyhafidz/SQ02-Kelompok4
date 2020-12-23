module.exports = function () {

    this.Given(/^user fill Nama7 field$/, function () {
        driver.then(function() {
            return page.fillNama.performFill7()
        })
      });
    this.Given(/^user fill NamaBisnis7 field$/, function () {
        driver.then(function() {
            return page.fillNamaBisnis.performFill7()
        })
      });
    this.Given(/^user fill Telepon7 field$/, function () {
        driver.then(function() {
            return page.fillTelepon.performFill7()
        })
      });

}
