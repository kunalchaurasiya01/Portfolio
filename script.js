// Custom JavaScript for Kunal Chaurasiya's Portfolio

// Project Data
const projects = [
    {
        id: "ai-chatbot",
        title: "Generative AI Chatbot",
        category: "python",
        tech: ["Python", "NLP", "Generative AI", "APIs"],
        image: "assets/projects/ai_chatbot.png",
        shortDesc: "Intelligent, context-aware chatbot powered by generative Large Language Models for seamless conversational interactions.",
        longDesc: "A complete AI conversational interface developed in Python. Utilizes natural language processing interfaces to build an dynamic dialogue system. Implements local state caching for persistent user memory, custom glassmorphism web layout styling, and an API manager adapter that securely connects to state-of-the-art Generative AI backend servers with robust timeout fallbacks.",
        features: [
            "Contextual session memory cache for organic conversations",
            "Multi-provider API server integration adapters",
            "Elegant dark theme message layout with loading status",
            "Integrated markdown response renderer and formatting"
        ],
        github: "https://github.com/kunalchaurasiya01/AI-Chatbot"
    },
    {
        id: "traffic-system",
        title: "Optimized Traffic Control System",
        category: "python",
        tech: ["Python", "OpenCV", "Haar Classifiers", "AI"],
        image: "assets/projects/traffic_system.png",
        shortDesc: "Computer-vision powered smart traffic management system that optimizes signal timing based on real-time vehicle density.",
        longDesc: "A smart city solution developed to tackle urban congestion. Using Python, OpenCV, and custom Haar cascade classifiers, the system processes camera video feeds in real-time to count vehicles on each junction road. It then dynamically calculates and adapts green light intervals based on current vehicle density, ensuring optimal traffic throughput. The architecture is fully scalable to handle multi-junction grids with complex directional flows.",
        features: [
            "Real-time object detection and density counting",
            "Dynamic signal timer adjustment algorithm",
            "Multi-junction traffic flow coordination logic",
            "Scalable design support for CCTV/mobile inputs"
        ],
        github: "https://github.com/kunalchaurasiya01/Optimized-Traffic-Control-System"
    },
    {
        id: "ultraedit-clone",
        title: "UltraEdit Site Clone",
        category: "web",
        tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
        image: "assets/projects/ultraedit_clone.png",
        shortDesc: "A responsive, pixel-perfect frontend clone of the official UltraEdit landing page and download portal.",
        longDesc: "Recreated the complete layout of the UltraEdit homepage to hone advanced CSS styling techniques. Features a fully adaptive layout using CSS Grid and Flexbox, dropdown-heavy responsive navigation bar that collapses neatly on mobile viewports, and custom icon assets. Focused heavily on high-end transitions, hover animations, and cross-browser consistency.",
        features: [
            "Fully responsive multi-tier navigation layout",
            "Grid-based layout for product and platform downloads",
            "Optimized SVG graphics and clean typography hierarchy",
            "Identical replication of visual colors and sizing"
        ],
        github: "https://github.com/kunalchaurasiya01/UltraEdit-Clone"
    },
    {
        id: "music-player",
        title: "Web Music Player",
        category: "web",
        tech: ["HTML5", "CSS3", "JavaScript (ES6)"],
        image: "assets/projects/music_player.png",
        shortDesc: "Feature-rich web music player with customized backgrounds, playlist controls, and progress tracking.",
        longDesc: "Developed a core client-side audio player application that provides full playlist management. Features standard media control actions (play, pause, skip, previous, track selection) synchronized with a custom seek bar showing song progress. The interface displays dynamic background elements matched to the currently playing artist, creating an immersive media experience.",
        features: [
            "Interactive playlist controls & media engine sync",
            "Custom-themed fluid glassmorphic interface UI",
            "Responsive design working on desktops and mobile devices",
            "Dynamic visual artist-themed backdrop layouts"
        ],
        github: "https://github.com/kunalchaurasiya01/Music-Player"
    },
    {
        id: "quiz-app",
        title: "Flutter Quiz App",
        category: "mobile",
        tech: ["Flutter", "Dart", "Android SDK"],
        image: "assets/projects/quiz_app.png",
        shortDesc: "High-performance cross-platform mobile trivia application with real-time timers and performance scoring.",
        longDesc: "Built a fully compiled mobile quiz application using Flutter. The app features state-driven timers for each question, options to review and skip questions during the quiz, and an interactive results page that aggregates user scores and gives a performance review. Highly optimized for 60FPS fluid screen transitions and responsive grid structures.",
        features: [
            "Countdown timer with local state tracking",
            "Skip, review, and bookmark questions utility",
            "Interactive results and scorecard page",
            "Clean material-design UI elements with custom theme"
        ],
        github: "https://github.com/kunalchaurasiya01/Quiz-App"
    },
    {
        id: "simple-calculator",
        title: "Simple Calculator",
        category: "web",
        tech: ["HTML5", "CSS3", "JavaScript (ES6)"],
        image: "assets/projects/simple_calculator.png",
        shortDesc: "A beautiful, premium glassmorphic calculator with full basic arithmetic and keyboard tracking inputs.",
        longDesc: "Designed and engineered a client-side browser calculator focusing on fluid layouts and interactive interface states. Built a clean glassmorphism UI styled in CSS. Handles core arithmetic processing, decibel operators, screen clear functions, and captures keyboard listener bindings for desktop accessibility.",
        features: [
            "Complete core mathematical evaluation engine",
            "Interactive glassmorphism buttons with key scale shifts",
            "Responsive desktop and mobile keypad grid grids",
            "Integrated keyboard typing triggers for numbers & operators"
        ],
        github: "https://github.com/kunalchaurasiya01/Simple-Calculator"
    },
    {
        id: "image-gallery",
        title: "Responsive Image Gallery",
        category: "web",
        tech: ["HTML5", "CSS3", "JavaScript (ES6)"],
        image: "assets/projects/image_gallery.png",
        shortDesc: "Responsive masonry grid image directory featuring dynamic categories and modal lightbox previews.",
        longDesc: "Developed a sleek web photo gallery that maps catalog files into a responsive masonry-based grid structure. Employs clean vanilla JS filters to sort and search gallery listings on-the-fly. Hover states prompt image metadata overlays, and clicking slides trigger a smooth, full-page media lightbox display.",
        features: [
            "Zero-latency gallery item sorting category tabs",
            "Adaptive CSS-Grid masonry layout structure",
            "Overlay caption cards on mouse cursor hover states",
            "Interactive full screen lightbox photo viewer frame"
        ],
        github: "https://github.com/kunalchaurasiya01/Image-Gallery"
    }
];

