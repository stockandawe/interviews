var MAIN = {
  react: {
    components: {},
    registerComponent: function(name, component) {
      MAIN.react.components[name] = component;
    }
  }
}
