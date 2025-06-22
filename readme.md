# Enhancement Summary – CS 499 Capstone

## 📁 Artifact: Travlr Getaways – Full-Stack MEAN Web Application
Originally created during CS 465, this application was selected for enhancement due to its complexity and potential for demonstrating professional skills across software design, algorithm optimization, and database structuring.

---

## 1️⃣ Software Design and Engineering

### Enhancements Made:
- Restructured project using the **MVC pattern**
- Migrated business logic into modular `controllers`, `models`, and `routes`
- Improved frontend layout with **Bootstrap UI** and responsive design
- Integrated error handling and form validation for admin trip creation

### Skills Demonstrated:
- UI/UX responsiveness
- Component modularity
- Frontend-backend integration

folder structure

CS499_Final_Submission/
|
├── code_review/
│   └── code_review_video_link.txt       # Link to hosted code review video (e.g., YouTube)
│
├── self_assessment/
│   └── self_assessment.docx             # Final self-assessment reflection document
│
├── artifacts/
│   ├── software_design/
│   │   ├── original/                    # Original unmodified project files
│   │   ├── enhanced/                    # Enhanced version of the project
│   │   └── narrative.docx               # Narrative describing enhancements
│   │
│   ├── algorithms/
│   │   ├── original/
│   │   ├── enhanced/
│   │   └── narrative.docx
│   │
│   └── databases/
│       ├── original/
│       ├── enhanced/                    # Includes app_api/models/travlr.js,
│       │                                # app_api/controllers/trips.js, and app_api/seed/seed.js
│       └── narrative.docx
│
├── GitHubPages_Link.txt                 # URL to the published ePortfolio on GitHub Pages
├── Submission_Note.txt                  # Letter to instructor describing the submission
└── README.txt                           # This guide


---

## 2️⃣ Algorithms and Data Structures

### Enhancements Made:
- Refactored trip filtering logic for efficiency
- Used custom static methods (e.g., `filterByDestination`) for maintainability
- Applied **try-catch** blocks to improve control flow and backend safety
- Added indexing logic to improve search speed

### Skills Demonstrated:
- Algorithmic problem solving
- Backend logic optimization
- Fault-tolerant coding practices

---

## 3️⃣ Databases

### Enhancements Made:
- Refactored MongoDB schema to embed trip details inside a parent `TravlrSchema`
- Enforced **field-level validation** with Mongoose
- Enabled automatic **timestamps**
- Added **indexing** on `destination` field
- Created `seed.js` for loading dummy data
- Applied consistent error handling using `try-catch`

### Skills Demonstrated:
- NoSQL schema optimization
- Data validation and indexing
- Security-aware error handling

---

## Course Outcomes Addressed:
- ✅ Outcome #1: Collaboration & review experience via GitHub and instructor feedback
- ✅ Outcome #2: Delivered technical documentation and presentation
- ✅ Outcome #3: Applied algorithmic principles to real scenarios
- ✅ Outcome #4: Implemented scalable and modular solutions
- ✅ Outcome #5: Integrated security features like validation and error trapping

---

