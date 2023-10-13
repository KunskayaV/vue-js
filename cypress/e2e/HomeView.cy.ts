import { ESearchByFilter, ESortByValues } from '@/constants'

describe('HomeView', () => {
  it('renders properly in initial state', () => {
    cy.visit('/')
    cy.get("[data-testid=loading-list]").contains('LOADING...');

    cy.get("[data-testid=search-input]").should('have.value', '');

    cy.get('.search-block .switcher-label--active').within(() => {
      cy.get('input').should('be.checked').should('have.value', ESearchByFilter.Title)
    })

    cy.get('.sort-bar .switcher-label--active').within(() => {
      cy.get('input').should('be.checked').should('have.value', ESortByValues.Date)
    })
  })

  context('should render properly if there are movies', () => {
    beforeEach(function () {
      cy.fixture('movies').then(movies => {this.movies = movies;})
      cy.seedAndVisit();
    })

    it('render movies list based on response', function () {
      cy.wait('@getMovies');
  
      cy.get('[data-testid=result-count]').contains(`${this.movies.length} movie found`)
      cy.get('[data-testid=results-list] li' ).should('have.length', 5);
    });
  
    it('should handle search input', () => {
      cy.wait('@getMovies');
  
      const searchText = 'Pulp Fiction';
      cy.get("[data-testid=search-input]").type(searchText);
  
      cy.get("[data-testid=search-input]").should('have.value', searchText);
    })
  
    it('should perform filtering on search input enter', () => {
      cy.wait('@getMovies');
  
      const searchText = 'The Shawshank Redemption';
      cy.get("[data-testid=search-input]").type(searchText).type('{enter}');
  
      cy.get('[data-testid=results-list] li').should('have.length', 1);
  
    })
  
    it('should perform filtering on search button click', () => {
      cy.wait('@getMovies');
  
      const searchText = 'The Shawshank Redemption';
      cy.get("[data-testid=search-input]").type(searchText);
  
      cy.get("[data-testid=search-form] button").click()
      cy.get('[data-testid=results-list] li').should('have.length', 1);
    })
  });

  

  it('should display emty state if no movies', () => {
    cy.seedAndVisit([]);

    cy.wait('@getMovies');

    cy.get('[data-testid=results-list]').should('not.exist')
    cy.contains('NO movies found')
    cy.get('[data-testid=result-count]').contains('0 movie found')
  })
})


