# 🚀 Choosing Ideal Development Stack

## 📌 About The Project

**Name Of my Project:**  
> Choosing Ideal Development Stack

DevStack is a responsive web application that helps developers explore and build their ideal technology stack. It displays different technologies with different types of details such as category, difficulty level, rating, description, and icon. Users can add technologies to their Your Stack section, remove individual technologies, or clear the entire stack. 

### 🛠️ Technologies Used

**Technologies used:** React, TypeScript, Tailwind CSS, React-Toastify, JSON, and Vite.

---

## ✨ 3 Features of DevStack

### 1. 🔍 Technology Explorer

Technology Explorer – Browse technologies with their category, description, difficulty level, rating, and icon.

### 2. 🧰 Build Your Own Stack

Build Your Own Stack – Add technologies to your personal stack, remove individual items, or clear the entire stack.

### 3. 📱 Responsive Design & Notifications

Responsive Design & Notifications – The website works across mobile, tablet, and desktop devices and uses toast notifications to provide feedback when technologies are added or removed.

---

# 📚 Questions & Answers

## 1. What is JSX, and why is it used in React?

> JSX is a type of syntax to to html type code in JAVA or TypeScript

---

## 2. What is the difference between props and state?

> Props are the data passed from parents to child component  
> State is data inside the component which can change according to the user

---

## 3. What does the useState hook do, and where did you use it in this project?

> The useState allows us to update and store data over time.  
> I have used this to keep track of the selectedTechs selected by the user

---

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

> It is used to perform actions after a component fetches data  
> I need to use this to load local json file data after components loads first

---

## 5. Why does every item in a .map() list need a unique key prop?

> It helps react to understand which data have changed, been added, or removed

---

## 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

> It means showing different UI based on condition.  
> I have used it in the following code

```tsx
{selectedTechs.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    <SelectedTechList technologies={selectedTechs} />
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to its child using props.
A child can send data back to the parent by calling a function that the parent passed as a prop.