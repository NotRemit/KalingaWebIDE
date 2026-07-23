# KalingaCode Web IDE

A fully client-side, zero-install Web programming IDE for the Odia language. Powered by Pyodide (Python compiled to WebAssembly) and CodeMirror.

Developed by [Remit Kumar Patra](https://linkedin.com/in/remit-patra).

## 🔗 Live Demo
Deploy this directory directly to GitHub Pages, Netlify, or Vercel.

---

## 🚀 Features
- **Zero Backend**: Runs entirely client-side in the browser using WebAssembly.
- **Phonetic Auto-Replacement**: Type keyword phonetics in the CodeMirror editor and they swap to Odia script on the fly.
- **Integrated AI Preview**: Test VLM Vision functions (`ଏଆଇ_ଦେଖ`) with mock images (apple, dog, snack) and watch the visual simulator update in real-time.
- **Pop-up Lessons**: Multi-step coding tutorials (Variables, Data Types, Logic, Loops, Functions, AI) with one-click code loader.
- **Responsive Dark Mode UI**: Modern Dracula/Catppuccin theme styling.

---

## 🛠️ Local Hosting & Testing

Since this project contains static files (`index.html`, `index.css`, `app.js`), you can host it locally using any static web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```
Then navigate to `http://localhost:8000` or `http://localhost:3000` in your browser.
