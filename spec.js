// spec.js
describe('Isentia Coding Challenge', function() {
  it('should navigate and find the modules', function() {
	browser.ignoreSynchronization = true;
    	browser.get('http://www.isentia.com/');

	var EC = protractor.ExpectedConditions;
	var productsAndServiceMenu = element(by.css('.dropdown-toggle'));
	var subMenu = element(by.linkText("isentia.mediaportal"));
	
//this will perform mouse over Isentia media portal link
	browser.actions().mouseMove(productsAndServiceMenu).perform();

//waits for the visibility of the menu
	browser.wait(EC.visibilityOf(subMenu),5000);
	subMenu.click();

//using xpath to verify first module to be Connect
	var module1 = browser.findElement(By.xpath('//*[@id="product"]/div/div/div/div/div[2]/div[1]/div[2]/div[1]/div/div[1]/h1[1]/strong'));
	expect(module1.getText()).toBe('Connect');

//using xpath to verify second module to be New and Analytics
	var module2 = browser.findElement(By.xpath('//*[@id="product"]/div/div/div/div/div[2]/div[1]/div[2]/div[2]/div/div[1]/h1[1]/strong'));
	expect(module2.getText()).toBe('News and Analytics');

//using xpath to verify third module to be Social
	var module3 = browser.findElement(By.xpath('//*[@id="product"]/div/div/div/div/div[2]/div[1]/div[2]/div[3]/div/div[1]/h1[1]/strong'));
	expect(module3.getText()).toBe('Social');

	it('should have our elements defined', function() {
    	expect(page.resultText.isPresent()).toEqual(true);

   });
  });
});