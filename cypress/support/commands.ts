/// <reference types="cypress" />

import { BASE_URL } from "@/api/constants"
import { TMovie } from "@/types";

Cypress.Commands.add('seedAndVisit', (seedData) => {
  const response = seedData ? { body: seedData } : { fixture: 'movies.json' };

  cy.intercept(`${BASE_URL}/movies?*`, response).as('getMovies');
  cy.visit('/')
})

declare global {
  namespace Cypress {
    interface Chainable {
      seedAndVisit(seedData?: TMovie[]): Chainable<void>
    }
  }
}