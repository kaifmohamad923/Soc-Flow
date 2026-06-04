// Future JavaScript Features
// - Search System
// - Sidebar Toggle
// - Category Filters
// - Theme System


const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

if (menuToggle && sidebar) {

    menuToggle.addEventListener("click", () => {

        sidebar.classList.toggle("show-sidebar");

    });

}



/* ==========================================
   SEARCH SYSTEM
========================================== */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            const query = searchInput.value
                .toLowerCase()
                .trim();

            const searchPages = {

                /* SCENARIOS */

                "phishing": "scenarios/phishing.html",

                "sql": "scenarios/sql-injection-detected.html",
                "sql injection": "scenarios/sql-injection-detected.html",

                "powershell": "scenarios/suspicious-powershell-script-executed.html",
                "suspicious powershell": "scenarios/suspicious-powershell-script-executed.html",

                "brute force": "scenarios/brute-force-attack.html",

                "vpn": "scenarios/suspicious-vpn-login.html",
                "vpn login": "scenarios/suspicious-vpn-login.html",

                "c2": "scenarios/c2-traffic.html",
                "command and control": "scenarios/c2-traffic.html",

                "persistence": "scenarios/persistence.html",

                "cve": "scenarios/cve-detected.html",

                "malware": "scenarios/malware.html",

                /* MAIN PAGES */

                "dashboard": "index.html",

                "scenarios page": "scenarios.html",

                "playbooks": "playbooks.html",

                "notes": "notes.html",

                "contact": "contact.html",

                "tools": "tools.html"
            };

            if (searchPages[query]) {

                window.location.href = searchPages[query];

            } else {

                alert("No matching page found.");

            }
        }

    });

}


