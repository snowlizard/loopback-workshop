module.exports = {
    "db": {
      "name": "db",
      "connector": "memory"
    },
    "MongoDB": {
      "host": "sandbox",
      "port": 0,
      "url": process.env.URI,
      "database": "loopback",
      "password": process.env.MPASS,
      "name": "MongoDB",
      "user": "lol31",
      "useNewUrlParser": true,
      "connector": "mongodb"
    }
  }