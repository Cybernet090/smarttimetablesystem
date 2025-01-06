document.getElementById('timetableForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve values from the form
    const lecturerName = document.getElementById('lecturerName').value;
    const studentName = document.getElementById('studentName').value;
    const lecturerEmail = document.getElementById('lecturerEmail').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const studentID = document.getElementById('studentID').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const subjectName = document.getElementById('subjectName').value;
    const subjectCode = document.getElementById('subjectCode').value;
    const classLocation = document.getElementById('classLocation').value;
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;

    // Create a new entry object
    const newEntry = {
        lecturerName,
        studentName,
        lecturerEmail,
        studentEmail,
        studentID,
        date,
        time,
        subjectName,
        subjectCode,
        classLocation,
        department,
        semester
    };

    // Retrieve existing entries from localStorage or initialize an empty array
    const existingEntries = JSON.parse(localStorage.getItem('timetableEntries')) || [];
    
    // Add the new entry to the array
    existingEntries.push(newEntry);
    
    // Save the updated entries back to localStorage
    localStorage.setItem('timetableEntries', JSON.stringify(existingEntries));

    // Create a new row and cells in the table
    const table = document.getElementById('timetable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = lecturerName;
    newRow.insertCell(2).textContent = lecturerEmail;
    newRow.insertCell(5).textContent = date;
    newRow.insertCell(6).textContent = time;
    newRow.insertCell(7).textContent = subjectName;
    newRow.insertCell(8).textContent = subjectCode;
    newRow.insertCell(9).textContent = classLocation;
    newRow.insertCell(10).textContent = department;
    newRow.insertCell(11).textContent = semester;

    // Clear the form fields after submission
    document.getElementById('timetableForm').reset();
});