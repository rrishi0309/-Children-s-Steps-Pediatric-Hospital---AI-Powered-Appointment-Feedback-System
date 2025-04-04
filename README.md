# 🏥 Children's Steps Pediatric Hospital - AI-Powered Appointment & Feedback System

Welcome to the official repository for the **Children’s Steps Pediatric Hospital AI Assistant**, a project built by **Rishi Ramesh** for the 2025 GenAI Hackathon at the University of Utah.

This project showcases how to combine **Retool**, **LLM-powered assistants**, and **structured databases** to build an **intelligent, agentic healthcare assistant**. The AI system dynamically interacts with users, interprets their intent, and autonomously triggers database operations—bridging the gap between conversational AI and real-world action.

---

## 🌟 Overview

This system simulates a modern pediatric hospital experience, complete with:
- A public-facing website with AI assistant support
- Patient appointment booking through AI-driven dialogue
- Role-based dashboards for patients and administrators
- Feedback analytics and service insight tools

It is grounded in **Agentic AI** principles—designed to perceive, reason, and act. Ken AI behaves like a real assistant: asking follow-up questions, confirming data, and executing tasks once all info is verified.

> ✅ **Agentic AI at Work**: This assistant doesn’t just reply—it makes decisions, populates forms, executes SQL queries, and adapts its responses based on context. It’s more than a chatbot.

---

## ✨ Key Features

- **Conversational Booking Flow**  
  Ken AI guides patients through the booking process step-by-step: asking for name, service type, location, time, and preferences.

- **Confirmation-Based Submission**  
  After collecting all data, Ken AI summarizes the request in a human-readable format and only proceeds to submit if the user confirms.

- **Contextual Data Parsing + Action**  
  Using RegEx and logic, the assistant parses data from its own messages and populates Retool form fields, then triggers DB inserts and refreshes.

- **Strict Domain Guardrails**  
  Public-facing AI assistant is restricted to hospital-related info. It gently declines any unrelated queries and maintains a professional, safe tone.

- **Admin-Only Insights**  
  An internal dashboard allows hospital staff to ask questions like:
  - "What are the top-rated feedback types this week?"
  - "List recent appointments for Autism care."

- **Fully Integrated with PostgreSQL**  
  Appointments and feedback are stored in structured DB tables. Admins can view, filter, and analyze this data in real-time.

---

## 🧠 Tech Stack

- **Retool** – App builder, chat interface, and query system
- **OpenAI GPT-4o (via Retool AI Chat)** – Primary LLM
- **PostgreSQL** – Data layer for appointments and feedback
- **Mapbox** – Map display for clinic locations
- **Custom JS Logic** – For structured parsing and trigger control

---

## 🚀 Agentic Appointment Flow

Ken AI guides the user through a structured conversation. Once all details are collected, it generates a formatted message like:

```markdown
**Confirming Appointment:**  
name: John Smith  
service: Autism  
location: Provo (135 E 200 N, Provo, UT 84606)  
time: April 5, 2025 at 2:00 PM  
notes: prefers afternoon
```

If the user responds with "Yes", a script runs to:
- Extract each field using RegEx
- Validate the location and time
- Fill Retool inputs
- Trigger the SQL `INSERT` query
- Display confirmation toast

> 🔄 This kind of turn-based reasoning and execution is a hallmark of agentic AI design.

---

## 📸 Screenshots

<img src="https://github.com/user-attachments/assets/667221b2-142a-4ade-927f-513d138e69e7" width="500"/> <br>

<img src="https://github.com/user-attachments/assets/f48725da-7936-42b3-b2b1-635699f3772d" width="500"/> <br>

<img src="https://github.com/user-attachments/assets/56189a88-747a-4a66-8e41-a2286dfc2912" width="500"/> <br>

<img src="https://github.com/user-attachments/assets/9f8e03cf-a800-409f-b0de-9406d86464ac" width="500"/> <br>

<img src="https://github.com/user-attachments/assets/73cdfee2-8df4-4371-ac42-235c7328ea95" width="500"/> <br>

<img src="https://github.com/user-attachments/assets/118adcba-e280-4928-a7e5-279143ed54d6"> <br>

<img src="https://github.com/user-attachments/assets/fad39e46-9240-4ee9-a26c-fba1152ef3e1"> <br>

---

## 🎮 Demo Video

https://github.com/user-attachments/assets/3cd22a7e-babd-4553-a238-bce6ecd3a8b6

---

## 🧠 Why Agentic AI Matters

Traditional chatbots are reactive. They answer. This assistant **plans and acts**.

Agentic AI is the next leap in LLM-powered interfaces:
- It follows multi-step flows
- Uses memory from prior turns
- Performs tool-based actions (e.g., database writes)
- Validates and confirms before executing

By combining **Retool’s structure** with **LLM reasoning**, this project creates a truly interactive, intelligent interface for healthcare.

---

## 📁 Project Structure

```
├── /retool-export/       # Retool JSON config
├── /screenshots/         # UI and chat screenshots
├── /video/               # Demo video (optional)
└── README.md             # This file
```

---

## 🛠️ Setup Instructions

1. Clone this repo
2. Import `hospital_app.retool.json` into your Retool workspace
3. Connect your PostgreSQL database with matching tables:
   - `appointment_bookings`
   - `feedback_neuralnexus`
4. Link your OpenAI API key to Retool AI resource
5. Customize system prompts, branding, or workflows as needed

---

## 📨 Contact

- Creator: **Rishi Ramesh**  
- Email: [r.rishi0309@gmail.com](mailto:r.rishi0309@gmail.com)  
- LinkedIn: [https://www.linkedin.com/in/rishi0309/](https://www.linkedin.com/in/rishi0309/)

---

## ⭐ Acknowledgements

Built for the **2025 GenAI Hackathon** at the University of Utah . Silver Award for the project.
Powered by Retool, PostgreSQL, OpenAI, and agentic prompt engineering.

---

Feel free to fork, reuse, or reach out to discuss this project or future AI use cases in healthcare, education, or public service. Let's build the next generation of intelligent systems together.

