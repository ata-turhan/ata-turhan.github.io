document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('form');
    var tableBody = document.getElementById('tbodyPatientsList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var patientIdNumber = document.getElementById('patientIdNumber').value;
        var firstName = document.getElementById('firstName').value;
        var middleInitials = document.getElementById('middleInitials').value;
        var lastName = document.getElementById('lastName').value;
        var dateOfBirth = document.getElementById('dateOfBirth').value;
        var department = document.getElementById('ddlDepartment').value;
        var isOutPatient = document.querySelector('input[name="radioIsOutPatient"]:checked');

        if (patientIdNumber && firstName && lastName && dateOfBirth && department && isOutPatient) {
            var newRow = document.createElement('tr');
            newRow.classList.add("patient_data_row");
            newRow.innerHTML = `
                <td>${patientIdNumber}</td>
                <td>${firstName}</td>
                <td>${middleInitials}</td>
                <td>${lastName}</td>
                <td>${dateOfBirth}</td>
                <td>${department}</td>
                <td>${isOutPatient.value}</td>
            `;
            tableBody.appendChild(newRow);
            form.reset();
        }
    });

    var showElderlyCheckbox = document.getElementById('chkElderlyPatients');
    var tableRows = document.getElementsByClassName('patient_data_row');

    function age_filter() {
        if (this.checked) {
            for (var i = 0; i < tableRows.length; i++) {
                var row = tableRows[i];
                var dateOfBirth = row.cells[4].textContent;
                var dob = new Date(dateOfBirth);
                var age = calculateAge(dob);
                if (age >= 65) {
                    //row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        } else {
            for (var i = 0; i < tableRows.length; i++) {
                var row = tableRows[i];
                row.style.display = '';
            }
            out_filter();
        }
    };


    showElderlyCheckbox.addEventListener('change', age_filter);


    function calculateAge(dob) {
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();
        var monthDiff = today.getMonth() - dob.getMonth();
        return monthDiff < 0 ? age-1 : age;
    }

    var showOutPatientsCheckbox = document.getElementById('chkShowOutPatients');

    function out_filter() {
        if (this.checked) {
            for (var i = 0; i < tableRows.length; i++) {
                var row = tableRows[i];
                var isOutPatient = row.cells[6].textContent;
                if (isOutPatient === 'Yes') {
                    //row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        } else {
            for (var i = 0; i < tableRows.length; i++) {
                var row = tableRows[i];
                row.style.display = '';
            }
            age_filter();
        }
    };

    showOutPatientsCheckbox.addEventListener('change', out_filter);
});
