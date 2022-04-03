Feature('login');

const { I, login_page} = inject()

BeforeSuite(() => {
    console.log("Finotti Suite")
});

Before(() => {
    console.log("Finotti Scenario")
});

AfterSuite(() => {
    console.log("AfterSuite")
});

After(() => {
    console.log("After")
    I.saveScreenshot("Codecept_IO_Screenshot_Image.png");
});

Scenario('test something', ({home_page}) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
});

Scenario('test with error', () => {
    login_page.doLogin('teste#teste.com', '123456')
    login_page.checkLoginError()
});
