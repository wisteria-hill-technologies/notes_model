(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5

  function Note(note) {
    this.note = note;
  }

  Note.prototype.viewNote = function(){
    return this.note;
  };



  exports.Note = Note;
})(this);




//
//
// var note = function() {
//    return "Hello";
// };
// // var note = new Note();
// module.exports = note;
