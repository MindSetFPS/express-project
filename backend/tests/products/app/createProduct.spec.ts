import { expect, test } from "vitest"
import createProduct from "../../../products/app/createProduct"
import Product from "../../../products/domain/Products"

test("creates product", () => {
    expect(createProduct("playera", 23, 2, 129, "playera chida", "http://www.image.com/image/23.jpg")).toBe(4)
})