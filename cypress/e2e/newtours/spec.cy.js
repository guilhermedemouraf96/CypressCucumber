import {Given,When,Then,But,And} from "cypress-cucumber-preprocessor/steps";
import login from '../../support/pages/index'
import { massaDados, messages } from "../../support/pages/login/elements";

Given("esteja na pagina de login", ()=>{
	login.AcessoLoginPage()
});
When("Preencho o campo username e senha e clico em Login", ()=>{
  login.Login(massaDados.usernameValido, massaDados.senha)
})
Then("Acesso pagina da loja", ()=>{
 login.ValidarLogin();
})
But("Preencho o campo username bloqueado e senha e clico em Login", ()=>{
  login.Login(massaDados.usernameBlock, massaDados.senha,)
})
Then("visualizo mensagem de erro login bloqueado", ()=>{
  login.ValidarTexto(messages.caixaErro,'Epic sadface: Sorry, this user has been locked out.' )
 })
 But("Preencho o campo username e senha invalidos e clico em Login", ()=>{
  login.Login('testuser', 'testuser')
})
Then("visualizo mensagem de erro usuario invalido", ()=>{
  login.ValidarTexto(messages.caixaErro,'Epic sadface: Username and password do not match any user in this service' )
 })
 But("Preencho o campo username e não preencho a senha e clico em Login", ()=>{
  login.Login(massaDados.usernameValido, '{enter}')
})
Then("visualizo mensagem de erro falta senha", ()=>{
 login.ValidarTexto(messages.caixaErro,'Epic sadface: Password is required' )
 })
 But("não preencho nenhum campo", ()=>{
  cy.get('[data-test="login-button"]').click()
})
Then("visualizo mensagem de erro falta username", ()=>{
  login.ValidarTexto(messages.caixaErro,'Epic sadface: Username is required' )
 })