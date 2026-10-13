Mini Ticket Tracker
A full-stack web application built for tracking support tickets, featuring a REST API backend and a lightweight frontend interface.

Tech Stack
Backend: Python / Django, Django REST Framework (DRF)

Database: PostgreSQL / SQLite

Frontend: React, Vite

Setup and Run Instructions
Follow these steps to set up and run the application locally on your computer.

1. Clone the Repository
  git clone https://github.com/OumaSylvester/tickectTracker.git
  cd tickectTracker

2. Backend Setup (backend folder)
Navigate to the backend directory, create a virtual environment, install dependencies, run database migrations, and start the development server.

# Navigate to the backend directory (adjust folder name if necessary, e.g., cd backend or cd mini_ticket_tracker/backend)
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Linux/macOS:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install requirements
pip install -r requirements.txt

# Run database migrations
python manage.py migrate

# Start the Django development server
python manage.py runserver 0.0.0.0:8000

3. Frontend Setup (frontend folder)
Open a new terminal window, navigate to the frontend directory, install dependencies, and start the Vite development server.

# Navigate to the frontend directory (adjust folder name if necessary)
cd mini_ticket_tracker

# Install node dependencies
npm install

# Start the frontend development server
npm run dev

Application Navigation & Usage
Once both the backend and frontend servers are running, access the application at the following routes:

Ticket List & Management: http://localhost:5173 — View existing tickets, filter by status, and update ticket statuses.

Create Ticket: http://localhost:5173/create — Access the form to submit a new ticket.

Ticket Statistics: http://localhost:5173/stats — View aggregate counts of tickets grouped by status.

Decisions & Tradeoffs
API Endpoint Organization: Backend API base URLs were defined inline directly inside individual component files (e.g., at the top of index.jsx) rather than abstracted into a centralized urls.js or configuration file to save setup time during the assessment. With more time, these endpoints would be centralized into an API service module.

Form Handling & Validation: Standard HTML form elements and local React state were used for handling submissions instead of robust form libraries like Formik or React Hook Form. Given more time, a dedicated form management library would be integrated for improved error handling, validation messages, and state management.

UI Polish & Styling: Focused primarily on functional feature completeness, REST API compliance, and core requirements rather than advanced visual styling or component styling frameworks. Future iterations would include a more polished design system or UI library (such as Tailwind CSS).
