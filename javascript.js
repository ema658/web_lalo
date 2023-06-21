// Obtén el elemento del calendario
var calendar = document.getElementById('calendar');

// Aquí puedes agregar la lógica adicional para mostrar los días, horas, etc.

// Ejemplo de texto para mostrar en el calendario
var appointmentText = "Haz clic en una fecha para agendar una cita.";

// Mostrar el texto en el calendario
calendar.innerText = appointmentText;
// Lista de fechas disponibles para agendar citas (puedes personalizarla según tus necesidades)
var availableDates = ["2023-06-15", "2023-06-16", "2023-06-17", "2023-06-18"];

// Función para mostrar las fechas disponibles en el calendario
function showAvailableDates() {
// Limpia el contenido existente del calendario
calendar.innerHTML = '';

// Recorre todas las fechas disponibles
for (var i = 0; i < availableDates.length; i++) {
var date = availableDates[i];

// Crea un elemento de botón para cada fecha disponible
var dateButton = document.createElement('button');
dateButton.textContent = date;

// Agrega un controlador de eventos para cuando se haga clic en una fecha
dateButton.addEventListener('click', function() {
var selectedDate = this.textContent;
// Aquí puedes agregar la lógica adicional para el proceso de agendar la cita
alert("Has agendado una cita para el " + selectedDate);
});

// Agrega el botón de fecha al calendario
calendar.appendChild(dateButton);
}
}

// Mostrar las fechas disponibles en el calendario al cargar la página
showAvailableDates();
// Función para mostrar el formulario de agendar cita
function showAppointmentForm(date) {
// Limpia el contenido existente del calendario
calendar.innerHTML = '';

// Crea el formulario de agendar cita
var form = document.createElement('form');
form.addEventListener('submit', function(event) {
event.preventDefault(); // Evita que el formulario se envíe automáticamente

// Obtén los valores del formulario
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var phoneNumber = document.getElementById('phone').value;

// Realiza las acciones necesarias con los datos de la cita
// Aquí puedes agregar tu lógica personalizada, como almacenar los datos en una base de datos, enviar una notificación por correo electrónico, etc.

// Muestra un mensaje de confirmación al usuario
alert("Cita agendada:\n\nFecha: " + date + "\nNombre: " + name + "\nEmail: " + email + "\nTeléfono: " + phoneNumber);

// Vuelve a mostrar las fechas disponibles en el calendario
showAvailableDates();
});
// Crea los campos del formulario
var nameLabel = document.createElement('label');
nameLabel.textContent = 'Nombre:';
var nameInput = document.createElement('input');
nameInput.id = 'name';
nameInput.type = 'text';

var emailLabel = document.createElement('label');
emailLabel.textContent = 'Email:';
var emailInput = document.createElement('input');
emailInput.id = 'email';
emailInput.type = 'email';

var phoneLabel = document.createElement('label');
phoneLabel.textContent = 'Teléfono:';
var phoneInput = document.createElement('input');
phoneInput.id = 'phone';
phoneInput.type = 'text';

var submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Agendar Cita';

// Agrega los campos al formulario
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement('br'));
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement('br'));
form.appendChild(phoneLabel);
form.appendChild(phoneInput);
form.appendChild(document.createElement('br'));
form.appendChild(submitButton);

// Agrega el formulario al calendario
calendar.appendChild(form);
}

// Mostrar las fechas disponibles en el calendario al cargar la página
showAvailableDates();