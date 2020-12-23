module.exports = function () {

    this.Given(/^user fill Nama4 field$/, function () {
        driver.then(function() {
            return page.fillNama.performFill4()
        })
      });
    this.Given(/^user fill NamaBisnis4 field$/, function () {
        driver.then(function() {
            return page.fillNamaBisnis.performFill4()
        })
      });
    this.Given(/^user fill Telepon4 field$/, function () {
        driver.then(function() {
            return page.fillTelepon.performFill4()
        })
      });

}
