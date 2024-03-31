const data = [
  { id: 1, name: "John Doe", country: "Afghanistan", email: "john.doe@example.com" },
  { id: 2, name: "Alice Smith", country: "Albania", email: "alice.smith@example.com" },
  { id: 3, name: "Jim Brown", country: "Algeria", email: "jim.brown@example.com" },
  { id: 4, name: "Jake White", country: "Andorra", email: "jake.white@example.com" },
  { id: 5, name: "Julie Black", country: "Angola", email: "julie.black@example.com" },
  { id: 6, name: "Jennifer Green", country: "Canada", email: "jennifer.green@example.com" },
];

let sortOrder = 1; // 1 for ascending, -1 for descending
let currentSortColumn = null;

function generateTable(data) {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.country}</td>
      <td>${item.email}</td>
      <td><button onclick="openModal('${item.name}')">Click</button></td>
    `;
    tableBody.appendChild(row);
  });
}

function sortTable(columnIndex) {
  if (currentSortColumn === columnIndex) {
    sortOrder *= -1;
  } else {
    currentSortColumn = columnIndex;
    sortOrder = 1;
  }

  const sortedData = data.slice().sort((a, b) => {
    const valueA = a[Object.keys(a)[columnIndex]];
    const valueB = b[Object.keys(b)[columnIndex]];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return valueA.localeCompare(valueB) * sortOrder;
    }

    return (valueA - valueB) * sortOrder;
  });

  generateTable(sortedData);
  updateSortIcons(columnIndex);
}

function updateSortIcons(columnIndex) {
  const headers = document.querySelectorAll('#user-table th');
  headers.forEach((header, index) => {
    if (index === columnIndex) {
      header.classList.remove('asc', 'desc');
      header.classList.add(sortOrder === 1 ? 'asc' : 'desc');
    } else {
      header.classList.remove('asc', 'desc');
    }
  });
}

function openModal(name) {
  const modal = document.getElementById('customModal');
  const modalContent = document.getElementById('modal-content');
  modalContent.innerText = `You clicked on the user: ${name}`;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('customModal');
  modal.style.display = 'none';
}

generateTable(data);