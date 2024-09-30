document.getElementById('patientForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('patientName').value;
    const age = document.getElementById('patientAge').value;
    const disease = document.getElementById('patientDisease').value;

    addPatientToList(name, age, disease);

    document.getElementById('patientForm').reset();
});

function addPatientToList(name, age, disease) {
    const patientList = document.getElementById('patientList');
    const li = document.createElement('li');
    li.textContent = `Name: ${name}, Age: ${age}, Disease: ${disease}`;
    patientList.appendChild(li);
}
