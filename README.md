# TitaMedia Challenge

A responsive image gallery web application that demonstrates intelligent image layout management. **The core goal of this project is to dynamically adjust and organize images of varying sizes and aspect ratios into a cohesive, visually appealing masonry layout**, regardless of the original image dimensions or the order in which they are loaded.

This project fetches images from the Unsplash API and uses custom JavaScript logic to calculate optimal grid placement based on each image's aspect ratio, creating a seamless browsing experience.

## Live Demo
[View Live Demo](https://krisyupher.github.io/TitaMedia-Challenge/)

## Features
- **Dynamic Image Gallery**: Fetches high-quality images dynamically using the [Unsplash API](https://api.unsplash.com/).
- **Intelligent Masonry Layout**: Custom JavaScript implementation that analyzes each image's aspect ratio and automatically assigns optimal grid placement for a visually balanced layout.
- **Infinite Scroll**: Automatically loads more images as you scroll down the page, providing a seamless browsing experience.
- **Loading States**: Polished loading spinner with minimum display time ensures smooth transitions between content loads.
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes, including a mobile-friendly burger menu.
- **Manual Load Option**: "Show Me More" button provides an alternative way to load additional images.
- **Modern Styling**: Clean aesthetics with custom fonts (Questrial & Montserrat), smooth transitions, and a cohesive color scheme.

## Technologies Used
- **HTML5**: Semantic structure.
- **CSS3**: Custom styling, Flexbox, Grid, and media queries for responsiveness.
- **JavaScript (ES6+)**: Async/Await for API fetching, DOM manipulation, and event handling.
- **Unsplash API**: Source for dynamic image content.
- **FontAwesome**: For UI icons.

## Setup and Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/krisyupher/TitaMedia-Challenge.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TitaMedia-Challenge
   ```
3. Open `index.html` in your preferred web browser to view the application.

## Project Structure
- `index.html`: Main HTML structure.
- `styles.css`: All styles and responsive design rules.
- `app.js`: Logic for fetching data from Unsplash, rendering the grid, and handling UI interactions.
