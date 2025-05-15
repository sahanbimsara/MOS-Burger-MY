let customers = [];
// BTN ADD

function btnAddOnClick() {
    Swal.fire("Customer Added!");

    loadTable();
    addCustomer();

    let tblCustomers = document.getElementById("customerTable");

    let tableBody = ` <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Age</th>
      <th>Actions</th>
    </tr>`;

    customers.forEach(data => {
        tableBody += `<tr>
                         <td>${data.name}</td>
                         <td>${data.phone}</td>
                         <td>${data.age}</td>
                         <td><button class="btn btn-danger btn-sm" onclick="deleteCustomer(${data.index})">Delete</button></td>

                    <tr>`
    });
    console.log(tableBody);
    tblCustomers.innerHTML = tableBody;

}

function addCustomer() {
    let name = document.getElementById("txtName").value;
    let phone = document.getElementById("txtPhone").value;
    let age = document.getElementById("txtAge").value;

    customers.push({
        name,
        phone,
        age
    });

    document.getElementById("txtName").value = "";
    document.getElementById("txtPhone").value = "";
    document.getElementById("txtAge").value = "";
}

function loadTable() {
    let tblCustomers = document.getElementById("customerTable");

    let tableBody = `  <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Actions</th>
        </tr>`;

    customers.forEach(data => {
        tableBody += `<tr>
                         <td>${data.name}</td>
                         <td>${data.phone}</td>
                         <td>${data.age}</td>
                        <td><button class="btn btn-danger btn-sm" onclick="deleteCustomer(${data.index})">Delete</button></td>
                    <tr>`
    });
    tblCustomers.innerHTML = tableBody;
}

function deleteCustomer(index) {
    Swal.fire({
        title: "Are you sure?",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel"
    }).then((result) => {
        if (result.isConfirmed) {
            customers.splice(index, 1);
            loadTable();
            Swal.fire("Deleted!");
        }
    })

}