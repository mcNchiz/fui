export function showModal(jquerySelector: string, clear=true){
  $(jquerySelector).show();
  if(clear){
    $(`${jquerySelector} .fuimodal-content`).empty()
  }
}
export function hideModal(jquerySelector: string){
  $(jquerySelector).hide();
  $(jquerySelector+" #modal-content").empty();
}