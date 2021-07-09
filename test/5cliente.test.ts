import {
  getAll,
  create,
  getxId,
  update,
  deletClient,
} from "./test_methods/5cliente.methods.test";
import { expect } from "chai";

describe("Get All Cliente", () => {
  it("should return true", async () => {
    const result = await getAll();
    expect(result).to.equal(true);
  });
});

describe("Create Cliente", () => {
  it("should return true", async () => {
    const result = await create();
    expect(result).to.equal(true);
  });
});

describe("Get Cliente by id", () => {
  it("should return true", async () => {
    const result = await getxId();
    expect(result).to.equal(true);
  });
});

describe("Update Cliente", () => {
  it("should return true", async () => {
    const result = await update();
    expect(result).to.equal(true);
  });
});

describe("Delete Cliente", () => {
  it("should return true", async () => {
    const result = await deletClient();
    expect(result).to.equal(true);
  });
});
