Feature: Login
  Eu como usuario
  Gostaria de fazer Login na aplicação
  Para acessar o sistema

  Scenario: Login with success
    Given I fill email 
    And I fill password
    When I tap on Entrar
    Then I see the Savar button
