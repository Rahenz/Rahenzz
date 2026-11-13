/**
 * BLUE SPEED — SYAHLA'S GARAGE
 * Interaksi intro, navigasi, kursor khusus, dan musik latar.
 */

document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        intro: document.getElementById("intro"),
        garageDoor: document.getElementById("garageDoor"),
        introCar: document.querySelector(".intro-car"),
        progressBar: document.getElementById("progressBar"),
        progressText: document.getElementById("progressText"),
        progressTrack: document.getElementById("progressTrack"),
        loadingCopy: document.getElementById("loadingCopy"),
        startButton: document.getElementById("startEngine"),
        skipButton: document.getElementById("skipIntro"),
        year: document.getElementById("year"),
        menuToggle: document.getElementById("menuToggle"),
        navigation: document.getElementById("nav"),
        cursor: document.getElementById("customCursor"),
        music: document.getElementById("garageMusic"),
        musicToggle: document.getElementById("musicToggle")
    };

    const loadingSteps = [
        [8, "CHECKING GARAGE SYSTEM..."],
        [24, "OPENING GARAGE DOOR..."],
        [52, "STARTING THE ENGINE..."],
        [78, "READY TO ROLL..."],
        [100, "GARAGE READY."]
    ];

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    let progress = 0;
    let currentStep = 0;
    let loadingTimer = null;
    let hasEnteredSite = false;

    // Tahun pada footer selalu mengikuti tahun saat ini.
    if (elements.year) {
        elements.year.textContent = new Date().getFullYear();
    }

    // Memperbarui angka dan progress bar pada intro.
    function setProgress(value) {
        progress = value;

        if (elements.progressBar) {
            elements.progressBar.style.width = `${value}%`;
        }

        if (elements.progressText) {
            elements.progressText.textContent = `${value}%`;
        }

        if (elements.progressTrack) {
            elements.progressTrack.setAttribute("aria-valuenow", String(value));
        }
    }

    // Menampilkan pintu terbuka dan mobil siap keluar.
    function finishLoading() {
        if (loadingTimer) {
            window.clearInterval(loadingTimer);
            loadingTimer = null;
        }

        setProgress(100);

        if (elements.loadingCopy) {
            elements.loadingCopy.textContent = "GARAGE READY.";
        }

        elements.garageDoor?.classList.add("open");
        elements.introCar?.classList.add("drive");

        if (elements.startButton) {
            elements.startButton.disabled = false;
        }
    }

    // Menutup intro dan menampilkan halaman utama.
    function enterSite() {
        if (hasEnteredSite) return;

        hasEnteredSite = true;

        if (loadingTimer) {
            window.clearInterval(loadingTimer);
            loadingTimer = null;
        }

        elements.introCar?.classList.add("exit");

        if (elements.loadingCopy) {
            elements.loadingCopy.textContent = "WELCOME TO SYAHLA'S GARAGE";
        }

        window.setTimeout(() => {
            elements.intro?.classList.add("hidden");
        }, 650);

        enableCustomCursor();
    }

    // Mengaktifkan setir BMW sebagai kursor pada perangkat desktop.
    function enableCustomCursor() {
        const finePointer = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

        if (!finePointer || !elements.cursor) return;

        document.body.classList.add("cursor-active");

        document.addEventListener("pointermove", (event) => {
            elements.cursor.style.left = `${event.clientX}px`;
            elements.cursor.style.top = `${event.clientY}px`;
        });
    }

    // Menjalankan animasi loading secara bertahap.
    function startLoading() {
        if (prefersReducedMotion) {
            finishLoading();
            return;
        }

        loadingTimer = window.setInterval(() => {
            setProgress(Math.min(100, progress + 2));

            while (
                currentStep < loadingSteps.length &&
                progress >= loadingSteps[currentStep][0]
            ) {
                const [threshold, message] = loadingSteps[currentStep];

                if (elements.loadingCopy) {
                    elements.loadingCopy.textContent = message;
                }

                if (threshold >= 24) {
                    elements.garageDoor?.classList.add("open");
                }

                if (threshold >= 52) {
                    elements.introCar?.classList.add("drive");
                }

                currentStep += 1;
            }

            if (progress >= 100) {
                finishLoading();
            }
        }, 75);
    }

    // Membuka dan menutup navigasi pada layar kecil.
    function setupNavigation() {
        const { menuToggle, navigation } = elements;

        if (!menuToggle || !navigation) return;

        menuToggle.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Tutup navigasi" : "Buka navigasi"
            );
        });

        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Buka navigasi");
            });
        });
    }

    // Musik hanya diputar setelah pengunjung menekan tombol.
    // Ini mengikuti kebijakan autoplay browser.
    function setupBackgroundMusic() {
        const { music, musicToggle } = elements;

        if (!music || !musicToggle) return;

        const musicLabel = musicToggle.querySelector(".music-label");

        function updateMusicButton(isPlaying) {
            musicToggle.classList.toggle("is-playing", isPlaying);
            musicToggle.setAttribute("aria-pressed", String(isPlaying));
            musicToggle.setAttribute(
                "aria-label",
                isPlaying ? "Matikan musik latar" : "Putar musik latar"
            );

            if (musicLabel) {
                musicLabel.textContent = isPlaying ? "MUSIC ON" : "MUSIC OFF";
            }
        }

        musicToggle.addEventListener("click", async () => {
            if (music.paused) {
                try {
                    await music.play();
                    updateMusicButton(true);
                } catch (error) {
                    updateMusicButton(false);
                    console.error("Musik latar tidak dapat diputar:", error);
                }
            } else {
                music.pause();
                updateMusicButton(false);
            }
        });

        music.addEventListener("pause", () => updateMusicButton(false));
        music.addEventListener("ended", () => updateMusicButton(false));
    }

    // Event listener utama.
    elements.startButton?.addEventListener("click", enterSite);
    elements.skipButton?.addEventListener("click", enterSite);

    setupNavigation();
    setupBackgroundMusic();
    startLoading();
});
