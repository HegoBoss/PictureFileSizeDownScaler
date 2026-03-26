# 📸 Image Shrinker Pro

A lightweight, browser-based application to reduce the file size of images without significant loss in quality. No server uploads required; everything happens securely and privately on your own computer.

## ✨ Features
- **In-Browser Compression:** Your privacy is guaranteed because photos are never sent to a server.
- **Smart Optimization:** Uses the `browser-image-compression` library for the best balance between size and quality.
- **Performance:** Utilizes Web Workers for lightning-fast processing without freezing the browser UI.
- **Modern Design:** A clean, responsive interface built with modern CSS.

## 🚀 How to Use
1. Clone this repository or download the files.
2. Ensure all files are in the same folder.
3. Open `verkleiner.html` in your favorite web browser (Chrome, Firefox, Edge, etc.).
4. Select an image using the 'Upload' button.
5. Wait for the process to finish and click **Download Compressed Photo**.

## 🛠️ Built With
* **HTML5:** Web page structure.
* **CSS3:** Styling and layout (Flexbox & Gradients).
* **JavaScript (ES6+):** Logic, Async/Await, and DOM manipulation.
* **[browser-image-compression](https://www.npmjs.com/package/browser-image-compression):** The engine behind the image processing.

## 📂 Project Structure
```text
/
├── verkleiner.html  # The main structure of the website
├── main.css         # The design and layout
├── main.js          # The JavaScript logic for compression
└── README.md        # This manual
