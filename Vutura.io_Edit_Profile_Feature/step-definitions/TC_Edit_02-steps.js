module.exports = function () {

    this.Given(/^user fill Nama2 field$/, function () {
        driver.then(function() {
            return page.fillNama.performFill2()
        })
      });
    this.Given(/^user fill NamaBisnis2 field$/, function () {
        driver.then(function() {
            return page.fillNamaBisnis.performFill2()
        })
      });
    this.Given(/^user fill Telepon2 field$/, function () {
        driver.then(function() {
            return page.fillTelepon.performFill2()
        })
      });

}
