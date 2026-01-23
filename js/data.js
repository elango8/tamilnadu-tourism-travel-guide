// Data for Tamil Nadu Tourism Website

const districts = [
  {
    name: "Chennai",
    image: "https://images.unsplash.com/photo-1724992609079-75164f1ba2dd?w=600&q=80",
    crowdLevel: "High",
    weatherSafe: true,
    places: 28,
    popular: true
  },
  {
    name: "Madurai",
    image: "https://images.unsplash.com/photo-1692173248120-59547c3d4653?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 18,
    popular: true
  },
  {
    name: "Ooty",
    image: "https://images.unsplash.com/photo-1590348883020-651c67946732?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 12,
    popular: false
  },
  {
    name: "Kodaikanal",
    image: "https://images.unsplash.com/photo-1634229021125-f388d64f7a10?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: false,
    places: 10,
    popular: false
  },
  {
    name: "Coimbatore",
    image: "https://images.unsplash.com/photo-1704788564069-d54cab4169aa?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 15,
    popular: false
  },
  {
    name: "Kanyakumari",
    image: "https://images.unsplash.com/photo-1647363233019-ad4c63186b7f?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 8,
    popular: true
  },
  {
    name: "Thanjavur",
    image: "https://images.unsplash.com/photo-1768843883463-4c64257c830b?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 14,
    popular: false
  },
  {
    name: "Rameswaram",
    image: "https://images.unsplash.com/photo-1624340067771-8107e4aac99f?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 6,
    popular: true
  }
];

