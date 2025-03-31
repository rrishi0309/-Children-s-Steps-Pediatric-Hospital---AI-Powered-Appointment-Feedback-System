INSERT INTO appointment_bookings (
  patient_name,
  service_type,
  location,
  appointment_time,
  message
)
VALUES (
  {{ textInput4.value }},
  {{ select2.value }},
  {{ select3.value }},
  {{ dateTime1.value }},
  {{ textArea2.value }}
);
