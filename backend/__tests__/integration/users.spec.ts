import app from "../../presentation/express/app";
import { test, describe, vi } from "vitest";
import request from "supertest"

describe("GET /users/all", () => {

    vi.stubEnv("MYSQL_HOST", "127.0.0.1")
    vi.stubEnv("MYSQL_USER", "root")
    vi.stubEnv("MYSQL_PASSWORD", "password")
    vi.stubEnv("PORT", "3307")
    vi.stubEnv("MYSQL_DATABASE", "app")

    test('should return 200', async () => {
        await request(app)
        .get("/api/users/all")
        .expect(200)
    })
})
