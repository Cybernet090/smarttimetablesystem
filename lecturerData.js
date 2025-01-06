document.getElementById('lecturerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const lecturerName = document.getElementById('lecturerName').value;
    const faculty = document.getElementById('faculty').value;
    const course = document.getElementById('course').value;
    const creditHours = document.getElementById('creditHours').value;
    const department = document.getElementById('department').value;
    const classEntry = document.getElementById('class').value;
    const session = document.getElementById('session').value;
    const group = document.getElementById('group').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;

    const lecturerEntry = {
        lecturerName,
        faculty,
        course,
        creditHours,
        department,
        class: classEntry,
        session,
        group,
        day,
        time
    };

    let entries = JSON.parse(localStorage.getItem('lecturerEntries')) || [];
    entries.push(lecturerEntry);
    localStorage.setItem('lecturerEntries', JSON.stringify(entries));

    alert('Lecturer entry added successfully!');
    this.reset();
});