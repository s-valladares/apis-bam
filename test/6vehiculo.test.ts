import {
  getAll,
  create,
  getxId,
  update,
  deletM,
} from "./test_methods/6vehiculo.methods.test";
import { expect } from "chai";

describe("Get All Vehiculo", () => {
  it("should return true", async () => {
    const result = await getAll();
    expect(result).to.equal(true);
  });
});

describe("Create Vehiculo", () => {
  it("should return true", async () => {
    const result = await create();
    expect(result).to.equal(true);
  });
});

describe("Get Vehiculo by id", () => {
  it("should return true", async () => {
    const result = await getxId();
    expect(result).to.equal(true);
  });
});

describe("Update Vehiculo", () => {
  it("should return true", async () => {
    const result = await update();
    expect(result).to.equal(true);
  });
});

describe("Delete Vehiculo", () => {
  it("should return true", async () => {
    const result = await deletM();
    expect(result).to.equal(true);
  });
});
