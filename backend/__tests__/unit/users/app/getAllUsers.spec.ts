import User from "../../../../users/domain/User";
import { expect, test, vi } from "vitest"
import getAllUsers from "../../../../users/app/getAllUsers";
import exp from "constants";

test("05 it returns a list of users",async () => {
    // Pre-conditions
    vi.stubEnv("MYSQL_HOST", "127.0.0.1")
    vi.stubEnv("MYSQL_USER", "root")
    vi.stubEnv("MYSQL_PASSWORD", "password")
    vi.stubEnv("PORT", "3307")
    vi.stubEnv("MYSQL_DATABASE", "app")

    const users = await getAllUsers()
    expect(users).toBeInstanceOf(Array)
    users.forEach(user => {
        expect(user).toBeInstanceOf(User)
    });
})