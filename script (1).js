// Data Storage (using localStorage for persistence)
let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
let comments = JSON.parse(localStorage.getItem('blogComments')) || [];
let currentPostId = null;

// Sample initial data if empty
if (posts.length === 0) {
    posts = [
        {
            id: 1,
            title: "Getting Started with Web Development",
            category: "Technology",
            excerpt: "Learn the fundamentals of HTML, CSS, and JavaScript to build your first website.",
            content: "<p>Web development is an exciting field that allows you to create amazing digital experiences. In this post, we'll explore the basics of HTML, CSS, and JavaScript.</p><p><strong>HTML</strong> (HyperText Markup Language) is the backbone of any website. It provides the structure and content.</p><p><strong>CSS</strong> (Cascading Style Sheets) is used to style and layout web pages, making them visually appealing.</p><p><strong>JavaScript</strong> adds interactivity and dynamic behavior to your websites.</p><p>Start your journey today by building simple projects and gradually increasing complexity!</p>",
            author: "Sarah Johnson",
            date: new Date().toLocaleDateString(),
            time: "2 hours ago"
        },
        {
            id: 2,
            title: "10 Tips for a Healthier Lifestyle",
            category: "Lifestyle",
            excerpt: "Simple habits that can transform your daily routine and improve your well-being.",
            content: "<p>Maintaining a healthy lifestyle doesn't have to be complicated. Here are ten simple tips:</p><ol><li>Drink at least 8 glasses of water daily</li><li>Exercise for 30 minutes every day</li><li>Get 7-8 hours of quality sleep</li><li>Eat a balanced diet rich in fruits and vegetables</li><li>Practice mindfulness or meditation</li><li>Limit screen time</li><li>Stay connected with friends and family</li><li>Take breaks during work</li><li>Read regularly</li><li>Practice gratitude</li></ol><p>Start implementing these habits one at a time for lasting change!</p>",
            author: "Michael Chen",
            date: new Date().toLocaleDateString(),
            time: "5 hours ago"
        },
        {
            id: 3,
            title: "Starting Your Own Business: A Beginner's Guide",
            category: "Business",
            excerpt: "Essential steps to turn your entrepreneurial dreams into reality.",
            content: "<p>Starting a business is an exciting journey. Here's what you need to know:</p><p><strong>1. Identify Your Niche</strong><br>Find a problem you're passionate about solving.</p><p><strong>2. Create a Business Plan</strong><br>Outline your goals, target market, and financial projections.</p><p><strong>3. Secure Funding</strong><br>Explore options like savings, loans, or investors.</p><p><strong>4. Legal Structure</strong><br>Choose between sole proprietorship, LLC, or corporation.</p><p><strong>5. Build Your Brand</strong><br>Create a memorable name, logo, and online presence.</p><p>Remember, every successful business started with a single step!</p>",
            author: "Emma Williams",
            date: new Date().toLocaleDateString(),
            time: "1 day ago"
        },
        {
            id: 4,
            title: "Top 5 Travel Destinations for 2026",
            category: "Travel",
            excerpt: "Discover breathtaking locations that should be on every traveler's bucket list.",
            content: "<p>Planning your next adventure? Here are five must-visit destinations:</p><p><strong>1. Kyoto, Japan</strong><br>Experience ancient temples and cherry blossoms.</p><p><strong>2. Reykjavik, Iceland</strong><br>Witness the Northern Lights and geothermal wonders.</p><p><strong>3. Bali, Indonesia</strong><br>Tropical paradise with stunning beaches and culture.</p><p><strong>4. Santorini, Greece</strong><br>Iconic white buildings and sunsets.</p><p><strong>5. Machu Picchu, Peru</strong><br>Ancient Incan citadel in the mountains.</p><p>Pack your bags and start exploring!</p>",
            author: "David Martinez",
            date: new Date().toLocaleDateString(),
            time: "2 days ago"
        }
    ];
    saveData();
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    localStorage.setItem('blogComments', JSON.stringify(comments));
}

