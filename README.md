# Localsurvey [![Build Status](https://travis-ci.com/decrn/localsurvey.svg?branch=master)](https://travis-ci.com/decrn/localsurvey)

Localsurvey allows users to quickly and effortlessly provide a survey system on any computer with a web browser, even without an active internet connection. Create your own surveys with an easy-to-use visual builder and serve it as many times as needed on the local machine. After you're done, export the data in common data formats to seamlessly process survey results.

## Contributors

This project was created by

* Koen François
* Tuur Lievens
* Vince Verpaelst
* Denis Carnier

## Getting Started

### Prerequisites

* [Docker](https://www.docker.com/) and [`docker-compose`](https://docs.docker.com/compose/install/) for your platform
* An active internet connection for installation

Start by building the Docker image: `docker-compose build`.

##### `docker-compose start`

Point your browser to `localhost:3000`

##### `docker-compose test`

We run [Enzyme](https://github.com/airbnb/enzyme) tests with [Jest](https://jestjs.io/)

##### `docker-compose build`

To deploy the code to a static website under `./build`
