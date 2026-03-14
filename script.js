document.addEventListener('DOMContentLoaded', () => {
    // 1. Karte initialisieren
    const map = L.map('map-container').setView([25, 0], 2.5);

    // 2. TileLayer hinzufügen (Minimalistisches Design)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // 3. Standorte definieren (Exakte Koordinaten)
    const locations = [
        { name: "Canada (Toronto)", coords: [43.6532, -79.3832], info: "Travel: Exploring the North and vast nature." },
        { name: "New York", coords: [40.7128, -74.0060], info: "Business English Studies & Digital Marketing Insights." },
        { name: "Florida", coords: [27.6648, -81.5158], info: "Travel: Sunshine State explorations." },
        { name: "Hawaii (HPU)", coords: [21.3069, -157.8583], info: "THE GOAL: Merging Digital Management with Aloha Spirit.", isGoal: true },
        { name: "Iceland", coords: [64.9631, -19.0208], info: "Nordic Sales Summit (Working)." },
        { name: "Stockholm", coords: [59.3293, 18.0686], info: "Working with Nordic Business Partners." },
        { name: "London", coords: [51.5074, -0.1278], info: "Language Trip: Deepening English skills." },
        { name: "Netherlands", coords: [52.1326, 5.2913], info: "Working in Marketing & Sales." },
        { name: "Antwerp", coords: [51.2194, 4.4025], info: "Work - Living Contrasts Tour." },
        { name: "Zurich", coords: [47.3769, 8.5417], info: "Work - Living Contrasts Tour." },
        { name: "Austria", coords: [47.5162, 14.5501], info: "Skiing: Passion for Performance & Sports." },
        { name: "Lyon", coords: [45.7640, 4.8357], info: "Work - Living Contrasts Tour." },
