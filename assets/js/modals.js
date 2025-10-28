// Skill Modal Functionality
function initSkillModal() {
    const skillModal = document.getElementById('skillModal');
    const closeModalBtn = document.getElementById('closeModal');
    const techTiles = document.querySelectorAll('.tech-tile');

    if (!skillModal || !closeModalBtn) return;

    // Open Modal on Tile Click
    techTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const skillKey = this.getAttribute('data-skill');
            const skill = skillData[skillKey];
            
            if (skill) {
                document.getElementById('modalTitle').textContent = skill.title;
                document.getElementById('modalDescription').textContent = skill.description;
                
                const modalList = document.getElementById('modalList');
                modalList.innerHTML = '';
                skill.items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    modalList.appendChild(li);
                });
                
                skillModal.classList.add('active');
            }
        });
    });

    // Close Modal
    function closeModal() {
        skillModal.classList.remove('active');
    }

    closeModalBtn.addEventListener('click', closeModal);

    // Close on Outside Click
    skillModal.addEventListener('click', function(event) {
        if (event.target === this) {
            closeModal();
        }
    });

    // Close on Escape Key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// Datenschutz Modal Functionality
function initDatenschutzModal() {
    const datenschutzModal = document.getElementById('datenschutzModal');
    const openDatenschutzBtn = document.getElementById('openDatenschutz');
    const closeDatenschutzBtn = document.getElementById('closeDatenschutz');

    if (!datenschutzModal || !openDatenschutzBtn || !closeDatenschutzBtn) return;

    openDatenschutzBtn.addEventListener('click', function(e) {
        e.preventDefault();
        datenschutzModal.classList.add('active');
    });

    closeDatenschutzBtn.addEventListener('click', function() {
        datenschutzModal.classList.remove('active');
    });

    // Close on Outside Click
    datenschutzModal.addEventListener('click', function(event) {
        if (event.target === this) {
            this.classList.remove('active');
        }
    });

    // Close on Escape Key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            datenschutzModal.classList.remove('active');
        }
    });
}

// Impressum Modal Functionality
function initImpressumModal() {
    const impressumModal = document.getElementById('impressumModal');
    const openImpressumBtn = document.getElementById('openImpressum');
    const closeImpressumBtn = document.getElementById('closeImpressum');

    if (!impressumModal || !openImpressumBtn || !closeImpressumBtn) return;

    openImpressumBtn.addEventListener('click', function(e) {
        e.preventDefault();
        impressumModal.classList.add('active');
    });

    closeImpressumBtn.addEventListener('click', function() {
        impressumModal.classList.remove('active');
    });

    // Close on Outside Click
    impressumModal.addEventListener('click', function(event) {
        if (event.target === this) {
            this.classList.remove('active');
        }
    });

    // Close on Escape Key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            impressumModal.classList.remove('active');
        }
    });
}

// Initialize all modals
document.addEventListener('DOMContentLoaded', function() {
    initSkillModal();
    initDatenschutzModal();
    initImpressumModal();
});
