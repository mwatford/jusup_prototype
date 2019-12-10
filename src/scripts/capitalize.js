(() => {
  String.prototype.capitalize = function() {
    return this.replace(this[0], this[0].toUpperCase());
  };
})();
