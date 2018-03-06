[![CircleCI](https://circleci.com/gh/Taziva/Blog.svg?style=shield&&circle-token=e49cb52ca2a19fd5675b32184653d62a963afcac)](https://circleci.com/gh/Taziva/Blog) [![Test Coverage](https://api.codeclimate.com/v1/badges/fb077a8c3e11374551b1/test_coverage)](https://codeclimate.com/github/Taziva/Blog/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/fb077a8c3e11374551b1/maintainability)](https://codeclimate.com/github/Taziva/Blog/maintainability)

## Table of Contents

* [Quick Start](#quick-start) :rocket:
* [Testing](#testing) :microscope:
* [Deployment](#deployment) :squirrel:
* [Technology](#technology) :computer:
* [Decisions](#decisions) :question::exclamation:
* [Specification](#specification) :clipboard:

## Quick Start :rocket:

```
# Install dependencies
yarn

# Compile sass in seperate tab
yarn run watch:sass

# Start the app in dev mode
yarn dev
```

## Testing :microscope:

```
# Run jest tests
yarn test
```

## Deployment :squirrel:

```
# Make sure you have Google Cloud SDK installed

# Create Production Build
yarn build

# Deploy to Google Cloud Platform
yarn deploy
```

## Technology :computer:

---

**Built with:**

* JavaScript ES6
* NodeJS
* ReactJS
* Redux
* ExpressJS
* Firebase Admin
* Sass
* Flamelink

**Tested with:**

* Jest

---

## Decisions :question::exclamation:

### Why React JS?

Recently I've become more interested in front-end development and really wanted to try some of the popular frameworks. React seemed to be a very popular one because of it's backing by Facebook and because of mobile development with React Native. I wanted to become more familiar with it and feel this project has helped me become a little more comfortable with it especially when mixed with redux. [Create React App](https://github.com/facebookincubator/create-react-app) Made it very easy to start the project although may not have been the best tool for a blog, it maybe better utilised for a dashboard.

### Why firebase?

I just liked how I could use the data between different apps using firebase so I can now develop a mobile version of my blog and display the same content on it very easily

### Why Sass?

I really loved the way it makes it easier to write css with the shortcuts and extra functionality. I really enjoyed the use of the 7-1 pattern and BEM is one of the most fascinating and exciting methodologies I've used in writing CSS

### Why the Backend proxy server?

I didn't like how it revealed API keys when AJAX requests were made through the client links.

---

## Specification :clipboard:

* Blog that can display content written on Flamelink CMS.

* Must be able to display different content types created on the CMS. Should currently be for 3 types:
  * Feature Articles
  * Weekly listicles
  * Short Posts

- Allow readers to comment on content.
