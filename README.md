# Design-System-For-Gen-Z


# Slothui
🔗Live Demo [https://design-system-for-gen-z.netlify.app/]
</br>
Slothui is a modern, responsive website built with HTML, CSS, and JavaScript. This project dynamically loads components, implements smooth scrolling, and features an interactive UI.

## Features
- **Dynamic Component Loading:** Uses JavaScript to load HTML components asynchronously.
- **Responsive Design:** Fully adaptable to mobile, tablet, and desktop screens.
- **Smooth Scroll to Top:** Click the "Scroll to Top" button to smoothly navigate to the top.
- **Mobile Menu Toggle:** Expand and collapse navigation for mobile screens.
- **FAQ Accordion:** Interactive FAQ section that toggles answers.
- **Testimonials Load More:** Shows limited testimonials on mobile, with a "Load More" button.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Styling:** CSS (Multiple stylesheets for different sections)
- **Interactivity:** Vanilla JavaScript for dynamic behavior

## Project Structure
```
Slothui/
│── assets/
│   ├── icons/
│   ├── images/
│── components/
│   ├── Navbar.html
│   ├── Hero.html
│   ├── Brands.html
│   ├── Features.html
│   ├── Statistics.html
│   ├── States.html
│   ├── Testimonial.html
│   ├── Location.html
│   ├── Queries.html
│   ├── OurApp.html
│   ├── Footer.html
│── css/
│   ├── Navbar.css
│   ├── Hero.css
│   ├── Brands.css
│   ├── Features.css
│   ├── Statistics.css
│   ├── Stats.css
│   ├── Testimonials.css
│   ├── Location.css
│   ├── Queries.css
│   ├── OurApp.css
│   ├── Footer.css
│── index.html
│── style.css
│── index.js
│── README.md
```

## Installation & Usage
1. **Clone the repository:**
   ```bash
   https://github.com/Rakibulislam-emon/Design-System-For-Gen-Z.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd slothui
   ```
3. **Open `index.html` in a browser**
   - No additional setup required as this is a frontend-only project.

## How It Works
### 1. Dynamic Component Loading
Each section of the website is stored as a separate HTML file and dynamically loaded into the main `index.html` file using JavaScript.
```js
async function loadComponent(componentId, filePath) {
  const response = await fetch(filePath);
  document.getElementById(componentId).innerHTML = await response.text();
}
```



## Contributing
Feel free to submit issues or pull requests to improve this project!

## License
This project is open-source and available under the **MIT License**.


---
"A project by Rakibul Islam Emon | Frontend Developer"

