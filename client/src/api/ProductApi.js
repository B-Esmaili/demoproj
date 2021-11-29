import ProductApiGenerated from "./generated/ProductApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ProductApi extends ProductApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Product List
  static getProductList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/products")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ProductApi;