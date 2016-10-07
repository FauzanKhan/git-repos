# Code Challenge

## Dependencies
* NodeJS (>=6.5)

## Setup
* Make sure you have node, npm & bower installed, run -

```npm run build:start```

The above command will install all the dependencies and start localserver at `http://localhost:8080`

OR

* `npm install -g gulp bower karma-cli jasmine`
* `npm install`
* `bower install`

## Gulp tasks

* `gulp` to build & watch the assets, start the server at `http://localhost:8080`.
* `gulp build:serve` to build the assets without watch mode, start the server at `http://localhost:8080`.
* `gulp bower` to bundle bower_components in `vendor.js` and `vendor.css`
* `gulp js` to bundle the JS files of the project into `app.bundle.js`
* `gulp css` to compile & bundle the SCSS files of the project into `app.css`
* `gulp serve` to launch the server

## Architectural Decisions

####Project Structure

```
Project
	|-app
	|	|-scripts
	|	|	`config
	|	|	`constants
	|	|	`controllers
	|	|	`directives
	|	|	`factories
	|	|	`filters
	|	|-styles
	|	|	|-globals
	|	|	|-theme
	|	|	|	`palet.scss
	|	|	|	`typography
	|	|	|	`theme.scss
	|	|-app.scss
	|	|-views
	|	|	`partials
	|	| `templates
	|-tasks (gulp tasks)
	|-dist
		|-css (Includes compiled Css files)
		|	`vendor.css
		|	`app.css
		|-js
			`vendor.js
			`-app.js
```

### Getting started with the project

just type ```gulp``` in the command line, hit enter. Go to ```localhost:8080``` to see your code in action

### Testing
run `karma start` from the terminal to start tests
