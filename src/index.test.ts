import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "./index";

const expectedResponse = {
  Houston: "☀️ 72°",
  Fargo: "☁️ 50°",
  Rockford: "🌧️ 68°",
};

describe("Simple tests", () => {
  it(`Houston`, async () => {
    const urlParam = new URLSearchParams({ city: "Houston" });
    const response = await request(app).get(`/?${urlParam.toString()}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedResponse.Houston);
  });

  it("Fargo", async () => {
    const urlParam = new URLSearchParams({ city: "Fargo" });
    const response = await request(app).get(`/?${urlParam.toString()}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedResponse.Fargo);
  });

  it("Rockford", async () => {
    const urlParam = new URLSearchParams({ city: "Rockford" });
    const response = await request(app).get(`/?${urlParam.toString()}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedResponse.Rockford);
  });
});

describe("Handle non-normalized data", () => {
  it(`Houston`, async () => {
    const urlParam = new URLSearchParams({ city: "houston" });
    const response = await request(app).get(`/?${urlParam.toString()}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedResponse.Houston);
  });

  it("Fargo", async () => {
    const urlParam = new URLSearchParams({ city: "FARGO" });
    const response = await request(app).get(`/?${urlParam.toString()}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedResponse.Fargo);
  });

  it("Rockford", async () => {
    const urlParam = new URLSearchParams({ city: "  Rockford  " });
    const response = await request(app).get(`/?${urlParam.toString()}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedResponse.Rockford);
  });
});

describe("Edge cases", () => {
  it("missing zip city", async () => {
    const response = await request(app).get(`/`);
    expect(response.status).toEqual(400);
  });

  it("invalid city", async () => {
    const urlParam = new URLSearchParams({ city: "61101" });
    const response = await request(app).get(`/?${urlParam.toString()}`);
    expect(response.status).toEqual(400);
  });

  it("non-existent city", async () => {
    const urlParam = new URLSearchParams({ city: "Atlantis" });
    const response = await request(app).get(`/?${urlParam.toString()}`);
    expect(response.status).toEqual(404);
  });
});

describe("Ensure consistent results", () => {
  it("Make many API calls", async () => {
    for (let i = 0; i < 30; i++) {
      const urlParam = new URLSearchParams({ city: "Houston" });
      const response = await request(app).get(`/?${urlParam.toString()}`);
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(expectedResponse.Houston);
    }
  });
});
