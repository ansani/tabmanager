document.addEventListener('DOMContentLoaded', function () {
    let tabsTableBody = document.querySelector('#tabsTable tbody');
    let closeTabsBtn = document.getElementById('closeTabsBtn');
    let resetBtn = document.getElementById('resetBtn');
  
    function fetchTabs() {
      chrome.tabs.query({}, function (tabs) {
        tabsTableBody.innerHTML = '';
        tabs.forEach((tab, index) => {
          let row = document.createElement('tr');
          row.innerHTML = `
            <td>${index + 1}</td>
            <td><input type="checkbox" data-tab-id="${tab.id}"></td>
            <td>${tab.title}</td>
            <td>${tab.url}</td>
          `;
          tabsTableBody.appendChild(row);
        });
      });
    }
  
    function sortTable(columnIndex) {
      let rows = Array.from(tabsTableBody.querySelectorAll('tr'));
      rows.sort((a, b) => {
        let aText = a.children[columnIndex].textContent.toLowerCase();
        let bText = b.children[columnIndex].textContent.toLowerCase();
        return aText > bText ? 1 : -1;
      });
      rows.forEach(row => tabsTableBody.appendChild(row));
    }
  
    function closeSelectedTabs() {
      let checkboxes = tabsTableBody.querySelectorAll('input[type="checkbox"]:checked');
      let tabIds = Array.from(checkboxes).map(checkbox => parseInt(checkbox.dataset.tabId));
      if (tabIds.length > 0) {
        let confirmClose = confirm(`Are you sure you want to close ${tabIds.length} selected tabs?`);
        if (confirmClose) {
          tabIds.forEach(tabId => chrome.tabs.remove(tabId));
          fetchTabs();
        }
      }
    }
  
    function resetCheckboxes() {
      let checkboxes = tabsTableBody.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => checkbox.checked = false);
    }
  
    document.querySelector('th:nth-child(3)').addEventListener('click', () => sortTable(2));
    document.querySelector('th:nth-child(4)').addEventListener('click', () => sortTable(3));
  
    closeTabsBtn.addEventListener('click', closeSelectedTabs);
    resetBtn.addEventListener('click', resetCheckboxes);
  
    fetchTabs();
  });
  