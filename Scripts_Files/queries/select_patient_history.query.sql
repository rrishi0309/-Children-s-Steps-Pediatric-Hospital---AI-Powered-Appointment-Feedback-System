SELECT 
  patient_name,
  service_type,
  location,
  appointment_time,
  message,
  submitted_at
FROM 
  appointment_bookings

ORDER BY 
  appointment_time DESC;
