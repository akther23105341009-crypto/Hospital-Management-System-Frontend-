const doctorForm = document.getElementById("doctor-form");
const doctorTableBody = document.getElementById("doctor-table-body");
const doctorSearch = document.getElementById("doctor-search");

function renderDoctors(list = doctors) {
    if (!doctorTableBody) return;
    doctorTableBody.innerHTML = "";
    list.forEach((d, index) => {
        doctorTableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${d.name}</td>
            <td>${d.specialty}</td>
            <td>${d.contact}</td>
            <td>${d.availability}</td>
            <td>
                <button onclick="editDoctor(${index})">Edit</button>
                <button onclick="deleteDoctor(${index})">Delete</button>
            </td>
        </tr>`;
    });
    updateDashboard();
}

// Add doctor
if (doctorForm) {
    doctorForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const doctor = {
            name: document.getElementById("doctor-name").value,
            specialty: document.getElementById("specialty").value,
            contact: document.getElementById("doctor-contact").value,
            availability: document.getElementById("availability").value
        };
        doctors.push(doctor);
        renderDoctors();
        doctorForm.reset();
        showAlert("Doctor added successfully!");
    });
}

// Delete doctor
function deleteDoctor(index) {
    if (confirm("Are you sure to delete this doctor?")) {
        doctors.splice(index, 1);
        renderDoctors();
        showAlert("Doctor deleted!");
    }
}

// Edit doctor (prompt example)
function editDoctor(index) {
    const d = doctors[index];
    const newName = prompt("Edit Doctor Name:", d.name);
    if (newName) {
        doctors[index].name = newName;
        renderDoctors();
        showAlert("Doctor updated!");
    }
}

// Live search
if (doctorSearch) {
    doctorSearch.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const filtered = doctors.filter(d => d.name.toLowerCase().includes(query));
        renderDoctors(filtered);
    });
}
