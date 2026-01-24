// Data for Tamil Nadu Tourism Website

const districts = [
  {
    name: "Ariyalur",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 5,
    popular: false
  },
  {
    name: "Chengalpattu",
    image: "https://images.unsplash.com/photo-1590766940554-634a1f5eba04?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 8,
    popular: false
  },
  {
    name: "Chennai",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
    crowdLevel: "High",
    weatherSafe: true,
    places: 28,
    popular: true
  },
  {
    name: "Coimbatore",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 15,
    popular: false
  },
  {
    name: "Cuddalore",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 7,
    popular: false
  },
  {
    name: "Dharmapuri",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 6,
    popular: false
  },
  {
    name: "Dindigul",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 8,
    popular: false
  },
  {
    name: "Erode",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 7,
    popular: false
  },
  {
    name: "Kallakurichi",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 4,
    popular: false
  },
  {
    name: "Kanchipuram",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 12,
    popular: true
  },
  {
    name: "Kanyakumari",
    image: "https://images.unsplash.com/photo-1590766940554-634a1f5eba04?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 8,
    popular: true
  },
  {
    name: "Karur",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 5,
    popular: false
  },
  {
    name: "Krishnagiri",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 6,
    popular: false
  },
  {
    name: "Madurai",
    image: "https://images.unsplash.com/photo-1621621696288-66d6f7ce7bb1?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 18,
    popular: true
  },
  {
    name: "Mayiladuthurai",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 6,
    popular: false
  },
  {
    name: "Nagapattinam",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 8,
    popular: false
  },
  {
    name: "Namakkal",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 5,
    popular: false
  },
  {
    name: "Nilgiris",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 12,
    popular: true
  },
  {
    name: "Perambalur",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 3,
    popular: false
  },
  {
    name: "Pudukkottai",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 7,
    popular: false
  },
  {
    name: "Ramanathapuram",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 6,
    popular: true
  },
  {
    name: "Ranipet",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 4,
    popular: false
  },
  {
    name: "Salem",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 10,
    popular: false
  },
  {
    name: "Sivaganga",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 6,
    popular: false
  },
  {
    name: "Tenkasi",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 7,
    popular: false
  },
  {
    name: "Thanjavur",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 14,
    popular: true
  },
  {
    name: "Theni",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 8,
    popular: false
  },
  {
    name: "Thoothukudi",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 6,
    popular: false
  },
  {
    name: "Tiruchirappalli",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 12,
    popular: true
  },
  {
    name: "Tirunelveli",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 9,
    popular: false
  },
  {
    name: "Tirupathur",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 5,
    popular: false
  },
  {
    name: "Tiruppur",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 6,
    popular: false
  },
  {
    name: "Tiruvallur",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 8,
    popular: false
  },
  {
    name: "Tiruvannamalai",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 10,
    popular: true
  },
  {
    name: "Tiruvarur",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 7,
    popular: false
  },
  {
    name: "Vellore",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Medium",
    weatherSafe: true,
    places: 9,
    popular: false
  },
  {
    name: "Viluppuram",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 6,
    popular: false
  },
  {
    name: "Virudhunagar",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    crowdLevel: "Low",
    weatherSafe: true,
    places: 5,
    popular: false
  }
];

