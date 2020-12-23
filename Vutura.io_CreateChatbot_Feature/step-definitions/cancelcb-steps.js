module.exports = function () {
 
        this.When(/^user click cancel button$/, function () {
         driver.then(function(){
                return page.cancel.perform()
                })
                    });

        this.Then(/^create chatbot has been canceled$/, function () {
         driver.manage().timeouts().implicitlyWait(500);    
                             });     

      
}
