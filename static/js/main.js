document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- TYPING EFFECT ---
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const phrases = ["Exploring AI & ML 🚀", "Building the Future.", "Data-Driven Insights."];
        let phraseIndex = 0, charIndex = 0, isDeleting = false;
        
        function type() {
            const currentPhrase = phrases[phraseIndex];
            let text = isDeleting ? currentPhrase.substring(0, charIndex - 1) : currentPhrase.substring(0, charIndex + 1);
            typingTextElement.textContent = text;
            charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
            let typeSpeed = isDeleting ? 75 : 150;

            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000; 
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false; 
                phraseIndex = (phraseIndex + 1) % phrases.length; 
                typeSpeed = 500;
            }
            setTimeout(type, typeSpeed);
        }
        type();
    }

    // --- SCROLL ANIMATION OBSERVER ---
    let observer;
    function observeElements() {
        if (observer) observer.disconnect();
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => observer.observe(el));
    }
    observeElements();

    // --- 3D NEURAL NETWORK BACKGROUND ---
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const particles = 1000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particles * 3);
        for (let i = 0; i < positions.length; i += 3) {
            positions[i] = (Math.random() - 0.5) * 10;
            positions[i + 1] = (Math.random() - 0.5) * 10;
            positions[i + 2] = (Math.random() - 0.5) * 10;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
            color: 0x00ffff,
            size: 0.02,
            transparent: true,
            blending: THREE.AdditiveBlending
        });
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xff00ff,
            transparent: true,
            opacity: 0.1
        });
        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lines);

        camera.position.z = 5;

        const mouse = new THREE.Vector2();
        window.addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        function animate() {
            requestAnimationFrame(animate);
            points.rotation.x += 0.0005;
            points.rotation.y += 0.0005;
            lines.rotation.copy(points.rotation);
            
            camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
            camera.position.y += (-mouse.y * 0.5 - camera.position.y) * 0.02;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }
        animate();
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
});
