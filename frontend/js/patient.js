const patientForm = document.getElementById("patient-form");
const patientTableBody = document.getElementById("patient-table-body");
const patientSearch = document.getElementById("search");

function renderPatients(list = patients) {
    if (!patientTableBody) return;
    patientTableBody.innerHTML = "";
    list.forEach((p, index) => {
        patientTableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${p.name}</td>
            <td>${p.age}</td>
            <td>${p.gender}</td>
            <td>${p.contact}</td>
            <td>${p.disease}</td>
            <td>${p.doctor}</td>
            <td>${p.admission}</td>
            <td>
                <button onclick="editPatient(${index})">Edit</button>
                <button onclick="deletePatient(${index})">Delete</button>
            </td>
        </tr>`;
    });
    updateDashboard();
}

// Add patient
if (patientForm) {
    patientForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const patient = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            contact: document.getElementById("contact").value,
            disease: document.getElementById("disease").value,
            doctor: document.getElementById("doctor").value,
            admission: document.getElementById("admission").value
        };
        patients.push(patient);
        renderPatients();
        patientForm.reset();
        showAlert("Patient added successfully!");
    });
}

// Delete patient
function deletePatient(index) {
    if (confirm("Are you sure to delete this patient?")) {
        patients.splice(index, 1);
        renderPatients();
        showAlert("Patient deleted!");
    }
}

// Edit patient (simple example: prompt)
function editPatient(index) {
    const p = patients[index];
    const newName = prompt("Edit Name:", p.name);
    if (newName) {
        patients[index].name = newName;
        renderPatients();
        showAlert("Patient updated!");
    }
}

// Live search
if (patientSearch) {
    patientSearch.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const filtered = patients.filter(p => p.name.toLowerCase().includes(query));
        renderPatients(filtered);
    });
}
