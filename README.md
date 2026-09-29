# SpendWise Dashboard Shell

## Project Description

SpendWise Dashboard is a responsive financial dashboard shell created as the foundation for a capstone project. It provides a modern visual interface for viewing financial information such as spending categories, budget, expenses, savings, and utilities.

This project focuses on visual layout and responsive design using HTML and CSS. No JavaScript functionality is included.

## Project Structure

### index.html

The `index.html` file provides the structure of the SpendWise Dashboard.

It contains:

* Sidebar navigation menu
* Dashboard header
* Financial summary section
* Food category card
* Transport category card
* Rent category card
* Entertainment category card
* Savings category card
* Utilities category card

### style.css

The `style.css` file controls the visual design and layout of the dashboard.

It includes:

* CSS Grid for the main dashboard layout
* Flexbox for navigation, header, and dashboard cards
* CSS custom properties for the color theme
* Responsive design for smaller screens
* Hover and keyboard focus micro-interactions
* Borders, spacing, shadows, and rounded corners
* Dark theme support using `prefers-color-scheme`

## CSS Grid and Flexbox

CSS Grid is used for the main dashboard structure and category card layout.

Flexbox is used inside the sidebar, header, summary sections, and individual dashboard cards.

## Responsive Design

A media query is included at `768px`.

On smaller screens, the dashboard changes to a single-column layout and the category cards stack vertically for easier viewing on mobile devices.

## Micro-interactions

Dashboard cards include hover and keyboard focus effects.

The effects use `transform` and `box-shadow` with transitions of 200 milliseconds.

## Theme

The application uses CSS custom properties defined in the `:root` selector for:

* Brand color
* Accent color
* Surface color
* Background color
* Primary text color
* Secondary text color
* Border color

A dark theme is also provided using:

`@media (prefers-color-scheme: dark)`

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* Google Fonts

## Author

SpendWise Dashboard Project
