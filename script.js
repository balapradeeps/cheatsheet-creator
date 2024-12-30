const container = document.getElementById('contentContainer');
const markdownInput = document.getElementById('markdownInput');
const inputWrapper = document.getElementById('inputWrapper');

// Event listener for file input
markdownInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        const text = await file.text();
        renderMarkdown(text);
        inputWrapper.style.opacity = '0.5'; // Reduce visibility after file load
    }
});

// Function to render Markdown content into HTML
function renderMarkdown(markdown) {
    container.innerHTML = ''; // Clear existing content
    const sections = markdown.split(/^# /gm).slice(1); // Split by heading-level 1

    sections.forEach((section) => {
        const lines = section.trim().split('\n');
        const heading = lines[0].trim(); // Extract heading
        const commands = lines.slice(1).map((line) => {
            const match = line.match(/- \*\*(.+)\*\*: `(.+)`/); // Match Markdown format
            return match ? { description: match[1], command: match[2] } : null;
        }).filter(Boolean);

        const card = createCard(heading, commands); // Create a card element
        container.appendChild(card); // Append to container
    });
}

// Helper function to create a card
function createCard(heading, commands) {
    const card = document.createElement('div');
    card.className = 'card';

    // Add window dots
    const windowDots = document.createElement('div');
    windowDots.className = 'window-dots';
    ['red', 'yellow', 'green'].forEach((color) => {
        const dot = document.createElement('div');
        dot.className = `dot ${color}`;
        windowDots.appendChild(dot);
    });
    card.appendChild(windowDots);

    // Add title
    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = heading;
    card.appendChild(title);

    // Add commands
    commands.forEach((cmd) => {
        const block = document.createElement('div');
        block.className = 'command-block';

        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.textContent = `# ${cmd.description}`;
        block.appendChild(comment);

        const command = document.createElement('div');
        command.className = 'command';
        command.innerHTML = `<span class="prompt">$ </span>${cmd.command}`;
        block.appendChild(command);

        card.appendChild(block);
    });

    return card;
}