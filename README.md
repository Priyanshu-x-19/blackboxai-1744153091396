
Built by https://www.blackbox.ai

---

```markdown
# Age & Gender Detection

## Project Overview
The Age & Gender Detection project is a real-time web application that utilizes the camera feed to detect faces and predict the age and gender of the individuals in the video stream. By leveraging the powerful face-api.js library, the project aims to provide an interactive experience demonstrating facial detection technology in a user-friendly interface.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/age-gender-detection.git
   cd age-gender-detection
   ```

2. Ensure you have a local server to serve the HTML file. A simple way to do this is to use a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or to set up a server with Node.js, Python, or any other method.

3. Make sure you have the models directory with the required model files from face-api.js. You may need to download these models from the [face-api.js GitHub repository](https://github.com/justadudewhohacks/face-api.js).

4. Open `index.html` in your local server.

## Usage
1. Open the application in your web browser.
2. Click the "Start Detection" button to activate the webcam feed.
3. The application will show real-time predictions of the detected age and gender of individuals in view of the camera.

## Features
- Real-time face detection using webcam.
- Display predicted age and gender with confidence percentages.
- User-friendly interface styled with Tailwind CSS.
- Simple one-click functionality to start the detection process.

## Dependencies
This project relies on the following libraries:
- [Tailwind CSS](https://tailwindcss.com/)
- [face-api.js](https://github.com/justadudewhohacks/face-api.js) (loaded from CDN)
- [Font Awesome](https://fontawesome.com/) for icons

Note: No backend dependencies or Node.js packages were listed in a `package.json` file, suggesting a pure front-end implementation.

## Project Structure
The project consists of the following files:
```
/age-gender-detection
├── index.html          # Main HTML file for the application
├── script.js           # JavaScript file containing logic for face detection and UI interaction
└── models/             # Directory containing pre-trained models needed for face-api.js
```

## Contributing
Contributions are welcome! If you wish to contribute, please create a pull request or open an issue.

## License
This project is open-source and available under the [MIT License](LICENSE).
```