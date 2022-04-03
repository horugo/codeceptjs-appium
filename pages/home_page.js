const { I } = inject();

module.exports = {

  button: {
    save: "~salvar",
  },

  fields: {
    code: {
      ios: '//android.widget.EditText[@content-desc="codigo"]', 
      android: '~codigo'},
    name: {
      ios: '//android.widget.EditText[@content-desc="aluno"]', 
      android: '~aluno'},
    search: {
      ios: '//android.widget.EditText[@content-desc="search"]', 
      android: '~search'
    }
  },

  registerStudent(code, name){
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.button.save)
  },

  searchStudent(search, check){
    I.fillField(this.fields.search, search)

    I.runOnIOS(() =>{
      I.seeElement('(//XCUIElementTypeOther[@name"'+check+'"])[2]')
    })

    I.runOnAndroid(() =>{
      I.seeElement('//android.view.ViewGroup[@content-desc="'+check+'"]')
    })
  },

  checkLoginSuccess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  },

}
