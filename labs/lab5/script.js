// Sample user data
const users = [
    { id: 1, name: "John Doe", country: "USA", email: "john.doe@example.com" },
    { id: 2, name: "Alice Smith", country: "Canada", email: "alice.smith@example.com" },
    // Add more users as needed
  ];
  
  // Function to generate table rows
  function generateTable(data) {
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = "";
    data.forEach(user => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.country}</td>
        <td>${user.email}</td>
        <td><button onclick="showModal('${user.name}')">Action</button></td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Function to sort table data
  function sortTable(colIndex) {
    const sortOrder = this.asc = !this.asc;
    const sortedUsers = users.sort((a, b) => {
      const aValue = a[Object.keys(a)[colIndex]];
      const bValue = b[Object.keys(b)[colIndex]];
      if (aValue < bValue) return sortOrder ? -1 : 1;
      if (aValue > bValue) return sortOrder ? 1 : -1;
      return 0;
    });
    generateTable(sortedUsers);
  }
  
  // Function to show modal
  function showModal(userName) {
    const modalText = document.getElementById("modal-text");
    modalText.textContent = `You clicked on the user: ${userName}`;
    document.getElementById("modal").style.display = "block";
  }
  
  // Function to close modal
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Initial table generation
  generateTable(users);
  