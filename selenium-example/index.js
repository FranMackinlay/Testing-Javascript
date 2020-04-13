const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const { By, Key, until, Builder, Capabilities } = webdriver;
const chromeDriver = './chromedriver';

(async function example() {

  chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver).build());
  const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

  try {
    //Definición de nuestros test
    await driver.get('https://keepcoding.io/es/');

    await driver.findElement(By.linkText('¿Quiénes somos?')).click();

    await driver.findElement(By.className('standard-logo')).click();

    await driver.quit();
  } catch (error) {
    console.log(error);
    await driver.quit();
  }
})();
