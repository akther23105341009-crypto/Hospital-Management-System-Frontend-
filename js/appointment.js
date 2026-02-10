const appointmentForm = document.getElementById("appointment-form");
const appointmentTableBody = document.getElementById("appointment-table-body");

function renderAppointments(list = appointments) {
    if (!appointmentTableBody) return;
    appointmentTableBody.innerHTML = "";
    list.forEach((a, index) => {
        appointmentTableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${a.patient}</td>
            <td>${a.doctor}</td>
            <td>${a.date}</td>
            <td>${a.time}</td>
            <td>
                <button onclick="deleteAppointment(${index})">Delete</button>
            </td>
        </tr>`;
    });
    updateDashboard();
}

// Add appointment
if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const appointment = {
            patient: document.getElementById("patient-name").value,
            doctor: document.getElementById("doctor-name").value,
            date: document.getElementById("appointment-date").value,
            time: document.getElementById("appointment-time").value
        };

        // Check for conflicting appointment
        const conflict = appointments.find(a => a.doctor === appointment.doctor && a.date === appointment.date && a.time === appointment.time);
        if (conflict) {
            showAlert("Conflict: Doctor already has an appointment at this time!");
            return;
        }

        appointments.push(appointment);
        renderAppointments();
        appointmentForm.reset();
        showAlert("Appointment scheduled successfully!");
    });
}

// Delete appointment
function deleteAppointment(index) {
    if (confirm("Are you sure to delete this appointment?")) {
        appointments.splice(index, 1);
        renderAppointments();
        showAlert("Appointment deleted!");
    }
}
