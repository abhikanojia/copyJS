function Copy(options) {
  var defaults = {
    btnCopyId: "copyBtn",
    textFieldId: "copyField"
  };
  options = Object.assign(defaults, options);

  this.btnCopy = options.btnCopyId;
  this.textField = options.textFieldId;
  this.addEvent();
}

Copy.prototype.elementById = function(element_id) {
  return document.getElementById(element_id);
};

Copy.prototype.copyField = function(textFieldId) {
  this.elementById(textFieldId).select();
  document.execCommand('copy');
};

Copy.prototype.addEvent = function() {
  var _this = this;
  this.elementById(this.btnCopy).addEventListener('click', function(e) {
    e.preventDefault();
    _this.copyField(_this.textField);
  }, false);
};

var options = {
  textFieldId: "link"
};

var cp = new Copy(options);
