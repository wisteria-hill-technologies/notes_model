(function(exports) {

  function NoteListView(list){
    this.list = list;
  }

  NoteListView.prototype.outputWeb = function() {
    var string ="";
    if(this.list.length !==0) {
      this.list.forEach(function(note){
        string +="<li><div>"+note.NoteCanStoreText()+"</div></li>";
      });
        string = "<ul>" + string + "</ul>";
    }
      return string;
  }

exports.NoteListView = NoteListView;

})(this);
