const skillData = [
    {
        category: "NETWORKING",
        skills: [
            "OSI & TCP/IP models", "IP addressing & subnetting", "DNS, DHCP, NAT", "VLANs, VPNs",
            "Routing & Switching (OSPF, BGP)", "Network Troubleshooting", "Port Scanning", "Wireshark", "Packet Capture"
        ]
    },
    {
        category: "SECURITY OPERATIONS",
        skills: [
            "Splunk", "Elastic SIEM", "Suricata & Snort", "Firewalls (Cisco ASA, Azure, AWS WAF)",
            "Threat Hunting", "Incident Response", "Vulnerability Management", "Nmap & Metasploit"
        ]
    },
    {
        category: "CLOUD INFRASTRUCTURE",
        skills: [
            "AWS (VPC, EC2, IAM, CloudWatch)", "Azure (VNet, Entra ID, NSG)", "Cloud Security",
            "Network ACLs", "Security Groups", "DDoS Protection"
        ]
    },
    {
        category: "AI & AUTOMATION",
        skills: [
            "Python Scripting", "Bash & PowerShell", "N8N Automation", "Model Context Protocol (MCP)",
            "AI Agent Development", "API Integration"
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
