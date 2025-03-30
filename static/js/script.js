/**
 * Shrekfest 2023 Website JavaScript
 * 90s/early 2000s style JavaScript functionality
 */

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to Shrekfest 2023! It's all ogre now!");
    
    // Initialize star cursor trail effect
    initializeStarCursor();
    
    // Set up schedule tab functionality
    setupScheduleTabs();
    
    // Handle form submission
    setupContactForm();
    
    // Show a retro welcome message
    setTimeout(showWelcomeMessage, 1500);
});

/**
 * Creates a star/sparkle cursor trail effect
 */
function initializeStarCursor() {
    const body = document.querySelector('body');
    
    body.addEventListener('mousemove', function(e) {
        // Create a star element
        const star = document.createElement('div');
        star.className = 'star-cursor';
        star.innerHTML = '★';
        star.style.position = 'absolute';
        star.style.left = (e.pageX - 5) + 'px';
        star.style.top = (e.pageY - 5) + 'px';
        star.style.color = '#d8f0b0';
        star.style.fontSize = '20px';
        star.style.textShadow = '0 0 5px #5c8a16';
        star.style.zIndex = '9999';
        star.style.pointerEvents = 'none';
        star.style.userSelect = 'none';
        star.style.transition = 'transform 0.5s, opacity 0.5s';
        document.body.appendChild(star);
        
        // Animate and remove the star
        setTimeout(function() {
            star.style.transform = 'translateY(-20px) scale(0.5)';
            star.style.opacity = '0';
            
            setTimeout(function() {
                star.remove();
            }, 500);
        }, 100);
    });
}

/**
 * Sets up the schedule tab functionality
 */
function setupScheduleTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the tab ID from the button's onclick attribute
            const tabId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            
            // Remove active class from all tabs and buttons
            document.querySelectorAll('.schedule-content').forEach(function(tab) {
                tab.classList.remove('active');
            });
            
            tabButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Add active class to the selected tab and button
            document.getElementById(tabId).classList.add('active');
            this.classList.add('active');
        });
    });
}

/**
 * Shows tab content (called from HTML)
 */
function showSchedule(tabId) {
    // Remove active class from all tabs and buttons
    document.querySelectorAll('.schedule-content').forEach(function(tab) {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    
    // Add active class to the selected tab and button
    document.getElementById(tabId).classList.add('active');
    
    // Find the button that corresponds to this tab
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        if (btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        }
    });
}

/**
 * Sets up the contact form submission
 */
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill out all required fields!');
                return;
            }
            
            // Show a success message in 90s style
            alert('Thanks for your message, ' + name + '!\n\nWe\'ll get back to you faster than Donkey can talk!');
            
            // Reset the form
            contactForm.reset();
        });
    }
}

/**
 * Shows a retro-style welcome message
 */
function showWelcomeMessage() {
    // Create message box elements
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '10000';
    
    const messageBox = document.createElement('div');
    messageBox.style.position = 'fixed';
    messageBox.style.top = '50%';
    messageBox.style.left = '50%';
    messageBox.style.transform = 'translate(-50%, -50%)';
    messageBox.style.width = '300px';
    messageBox.style.backgroundColor = '#5c8a16';
    messageBox.style.border = '8px ridge #86b520';
    messageBox.style.padding = '20px';
    messageBox.style.textAlign = 'center';
    messageBox.style.zIndex = '10001';
    
    const title = document.createElement('h3');
    title.textContent = 'WELCOME TO SHREKFEST 2023!';
    title.style.color = '#f5faed';
    title.style.marginBottom = '15px';
    title.style.textShadow = '1px 1px 0 #2c4a03';
    
    const content = document.createElement('p');
    content.textContent = 'Get ready for the swampiest three days of your life! Check out our schedule, location info, and more!';
    content.style.color = '#f5faed';
    content.style.marginBottom = '20px';
    
    const button = document.createElement('button');
    button.textContent = 'ENTER THE SWAMP';
    button.style.backgroundColor = '#3a5f0b';
    button.style.color = '#f5faed';
    button.style.border = '4px outset #86b520';
    button.style.padding = '8px 15px';
    button.style.cursor = 'pointer';
    button.style.fontFamily = "'VT323', monospace";
    button.style.fontSize = '18px';
    
    // Add click event to close
    button.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
    
    // Assemble and add to page
    messageBox.appendChild(title);
    messageBox.appendChild(content);
    messageBox.appendChild(button);
    overlay.appendChild(messageBox);
    document.body.appendChild(overlay);
    
    // Play a welcome sound (browser might block this due to autoplay policies)
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU9vT18=');
        audio.volume = 0.2;
        audio.play().catch(e => console.log('Audio autoplay prevented:', e));
    } catch (e) {
        console.log('Audio not supported:', e);
    }
}
