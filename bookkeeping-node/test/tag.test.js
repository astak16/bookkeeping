const request = require("supertest")
const app = require("../app")

afterEach(async () => {
  await app.close()
});

describe('test tag interface', () => {
  test('success response', async () => {
    const response = await request(app).get("/v1/tag");
    expect(response.status).toBe(200)
  })
})

describe('test record interface', () => {
  test('success response', async () => {
    const response = await request(app)
        .post("/v1/record")
        .send({
          tagId: 1,
          price: "20.02",
          remark: "11"
        });
    expect(response.body.errorCode).toBe(0)
  })
})


