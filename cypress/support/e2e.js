// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register'

//Forma alternativa de importar os comandos personalizados 
// Voce pode alterar ou alterar sua ordem de prioridade na busca por elementos utilizando os atributos data-cy, data-test, etc.
// Cypress.ElementSelector.defaults({
//   selectorPriority: [
//     'data-cy',
//     'data-test',
//     'attribute:role',
//     'attribute:aria-labelledby',
//     'name',
//     'id',
//     'class',
//     'attributes',
//   ],
// })

