process.env.TZ = "UTC";
process.enc.NODE_ENV = "test";

require("dotenv").config();
const { expect } = require("chai");
const supertest = require("supertest");

global.expect = expect;
global.supertest = supertest;
