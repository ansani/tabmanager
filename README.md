# Tab Manager

Tab Manager is a Microsoft Edge extension that displays all open tabs in a new window, allowing users to manage their tabs easily. Users can view tab details, sort by URL or title, close selected tabs, and reset selections.

## Features

- Displays all open tabs in a table.
- Columns include Tab ID, URL, Title, and a checkbox for selection.
- Sortable columns for URL and Title.
- Buttons to close selected tabs or reset selections.
- Sticky table header for easy navigation.

## Installation

1. **Clone or Download the Repository:**
    ```sh
    git clone https://github.com/ansani/tabmanager.git
    ```

2. **Open Microsoft Edge and go to the Extensions page:**
    - Type `edge://extensions/` in the address bar.

3. **Enable Developer Mode:**
    - Toggle the "Developer mode" switch at the bottom left of the Extensions page.

4. **Load Unpacked Extension:**
    - Click the "Load unpacked" button and select the directory where you cloned or downloaded the repository.

## Files

- **manifest.json:** Contains the extension metadata and permissions.
- **background.js:** Manages the creation of the popup window.
- **popup.html:** Defines the layout and structure of the popup window.
- **popup.js:** Contains the logic for fetching tabs, sorting, closing selected tabs, and resetting selections.
- **icon.png:** The icon for the extension.

## Usage

1. Click on the Tab Manager icon in the toolbar.
2. A popup window will open displaying all open tabs.
3. Use the checkboxes to select tabs.
4. Click "CLOSE TABS" to close selected tabs.
5. Click "RESET" to uncheck all checkboxes.

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This `README.md` file provides all necessary information about the "Tab Manager" extension, including its features, installation instructions, file contents, and usage guidelines. You can customize the repository URL and other details as needed.