const message = chat2.messageHistory
  ?.slice()
  .reverse()
  .find(m => m.role === "assistant" && m.content.includes("Confirming Appointment"))?.content;

if (!message) {
  utils.showNotification({
    title: "❌ No Confirmation Found",
    description: "Could not find a structured confirmation message from the assistant.",
    notificationType: "error"
  });
} else {
  const clean = message.replace(/\\n/g, "\n").replace(/\*\*/g, "");

  const name = clean.match(/name:\s*(.*)/i)?.[1]?.trim();
  const service = clean.match(/service:\s*(.*)/i)?.[1]?.trim();
  const locationRaw = clean.match(/location:\s*(.*)/i)?.[1]?.trim();
  const timeRaw = clean.match(/time:\s*(.*)/i)?.[1]?.trim();
  const notes = clean.match(/notes:\s*(.*)/i)?.[1]?.trim();

  const locationMap = {
    "salt lake city": "355 W 400 S, Salt Lake City, UT 84101",
    "provo": "135 E 200 N, Provo, UT 84606",
    "st. george": "188 E 300 S, St. George, UT 84770"
  };

  const matchedKey = Object.keys(locationMap).find(k =>
    locationRaw?.toLowerCase().includes(k)
  );
  const location = matchedKey ? locationMap[matchedKey] : locationRaw;

  if (!name || !service || !location || !timeRaw) {
    utils.showNotification({
      title: "⚠️ Missing Data",
      description: "Some fields couldn't be extracted. Please check the AI message format.",
      notificationType: "error"
    });
    return;
  }

  // Normalize and parse the time string
  const cleanTime = timeRaw.replace(" at ", " ");
  const parsedTime = new Date(cleanTime);

  if (isNaN(parsedTime.getTime())) {
    utils.showNotification({
      title: "⚠️ Invalid Time Format",
      description: `Could not convert "${timeRaw}" to a valid date.`,
      notificationType: "error"
    });
    return;
  }

  // Set form fields
  textInput4.setValue(name);
  select2.setValue(service);
  select3.setValue(location);
  dateTime1.setValue(parsedTime);
  textArea2.setValue(notes || "");

  // Trigger DB insert
  insert_appointment.trigger({
    onSuccess: () => {
      utils.showNotification({
        title: "✅ Appointment Confirmed",
        description: "Your appointment has been successfully saved.",
        notificationType: "success"
      });
    },
    onFailure: () => {
      utils.showNotification({
        title: "❌ Insert Failed",
        description: "Something went wrong saving to the database.",
        notificationType: "error"
      });
    }
  });
}
