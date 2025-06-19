//test that app.js send the username to a database
//mock the database and test a mock
//
//test that http server calls the correct methods and passes in the correct data>test the interaction between the server and database(not the db directly)

import request from "supertest";
import makeApp from "./app.js";
import { jest } from "@jest/globals";
import { create } from "node:domain";

//create mock functions using jest.fn()

const createUser = jest.fn();
const getUser = jest.fn();

const app = makeApp({
  createUser,
  getUser,
});

//test to make sure username and password is passed onto the database

describe("POST /users", () => {
  beforeEach(() => {
    createUser.mockReset();
  });

  describe("given a username and password", () => {
    //should save the username and password to the database
    //should responde with a json object containing the user id

    test("should save the username and password to the database", async () => {
      const bodyData = [
        { username: "username1", password: "password1" },
        { username: "username2", password: "password2" },
        { username: "username3", password: "password3" },
      ];
      for (const body of bodyData) {
        createUser.mockReset(); //each individual loop will be an independent tests
        await request(app).post("/users").send(body);
        expect(createUser.mock.calls.length).toBe(1);
        expect(createUser.mock.calls[0][0]).toBe(body.username);
        expect(createUser.mock.calls[0][1]).toEqual(body.password);
      }
    });

    //
    test("should respond with a json object containing the user id", async () => {
      for (let i = 0; i < 10; i++) {
        createUser.mockReset();
        createUser.mockResolvedValue(i); //tell createUser function it should return a promise that resovles to 1.
        const response = await request(app)
          .post("/users")
          .send({ username: "username", password: "password" });
        // checking that value is whatever the user id is in the body of the http response
        expect(response.body.userId).toBe(i);
      }
    });

    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });
      expect(response.statusCode).toBe(200);
    });
  });
});
