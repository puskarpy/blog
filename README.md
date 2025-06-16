# React Blog App

A simple blog management application built with React, React Router DOM, and DaisyUI.  
It supports adding, editing, deleting, and viewing blogs with a clean UI and persistent storage.

---

## Features

- **Add Blog**  
  Create new blog posts with a title and content. Posts are saved in browser localStorage.

- **Edit Blog**  
  Update existing blog posts. Edited blogs replace the original without creating duplicates.

- **Delete Blog**  
  Remove blog posts permanently.

- **View Blog**  
  View full details of any blog post on a separate page.

- **Dynamic Routing**  
  Each blog has its own dynamic route `/blog/:id` for individual pages.

- **Context API for State Management**  
  Uses React Context (`BlogContext`) to manage blog data and actions globally.

- **Persistent Storage**  
  Blogs are saved and loaded from `localStorage` to keep data after refresh.

- **Responsive UI**  
  Styled with DaisyUI and Tailwind CSS for a modern and responsive interface.

- **Uniform Blog Cards**  
  Blog preview cards maintain consistent width and height with scrollable previews.

- **Navigation with React Router DOM**  
  Declarative routing with nested routes and navigation between Home, Add, Edit, and View pages.

- **User Feedback**  
  Displays toast notifications for actions like blog updates.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/puskarpy/blog.git
cd react-blog-app
```
2. Install dependencies:

```bash
npm install
```
3. Start the development server:

```bash
npm run dev
```
4. Open your brrowser and go to:

```bash
http://localhost:5173
```
(Port may vary depending on your dev server config.)

## 📄 Pages & Functionality

- **Home Page**  
  Displays all blog cards with title and truncated preview.

- **Add Blog Page**  
  Use the form to create a new blog.

- **Edit Blog Page**  
  Edit existing blog details using the blog form pre-filled with current data.

- **View Blog Page**  
  See the full content of a blog post.

- **Delete Functionality**  
  Delete buttons available on blog cards to remove blogs.

## Dependencies

- React 18+

- react-router-dom 6+

- Tailwind CSS

- DaisyUI

## Notes

- Blogs are stored in browser localStorage — clearing storage will remove all blogs.

- The app uses client-side routing and is a single-page application.

- Designed with mobile responsiveness in mind.

You are free to use, modify, and distribute it as needed.