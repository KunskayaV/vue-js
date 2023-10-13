/// <reference types="cypress" />

import { MOVIES_URL } from "@/api/constants"
import { TMovie } from "@/types";

Cypress.Commands.add('seedAndVisit', (seedData) => {
  const response = seedData ? { body: seedData } : { fixture: 'movies.json' };

  cy.intercept(MOVIES_URL, response).as('getMovies');
  cy.visit('/')
})

declare global {
  namespace Cypress {
    interface Chainable {
      seedAndVisit(seedData?: TMovie[]): Chainable<void>
    }
  }
}