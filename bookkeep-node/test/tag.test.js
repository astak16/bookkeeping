const request = require("supertest")
const app = require("../app")

test('success response', async () => {
  const response = await request(app).get("/v1/tag");
  expect(response.status).toBe(200)
})

