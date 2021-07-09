import {
  getAll,
  create,
  getxId,
  update,
  deletM,
} from "./test_methods/7agente.methods.test";
import { expect } from "chai";

describe("Get All Agente", () => {
  it("should return true", async () => {
    const result = await getAll();
    expect(result).to.equal(true);
  });
});

describe("Create Agente", () => {
  it("should return true", async () => {
    const result = await create();
    expect(result).to.equal(true);
  });
});

describe("Get Agente by id", () => {
  it("should return true", async () => {
    const result = await getxId();
    expect(result).to.equal(true);
  });
});

describe("Update Agente", () => {
  it("should return true", async () => {
    const result = await update();
    expect(result).to.equal(true);
  });
});

describe("Delete Agente", () => {
  it("should return true", async () => {
    const result = await deletM();
    expect(result).to.equal(true);
  });
});
