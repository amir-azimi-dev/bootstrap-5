// alpine
document.addEventListener('alpine:init', () => {
    Alpine.data("toggleSidebar", () => ({
        open: (window.innerWidth >= 992),

        toggle() {
            this.open = !this.open;
        }
    }));
});

// pureCounter
new PureCounter();