import ProductModelGenerated from "./generated/ProductModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ProductModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ProductModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ProductModelGenerated,
  ...customModel
};