const districtData = {
  "Chennai": {
    image: "https://images.unsplash.com/photo-1724992609079-75164f1ba2dd?w=1200&q=80",
    description: "Chennai, the capital of Tamil Nadu, is a vibrant coastal city known for its rich cultural heritage, beaches, and historical temples.",
    bestSeason: "November to February",
    culture: "Classical music and dance hub, Marina Beach, historic Fort St. George",
    places: [
      { name: "Marina Beach", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Kapaleeshwarar Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Fort St. George", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "San Thome Cathedral", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Madurai": {
    image: "https://images.unsplash.com/photo-1692173248120-59547c3d4653?w=1200&q=80",
    description: "Madurai, one of the oldest cities in India, is famous for the magnificent Meenakshi Amman Temple and its rich cultural traditions.",
    bestSeason: "October to March",
    culture: "Ancient temple city, traditional festivals, bustling markets",
    places: [
      { name: "Meenakshi Amman Temple", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Thirumalai Nayakkar Palace", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Gandhi Memorial Museum", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Alagar Kovil", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Ooty": {
    image: "https://images.unsplash.com/photo-1590348883020-651c67946732?w=1200&q=80",
    description: "Ooty, the 'Queen of Hill Stations', offers scenic landscapes, pleasant climate, and colonial charm in the Nilgiri Mountains.",
    bestSeason: "April to June, September to November",
    culture: "British colonial heritage, tea plantations, mountain railways",
    places: [
      { name: "Botanical Gardens", crowd: "Medium", weather: "Pleasant", status: "Open" },
      { name: "Ooty Lake", crowd: "High", weather: "Pleasant", status: "Open" },
      { name: "Doddabetta Peak", crowd: "Low", weather: "Misty", status: "Open" },
      { name: "Tea Museum", crowd: "Low", weather: "Pleasant", status: "Open" }
    ]
  },
  "Kodaikanal": {
    image: "https://images.unsplash.com/photo-1634229021125-f388d64f7a10?w=1200&q=80",
    description: "Kodaikanal is a beautiful hill station known for its stunning views, waterfalls, and peaceful atmosphere.",
    bestSeason: "April to June, September to October",
    culture: "Hill station charm, boat rides, nature walks",
    places: [
      { name: "Kodaikanal Lake", crowd: "Medium", weather: "Pleasant", status: "Open" },
      { name: "Coaker's Walk", crowd: "Low", weather: "Misty", status: "Open" },
      { name: "Bear Shola Falls", crowd: "Low", weather: "Rainy", status: "Limited" },
      { name: "Pillar Rocks", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Coimbatore": {
    image: "https://images.unsplash.com/photo-1704788564069-d54cab4169aa?w=1200&q=80",
    description: "Coimbatore, the Manchester of South India, is known for its temples, textiles, and as a gateway to the Western Ghats.",
    bestSeason: "October to March",
    culture: "Temple city, textile industry, engineering hub",
    places: [
      { name: "Marudamalai Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Dhyanalinga", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "VOC Park", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Siruvani Falls", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Kanyakumari": {
    image: "https://images.unsplash.com/photo-1647363233019-ad4c63186b7f?w=1200&q=80",
    description: "Kanyakumari, at India's southern tip, where three seas meet. Famous for Vivekananda Rock and stunning sunrises.",
    bestSeason: "October to February",
    culture: "Spiritual significance, confluence of seas, Vivekananda memorial",
    places: [
      { name: "Vivekananda Rock Memorial", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Thiruvalluvar Statue", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Padmanabhapuram Palace", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Sunset Point", crowd: "High", weather: "Clear", status: "Open" }
    ]
  },
  "Thanjavur": {
    image: "https://images.unsplash.com/photo-1768843883463-4c64257c830b?w=1200&q=80",
    description: "Thanjavur, the rice bowl of Tamil Nadu, is home to the UNESCO-listed Brihadeeswarar Temple and rich Chola heritage.",
    bestSeason: "November to February",
    culture: "Chola architecture, Carnatic music, bronze sculptures",
    places: [
      { name: "Brihadeeswarar Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Thanjavur Palace", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Saraswathi Mahal Library", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Art Gallery", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Rameswaram": {
    image: "https://images.unsplash.com/photo-1624340067771-8107e4aac99f?w=1200&q=80",
    description: "Rameswaram is a sacred island town with the famous Ramanathaswamy Temple and the iconic Pamban Bridge.",
    bestSeason: "October to April",
    culture: "Pilgrimage destination, Rama legend, sacred bathing ghats",
    places: [
      { name: "Ramanathaswamy Temple", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Pamban Bridge", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Dhanushkodi", crowd: "Low", weather: "Windy", status: "Open" },
      { name: "Five-Faced Hanuman Temple", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  }
};

const placeData = {
  "Marina Beach": {
    image: "https://images.unsplash.com/photo-1724992609079-75164f1ba2dd?w=1200&q=80",
    description: "Marina Beach is one of the longest urban beaches in the world, stretching over 13 kilometers along the Bay of Bengal coastline.",
    crowdLevel: "High",
    weatherCondition: "Clear & Sunny",
    temperature: "28°C",
    status: "Open",
    lastUpdated: "15 minutes ago",
    bestTime: "Early morning (5-8 AM) or evening (4-7 PM)",
    climate: {
      current: "Pleasant sea breeze, clear skies",
      forecast: "Sunny throughout the day, light winds from northeast"
    },
    rituals: "No specific rituals. Avoid littering. Swimming is not recommended due to strong currents.",
    safety: ["Strong currents - avoid swimming", "Stay hydrated", "Use sunscreen"],
    aiSuggestions: [
      { name: "Kapaleeshwarar Temple", reason: "Less crowded, 20 min away" },
      { name: "Fort St. George", reason: "Cultural alternative, low crowd" }
    ]
  },
  "Meenakshi Amman Temple": {
    image: "https://images.unsplash.com/photo-1692173248120-59547c3d4653?w=1200&q=80",
    description: "The historic Meenakshi Amman Temple is a Hindu temple dedicated to Goddess Meenakshi and Lord Sundareswarar, renowned for its stunning Dravidian architecture.",
    crowdLevel: "High",
    weatherCondition: "Hot & Humid",
    temperature: "32°C",
    status: "Open",
    lastUpdated: "8 minutes ago",
    bestTime: "Early morning (6-9 AM) for peaceful darshan",
    climate: {
      current: "Hot and humid, typical tropical weather",
      forecast: "Continued warmth, prepare for heat"
    },
    rituals: "Dress modestly. Remove footwear before entering. Photography restrictions apply inside the sanctum.",
    safety: ["Dress modestly", "Remove footwear", "Follow queue system"],
    aiSuggestions: [
      { name: "Thirumalai Nayakkar Palace", reason: "Architectural beauty, 50% less crowd" },
      { name: "Gandhi Memorial Museum", reason: "Air-conditioned, peaceful" }
    ]
  },
  "Botanical Gardens": {
    image: "https://images.unsplash.com/photo-1590348883020-651c67946732?w=1200&q=80",
    description: "The Government Botanical Garden in Ooty is a paradise for nature lovers, featuring rare plant species, landscaped gardens, and a fossilized tree trunk.",
    crowdLevel: "Medium",
    weatherCondition: "Pleasant & Cool",
    temperature: "18°C",
    status: "Open",
    lastUpdated: "5 minutes ago",
    bestTime: "10 AM - 4 PM for best sunlight and photography",
    climate: {
      current: "Cool and pleasant, perfect for outdoor activities",
      forecast: "Mild weather expected, slight chance of mist"
    },
    rituals: "No plucking of flowers or plants. Stay on designated paths.",
    safety: ["Wear comfortable shoes", "Carry light jacket", "Stay hydrated"],
    aiSuggestions: [
      { name: "Tea Museum", reason: "Indoor alternative, less walking" },
      { name: "Doddabetta Peak", reason: "Panoramic views, adventure option" }
    ]
  }
};

const alerts = [
  {
    id: 1,
    type: 'weather',
    severity: 'high',
    title: 'Heavy Rainfall Alert',
    location: 'Kodaikanal District',
    message: 'Heavy rainfall expected in hill areas. Road conditions may be affected. Travel with caution.',
    timestamp: '2 hours ago',
    issuer: 'Kodaikanal District Authority'
  },
  {
    id: 2,
    type: 'crowd',
    severity: 'medium',
    title: 'High Crowd Expected',
    location: 'Meenakshi Temple, Madurai',
    message: 'Special festival celebration today. Expect 3x normal crowd. Alternative darshan timings: 6-8 AM.',
    timestamp: '3 hours ago',
    issuer: 'Madurai District Authority'
  },
  {
    id: 3,
    type: 'maintenance',
    severity: 'low',
    title: 'Partial Closure for Maintenance',
    location: 'Botanical Gardens, Ooty',
    message: 'West section closed for landscaping. Main areas remain open. Expected completion: Jan 25.',
    timestamp: '5 hours ago',
    issuer: 'Ooty District Authority'
  },
  {
    id: 4,
    type: 'weather',
    severity: 'medium',
    title: 'Strong Wind Advisory',
    location: 'Marina Beach, Chennai',
    message: 'Strong coastal winds expected. Beach activities may be limited. Swimming not recommended.',
    timestamp: '6 hours ago',
    issuer: 'Chennai District Authority'
  },
  {
    id: 5,
    type: 'info',
    severity: 'low',
    title: 'Extended Hours for Weekend',
    location: 'Fort St. George, Chennai',
    message: 'Special extended hours this weekend (9 AM - 8 PM). Additional guided tours available.',
    timestamp: '12 hours ago',
    issuer: 'Chennai District Authority'
  },
  {
    id: 6,
    type: 'crowd',
    severity: 'high',
    title: 'Extreme Crowd Alert',
    location: 'Rameswaram Temple',
    message: 'Festival crowds at maximum capacity. Entry queue time: 3-4 hours. Consider visiting on weekdays.',
    timestamp: '1 day ago',
    issuer: 'Rameswaram District Authority'
  }
];

const aiResponses = {
  "marina beach": "Marina Beach is currently OPEN with HIGH crowd levels. Weather is clear and sunny at 28°C. Best time to visit would be early morning (5-8 AM) or evening after 5 PM. Safety note: Swimming is not recommended due to strong currents. Would you like me to suggest less crowded beach alternatives?",
  "less crowded": "Based on current data, here are less crowded places in Chennai:\n\n1. Fort St. George - LOW crowd, Open\n2. San Thome Cathedral - LOW crowd, Open\n3. DakshinaChitra Museum - LOW crowd, Open\n\nAll verified by Chennai District Authority 10 minutes ago. Would you like details about any of these?",
  "meenakshi temple": "Meenakshi Amman Temple best visiting times:\n\n🌅 Early Morning (6-9 AM) - Least crowded, peaceful darshan\n⏰ Avoid 11 AM - 2 PM - Peak crowd hours\n🌆 Evening (5-7 PM) - Moderate crowd, beautiful lighting\n\nCurrent status: OPEN, HIGH crowd. Temperature: 32°C. Remember to dress modestly and remove footwear. Photography restricted in sanctum.",
  "ooty weather": "Ooty Weather Forecast (Next 3 days):\n\n📅 Today: Pleasant 18°C, Clear skies\n📅 Tomorrow: Cool 16°C, Light mist morning\n📅 Day 3: 17°C, Partly cloudy\n\nPerfect weather for sightseeing! Pack light jackets for mornings. Botanical Gardens and Ooty Lake are at LOW-MEDIUM crowd levels right now.",
  "family friendly": "Family-friendly places near Madurai:\n\n1. Thirumalai Nayakkar Palace - Historical, spacious, low crowd\n2. Gandhi Memorial Museum - Educational, air-conditioned\n3. Alagar Kovil - Scenic temple, moderate crowd\n4. Vandiyur Mariamman Teppakulam - Peaceful lake, low crowd\n\nAll currently OPEN and safe. Best for families with children!",
  "temples open": "Temples currently OPEN in Tamil Nadu:\n\n✅ Meenakshi Temple, Madurai - HIGH crowd\n✅ Kapaleeshwarar Temple, Chennai - MEDIUM crowd\n✅ Brihadeeswarar Temple, Thanjavur - LOW crowd\n✅ Ramanathaswamy Temple, Rameswaram - MEDIUM crowd\n\nAll verified by respective District Authorities within last 15 minutes."
};
