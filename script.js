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
        { name: "Italy", coords: [41.8719, 12.5674], info: "Travel & Skiing: High performance and discovery." },
        { name: "Spain (Murcia)", coords: [37.9922, -1.1307], info: "3 Months Living, Studying & Working immersion." },
        { name: "Greece", coords: [39.0742, 21.8243], info: "Travel: Island hopping and ancient roots." },
        { name: "Thailand", coords: [15.8700, 100.9925], info: "Solo Travel: Building resilience and agility." },
        { name: "Bali", coords: [-8.4095, 115.1889], info: "Solo Travel: Cultural immersion and self-growth." }
    ];

    // 4. Marker hinzufügen
    locations.forEach(loc => {
        const iconClass = loc.isGoal ? 'custom-div-icon-hawaii' : 'custom-div-icon';
        const customIcon = L.divIcon({
            className: iconClass,
            iconSize: loc.isGoal ? [20, 20] : [12, 12],
            iconAnchor: [6, 6]
        });

        const marker = L.marker(loc.coords, { icon: customIcon }).addTo(map);
        marker.bindPopup(`<div><h4>${loc.name}</h4><p>${loc.info}</p></div>`);
        marker.on('mouseover', function () { this.openPopup(); });
    });

    // --- Hawaii Bucket Slider Logic ---
    let currentHSlide = 0;
    const hSlides = document.querySelectorAll('.h-slide');
    const totalHSlides = hSlides.length;

    function changeHSlide(n) {
        if (totalHSlides === 0) return;
        hSlides[currentHSlide].classList.remove('active');
        currentHSlide = (currentHSlide + n + totalHSlides) % totalHSlides;
        hSlides[currentHSlide].classList.add('active');
    }

    // Expose function to global scope for button clicks
    window.changeHSlide = changeHSlide;

    // Auto-play Slider every 6 seconds
    setInterval(() => changeHSlide(1), 6000);

    // --- Smooth Scroll Fix ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Verhindert den Fehler, wenn targetId nur "#" ist
            if (targetId === "#" || targetId === "") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const nav = document.querySelector('.navbar');
                const offset = nav ? nav.offsetHeight : 80;
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