// Certificate Data
const certificates = [
    {
        title: "Smart India Hackathon 2025",
        category: "tech",
        issuer: "ANDC College (SIH internal)",
        date: "2025",
        desc: "Received official recognition during college hackathon trials for building a working prototype to solve a specified socio-economic problem statement.",
        image: "assets/certificates/Kunal Chaurasiya- SIH.jpg"
    },
    {
        title: "HackLoop 2025 Hackathon",
        category: "tech",
        issuer: "HackLoop Competitive Arena",
        date: "2025",
        desc: "Participated and excelled in algorithmic problem solving, coding solutions under time pressure, and team hackathon pipelines.",
        image: "assets/certificates/Kunal Chaurasiya HACKLOOP.jpg"
    },
    {
        title: "Cricket Men's Captaincy",
        category: "creative",
        issuer: "B.Sc. Physical Science with CS (ANDC)",
        date: "2024 - 2025",
        desc: "Led the official Physical Science with Computer Science department cricket squad, managing team logistics, game tactics, training schedules, and sports coordination.",
        image: "assets/certificates/Cricket.jpg"
    },
    {
        title: "Cricket Men's Runner-up",
        category: "creative",
        issuer: "Fit India ANDC Sports Tournament",
        date: "2023 - 2024",
        desc: "Secured second place in the annual inter-college sports tournament, contributing as team batting all-rounder and strategist.",
        image: "assets/certificates/Cricket.jpg"
    },
    {
        title: "Discipline Committee Member",
        category: "leadership",
        issuer: "Leiothrixx '26 Annual Fest",
        date: "2026",
        desc: "Selected as a student coordinator in the central regulatory committee, ensuring campus safety, entrance crowds logs, and VIP management.",
        image: "assets/certificates/Kunal Chaurasiya DC.png"
    },
    {
        title: "Event Coordinator - Leiothrixx '26",
        category: "leadership",
        issuer: "Leiothrixx '26 Annual Fest, ANDC",
        date: "2025",
        desc: "Recognized as Event Coordinator for successfully organizing Leiothrixx'26, the Annual Cultural Festival of Acharya Narendra Dev College, University of Delhi.",
        image: "assets/certificates/Kunal Chaurasiya EC.png"
    },
    {
        title: "Hackzzle Event Coordinator",
        category: "leadership",
        issuer: "Turing Society (Overload++ '25)",
        date: "2025",
        desc: "Headed logistics, event setup, registration tracks, and coordinate communications for the flagship annual tech festival.",
        image: "assets/certificates/Hackzzle.jpg"
    },
    {
        title: "Turing Society Appreciation",
        category: "creative",
        issuer: "Turing Society (Overload++ '25)",
        date: "2025",
        desc: "Honored with recognition for outstanding creative efforts in photography during Overload++",
        image: "assets/certificates/Kunal turing.jpg"
    },
    {
        title: "Introduction to Flutter",
        category: "tech",
        issuer: "Simplilearn SkillUP",
        date: "April 2025",
        desc: "Completed professional online certification course covering mobile app architecture, widget trees, custom layout rendering, and cross-platform native compilation.",
        image: "assets/certificates/Flutter certificate.jpg"
    },
    {
        title: "Cloud Computing Workshop",
        category: "tech",
        issuer: "Acharya Narendra Dev College, DU",
        date: "Feb 2025",
        desc: "Successfully completed a technical workshop on cloud infrastructures, covering virtualization, AWS server deployments, and scaling concepts.",
        image: "assets/certificates/Cloud computing.jpg"
    },
    {
        title: "Fiber Vision '25 Workshop",
        category: "creative",
        issuer: "National Workshop on Fiber Optics",
        date: "2025",
        desc: "Honored with recognition for outstanding creative efforts in photography and videography during the national-level scientific event.",
        image: "assets/certificates/PICFIE SPIE.png"
    },
    {
        title: "Skill Quest Certificate",
        category: "tech",
        issuer: "Simplilearn SkillUP",
        date: "2025",
        desc: "Earned for active participation and demonstrating coding skills during the department's Skill Quest coding challenge.",
        image: "assets/certificates/Skill Quest.jpg"
    }
];


