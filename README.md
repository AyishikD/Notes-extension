## YouTube Notes Chrome Extension
YouTube Notes is a Chrome extension that allows users to quickly jot down and save important points while watching YouTube videos. The notes can be saved as a .txt file to your desktop for easy access and reference later.


Features:
1) Note-Taking: Write down important points while watching YouTube videos.
2) Save Notes as .txt: Easily save your notes to a .txt file on your desktop.
3) Clear Notes: Clear the note-taking area to start fresh.
4) Interactive UI: The extension features a clean, responsive interface with a modern design, built using React and Tailwind CSS.

Installation
Clone the Repository:
```
git clone https://github.com/yourusername/youtube-notes-extension.git
cd youtube-notes-extension
```
Install Dependencies: Make sure you have Node.js installed, then run:
```
npm install
```
Build the Extension: Build the extension for production:
```
npm run build
```
**Load the Extension in Chrome:**
1) Open Chrome and navigate to chrome://extensions/.
2) Enable Developer Mode (toggle on the top-right).
3) Click Load Unpacked and select the dist folder from the project directory.
   
**Usage:**
1) Once installed, click the YouTube Notes extension icon in your browser's toolbar.
2) A popup will appear where you can write notes while watching YouTube videos.
3) Click Save as .txt to download your notes to your desktop as a .txt file.
4) You can also clear the current notes by clicking Clear Notes.
   
**Development**
If you want to make changes or contribute to the project:

Run in Development Mode:
```
npm run dev
```
Edit the Code: The project uses React and Tailwind CSS. You can find the main code in the src directory. The popup component is in src/App.jsx.

Rebuild: After making changes, you need to rebuild the extension:
```
npm run build
```
Reload in Chrome: Go to chrome://extensions/, and click the refresh button for the YouTube Notes extension to load your new changes.

**Technologies Used:**
1) React: For building the UI components.
2) Vite: A fast build tool for React.
3) Tailwind CSS: For easy styling and responsiveness.
4) JavaScript (ES6): To handle the functionality.

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
Fork the repository.
Create a new branch: ```git checkout -b feature/YourFeature.```
Commit your changes: ```git commit -m 'Add some feature'.```
Push to the branch: ```git push origin feature/YourFeature.```
Open a pull request.
