Template.commonFormSelect.helpers({
  hasSuboptions: function () {
    return this.hasOwnProperty('suboptions')
  },
  getSuboptions: function (key) {
    return this[key];
  },
  hasAnyOption: function () {
    return this.hasOwnProperty('anyOption');
  }
});
