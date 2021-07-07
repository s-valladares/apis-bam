import {
    getAll,
    create,
    getxId,
    UpdateM,
    deletM,
  } from "./test_methods/3municipio.methods.test";
  import { expect } from "chai";
  
  describe("Get All Municipio", () => {
    it("should return true", async () => {
      const result = await getAll();
      expect(result).to.equal(true);
    });
  });
  
  describe("Create Municipio", () => {
    it("should return true", async () => {
      const result = await create();
      expect(result).to.equal(true);
    });
  });
  
  describe("Get Municipio by id", () => {
    it("should return true", async () => {
      const result = await getxId();
      expect(result).to.equal(true);
    });
  });
  
  describe("Update Municipio", () => {
    it("should return true", async () => {
      const result = await UpdateM();
      expect(result).to.equal(true);
    });
  });
  
  describe("Delete Municipio", () => {
    it("should return true", async () => {
      const result = await deletM();
      expect(result).to.equal(true);
    });
  });
  