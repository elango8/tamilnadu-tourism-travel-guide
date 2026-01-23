// Main Application Logic

// State
let currentPage = 'login';
let userRole = null;
let selectedDistrict = null;
let selectedPlace = null;
let filters = {
    crowd: false,
    weather: false,
    popular: false
};
let chatPopupOpen = false;

// Chat Popup Functions
function toggleChatPopup() {
    const overlay = document.getElementById('chat-popup-overlay');
    chatPopupOpen = !chatPopupOpen;

    if (chatPopupOpen) {
        overlay.classList.add('active');
        initChat();
        document.body.style.overflow = 'hidden';
    } else {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeChatPopupOnOverlay(e) {
    if (e.target.id === 'chat-popup-overlay') {
        toggleChatPopup();
    }
}

// Navigation
function navigateTo(page, data = null) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show target page
    const targetPage = document.getElementById('page-' + page);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = page;

        // Handle page-specific logic
        switch (page) {
            case 'districts':
                renderDistricts();
                break;
            case 'district-detail':
                if (data) selectedDistrict = data;
                renderDistrictDetail();
                break;
            case 'place-detail':
                if (data) {
                    selectedPlace = data.place;
                    selectedDistrict = data.district;
                }
                renderPlaceDetail();
                break;
            case 'alerts':
                renderAlerts();
                break;
        }
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

function goBackFromPlace() {
    navigateTo('district-detail', selectedDistrict);
}

// Role Selection
function selectRole(role) {
    userRole = role;

    // Update UI
    document.querySelectorAll('.role-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`[data-role="${role}"]`).classList.add('active');

    // Enable login button
    document.getElementById('login-btn').disabled = false;
}

// Login
function handleLogin(e) {
    e.preventDefault();
    if (!userRole) return;

    if (userRole === 'tourist') {
        navigateTo('home');
    } else {
        navigateTo('authority');
    }
}

function handleGoogleLogin() {
    if (!userRole) {
        alert('Please select a role first');
        return;
    }
    handleLogin({ preventDefault: () => { } });
}

function handleLogout() {
    userRole = null;
    selectedDistrict = null;
    selectedPlace = null;
    navigateTo('login');

    // Reset role selection
    document.querySelectorAll('.role-card').forEach(card => {
        card.classList.remove('active');
    });
    document.getElementById('login-btn').disabled = true;
}

// Filter Toggle
function toggleFilter(filter) {
    filters[filter] = !filters[filter];

    // Update UI
    const pill = document.querySelector(`[data-filter="${filter}"]`);
    pill.classList.toggle('active', filters[filter]);

    // Re-render districts
    renderDistricts();
}

// District Search
function filterDistricts() {
    renderDistricts();
}

// Render Districts
function renderDistricts() {
    const grid = document.getElementById('districts-grid');
    const noResults = document.getElementById('no-results');
    const searchQuery = document.getElementById('district-search').value.toLowerCase();

    let filteredDistricts = districts.filter(d => {
        const matchesSearch = d.name.toLowerCase().includes(searchQuery);
        const matchesCrowd = !filters.crowd || d.crowdLevel === 'Low';
        const matchesWeather = !filters.weather || d.weatherSafe;
        const matchesPopular = !filters.popular || d.popular;
        return matchesSearch && matchesCrowd && matchesWeather && matchesPopular;
    });

    if (filteredDistricts.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    grid.innerHTML = filteredDistricts.map(d => `
    <div class="card district-card" onclick="navigateTo('district-detail', '${d.name}')">
      <div class="district-card-img">
        <img src="${d.image}" alt="${d.name}">
        <div class="district-card-overlay"></div>
        <div class="district-card-badges">
          <span class="badge ${getCrowdBadgeClass(d.crowdLevel)}">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
            ${d.crowdLevel}
          </span>
          <div class="flex gap-1">
            ${d.weatherSafe ? `<span class="badge badge-success">
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              </svg>
              Safe
            </span>` : ''}
            ${d.popular ? `<span class="badge badge-warning">
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              </svg>
            </span>` : ''}
          </div>
        </div>
        <div class="district-card-info">
          <h3>${d.name}</h3>
          <p>${d.places} tourist places</p>
        </div>
      </div>
      <div class="district-card-footer">
        <span class="flex items-center gap-1">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
          Crowd: ${d.crowdLevel}
        </span>
        <span class="flex items-center gap-1">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
          ${d.weatherSafe ? 'Safe' : 'Caution'}
        </span>
      </div>
    </div>
  `).join('');
}

// Render District Detail
function renderDistrictDetail() {
    const data = districtData[selectedDistrict] || districtData['Chennai'];

    document.getElementById('district-detail-img').src = data.image;
    document.getElementById('district-detail-name').textContent = selectedDistrict;
    document.getElementById('district-detail-season').textContent = data.bestSeason;
    document.getElementById('district-detail-desc').textContent = data.description;
    document.getElementById('district-detail-best-season').textContent = data.bestSeason;
    document.getElementById('district-detail-culture').textContent = data.culture;

    const placesGrid = document.getElementById('district-places-grid');
    placesGrid.innerHTML = data.places.map(place => `
    <div class="place-card" onclick="navigateTo('place-detail', { place: '${place.name}', district: '${selectedDistrict}' })">
      <div class="place-card-header">
        <div>
          <h3 class="place-card-title">${place.name}</h3>
          <div class="place-card-status">
            ${getStatusIcon(place.status)}
            <span style="color: ${getStatusColor(place.status)}">${place.status}</span>
          </div>
        </div>
        <span class="badge ${getCrowdBadgeClass(place.crowd)}">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
          ${place.crowd}
        </span>
      </div>
      <div class="place-card-meta">
        <span class="flex items-center gap-1">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
          ${place.weather}
        </span>
        <span class="text-gray-500" style="font-size: 12px;">Updated 15 min ago</span>
      </div>
      <div class="place-card-link">
        <span>View Details</span>
        <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </div>
    </div>
  `).join('');
}

// Render Place Detail
function renderPlaceDetail() {
    const data = placeData[selectedPlace] || placeData['Marina Beach'];

    document.getElementById('place-detail-img').src = data.image;
    document.getElementById('place-detail-name').textContent = selectedPlace;
    document.getElementById('place-detail-location').textContent = `${selectedDistrict}, Tamil Nadu`;
    document.getElementById('place-description').textContent = data.description;
    document.getElementById('place-best-time').textContent = data.bestTime;
    document.getElementById('place-climate-current').textContent = data.climate.current;
    document.getElementById('place-climate-forecast').textContent = data.climate.forecast;
    document.getElementById('place-rituals').textContent = data.rituals;
    document.getElementById('place-status-text').textContent = `Status: ${data.status}`;
    document.getElementById('place-last-updated').textContent = `Last updated: ${data.lastUpdated}`;

    // Badges
    document.getElementById('place-detail-badges').innerHTML = `
    <span class="badge ${getCrowdBadgeClass(data.crowdLevel)}">
      <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
      </svg>
      Crowd: ${data.crowdLevel}
    </span>
    <span class="badge badge-info">
      <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
      ${data.weatherCondition}
    </span>
    <span class="badge" style="background: rgba(255,255,255,0.2); backdrop-filter: blur(10px);">
      ${data.temperature}
    </span>
  `;

    // Safety
    document.getElementById('place-safety-list').innerHTML = data.safety.map(item => `
    <li class="flex items-start gap-2 text-gray-700">
      <span style="width: 8px; height: 8px; background: var(--color-warning); border-radius: 50%; margin-top: 6px; flex-shrink: 0;"></span>
      <span>${item}</span>
    </li>
  `).join('');

    // AI Suggestions
    document.getElementById('place-ai-suggestions').innerHTML = data.aiSuggestions.map(s => `
    <div class="card" style="cursor: pointer;">
      <div class="card-body">
        <h4 class="font-semibold mb-2">${s.name}</h4>
        <p class="text-sm text-gray-600 mb-3">${s.reason}</p>
        <div class="flex items-center gap-1 text-sm text-primary">
          <span>View Details</span>
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Alerts
function renderAlerts() {
    const list = document.getElementById('alerts-list');
    const highCount = alerts.filter(a => a.severity === 'high').length;
    document.getElementById('high-alert-count').textContent = `${highCount} High Priority`;

    list.innerHTML = alerts.map(alert => `
    <div class="alert-item ${alert.severity}">
      <div class="alert-icon">
        ${getAlertIcon(alert.type)}
      </div>
      <div class="alert-content">
        <div class="alert-header">
          <h3 class="alert-title">${alert.title}</h3>
          <span class="badge ${getSeverityBadgeClass(alert.severity)}">${alert.severity.toUpperCase()}</span>
        </div>
        <div class="alert-location">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${alert.location}
        </div>
        <p class="alert-message">${alert.message}</p>
        <div class="alert-footer">
          <span class="flex items-center gap-2">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${alert.timestamp}
          </span>
          <span>Issued by: <strong>${alert.issuer}</strong></span>
        </div>
      </div>
    </div>
  `).join('');
}

// Helper Functions
function getCrowdBadgeClass(level) {
    switch (level) {
        case 'Low': return 'badge-success';
        case 'Medium': return 'badge-warning';
        case 'High': return 'badge-danger';
        default: return 'badge-info';
    }
}

function getStatusIcon(status) {
    switch (status) {
        case 'Open':
            return `<svg class="icon-sm" style="color: var(--color-success);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        case 'Limited':
            return `<svg class="icon-sm" style="color: var(--color-warning);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>`;
        case 'Closed':
            return `<svg class="icon-sm" style="color: var(--color-danger);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>`;
        default:
            return '';
    }
}

function getStatusColor(status) {
    switch (status) {
        case 'Open': return 'var(--color-success)';
        case 'Limited': return 'var(--color-warning)';
        case 'Closed': return 'var(--color-danger)';
        default: return 'var(--color-gray-600)';
    }
}

function getSeverityBadgeClass(severity) {
    switch (severity) {
        case 'high': return 'badge-danger';
        case 'medium': return 'badge-warning';
        case 'low': return 'badge-info';
        default: return 'badge-info';
    }
}

function getAlertIcon(type) {
    switch (type) {
        case 'weather':
            return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`;
        case 'crowd':
            return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
        case 'maintenance':
            return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="8" x="2" y="6" rx="1"></rect><path d="M17 14v7"></path><path d="M7 14v7"></path><path d="M17 3v3"></path><path d="M7 3v3"></path><path d="M10 14 2.3 6.3"></path><path d="m14 6 7.7 7.7"></path><path d="m8 6 8 8"></path></svg>`;
        default:
            return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>`;
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Show login page
    navigateTo('login');
});
