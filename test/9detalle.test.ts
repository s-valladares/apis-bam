import {
    getAll,
    create,
    getxId,
    UpdateM,
    deletM,
    getxIdDetalle,
  } from "./test_methods/9detalle.methods.test";
  import { expect } from "chai";
 
  describe("Get Detalle by id Cotizacion", () => {
    it("should return true", async () => {
      const result = await getxIdDetalle();
      expect(result).to.equal(true);
    });
  });


  describe("Get All Detalle", () => {
    it("should return true", async () => {
      const result = await getAll();
      expect(result).to.equal(true);
    });
  });
  
  describe("Create Detalle", () => {
    it("should return true", async () => {
      const result = await create();
      expect(result).to.equal(true);
    });
  });
  
  describe("Get Detalle by id", () => {
    it("should return true", async () => {
      const result = await getxId();
      expect(result).to.equal(true);
    });
  });
  
  describe("Update Detalle", () => {
    it("should return true", async () => {
      const result = await UpdateM();
      expect(result).to.equal(true);
    });
  });
  
  describe("Delete Detalle", () => {
    it("should return true", async () => {
      const result = await deletM();
      expect(result).to.equal(true);
    });
  });
  