module.exports = function () {
    this.Given(/^user browse sign in page$/, function () {
        helpers.loadPage(shared.pages.signinDashboard)

      });
      
      this.Given(/^user fill email field$/, function () {
          driver.then(function(){
              return page.fillEmail.performFill()
          })
              });
              
              this.Given(/^user fill password field$/, function () {
        driver.then(function(){
            return page.fillPass.performFill()
        })
             });

      this.Given(/^user click sign in button$/, function () {
        driver.then(function(){
            return page.signinbtn.perform();
        })        
             });

      this.Given(/^user can see bot page$/, function () {
        driver.manage().timeouts().implicitlyWait(500);

             });

       this.Given(/^user can click chatbot button$/, function () {
        driver.then(function(){
            return page.clickchatbot.perform();
        })        
            });

        this.Given(/^user fill name field$/, function () {
         driver.then(function(){
             return page.fillname.perform()
        })
            });

        this.Given(/^user fill description field$/, function () {
         driver.then(function(){
                return page.filldesc.perform()
               })
                   });
      
         this.When(/^user click create chatbot button$/, function () {
         driver.then(function(){
                return page.createcb01.perform()
                })
                    });

        this.Then(/^chatbot has been succsessfully created$/, function () {
         driver.manage().timeouts().implicitlyWait(500);    
                             });     

      
}