const districtData = {
  "Chennai": {
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1621621696288-66d6f7ce7bb1?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1590766940554-634a1f5eba04?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
    description: "Rameswaram is a sacred island town with the famous Ramanathaswamy Temple and the iconic Pamban Bridge.",
    bestSeason: "October to April",
    culture: "Pilgrimage destination, Rama legend, sacred bathing ghats",
    places: [
      { name: "Ramanathaswamy Temple", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Pamban Bridge", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Dhanushkodi", crowd: "Low", weather: "Windy", status: "Open" },
      { name: "Five-Faced Hanuman Temple", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Nilgiris": {
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80",
    description: "Nilgiris, home to Ooty the 'Queen of Hill Stations', offers scenic landscapes, pleasant climate, and colonial charm.",
    bestSeason: "April to June, September to November",
    culture: "British colonial heritage, tea plantations, mountain railways",
    places: [
      { name: "Botanical Gardens", crowd: "Medium", weather: "Pleasant", status: "Open" },
      { name: "Ooty Lake", crowd: "High", weather: "Pleasant", status: "Open" },
      { name: "Doddabetta Peak", crowd: "Low", weather: "Misty", status: "Open" },
      { name: "Tea Museum", crowd: "Low", weather: "Pleasant", status: "Open" }
    ]
  },
  "Dindigul": {
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80",
    description: "Dindigul is famous for its lock-making industry and the majestic Dindigul Rock Fort.",
    bestSeason: "November to February",
    culture: "Lock industry, Kodaikanal gateway, historical forts",
    places: [
      { name: "Dindigul Rock Fort", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Kodaikanal Lake", crowd: "Medium", weather: "Pleasant", status: "Open" },
      { name: "Coaker's Walk", crowd: "Low", weather: "Misty", status: "Open" },
      { name: "Pillar Rocks", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Tiruchirappalli": {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    description: "Tiruchirappalli (Trichy) is known for the famous Rock Fort Temple and the island temples of Srirangam.",
    bestSeason: "November to February",
    culture: "Temple city, Chola heritage, spiritual significance",
    places: [
      { name: "Rockfort Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Sri Ranganathaswamy Temple", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Jambukeswarar Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Kallanai Dam", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Kanchipuram": {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    description: "Kanchipuram, the City of Thousand Temples, is famous for its ancient temples and silk sarees.",
    bestSeason: "November to February",
    culture: "Temple architecture, silk weaving, Pallava heritage",
    places: [
      { name: "Kailasanathar Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Ekambareswarar Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Varadharaja Perumal Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Kanchi Kudil", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Tiruvannamalai": {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    description: "Tiruvannamalai is a major pilgrimage center known for the sacred Arunachaleswarar Temple and Ramana Maharshi Ashram.",
    bestSeason: "November to February",
    culture: "Spiritual center, Girivalam circuit, meditation retreats",
    places: [
      { name: "Arunachaleswarar Temple", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Ramana Maharshi Ashram", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Sathanur Dam", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Virupaksha Cave", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Ramanathapuram": {
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
    description: "Ramanathapuram is known for its historical significance and traditional Chettinad culture.",
    bestSeason: "October to March",
    culture: "Sethupathy heritage, coastal traditions, historical palaces",
    places: [
      { name: "Ramanathapuram Palace", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Uthrakosamangai Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Ervadi Dargah", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Kunthukal Beach", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Salem": {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    description: "Salem is known for its steel industry, mango orchards, and the scenic Yercaud hill station.",
    bestSeason: "October to March",
    culture: "Steel city, agricultural hub, Yercaud gateway",
    places: [
      { name: "Yercaud Lake", crowd: "Medium", weather: "Pleasant", status: "Open" },
      { name: "Kiliyur Falls", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Sugavaneswarar Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Mettur Dam", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Vellore": {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    description: "Vellore is famous for its magnificent Vellore Fort and the golden temple at Sripuram.",
    bestSeason: "October to March",
    culture: "Historical fort, medical hub, religious significance",
    places: [
      { name: "Vellore Fort", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Sripuram Golden Temple", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Jalakandeswarar Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Amirthi Forest", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Erode": {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    description: "Erode is known for its textile industry and the famous Bhavani Sangameshwarar Temple.",
    bestSeason: "October to March",
    culture: "Textile hub, turmeric market, Periyar birthplace",
    places: [
      { name: "Bhavani Sangameshwarar Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Bannari Amman Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Kodiveri Dam", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Periyar Memorial", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Tirunelveli": {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    description: "Tirunelveli is known for its Nellaiappar Temple and delicious halwa.",
    bestSeason: "October to March",
    culture: "Temple city, halwa fame, Pandya heritage",
    places: [
      { name: "Nellaiappar Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Courtallam Falls", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Krishnapuram Palace", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Manjolai Hills", crowd: "Low", weather: "Pleasant", status: "Open" }
    ]
  },
  "Thoothukudi": {
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
    description: "Thoothukudi (Tuticorin) is a major port city known for its salt pans and pearl diving history.",
    bestSeason: "October to March",
    culture: "Port city, salt industry, maritime heritage",
    places: [
      { name: "Our Lady of Snows Cathedral", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Kalugumalai", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Tiruchendur Temple", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Korkai Beach", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Cuddalore": {
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
    description: "Cuddalore is known for its ancient temples and beautiful beaches along the Coromandel Coast.",
    bestSeason: "October to March",
    culture: "French colonial history, coastal heritage, temples",
    places: [
      { name: "Pichavaram Mangrove Forest", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Silver Beach", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Sattanathapuram Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Devanampattinam Beach", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Nagapattinam": {
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
    description: "Nagapattinam is an ancient port town known for its Buddhist heritage and Nagore Dargah.",
    bestSeason: "October to March",
    culture: "Buddhist history, Chola port, religious harmony",
    places: [
      { name: "Nagore Dargah", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Velankanni Church", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Kayarohanaswami Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Nagapattinam Beach", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Krishnagiri": {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    description: "Krishnagiri is known for its mango orchards, silk farms, and the Krishnagiri Dam.",
    bestSeason: "October to March",
    culture: "Mango hub, granite industry, historical forts",
    places: [
      { name: "Krishnagiri Dam", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "KRP Dam", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Krishnagiri Fort", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Rayakottai Fort", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Dharmapuri": {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    description: "Dharmapuri is known for its historical sites and the scenic Hogenakkal Falls.",
    bestSeason: "July to January",
    culture: "Historical significance, Hogenakkal fame, agricultural hub",
    places: [
      { name: "Hogenakkal Falls", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Theerthamalai Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Dharmapuri Fort", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Peyar Dam", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Theni": {
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80",
    description: "Theni is known for its cardamom plantations and as a gateway to the Western Ghats.",
    bestSeason: "October to March",
    culture: "Spice cultivation, hill station gateway, tribal heritage",
    places: [
      { name: "Meghamalai", crowd: "Low", weather: "Pleasant", status: "Open" },
      { name: "Suruli Falls", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Vaigai Dam", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "High Wavys", crowd: "Low", weather: "Pleasant", status: "Open" }
    ]
  },
  "Sivaganga": {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    description: "Sivaganga is known for its rich history of the Marudhu Pandiyar brothers and Chettinad mansions.",
    bestSeason: "October to March",
    culture: "Chettinad heritage, freedom fighter history, temples",
    places: [
      { name: "Chettinad Palace", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Kalaiyar Koil", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Marudhu Pandiyar Memorial", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Pillayarpatti Temple", crowd: "Medium", weather: "Clear", status: "Open" }
    ]
  },
  "Pudukkottai": {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    description: "Pudukkottai is known for its medieval temples and the Pudukkottai Palace.",
    bestSeason: "October to March",
    culture: "Tondaiman heritage, medieval temples, rock-cut caves",
    places: [
      { name: "Sittannavasal Cave", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Thirumayam Fort", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Kudumiyanmalai", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Pudukkottai Museum", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Virudhunagar": {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    description: "Virudhunagar is known for its industrial activity and proximity to important temples.",
    bestSeason: "October to March",
    culture: "Commercial hub, fireworks industry, textile trade",
    places: [
      { name: "Krishnapuram Palace", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Tiruchuli Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Sattur", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Aruppukkottai Temples", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Tenkasi": {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    description: "Tenkasi is known as the 'Kasi of South' with the famous Courtallam Falls nearby.",
    bestSeason: "June to September",
    culture: "Temple town, Courtallam waterfalls, Pandya heritage",
    places: [
      { name: "Courtallam Main Falls", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Kasi Viswanathar Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Five Falls", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Tiger Falls", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Namakkal": {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    description: "Namakkal is known for its rock fort and as the lorry hub of South India.",
    bestSeason: "October to March",
    culture: "Transport hub, poultry industry, rock temples",
    places: [
      { name: "Namakkal Rock Fort", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Tiruchengode Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Kolli Hills", crowd: "Low", weather: "Pleasant", status: "Open" },
      { name: "Anjaneyar Temple", crowd: "Medium", weather: "Clear", status: "Open" }
    ]
  },
  "Karur": {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    description: "Karur is known for its textile industry and ancient temples on the banks of River Amaravathi.",
    bestSeason: "October to March",
    culture: "Textile hub, Chola temples, river heritage",
    places: [
      { name: "Pasupatheswarar Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Kalyana Pasupatheswarar Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Thanthondrimalai", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Venganur Lake", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Ariyalur": {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    description: "Ariyalur is known for its Chola temples and cement industry.",
    bestSeason: "October to March",
    culture: "Chola heritage, cement hub, agricultural traditions",
    places: [
      { name: "Gangaikondacholapuram", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Udayarpalayam Palace", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Vikramangalam Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Jayankondam Temple", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Perambalur": {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    description: "Perambalur is known for its archaeological sites and ancient temples.",
    bestSeason: "October to March",
    culture: "Archaeological heritage, agricultural hub, ancient temples",
    places: [
      { name: "Labbaikudikadu Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Kurumbalur Fort", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Perambalur Temple", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Chengalpattu": {
    image: "https://images.unsplash.com/photo-1590766940554-634a1f5eba04?w=1200&q=80",
    description: "Chengalpattu is known for its Vedanthangal Bird Sanctuary and Mahabalipuram monuments.",
    bestSeason: "October to March",
    culture: "Pallava heritage, bird sanctuary, coastal temples",
    places: [
      { name: "Mahabalipuram", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Vedanthangal Bird Sanctuary", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Crocodile Bank", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Chengalpattu Fort", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Tiruvallur": {
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
    description: "Tiruvallur is known for its Veeraraghava Temple and proximity to Chennai.",
    bestSeason: "October to March",
    culture: "Temple town, industrial area, Chennai suburb",
    places: [
      { name: "Veeraraghava Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Pulicat Lake", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Thiruthani Temple", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Poondi Dam", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Viluppuram": {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    description: "Viluppuram is known for its historical sites and Gingee Fort.",
    bestSeason: "October to March",
    culture: "Historical forts, French influence, agricultural hub",
    places: [
      { name: "Gingee Fort", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Auroville", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Thirukovilur Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Mailam Temple", crowd: "Medium", weather: "Clear", status: "Open" }
    ]
  },
  "Kallakurichi": {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    description: "Kallakurichi is known for its agricultural traditions and scenic hills.",
    bestSeason: "October to March",
    culture: "Agricultural hub, scenic landscapes, village traditions",
    places: [
      { name: "Gomukhi Dam", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Ullundurpet Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Kalvarayan Hills", crowd: "Low", weather: "Pleasant", status: "Open" },
      { name: "Sankarapuram Temple", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Tirupathur": {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    description: "Tirupathur is known for its temples and scenic Javadi Hills.",
    bestSeason: "October to March",
    culture: "Temple town, hill station gateway, agricultural area",
    places: [
      { name: "Yelagiri Hills", crowd: "Medium", weather: "Pleasant", status: "Open" },
      { name: "Tirupathur Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Javadi Hills", crowd: "Low", weather: "Pleasant", status: "Open" },
      { name: "Punganur Lake", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Ranipet": {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    description: "Ranipet is known for its leather industry and historical sites.",
    bestSeason: "October to March",
    culture: "Leather industry, historical significance, temple town",
    places: [
      { name: "Ranipet Fort", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Walajapet Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Arcot", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Sholingur Temple", crowd: "Medium", weather: "Clear", status: "Open" }
    ]
  },
  "Tiruppur": {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    description: "Tiruppur is known as the Knitwear Capital of India.",
    bestSeason: "October to March",
    culture: "Textile hub, industrial city, export center",
    places: [
      { name: "Amaravathi Dam", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Tiruppur Temple", crowd: "Low", weather: "Clear", status: "Open" },
      { name: "Avinashi Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Kongu Nadu Heritage", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Mayiladuthurai": {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    description: "Mayiladuthurai is known for its ancient temples dedicated to Lord Shiva.",
    bestSeason: "October to March",
    culture: "Chola temples, Cauvery delta, spiritual significance",
    places: [
      { name: "Mayuranathaswami Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Thirukkadaiyur Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Vaitheeswaran Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Sirkali Thoniappar Temple", crowd: "Low", weather: "Clear", status: "Open" }
    ]
  },
  "Tiruvarur": {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
    description: "Tiruvarur is known for its Thyagarajar Temple and Carnatic music traditions.",
    bestSeason: "October to March",
    culture: "Carnatic music heritage, Chola temples, cultural festivals",
    places: [
      { name: "Thyagarajar Temple", crowd: "Medium", weather: "Clear", status: "Open" },
      { name: "Thirunallar Temple", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Tyagaraja Festival", crowd: "High", weather: "Clear", status: "Open" },
      { name: "Mannargudi Temple", crowd: "Medium", weather: "Clear", status: "Open" }
    ]
  }
};

const placeData = {
  "Marina Beach": {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1621621696288-66d6f7ce7bb1?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80",
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
