module.exports = function () {
    this.Given(/^user browse sign in page$/, function () { 
        helpers.loadPage(shared.pages.LoginPage)
      });
    this.Given(/^user fill email field$/, function () {    
        driver.then(function() {
            return page.fillEmail.performFill()
        })
      });
    this.Given(/^fill password field$/, function () {      
        driver.then(function() {
            return page.fillPass.performFill()
        })
      });
    this.Given(/^user click sign button$/, function () {    
        driver.then(function() {
            return page.btnLogin.perform()
        })
      });
    this.Given(/^user can see bot page$/, function () {     
        driver.manage().timeouts().implicitlyWait(5000);
      }); 
    this.Given(/^user click menu button$/, function () {    
        driver.then(function() {
            return page.btnMenu.perform()
        })
      });
    this.Given(/^user click profile menu$/, function () {    
        driver.then(function() {
            return page.btnProfile.perform()
        })
      });
    

    this.Given(/^user browse dashboard my account page$/, function () {
        driver.manage().timeouts().implicitlyWait(5000);
      });
    
     this.Given(/^user click edit button$/, function () {
        driver.then(function() {
            return page.btnEdit.perform()
        })
      });
    this.Given(/^user fill Nama1 field$/, function () {
        driver.then(function() {
            return page.fillNama.performFill1()
        })
      });
    this.Given(/^user fill NamaBisnis1 field$/, function () {
        driver.then(function() {
            return page.fillNamaBisnis.performFill1()
        })
      });
    this.Given(/^user fill Telepon1 field$/, function () {
        driver.then(function() {
            return page.fillTelepon.performFill1()
        })
      });
    this.When(/^user click Perbarui button$/, function () {
        driver.then(function() {
            return page.btnUpdate.perform()
        })
      });
    this.Then(/^There is a notification and data user has been successfully updated$/, function () {
        driver.manage().timeouts().implicitlyWait(50000);
      });
}
