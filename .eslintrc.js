module.exports = {
    "extends": "airbnb",

  "plugins": [
    "react"
  ],

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
"rules": {
  "react/jsx-uses-react": "error",
  "react/jsx-uses-vars": "error",
  "react/self-closing-comp": ["error", {
    "component": false,
    "html": false
  }]
}

};
