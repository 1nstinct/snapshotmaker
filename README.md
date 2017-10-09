# Snapshot Maker (Node.js+HTML5)

Snapshot Maker is a web app, developed to help making snapshots with help of user's web cam and to store them on server.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# Features!

  - See camera's view
  - Make snapshot
  - View snapshot before saving
  - Store on server in particular directory

You can also:
  - Change directory for snapshots

### Tech

This app uses a number of open source projects to work properly:

* [HTML5](https://www.w3.org/TR/html5/) - HyperText Markup Language, version 5
* [Node.js](https://nodejs.org) - An asynchronous event driven JavaScript runtime

### Installation

Snapshot maker requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server. We will use HTTPS for secure approach.

```sh
$ cd snapshotmaker
$ npm install
$ cd ./sslcert
$ openssl genrsa -des3 -out server.key 1024
$ openssl req -new -key server.key -out server.csr
$ openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

```

Next: go to /bin/www and define for key `passphrase` value, that you used to generate certificates.

```sh
$ npm run start
```
Verify the deployment by navigating to your server address in your preferred browser.

```sh
https://localhost:8443
```


### Todos

 - Write MORE Tests

License
----

ISC
