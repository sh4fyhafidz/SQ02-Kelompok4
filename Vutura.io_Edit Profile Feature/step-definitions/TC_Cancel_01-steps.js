module.exports = function () {

    this.When(/^user click Batal button$/, function () {
        driver.then(function() {
            return page.btnCancel.perform()
        })
      });
    
    this.Then(/^data user not updated$/, function () {
        driver.manage().timeouts().implicitlyWait(50000);
      });

}
