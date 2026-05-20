# 📝 Blogger.com Clone - Functional Blogging Platform

A fully functional blogging platform inspired by Blogger.com, built with vanilla HTML, CSS, and JavaScript. Users can create, edit, read, and comment on blog posts with a rich text editor and persistent storage.

## 🌟 Features

### Homepage
- **Latest Posts Grid**: Display recent blog posts with thumbnails, excerpts, and author info
- **Category Filtering**: Browse posts by Technology, Lifestyle, Business, and Travel
- **Search Functionality**: Real-time search across titles, content, and categories
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Post Creation
- **Rich Text Editor**: Format content with bold, italic, underline, and lists
- **Category Selection**: Organize posts into predefined categories
- **Auto-save**: Posts stored in browser's localStorage for persistence
- **User-friendly Interface**: Clean, intuitive form design

### Blog Post Page
- **Full Article View**: Read complete post content with formatting
- **Author Details**: Display author name, publish date, and time
- **Related Posts**: Suggestions for similar content
- **Comments Section**: Interactive comment system with user names and timestamps

### Core Functionality
- ✅ Create new blog posts
- ✅ Read/view individual posts
- ✅ Delete posts (can be added)
- ✅ Comment on posts
- ✅ Search posts by keyword
- ✅ Filter by category
- ✅ Responsive navigation
- ✅ Data persistence using localStorage

## 🎨 Design & Layout

### Color Scheme
| Element | Color |
|---------|-------|
| Primary | `#ff6b6b` (Coral Red) |
| Secondary | `#ee5a6f` (Pink) |
| Accent | `#ffe66d` (Yellow) |
| Background | `#f5f5f5` (Light Gray) |
| Text | `#333333` (Dark) |

### Layout Structure
1. **Sticky Header**: Logo, navigation menu, and search bar
2. **Featured Posts Section**: Grid layout showcasing recent posts
3. **Categories Section**: Visual category cards with icons
4. **Create Post Page**: Full-width form with rich text editor toolbar
5. **Blog Post Page**: Article view with comments section below
6. **Footer**: Multi-column layout with links and social media

## 🛠️ Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Flexbox, Grid, animations, gradients, and media queries
- **JavaScript (ES6+)**: DOM manipulation, event handling, localStorage API
- **Font Awesome 6**: Icon library for UI elements
- **localStorage**: Client-side data persistence

## 📱 Responsive Design
- **Desktop**: Multi-column grids, full navigation
- **Tablet**: 2-column layouts, condensed spacing
- **Mobile**: Single column, stacked navigation, touch-optimized

## 🚀 How to Run

### Method 1: Direct Browser
1. Download all files (`index.html`, `style.css`, `script.js`)
2. Place them in the same folder
3. Double-click `index.html` to open in browser
4. Start creating and reading posts!

### Method 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Then visit http://localhost:8000