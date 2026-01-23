// AI Chat Logic

let chatMessages = [];
let chatInitialized = false;

function initChat() {
    if (!chatInitialized) {
        // Add initial AI message
        chatMessages = [{
            id: 1,
            sender: 'ai',
            text: "Hello! I'm your AI Travel Friend for Tamil Nadu. 🙏\n\nI can help you with:\n• Real-time place status and safety\n• Crowd predictions and alternatives\n• Weather updates and forecasts\n• Best visiting times\n• Cultural guidance\n\nHow can I assist your journey today?",
            timestamp: new Date()
        }];
        chatInitialized = true;
    }

    renderChatMessages();
    updateSendButton();

    // Focus on input
    setTimeout(() => {
        document.getElementById('chat-input').focus();
    }, 100);
}

function renderChatMessages() {
    const container = document.getElementById('chat-messages');
    const prompts = document.getElementById('chat-prompts');

    container.innerHTML = chatMessages.map(msg => `
    <div class="chat-message ${msg.sender}">
      <div class="chat-message-avatar">
        ${msg.sender === 'ai' ?
            `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 8V4H8"></path>
            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
          </svg>` :
            `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>`
        }
      </div>
      <div style="flex: 1; max-width: 80%;">
        <div class="chat-message-bubble">${formatChatMessage(msg.text)}</div>
        <div class="chat-message-time">${formatTime(msg.timestamp)}</div>
      </div>
    </div>
  `).join('');

    // Show/hide prompts
    if (chatMessages.length === 1) {
        prompts.classList.remove('hidden');
    } else {
        prompts.classList.add('hidden');
    }

    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function formatChatMessage(text) {
    return text
        .replace(/\n/g, '<br>')
        .replace(/✅/g, '<span style="color: var(--color-success);">✅</span>')
        .replace(/🌅/g, '<span>🌅</span>')
        .replace(/⏰/g, '<span>⏰</span>')
        .replace(/🌆/g, '<span>🌆</span>')
        .replace(/📅/g, '<span>📅</span>');
}

function formatTime(date) {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function handleChatKeypress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
    }
}

function updateSendButton() {
    const input = document.getElementById('chat-input');
    const btn = document.getElementById('chat-send-btn');
    btn.disabled = !input.value.trim();
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();

    if (!text) return;

    // Add user message
    const userMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        text: text,
        timestamp: new Date()
    };
    chatMessages.push(userMessage);

    // Clear input
    input.value = '';
    updateSendButton();

    // Render immediately
    renderChatMessages();

    // Generate AI response after delay
    setTimeout(() => {
        const aiResponse = getAIResponse(text);
        const aiMessage = {
            id: chatMessages.length + 1,
            sender: 'ai',
            text: aiResponse,
            timestamp: new Date()
        };
        chatMessages.push(aiMessage);
        renderChatMessages();
    }, 1000);
}

function sendSuggestedPrompt(prompt) {
    document.getElementById('chat-input').value = prompt;
    sendChatMessage();
}

function getAIResponse(input) {
    const lowerInput = input.toLowerCase();

    // Check for keyword matches
    if (lowerInput.includes('marina') || lowerInput.includes('beach')) {
        return aiResponses["marina beach"];
    }
    if (lowerInput.includes('crowd') || lowerInput.includes('less') || lowerInput.includes('alternative')) {
        return aiResponses["less crowded"];
    }
    if (lowerInput.includes('meenakshi') || lowerInput.includes('temple time')) {
        return aiResponses["meenakshi temple"];
    }
    if (lowerInput.includes('ooty') || lowerInput.includes('weather')) {
        return aiResponses["ooty weather"];
    }
    if (lowerInput.includes('family') || lowerInput.includes('children')) {
        return aiResponses["family friendly"];
    }
    if (lowerInput.includes('temple') && lowerInput.includes('open')) {
        return aiResponses["temples open"];
    }

    // Default response
    return "I understand you're asking about that. Let me provide you with the most current information from our verified sources.\n\nBased on real-time data from District Authorities, I recommend checking specific place details for the most accurate updates. Would you like me to suggest popular destinations or help with something specific?";
}

// Update send button on input
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('chat-input');
    if (input) {
        input.addEventListener('input', updateSendButton);
    }
});
