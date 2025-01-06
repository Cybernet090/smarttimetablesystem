window.onload = function() {
    const entries = JSON.parse(localStorage.getItem('lecturerEntries')) || [];
    const tableBody = document.getElementById('timetable').getElementsByTagName('tbody')[0];

    entries.forEach(entry => {
        const newRow = tableBody.insertRow();
        newRow.insertCell(0).textContent = entry.lecturerName;
        newRow.insertCell(1).textContent = entry.class;
        newRow.insertCell(2).textContent = entry.course;
        newRow.insertCell(3).textContent = entry.creditHours;
        newRow.insertCell(4).textContent = entry.email; // Assuming email is added in the form
        newRow.insertCell(5).textContent = entry.courseCode; // Assuming courseCode is added in the form
        newRow.insertCell(6).textContent = entry.session;
        newRow.insertCell(7).textContent = entry.group;
        newRow.insertCell(8).textContent = entry.day;
        newRow.insertCell(9).textContent = entry.time;
    });
};