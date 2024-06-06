# Tab Manager

[![Latest Version](https://img.shields.io/github/v/release/ansani/tabmanager)](https://github.com/ansani/tabmanager/releases)
[![Build Status](https://img.shields.io/github/actions/workflow/status/ansani/tabmanager/main.yml)](https://github.com/ansani/tabmanager/actions)
[![License](https://img.shields.io/github/license/ansani/tabmanager)](https://github.com/ansani/tabmanager/blob/main/LICENSE)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/fbjofhflomkbgjolioladdpooamcnpfp)](https://chromewebstore.google.com/detail/tab-manager/fbjofhflomkbgjolioladdpooamcnpfp?authuser=0&hl=it)
[![Microsoft Edge Add-ons](https://img.shields.io/badge/Edge%20Store-Available-blue)](https://microsoftedge.microsoft.com/addons/detail/tab-manager/cnfkkkfdldbfmmilklplncoknbkanepf)

Tab Manager is a browser extension that displays all open tabs in a new window, allowing users to manage their tabs easily. Users can view tab details, sort by URL or title, close selected tabs, and reset selections.

## Features

- Displays all open tabs in a table.
- Columns include Tab ID, URL, Title, and a checkbox for selection.
- Sortable columns for URL and Title.
- Buttons to close selected tabs or reset selections.
- Sticky table header for easy navigation.

## Manual Installation

1. Clone this repository or download the source code.
    ```sh
    git clone https://github.com/ansani/tabmanager.git
    ```
2. Open Chrome or Edge and navigate to the extensions page (`chrome://extensions/` for Chrome or `edge://extensions/` for Edge).

3. Enable "Developer mode" in the top right corner.

4. Click "Load unpacked" and select the directory where the source code is located.

## Installation

### Chrome Web Store

You can install TabManager directly from the Chrome Web Store using the following link:
[Tab Manager - Chrome Web Store](https://chromewebstore.google.com/detail/tab-manager/fbjofhflomkbgjolioladdpooamcnpfp?authuser=0&hl=it)


### Microsoft Edge Add-ons

You can also install TabManager from the Microsoft Edge Add-ons store:
[Tab Manager - Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tab-manager/cnfkkkfdldbfmmilklplncoknbkanepf)


## Files

- **manifest.json:** Contains the extension metadata and permissions.
- **background.js:** Manages the creation of the popup window.
- **popup.html:** Defines the layout and structure of the popup window.
- **popup.js:** Contains the logic for fetching tabs, sorting, closing selected tabs, and resetting selections.
- **icon.png:** The icon for the extension.

## Usage

1. Click on the Tab Manager icon in the toolbar.
2. A popup window will open, displaying all open tabs.
3. Use the checkboxes to select tabs.
4. Click "CLOSE TABS" to close selected tabs.
5. Click "RESET" to uncheck all checkboxes.

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your branch and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