// Typings for Hero Title
const typingPhrases = [
    "Frontend Developer",
    "Web Designer",
    "Computer Science Student",
    "Tech Researcher",
    "Cricket Captain"
];

// Initialize DOM elements
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Icons
    lucide.createIcons();

    // 2. Interactive Cursor Glow
    const cursor = document.getElementById("cursor-glow");
    window.addEventListener("mousemove", (e) => {
        cursor.style.setProperty("--mouse-x", `${e.clientX}px`);
        cursor.style.setProperty("--mouse-y", `${e.clientY}px`);
    });

    // 3. Theme Toggle (Defaults to Dark Mode)
    const themeToggleBtn = document.getElementById("theme-toggle");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");

    // Retrieve or set initial class
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "light") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
    } else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    }

    themeToggleBtn.addEventListener("click", () => {
        if (document.documentElement.classList.contains("light")) {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            sunIcon.classList.add("hidden");
            moonIcon.classList.remove("hidden");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
            sunIcon.classList.remove("hidden");
            moonIcon.classList.add("hidden");
        }
    });

    // 4. Sticky Navbar Scroll styling
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 5. Mobile Nav Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });

    // 6. Typist Animation Effect
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpan = document.getElementById("typing-text");

    function typeEffect() {
        const currentPhrase = typingPhrases[phraseIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingSpan.textContent = currentPhrase.substring(0, charIndex);

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 1500; // Pause at end of text
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % typingPhrases.length;
            typeSpeed = 300; // Small delay before next word
        }

        setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();

    // 7. Render Projects & Grid Dynamic Updates
    const projectsGrid = document.getElementById("projects-grid");
    const searchInput = document.getElementById("project-search");
    const projectTabs = document.querySelectorAll(".project-tab");
    let activeProjectCategory = "all";

    function renderProjects() {
        projectsGrid.innerHTML = "";
        const searchWord = searchInput.value.toLowerCase();

        const filtered = projects.filter(p => {
            const matchesCat = (activeProjectCategory === "all" || p.category === activeProjectCategory);
            const matchesSearch = p.title.toLowerCase().includes(searchWord) ||
                p.tech.some(t => t.toLowerCase().includes(searchWord)) ||
                p.shortDesc.toLowerCase().includes(searchWord);
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            projectsGrid.innerHTML = `
                <div class="col-span-1 md:col-span-2 text-center py-12 text-slate-500">
                    <i data-lucide="info" class="w-8 h-8 mx-auto mb-2 text-slate-400"></i>
                    <p class="font-medium text-sm">No matching projects found.</p>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement("div");
            card.className = "group relative rounded-2xl bg-white border border-slate-200 dark:bg-darkCard dark:border-white/10 overflow-hidden shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full";

            // Build card contents
            card.innerHTML = `
                <div class="h-48 overflow-hidden relative">
                    <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                    <span class="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/90 text-accentCyan border border-accentCyan/20">
                        ${p.category}
                    </span>
                </div>
                <div class="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div class="space-y-2">
                        <h3 class="text-lg font-heading font-extrabold text-slate-900 dark:text-white group-hover:text-accentPrimary transition-colors">${p.title}</h3>
                        <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3">${p.shortDesc}</p>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="flex flex-wrap gap-1.5">
                            ${p.tech.map(t => `<span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300">${t}</span>`).join('')}
                        </div>
                        
                        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/5">
                            <button class="learn-more-btn flex items-center space-x-1.5 text-xs font-bold text-accentCyan hover:text-accentPrimary transition-colors uppercase tracking-wider cursor-pointer" data-id="${p.id}">
                                <span>Learn More</span>
                                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                            </button>
                            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-white/10 dark:hover:text-white text-slate-400 transition-all" aria-label="GitHub Repository">
                                <i data-lucide="github" class="w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });

        // Re-init icons inside card
        lucide.createIcons();

        // Bind learn more actions
        document.querySelectorAll(".learn-more-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                openProjectModal(id);
            });
        });
    }

    // Projects category tab actions
    projectTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            projectTabs.forEach(t => {
                t.className = "project-tab px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-slate-100 text-slate-600 dark:hover:bg-white/10 dark:text-slate-300 transition-all cursor-pointer";
            });
            tab.className = "project-tab px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-accentPrimary text-white shadow-md transition-all cursor-pointer";
            activeProjectCategory = tab.getAttribute("data-category");
            renderProjects();
        });
    });

    // Search events
    searchInput.addEventListener("input", renderProjects);

    // Initial Render
    renderProjects();

    // 8. Render Certificates & Filter Actions
    const certsGrid = document.getElementById("certificates-grid");
    const certTabs = document.querySelectorAll(".cert-tab");
    let activeCertCategory = "all";

    function renderCertificates() {
        certsGrid.innerHTML = "";

        const filtered = certificates.filter(c => {
            return activeCertCategory === "all" || c.category === activeCertCategory;
        });

        filtered.forEach(c => {
            const card = document.createElement("div");
            card.className = "p-6 rounded-2xl bg-white border border-slate-200 dark:bg-darkCard dark:border-white/10 shadow-xl hover:border-accentSecondary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full";

            let iconMarkup = "";
            let accentBorder = "border-accentSecondary/10";
            if (c.category === "tech") {
                iconMarkup = `<i data-lucide="shield-check" class="w-6 h-6 text-accentCyan"></i>`;
                accentBorder = "border-accentCyan/20";
            } else if (c.category === "leadership") {
                iconMarkup = `<i data-lucide="users" class="w-6 h-6 text-accentPrimary"></i>`;
                accentBorder = "border-accentPrimary/20";
            } else {
                iconMarkup = `<i data-lucide="camera" class="w-6 h-6 text-accentSecondary"></i>`;
                accentBorder = "border-accentSecondary/20";
            }

            card.innerHTML = `
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5">
                            ${iconMarkup}
                        </div>
                        <span class="text-[10px] font-bold tracking-wider text-slate-500 uppercase">${c.date}</span>
                    </div>
                    
                    <div class="space-y-2">
                        <h3 class="text-base font-bold text-slate-900 dark:text-white">${c.title}</h3>
                        <p class="text-xs font-semibold text-accentSecondary">${c.issuer}</p>
                        <p class="text-xs text-slate-600 dark:text-slate-400">${c.desc}</p>
                    </div>
                </div>
                
                <div class="pt-4 mt-4 border-t border-slate-150 dark:border-white/5 flex justify-end">
                    <button class="view-cert-btn text-xs font-bold text-accentSecondary hover:text-accentPrimary transition-colors flex items-center space-x-1 uppercase tracking-wider cursor-pointer" data-title="${c.title}" data-issuer="${c.issuer}" data-date="${c.date}" data-desc="${c.desc}" data-cat="${c.category}" data-image="${c.image}">
                        <span>Details</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            `;
            certsGrid.appendChild(card);
        });

        lucide.createIcons();

        // Bind cert modal actions
        document.querySelectorAll(".view-cert-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const data = {
                    title: btn.getAttribute("data-title"),
                    issuer: btn.getAttribute("data-issuer"),
                    date: btn.getAttribute("data-date"),
                    desc: btn.getAttribute("data-desc"),
                    category: btn.getAttribute("data-cat"),
                    image: btn.getAttribute("data-image")
                };
                openCertModal(data);
            });
        });
    }

    certTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            certTabs.forEach(t => {
                t.className = "cert-tab px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-slate-100 text-slate-600 dark:hover:bg-white/10 dark:text-slate-300 transition-all cursor-pointer";
            });
            tab.className = "cert-tab px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-accentSecondary text-white transition-all cursor-pointer";
            activeCertCategory = tab.getAttribute("data-category");
            renderCertificates();
        });
    });

    renderCertificates();

    // 9. Modal Open/Close Controls
    const modal = document.getElementById("detail-modal");
    const modalContent = document.getElementById("modal-content");
    const modalClose = document.getElementById("modal-close");

    function closeModal() {
        modal.classList.add("opacity-0");
        modal.classList.add("pointer-events-none");
        document.body.classList.remove("overflow-hidden");
    }

    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    function showModal() {
        modal.classList.remove("opacity-0");
        modal.classList.remove("pointer-events-none");
        document.body.classList.add("overflow-hidden");
    }

    // Project Details Modal builder
    function openProjectModal(id) {
        const p = projects.find(item => item.id === id);
        if (!p) return;

        modalContent.innerHTML = `
            <div class="space-y-6 pt-4">
                <div class="rounded-xl overflow-hidden max-h-72 border border-slate-200 dark:border-white/10">
                    <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
                </div>
                <div class="space-y-2">
                    <h2 class="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">${p.title}</h2>
                    <div class="flex flex-wrap gap-2 pt-1">
                        ${p.tech.map(t => `<span class="text-xs px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-300 text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-slate-200 font-semibold">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="space-y-4">
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-wider text-accentCyan mb-2">Description</h4>
                        <p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300">${p.longDesc}</p>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-wider text-accentCyan mb-2">Key Accomplishments</h4>
                        <ul class="list-disc list-inside space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            ${p.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="flex items-center space-x-4 pt-4 border-t border-slate-100 dark:border-white/5">
                    <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accentPrimary to-accentSecondary text-xs font-bold uppercase tracking-wider text-white shadow-md">
                        <i data-lucide="github" class="w-4 h-4"></i>
                        <span>View Source Code</span>
                    </a>
                </div>
            </div>
        `;
        lucide.createIcons();
        showModal();
    }

    // Certificate Details Modal builder
    function openCertModal(c) {
        modalContent.innerHTML = `
            <div class="space-y-6 pt-4">
                <!-- Visual Certificate Frame -->
                <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg relative bg-slate-950 flex items-center justify-center max-h-[380px] group">
                    <img src="${c.image}" alt="${c.title}" class="w-full h-full object-contain max-h-[380px] transition-transform duration-300 group-hover:scale-[1.02]">
                    <div class="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <a href="${c.image}" target="_blank" class="px-5 py-2.5 rounded-full bg-white/95 text-slate-900 font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                            <span>View Full Size</span>
                        </a>
                    </div>
                </div>

                <div class="space-y-2">
                    <h2 class="text-2xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">${c.title}</h2>
                    <div class="flex items-center space-x-2 text-sm">
                        <span class="font-bold text-accentSecondary">${c.issuer}</span>
                        <span class="text-slate-400 dark:text-slate-500">•</span>
                        <span class="text-slate-500 dark:text-slate-400 font-medium">${c.date}</span>
                    </div>
                </div>

                <div class="space-y-4">
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-wider text-accentSecondary mb-2">Description & Scope</h4>
                        <p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300">${c.desc}</p>
                    </div>
                    
                    <div class="p-4.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10 space-y-2.5">
                        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">Verifiable Attributes</h4>
                        <div class="grid grid-cols-2 gap-4 text-xs">
                            <div>
                                <span class="block text-slate-500 font-medium">Recipient</span>
                                <span class="font-bold text-slate-900 dark:text-white">Kunal Chaurasiya</span>
                            </div>
                            <div>
                                <span class="block text-slate-500 font-medium">Institution</span>
                                <span class="font-bold text-slate-900 dark:text-white">${c.issuer}</span>
                            </div>
                            <div>
                                <span class="block text-slate-500 font-medium">Academic Context</span>
                                <span class="font-bold text-slate-900 dark:text-white">DU Undergraduate CS</span>
                            </div>
                            <div>
                                <span class="block text-slate-500 font-medium">Certificate ID</span>
                                <span class="font-bold text-accentCyan">DU-KC-${c.date.replace(/[^A-Za-z0-9]/g, '')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end pt-4 border-t border-slate-100 dark:border-white/5 space-x-3">
                    <button class="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 dark:bg-white/5 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-all cursor-pointer" onclick="window.print()">
                        Print Credentials
                    </button>
                    <a href="${c.image}" target="_blank" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accentPrimary to-accentSecondary hover:shadow-md transition-all text-xs font-bold uppercase tracking-wider text-white flex items-center space-x-1.5">
                        <i data-lucide="download" class="w-3.5 h-3.5"></i>
                        <span>Download Image</span>
                    </a>
                </div>
            </div>
        `;
        lucide.createIcons();
        showModal();
    }

    // 10. Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Stop observing once animated to prevent flickering
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 11. Contact Form Controller
    const contactForm = document.getElementById("contact-form");
    const formSubmitBtn = document.getElementById("form-submit");
    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Show Loading State
        formSubmitBtn.disabled = true;
        formSubmitBtn.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Sending message...</span>
        `;

        // Simulate local submission handling
        setTimeout(() => {
            formStatus.className = "text-sm text-center p-3.5 rounded-xl bg-accentCyan/10 border border-accentCyan/20 text-accentCyan";
            formStatus.textContent = "Message sent successfully! Thank you for reaching out, Kunal will respond shortly.";
            formStatus.classList.remove("hidden");

            // Reset submit button and fields
            formSubmitBtn.disabled = false;
            formSubmitBtn.innerHTML = `
                <i data-lucide="send" class="w-4 h-4"></i>
                <span>Send Message</span>
            `;
            lucide.createIcons();
            contactForm.reset();

            // Clear status after 6 seconds
            setTimeout(() => {
                formStatus.classList.add("hidden");
            }, 6000);
        }, 1500);
    });
});
