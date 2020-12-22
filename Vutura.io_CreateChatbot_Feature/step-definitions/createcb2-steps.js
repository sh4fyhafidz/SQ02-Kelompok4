module.exports = function () {

        this.Given(/^user click check box icon$/, function () {
         driver.then(function(){
             return page.checkbox.perform()
        })
            });

        this.Given(/^user click select template$/, function () {
         driver.then(function(){
                return page.select.perform()
               })
                   });
      
        this.Given(/^user click template$/, function () {
         driver.then(function(){
                return page.template.perform()
                })
                    });


      
}