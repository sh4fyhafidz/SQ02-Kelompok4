module.exports = function () {

    this.Given(/^user fill Email1 field$/, function () {
        driver.then(function() {
            return page.fillEmailField.performFill()
        })
      });
}
