const skillData = [
    {
        category: "PENETRATION TESTING",
        skills: [
            "Web Application Pentesting", "Mobile (Android/iOS) Pentesting", "Network Pentesting",
            "Cloud Security Testing", "Ethical Hacking", "Vulnerability Assessment",
            "Proof-of-Concept Development", "Fuzzing", "Reverse Engineering"
        ]
    },
    {
        category: "SECURITY TOOLS",
        skills: [
            "Burp Suite", "Nmap", "Metasploit", "Wireshark", "Frida", "MobSF",
            "OWASP ZAP", "Nikto", "Hydra", "SQLmap", "Nessus", "Splunk", "Elastic SIEM"
        ]
    },
    {
        category: "NETWORKING & STANDARDS",
        skills: [
            "TCP/IP", "DNS", "VLANs", "Routing & Switching", "Firewalls (Cisco ASA, UFW)",
            "IDS/IPS", "VPNs", "OWASP Top 10", "OWASP MASVS", "MITRE ATT&CK", "NIST CSF", "PTES"
        ]
    },
    {
        category: "CLOUD & INFRASTRUCTURE",
        skills: [
            "AWS (VPC, EC2, IAM, Security Groups)", "Linux/Unix", "Windows",
            "Active Directory", "CI/CD Security"
        ]
    },
    {
        category: "PROGRAMMING & AI SECURITY",
        skills: [
            "Python", "Bash", "SQL (PostgreSQL)", "PowerShell", "AI Agents",
            "Agentic Workflows", "Model Context Protocol (MCP)", "n8n", "IBM Watson", "LLM Security"
        ]
    }
];

let currentCategoryIndex = 0;

function initSkillSlider() {
    const container = document.getElementById('skill-slider');
    if (!container) return;

    // Create DOM structure if not present
    container.innerHTML = `
        <div class="slider-header">
            <span class="slider-label"></span>
            <span class="slider-category" id="slider-category"></span>
        </div>
        <div class="slider-content" id="slider-content"></div>
        <div class="slider-progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
        </div>
    `;

    renderSkillSlide();

    // Auto cycle
    setInterval(nextSlide, 4000);
}

function renderSkillSlide() {
    const categoryEl = document.getElementById('slider-category');
    const contentEl = document.getElementById('slider-content');
    const progressEl = document.getElementById('progress-fill');

    const data = skillData[currentCategoryIndex];

    // Animation Reset
    contentEl.style.opacity = '0';
    categoryEl.style.opacity = '0';
    progressEl.style.width = '0%';

    setTimeout(() => {
        categoryEl.textContent = data.category;
        contentEl.innerHTML = data.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('<span class="separator" style="color: var(--accent-color); margin: 0 0.5rem;">|</span>');

        categoryEl.style.opacity = '1';
        contentEl.style.opacity = '1';
        progressEl.style.width = '100%';
    }, 200);
}

function nextSlide() {
    currentCategoryIndex = (currentCategoryIndex + 1) % skillData.length;
    renderSkillSlide();
}

document.addEventListener('DOMContentLoaded', initSkillSlider);