// Navigation
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    if (pageName === 'home') {
        document.getElementById('homePage').classList.add('active');
        loadPosts();
    } else if (pageName === 'create') {
        document.getElementById('createPage').classList.add('active');
    }
    
    // Update nav active state
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Load and display posts
function loadPosts(filteredPosts = null) {
    const container = document.getElementById('postsContainer');
    const postsToDisplay = filteredPosts || posts;
    
    if (postsToDisplay.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#999;grid-column:1/-1;">No posts found. Create your first post!</p>';
        return;
    }
    
    container.innerHTML = postsToDisplay.map(post => `
        <div class="post-card" onclick="viewPost(${post.id})">
            <div class="post-header">
                <span class="post-category">${post.category}</span>
                <h3 class="post-title">${post.title}</h3>
                <div class="post-meta">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-clock"></i> ${post.time}</span>
                </div>
            </div>
            <div class="post-body">
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-footer">
                    <div class="author">
                        <div class="author-avatar">${post.author.charAt(0)}</div>
                        <span>${post.author}</span>
                    </div>
                    <span class="read-more">Read More <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
    `).join('');
}

// View individual post
function viewPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    currentPostId = postId;
    
    // Hide all pages and show blog page
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('blogPage').classList.add('active');
    
    // Update nav
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Load post content
    const blogContent = document.getElementById('blogPostContent');
    blogContent.innerHTML = `
        <a href="#" class="back-button" onclick="showPage('home'); event.preventDefault();">
            <i class="fas fa-arrow-left"></i> Back to Home
        </a>
        <div class="post-header-image">
            <i class="fas fa-blog"></i>
        </div>
        <span class="post-category" style="display:inline-block;background:#ff6b6b;color:white;padding:5px 12px;border-radius:20px;font-size:12px;font-weight:600;margin-bottom:15px;">${post.category}</span>
        <h1>${post.title}</h1>
        <div class="post-meta-detailed">
            <span><i class="fas fa-user"></i> ${post.author}</span>
            <span><i class="fas fa-calendar"></i> ${post.date}</span>
            <span><i class="fas fa-clock"></i> ${post.time}</span>
        </div>
        <div class="post-content">
            ${post.content}
        </div>
    `;
    
    // Load comments
    loadComments(postId);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Rich text editor formatting
function formatText(command) {
    document.execCommand(command, false, null);
    document.getElementById('postContent').focus();
}

// Create new post
document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('postTitle').value;
    const category = document.getElementById('postCategory').value;
    const excerpt = document.getElementById('postExcerpt').value;
    const content = document.getElementById('postContent').innerHTML;
    
    const newPost = {
        id: Date.now(),
        title,
        category,
        excerpt,
        content,
        author: "You", // In real app, this would be logged-in user
        date: new Date().toLocaleDateString(),
        time: "Just now"
    };
    
    posts.unshift(newPost); // Add to beginning
    saveData();
    
    showNotification('Post published successfully!');
    this.reset();
    document.getElementById('postContent').innerHTML = '';
    
    // Redirect to home page
    setTimeout(() => {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById('homePage').classList.add('active');
        loadPosts();
    }, 1000);
});

// Comment functionality
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!currentPostId) return;
    
    const name = document.getElementById('commenterName').value;
    const text = document.getElementById('commentText').value;
    
    const newComment = {
        id: Date.now(),
        postId: currentPostId,
        name,
        text,
        date: new Date().toLocaleDateString(),
        time: "Just now"
    };
    
    comments.push(newComment);
    saveData();
    
    showNotification('Comment posted successfully!');
    this.reset();
    loadComments(currentPostId);
});

// Load comments for a post
function loadComments(postId) {
    const postComments = comments.filter(c => c.postId === postId);
    const container = document.getElementById('commentsList');
    const countElement = document.getElementById('commentCount');
    
    countElement.textContent = postComments.length;
    
    if (postComments.length === 0) {
        container.innerHTML = '<p class="no-comments">No comments yet. Be the first to comment!</p>';
        return;
    }
    
    container.innerHTML = postComments.map(comment => `
        <div class="comment">
            <div class="comment-avatar">${comment.name.charAt(0).toUpperCase()}</div>
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">${comment.name}</span>
                    <span class="comment-date">${comment.date} at ${comment.time}</span>
                </div>
                <p class="comment-text">${comment.text}</p>
            </div>
        </div>
    `).join('');
}

// Search posts
function searchPosts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        loadPosts();
        return;
    }
    
    const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm)
    );
    
    loadPosts(filtered);
    
    // Show home page if not already
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('homePage').classList.add('active');
}

// Filter by category
function filterByCategory(category) {
    const filtered = posts.filter(post => post.category === category);
    loadPosts(filtered);
    
    // Show home page
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('homePage').classList.add('active');
    
    showNotification(`Showing ${category} posts`);
}

// Show notification
function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = 'notification' + (isError ? ' error' : '');
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchPosts();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
});