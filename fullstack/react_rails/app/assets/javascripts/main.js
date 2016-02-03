import React from 'react';
import ReactDOM from 'react-dom';
import globals from 'globals';
import ExampleReactComponent from 'components/example_react_component' ;

module.exports = function () {
  // register globally available components
  MAIN.react.registerComponent('ExampleReactComponent', ExampleReactComponent);
  MAIN.react.registerComponent('NaturalLanguageForm', NaturalLanguageForm);

  // load react components from DOM
  findReactNodes().each((i, elem) => {
    let $elem = $(elem),
        componentName = $elem.data('options').name,
        payload = $elem.data('payload');

    ReactDOM.render(
      React.createElement(MAIN.react.components[componentName], payload),
      elem
    );
  })

  console.log('App is loaded');
}

function findReactNodes() {
  if($) {
    return $("div[data-integration-name='react-component']");
  } else {
    console.error("jQuery is not loaded");
  }
}
