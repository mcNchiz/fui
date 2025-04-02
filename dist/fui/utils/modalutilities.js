"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showModal = showModal;
exports.hideModal = hideModal;
function showModal(jquerySelector, clear = true) {
    $(jquerySelector).show();
    if (clear) {
        $(`${jquerySelector} .fuimodal-content`).empty();
    }
}
function hideModal(jquerySelector) {
    $(jquerySelector).hide();
    $(jquerySelector + " #modal-content").empty();
}
