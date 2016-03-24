# kwike

## Technologies

This solution to the Walmart Technologies coding assessment is implemented
with AngularJS, SASS, Font Awesome, Adobe Typekit Fonts, jQuery, and lodash.

## Installation

1. Install node v5.8.0 (for example with homebrew)
2. Install node version manager (nvm):
  `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`
3. Fork and/or clone the project:
  `git clone https://github.com/j5bot/kwike.git`
4. Modify the API key constant in `scripts/services.js` if desired.
4. `nvm use` to set the proper node version
5. `npm install -g node-sass` to install node-sass globally
6. `npm install` to install npm package dependencies (bower and node-sass)
7. `bower install` to install client-side dependencies
8. Run node-sass watch to compile the SASS files and watch them for changes:
  `node-sass -w sass --output styles`
9. Run python SimpleHTTPServer on port 8000:
  `python -m SimpleHTTPServer`
10. Visit [localhost:8000](http://localhost:8000)

## User Interface

A simple interface was coded in HTML5 and SASS/CSS.  It consists of a search bar
containing the Walmart logo and a search control and a product list containing
product search results.

## Services

Angular factory-style services leveraging the `ngResource` / `$resource`
provider were created to access the Walmart Open API.

Because of same-origin policies not allowing CORS between a
local development server and the Walmart API, the services were implemented
using JSONP instead of the preferred HTTP `GET` verb.

In the case of the Recommendations API, the JSONP response did
not come back properly wrapped in an invocation of the provided callback function.

## Controllers

Separate controllers were created for providing access to each service from within
directives

## Directives

Directives without isolate scope were created to implement the `search-controls`,
`product-list`, `product`, and `recommendations` tags.

Use of the `controllerAs` syntax allows for better controller reuse and separation
of concern.

The `product-list`/`productList` directive uses a `link` function to bind a click
event handler.  That click event handler sets the `selectedItem` property of the
`RecommendationsController` and calls the change event on the controller.

## What Else?

Obviously since the JSONP calls to the Recommendations API fail, a proxy for
this API might be required to implement this application properly.

The `product` items inside of recommendations need styling appropriate to
the interface, which would be a horizontally scrolling or carousel style listing
of the recommended products.

Testing could be implemented for E2E or for services and controllers to make
sure they are operating correctly, using the standard AngularJS tools, Karma, Jasmine,
and Protractor.  As it stands, the complexity of the application is low and the
time to implement testing was prohibitive for me.
