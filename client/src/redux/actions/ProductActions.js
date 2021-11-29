import actionsFunction from "./generated/ProductActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import productApi from "../../api/productApi";
 
 actionsFunction.loadproductList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return productApi
     .getproductList()
     .then(list => {
       dispatch(actionsFunction.loadproductSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
