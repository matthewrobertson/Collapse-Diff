(function() {
  var butHtml = '<div class="button-group"><a href="#collapse_diff" style="margin-left: 5px" class="diff-collapse-button minibutton" rel="nofollow">Collapse</a></div>';
  var fileContainers = document.querySelectorAll('#files .file');

  var bindToggler = function(elem) {
    var actions = elem.querySelectorAll('.meta .actions')[0];
    var collapsed = false;
    actions.innerHTML = butHtml + actions.innerHTML;
    actions.getElementsByClassName('diff-collapse-button')[0].onclick = function(e) {
      var diffTable = elem.getElementsByClassName('diff-table')[0];
      e.preventDefault();
      if(collapsed) {
        e.srcElement.innerHTML = 'Collapse';
        diffTable.style.display = 'table';
      }
      else {
        e.srcElement.innerHTML = 'Expand';
        diffTable.style.display = 'none';
      }
      collapsed = !collapsed;
    };
  };

  for(var i = 0; i < fileContainers.length; i++) {
    bindToggler(fileContainers[i]);
  }

})();
