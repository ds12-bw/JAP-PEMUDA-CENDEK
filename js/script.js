document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle (Sistem Menu Mudah Alih)
    // สำหรับเปิด-ปิดเมนูเวลาใช้บนมือถือ
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Impact Counter Animation (Animasi Nombor Statistik)
    // ทำให้ตัวเลขวิ่งจาก 0 เมื่อเลื่อนมาถึงส่วนสถิติ
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // ความเร็วในการวิ่งของตัวเลข (ยิ่งน้อยยิ่งเร็ว)

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // ตรวจสอบว่าเลื่อนมาถึงส่วนสถิติหรือยัง (Intersection Observer)
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target); // ทำงานแค่ครั้งเดียว
            }
        });
    }, observerOptions);

    const impactSection = document.querySelector('#impact');
    if (impactSection) {
        observer.observe(impactSection);
    }

    // 3. Sticky Header Shadow (Kesan Bayangan Header)
    // เพิ่มเงาให้เมนูเมื่อมีการเลื่อนหน้าจอลงมา
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg');
            nav.classList.add('transition-all');
        } else {
            nav.classList.remove('shadow-lg');
        }
    });

});
