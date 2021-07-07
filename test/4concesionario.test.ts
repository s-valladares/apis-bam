import {
    getAll,
    create,
    getxId,
    UpdateM,
    deletM,
  } from "./test_methods/4concesionario.methods.test";
  import { expect } from "chai";
  
  describe("Get All Concesionario", () => {
    it("should return true", async () => {
      const result = await getAll();
      expect(result).to.equal(true);
    });
  });
  
  describe("Create Concesionario", () => {
    it("should return true", async () => {
      const result = await create();
      expect(result).to.equal(true);
    });
  });
  
  describe("Get Concesionario by id", () => {
    it("should return true", async () => {
      const result = await getxId();
      expect(result).to.equal(true);
    });
  });
  
  describe("Update Concesionario", () => {
    it("should return true", async () => {
      const result = await UpdateM();
      expect(result).to.equal(true);
    });
  });
  
  describe("Delete Concesionario", () => {
    it("should return true", async () => {
      const result = await deletM();
      expect(result).to.equal(true);
    });
  });
  