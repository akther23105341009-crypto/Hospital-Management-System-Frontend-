// Global data arrays
let patients = [];
let doctors = [];
let appointments = [];

// Update dashboard counts
function updateDashboard() {
    const totalPatients = document.getElementById("total-patients");
    const totalDoctors = document.getElementById("total-doctors");
    const totalAppointments = document.getElementById("total-appointments");

    if (totalPatients) totalPatients.textContent = patients.length;
    if (totalDoctors) totalDoctors.textContent = doctors.length;
    if (totalAppointments) totalAppointments.textContent = appointments.length;
}

// Show simple alert / toast
function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.style.position = "fixed";
    alertBox.style.bottom = "20px";
    alertBox.style.right = "20px";
    alertBox.style.backgroundColor = "#1E90FF";
    alertBox.style.color = "white";
    alertBox.style.padding = "10px 20px";
    alertBox.style.borderRadius = "8px";
    alertBox.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 2500);
}

// Initialize dashboard on DOM load
document.addEventListener("DOMContentLoaded", updateDashboard);
