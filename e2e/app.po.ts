export class ComponentsTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('components-test-app h1')).getText();
  }
}
