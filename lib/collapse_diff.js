(function() {
  var butHtml = '<div class="button-group"><a href="#collapse_diff" style="margin-left: 5px" class="diff-collapse-button minibutton" rel="nofollow">Collapse</a></div>';
  var fileContainers = document.querySelectorAll('#files .file');

  var bindToggler = function(elem) {
    var actions = elem.querySelector('.meta .actions');
    var collapsed = false;
    actions.insertAdjacentHTML('afterbegin', butHtml);
    actions.querySelector('.diff-collapse-button').addEventListener('click', function(e) {
      var diffTable = elem.querySelector('table.file-diff, .diff-table');
      e.preventDefault();
      if (collapsed) {
        e.target.textContent = 'Collapse';
        diffTable.style.display = ''; // Restore old display: table
      } else {
        e.target.textContent = 'Expand';
        diffTable.style.display = 'none';
      }
      collapsed = !collapsed;
    }, true);
  };

  for (var i = 0; i<fileContainers.length; ++i) {
    bindToggler(fileContainers[i]);
  }
})();
