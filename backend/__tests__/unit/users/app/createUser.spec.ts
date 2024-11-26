import createUser from "../../../../users/app/createUser";
import User from "../../../../users/domain/User";
import { expect, test, vi } from "vitest"

test("it creates a user",async () => {
    // Pre-conditions
    vi.stubEnv("MYSQL_HOST", "127.0.0.1")
    vi.stubEnv("MYSQL_USER", "root")
    vi.stubEnv("MYSQL_PASSWORD", "password")
    vi.stubEnv("PORT", "3307")
    vi.stubEnv("MYSQL_DATABASE", "app")

    const newUserPromise = createUser('juan', 'juan@gmail.com', 'password') 
    await expect(newUserPromise).resolves.toEqual(new User('juan', 'juan@gmail.com', 'password'))   
})