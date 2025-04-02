import { AsyncValidator } from "../validator";

export class UniqueEmailValidator extends AsyncValidator{
  validatingMessage = "Verifying email..."
  constructor(){
    super();
  }
  async validate(inputValue){
    super.validate();
    return new Promise(async(resolve, reject)=>{
      $.ajax({
        type: "POST",
        url: `/validate-new-email`,
        data: {"email": inputValue},
        success: (res) => {
          this.result.pushSuccess(res.message);
          return resolve(this.result);
        },
        error: (res) => {
          this.result.pushError(res.responseJSON.errors['email']);
          return resolve(this.result);
        },
      });
    });
  }
}