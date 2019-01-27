# Localsurvey [![Build Status](https://travis-ci.com/decrn/localsurvey.svg?branch=master)](https://travis-ci.com/decrn/localsurvey)

Localsurvey allows users to quickly and effortlessly provide a survey system on any computer with a web browser, even without an active internet connection. Create your own surveys with an easy-to-use visual builder and serve it as many times as needed on the local machine. After you're done, export the data in common data formats to seamlessly process survey results.

## Contributors

This project was created by:

* [@kfrancois](https://github.com/kfrancois)
* [@tuur29](https://github.com/tuur29)
* [@vincevrp](https://github.com/vincevrp)
* [@decrn](https://github.com/decrn)

## Getting Started

### Prerequisites

We recommend using [Docker](https://www.docker.com/) with [docker-compose](https://docs.docker.com/compose/install/) to run the application. Alternatively, read the section at the bottom of the page to run without Docker. 

Start by building the Docker image: `docker-compose build`.

### Scripts

##### `docker-compose up start`

Point your browser to `localhost:3000`.

##### `docker-compose up test`

We run [Enzyme](https://github.com/airbnb/enzyme) tests with [Jest](https://jestjs.io/).

##### `docker-compose up build`

To deploy the code to a static website under `./build/docker`.


### Running without Docker

You can run the app without docker, simply `npm i` then `npm start`.
