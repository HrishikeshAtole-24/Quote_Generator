# Quote_Generator

Quote Generator
This project is a simple web application that allows users to generate and browse quotes based on a given topic. Users can navigate through multiple quotes, and copy their favorite quotes to the clipboard. The application uses the Quotable API to fetch random quotes.

Features
Enter a topic to generate quotes.
Navigate through multiple quotes using "Previous" and "Next" buttons.
Copy quotes to clipboard with a single click.
User-friendly and responsive design using Tailwind CSS.
Technologies Used
HTML
CSS (Tailwind CSS)
JavaScript
Quotable API
Font Awesome for icons
Getting Started
Prerequisites
To run this project locally, you need a web browser. No additional installations are required.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/HrishikeshAtole-24/index.html
cd quote-generator
Open index.html in your web browser:

bash
Copy code
open index.html
Alternatively, you can simply drag and drop the index.html file into your browser.

Usage
Enter a topic:

Type a keyword related to the type of quotes you want to generate in the input field.
Generate Quotes:

Click the "Generate Quotes" button to fetch quotes related to the entered topic.
Navigate Quotes:

Use the "Previous" and "Next" buttons to browse through the fetched quotes.
Copy Quote:

Click the "Copy to Clipboard" button to copy the displayed quote to your clipboard.
Project Structure
graphql
Copy code
quote-generator/
│
├── index.html         # The main HTML file
├── script.js          # JavaScript file for handling logic and API calls
├── README.md          # Project README file
│
└── css/
    └── tailwind.min.css  # Tailwind CSS file for styling
API Reference
This project uses the Quotable API to fetch quotes.

Endpoint: https://api.quotable.io/quotes/random
Parameters:
tags: Filter quotes by tags (e.g., "inspirational").
limit: Number of quotes to return (default is 1).
Example API call:

bash
Copy code
https://api.quotable.io/quotes/random?tags=inspirational&limit=5
Contributing
Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

Fork the project.
Create your feature branch: git checkout -b feature/YourFeature.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/YourFeature.
Open a pull request.

Acknowledgements
Quotable API for providing the quotes.
Tailwind CSS for the styling framework.
Font Awesome for the icons.
