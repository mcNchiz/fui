import { AsyncValidator } from "../validator";

export class PropertyNoRequirement extends AsyncValidator{
  validatingMessage = "Searching for property..."
  constructor(){
    super();
  }
  async validate(inputValue){
    super.validate();
    return new Promise(async(resolve, reject)=>{
      $.ajax({
        type: "GET",
        url: `/exp/property/search/${inputValue}`,
        success: (res) => {
          this.result.pushSuccess("Property found: "+res.data.name);
          return resolve(this.result);
        },
        error: (res) => {
          this.result.pushError(res.responseJSON.error);
          resolve(this.result);
        },
      });
    });
  }
}