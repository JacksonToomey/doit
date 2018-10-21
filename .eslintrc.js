module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
      "import/prefer-default-export": 2,
      "import/no-unresolved": 0,
      "react/jsx-filename-extension": 0,
      "import/extensions": ["error", "never"],
      "jsx-a11y/label-has-for": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "strict": 0
  },
  "settings": {
    "import/resolver": {
    }
  },
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
};
