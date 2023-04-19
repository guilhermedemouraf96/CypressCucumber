import { messages } from '../pages/login/elements';

const elem = require('../pages/login/elements').Elements;
const msg = require('../pages/login/elements').messages;
const massaDados = require('../pages/login/elements').massaDados;


class login{
    AcessoLoginPage() { 

        cy.visit('https://saucedemo.com/')
        cy.get(elem.username).should('be.visible')
        }
    Login(username,senha){
        cy.get(elem.username).type(username)
        cy.get(elem.password).type(senha)
        cy.get(elem.loginButton).click()
    }
  ValidarLogin(){
    cy.url().should('be.equal', messages.urlLoja)
  }
  
    ValidarTexto(elemento, textoEsperado){

      cy.get(elemento).should('have.text', textoEsperado)
    }
  }
  


export default new login();