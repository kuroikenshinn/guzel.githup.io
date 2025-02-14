document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content-section');
    let currentTabIndex = 0;

    const aboutMeLink = document.getElementById('about-me');
    const socialMediaLink = document.getElementById('social-media');
    const aboutMeContent = document.getElementById('about-me-content');
    const socialMediaContent = document.getElementById('social-media-content');
    const projectsContent = document.getElementById('projects-content');
    const projectsLink = document.getElementById('projects');

    function showTab(index) {
        tabs.forEach((tab, i) => {
            if (i === index) {
                tab.classList.add('active');
                contents[i].classList.add('active');
            } else {
                tab.classList.remove('active');
                contents[i].classList.remove('active');
            }
        });
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentTabIndex = index;
            showTab(currentTabIndex);
        });
    });

    aboutMeLink.addEventListener('click', (e) => {
        e.preventDefault();
        aboutMeContent.classList.toggle('hidden');
        socialMediaContent.classList.add('hidden');
        projectsContent.classList.add('hidden');
    });

    socialMediaLink.addEventListener('click', (e) => {
        e.preventDefault();
        socialMediaContent.classList.toggle('hidden');
        aboutMeContent.classList.add('hidden');
        projectsContent.classList.add('hidden');
    });
    
    projectsLink.addEventListener('click', (e) => {
        e.preventDefault();
        projectsContent.classList.toggle('hidden');
        aboutMeContent.classList.add('hidden');
        socialMediaContent.classList.add('hidden');
    });

    window.onload = function() {
        let percent = 0;
        let progressBar = document.getElementById("progress-bar");
        let percentText = document.getElementById("percent");
    
        let interval = setInterval(function() {
            percent += 2;  // İlerlemeyi artır
            progressBar.style.width = percent + "%";
            percentText.textContent = percent + "%";  // Yüzdeyi göster
    
            if (percent >= 100) {
                clearInterval(interval);  // Yüzde %100'e ulaşınca interval'i durdur
                setTimeout(function() {
                    // Yükleme ekranını gizle ve içeriği göster
                    document.getElementById("loader").style.display = "none";
                    document.getElementById("content").style.display = "block";
                }, 500);  // 0.5 saniye sonra içeriği göster
            }
        }, 50); // 50ms arayla %2 artırarak ilerleme sağla
    };
    
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentTabIndex = (currentTabIndex + 1) % tabs.length;
            showTab(currentTabIndex);
        } else if (event.key === 'ArrowLeft') {
            currentTabIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
            showTab(currentTabIndex);
        } else if (event.key === 'Enter' && currentTabIndex === 2) {
            const exitConfirmation = document.getElementById('exit-confirmation');
            exitConfirmation.classList.remove('hidden');
        } else if (event.key === 'y' && currentTabIndex === 2) {
            const exitConfirmation = document.getElementById('exit-confirmation');
            exitConfirmation.innerHTML = '<p>Logging out... Closing in 3 seconds.</p>';
            setTimeout(() => {
                try {
                    window.close();
                } catch (error) {
                    alert("Sekme kapatılamıyor. Lütfen tarayıcıyı elle kapatın.");
                }
            }, 3000); // 5 saniye bekleyip kapat
        } else if (event.key === 'n' && currentTabIndex === 2) {
            const exitConfirmation = document.getElementById('exit-confirmation');
            exitConfirmation.classList.add('hidden');
        }
    });

    showTab(currentTabIndex);
});
