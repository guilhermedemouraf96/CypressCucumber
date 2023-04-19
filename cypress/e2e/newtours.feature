Feature: Login Page

Background:
Given esteja na pagina de login
Scenario: Login valido
When Preencho o campo username e senha e clico em Login
Then Acesso pagina da loja

Scenario: Login bloqueado
But Preencho o campo username bloqueado e senha e clico em Login
Then visualizo mensagem de erro login bloqueado

Scenario: Login e senha invalido
But Preencho o campo username e senha invalidos e clico em Login
Then visualizo mensagem de erro usuario invalido

Scenario: Login valido e senha em branco
But Preencho o campo username e não preencho a senha e clico em Login
Then visualizo mensagem de erro falta senha


Scenario: Login em branco
But não preencho nenhum campo
Then visualizo mensagem de erro falta username