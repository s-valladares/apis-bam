import {
    getAll,
    create,
    getxId,
    UpdateM,
    deletM,
  } from "./test_methods/2departamento.methods.test";
  import { expect } from "chai";
  
  describe("Get All Departamentos", () => {
    it("should return true", async () => {
      const result = await getAll();
      expect(result).to.equal(true);
    });
  });
  
  describe("Create Departamento", () => {
    it("should return true", async () => {
      const result = await create();
      expect(result).to.equal(true);
    });
  });
  
  describe("Get Departamento by id", () => {
    it("should return true", async () => {
      const result = await getxId();
      expect(result).to.equal(true);
    });
  });
  
  describe("Update Departamento", () => {
    it("should return true", async () => {
      const result = await UpdateM();
      expect(result).to.equal(true);
    });
  });
  
  describe("Delete Departamento", () => {
    it("should return true", async () => {
      const result = await deletM();
      expect(result).to.equal(true);
    });
  });
  