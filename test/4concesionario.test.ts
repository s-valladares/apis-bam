import {
  getAll,
  create,
  getById,
  update,
  deleteConcesionario,
} from "./test_methods/4concesionario.methods.test";
import { expect } from "chai";

describe("Create Concesionario", () => {
  it("should return true", async () => {
    const result = await create();
    expect(result).to.equal(true);
  });
});

describe("Get All Concesionario", () => {
  it("should return true", async () => {
    const result = await getAll();
    expect(result).to.equal(true);
  });
});



describe("Get Concesionario by id", () => {
  it("should return true", async () => {
    const result = await getById();
    expect(result).to.equal(true);
  });
});

describe("Update Concesionario", () => {
  it("should return true", async () => {
    const result = await update();
    expect(result).to.equal(true);
  });
});

describe("Delete Concesionario", () => {
  it("should return true", async () => {
    const result = await deleteConcesionario();
    expect(result).to.equal(true);
  });
});
