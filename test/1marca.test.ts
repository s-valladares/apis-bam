import {
  getAll,
  create,
  getxId,
  UpdateM,
  deletM,
} from "./test_methods/1marca.methods.test";
import { expect } from "chai";

describe("Get All Marcas", () => {
  it("should return true", async () => {
    const result = await getAll();
    expect(result).to.equal(true);
  });
});

describe("Create Marca", () => {
  it("should return true", async () => {
    const result = await create();
    expect(result).to.equal(true);
  });
});

describe("Get Marca by id", () => {
  it("should return true", async () => {
    const result = await getxId();
    expect(result).to.equal(true);
  });
});

describe("Update Marca", () => {
  it("should return true", async () => {
    const result = await UpdateM();
    expect(result).to.equal(true);
  });
});

describe("Delete Marca", () => {
  it("should return true", async () => {
    const result = await deletM();
    expect(result).to.equal(true);
  });
});
