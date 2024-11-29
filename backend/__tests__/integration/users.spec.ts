import app from "../../presentation/express/app";
import { test, describe, vi } from "vitest";
import request from "supertest"

describe("integration for users", () => {

    vi.stubEnv("MYSQL_HOST", "127.0.0.1")
    vi.stubEnv("MYSQL_USER", "root")
    vi.stubEnv("MYSQL_PASSWORD", "password")
    vi.stubEnv("PORT", "3307")
    vi.stubEnv("MYSQL_DATABASE", "app")

    test('01 should return a users list', async () => {
        await request(app)
        .get("/api/users/all")
        .expect(200)
    })   
    
    test('02 should return a user', async () => {
        await request(app)
        .post("/api/users/create")
        .send({name: 'john'})
        .set('Accept', 'application/json')
        .expect(200)
    })
    
    test("03 should return a user by id", async () => {
        await request(app)
       .get("/api/users/1")
       .set('Accept', 'application/json')
       .expect(200)
    })


})
