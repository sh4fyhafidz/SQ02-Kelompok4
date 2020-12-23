module.exports = function () {

    this.Given(/^user fill Nama8 field$/, function () {
        driver.then(function() {
            return page.fillNama.performFill8()
        })
      });
    this.Given(/^user fill NamaBisnis8 field$/, function () {
        driver.then(function() {
            return page.fillNamaBisnis.performFill8()
        })
      });
    this.Given(/^user fill Telepon8 field$/, function () {
        driver.then(function() {
            return page.fillTelepon.performFill8()
        })
      });

}
