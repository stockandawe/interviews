Resolutions
===

Ruby on Rails
---

This application requires:

- Ruby 2.2.3
- Rails 4.2.4

Getting Started
---

```
bundle
bundle exec rake db:migrate
npm install
```

Running tests
---

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
