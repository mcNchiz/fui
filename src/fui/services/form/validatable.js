// import { ValidationResult } from "@core/form/validation-result";

// export function Validatable(Base){
//   return class extends Base{
//     validatable = true;
//     previousState = null;
//     inputTimeout = null;
//     previousMSg = null;
//     validationResult = new ValidationResult();
//     constructor({syncValidators, asyncValidators, ...rest}){
//       super(rest);
//       this.syncValidators = syncValidators;
//       this.asyncValidators = asyncValidators;
//     }
//     async preValidate(){
//       throw new Error("Pre validate isn't implemented.");
//     }
//     syncValidate(){
//       throw new Error("Sync validate isn't implemented.");
//     }
//     async asyncValidate(){
//       throw new Error("Async validate isn't implemented.");
//     }
//     async postValidate(){
//       throw new Error("Post validate isn't implemented.");
//     }
//   }
// }