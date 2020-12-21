module.exports = function () {

    this.When(/^user click Batal button$/, function () {
        driver.then(function() {
            return page.btnCancel.perform()
        })
      });
    
    this.Then(/^data user not updated$/, function () {
<<<<<<< HEAD
        driver.manage().timeouts().implicitlyWait(5000);
=======
        driver.manage().timeouts().implicitlyWait(50000);
>>>>>>> d3210eb007ab9ff3ef4d909d69955ef00034f996
      });

}
