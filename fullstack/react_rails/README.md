React on Ruby on Rails
===

This application requires:

- Ruby 2.2.3
- Rails 4.2.4

Learn more about [Installing Rails](http://railsapps.github.io/installing-rails.html).

Getting Started
---
```
bundle
npm install
npm install -g karma-cli
```

Add some seed data
---
```
rake db:seed
```

Running tests
---
__Ruby__:
```
rake
```

__Javascript__:

JS tests live in `/spec/js` and karma will run any file that ends with `_spec.js`. karma-cli is needed as a global install in order to run tests locally:

```
npm install -g karma-cli
```
karma watches for js files and runs tests whenever they change.
```
karma start
```

Single run of tests:
```
karma start --single-run
```
