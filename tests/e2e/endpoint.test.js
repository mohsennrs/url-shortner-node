var express = require('express');
var app = require('../../app');
const request = require('supertest')
const mongoose = require('mongoose');

afterAll(async(done) => {
  // Closing the DB connection allows Jest to exit successfully.
  try {
    await mongoose.connection.close();
    done()
  } catch (error) {
    
    done(error)
  }
  // done()
})
describe('POST /shortner/create', function() {
  it('New Url record with shortened url should return', async function(done) {
    const res = await request(app)
      .post('/shortner/create')
      .send({url: "https://stackoverflow.com/questions/25597266/how-to-update-a-collection-using-eloquent-laravel/25597309"})
      .set('Accept', 'application/json')
       // x-www-form-urlencoded upload
      try {
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('status', 1)
        expect(res.body).toHaveProperty('data')
        done()
      } catch(error) {
        done(error)
      }
  });
});

describe('Get /shortner', function() {

  it('Get Url list', async function(done) {

    const res =  await request(app)
      .get('/shortner')
      .set('Accept', 'application/json');
       // x-www-form-urlencoded upload
    try {
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('status', 1)
      expect(res.body).toHaveProperty('urls');
      done();
    } catch(error) {
      done(error)
    }
  });
});