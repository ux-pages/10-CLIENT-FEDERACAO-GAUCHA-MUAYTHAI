document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.init-header h1');

    heading.addEventListener('mousemove', (event) => {
        const rect = heading.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;

        const moveX = offsetX * -0.1;
        const moveY = offsetY * -0.1;

        heading.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    heading.addEventListener('mouseleave', () => {
        heading.style.transform = 'translate(0, 0)';
    });
});
