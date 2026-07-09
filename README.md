# Analog Clock

A simple and responsive Analog Clock built using HTML, CSS, and JavaScript. The clock displays the current time in real-time and includes a theme switcher that changes the color of the clock face.

# Live Demo Link

https://ashifzeeya097-dev.github.io/Analog-Clock/

## Features

* Real-time analog clock
* Smooth movement of hour, minute, and second hands
* Multiple clock face themes:
  * Dark
  * Blue
  * Green
* Responsive design
* Pure HTML, CSS, and JavaScript

## Project Structure

```
project-folder/
│
├── main.html
├── styles.css
├── script.js
└── README.md
```

## How It Works

### Clock Mechanism

The clock uses JavaScript's `Date` object to retrieve the current:

* Hours
* Minutes
* Seconds

The values are converted into rotation angles and applied to the clock hands using CSS transforms.

### Theme Switching

Users can switch between different clock face themes using the provided buttons. Only the circular clock face changes color while the page background remains unchanged.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ashifzeeya097-Dev/Analog-Clock
```

2. Open the project folder.

3. Launch `main.html` in your browser.

No additional dependencies are required.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## Future Improvements

* Additional color themes
* Theme persistence using Local Storage
* Digital clock display
* Dark/Light mode toggle
* Animated theme transitions

## License

This project is open source and available under the MIT License.

## Author

Created as a learning project to demonstrate DOM manipulation, CSS transforms, and real-time JavaScript updates.
