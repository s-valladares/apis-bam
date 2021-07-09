import {
  getAll,
  create,
  getxId,
  deletM,
} from "./test_methods/8cotizaciones.methods.test";
import { expect } from "chai";

describe("Get All Cotizacion", () => {
  it("should return true", async () => {
    const result = await getAll();
    expect(result).to.equal(true);
  });
});

describe("Create Cotizacion", () => {
  it("should return true", async () => {
    const result = await create();
    expect(result).to.equal(true);
  });
});

describe("Get Cotizacion by id", () => {
  it("should return true", async () => {
    const result = await getxId();
    expect(result).to.equal(true);
  });
});


describe("Delete Cotizacion", () => {
  it("should return true", async () => {
    const result = await deletM();
    expect(result).to.equal(true);
  });
});
