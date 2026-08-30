
# 📝 Interactive To-Do Web Application

A sleek, modern, dark-themed task management application developed for the **Arch Technologies** Web Development Internship (Month 1 Task). Built with vanilla JavaScript, HTML5, and CSS3, it offers persistent browser storage and a smooth user experience across all devices.

🌐 **Live Demo:** [saad-todoapp.vercel.app](https://saad-todoapp.vercel.app/)  
📂 **GitHub Repository:** [Arch_Technologies/TodoApp](https://github.com/saadpervaiz07-coder/Arch_Technologies/tree/main/ArchTechnologies_WebDev_1month/TodoApp)

---

## ✨ Features & Capabilities

* **Full CRUD Functionality:**
  * **Create:** Quickly add new tasks to your active list.
  * **Read:** Clean visual display with a dynamic task counter[cite: 11].
  * **Update:** Edit task text inline or toggle completion status (complete/undo) with automatic line-through formatting.
  * **Delete:** Remove completed or unwanted tasks permanently[cite: 10].
* **Persistent Storage:** Uses browser `localStorage` to preserve your task list across page refreshes and browser sessions[cite: 10].
* **Empty State Feedback:** Clear UI feedback when no tasks are present in the list[cite: 11].
* **Responsive Layout:** Mobile-first architecture tested across desktop viewports and mobile devices (e.g., iPhone 16 Pro Max).

---

## 🛠️ Tech Stack

| Component | Technology | Usage |
| :--- | :--- | :--- |
| **Structure** | HTML5 | Semantic page layout and input controls |
| **Styling** | CSS3 | Dark-theme color palette, Flexbox, custom buttons, dynamic media queries |
| **Logic** | JavaScript (ES6) | DOM manipulation, event handlers, and `localStorage` API integration[cite: 10] |
| **Hosting** | Vercel | Production build hosting and continuous deployment |

---

## 📁 Repository Structure

```text
TodoApp/
├── index.html       # Markup structure and app layout
├── style.css        # Dark theme styles, button design & media queries
├── script.js        # State logic, event listeners & LocalStorage handler
└── README.md        # Documentation
