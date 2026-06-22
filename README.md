# bloc

![bloc favicon](favicon.svg)

Minimal, amnesic text editor that runs in the browser. When the tab is closed, everything written is lost.

## Requirements

- Python 3 (preinstalled on macOS)

## Usage

### Start manually

```bash
cd ~/Desktop/repos
python3 -m http.server 3131
```

Then open `http://localhost:3131` in your browser.

### Run in background

To run it without keeping the terminal open:

```bash
cd ~/Desktop/repos
nohup python3 -m http.server 3131 &> /dev/null &
```

Check it's running:
```bash
lsof -i :3131
```

Stop it:
```bash
kill $(lsof -ti :3131)
```

## Features

- Bold, italic, underline, strikethrough (`Ctrl+B` / `Ctrl+I` / `Ctrl+U`)
- Ordered and unordered lists
- Left / center / right alignment
- Font size control
- `Tab` inserts spaces instead of leaving the editor
- `Ctrl+V` pastes as plain text; `Ctrl+Shift+V` pastes with formatting
- "Clear" button to empty the editor

## Resources

Uses under 1MB of RAM and 0% CPU at idle. Suitable to keep running 24/7.
