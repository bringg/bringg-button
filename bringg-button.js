'use strict';

function BringgButton (id) {
  var button = document.getElementById(id);
  button.addEventListener("click", function () {
    if(button.dataset.href.indexOf('http') === -1){
      alert('Something wrong with YOUR PUBLICK TASK FORM LINK GOES HERE');
    }else{
      var popupWin = window.open('', '_blank', 'titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=360,height=780');
      popupWin.document.open();
      popupWin.document.write('<html>' +
        '<head>' +
        '</head>' +
        '<body style="display: block;margin: 0px;padding:0px;"><iframe src="' + button.dataset.href + '" width="360" height="780"></iframe></body>' +
        '</html>');
    }

  }, false);
};