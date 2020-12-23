module.exports = function () {

  this.Given(/^user fill Nama5 field$/, function () {
      driver.then(function() {
          return page.fillNama.performFill5()
      })
    });
  this.Given(/^user fill NamaBisnis5 field$/, function () {
      driver.then(function() {
          return page.fillNamaBisnis.performFill5()
      })
    });
  this.Given(/^user fill Telepon5 field$/, function () {
      driver.then(function() {
          return page.fillTelepon.performFill5()
      })
    });
    this.Then(/^There is a notification and data user has been unsuccessfully updated$/, function () {
      driver.manage().timeouts().implicitlyWait(50000);
    });
  }
