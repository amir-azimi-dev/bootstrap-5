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


// bar chart
const chartbar = document.getElementById('chart-bar');

new Chart(chartbar, {
    type: 'bar',
    data: {
        labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",],

        datasets: [{
            data: [300, 150, 167, 280, 234, 325],
            backgroundColor: [
                '#9694ff',
                '#5ddab4',
                '#ff7976',
                '#57caeb'
            ],
            hoverOffset: 4
        }]
    },

    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

// doughnut chart
const ctx = document.getElementById('doughnut-chart-div');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'پرداختی‌های موفق',
            'پرداختی‌های ناموفق',
        ],

        datasets: [{
            data: [300, 50],
            backgroundColor: [
                '#9694ff',
                '#57caeb',
            ],
            hoverOffset: 4
        }]
    },

    options: {
        plugins: {
            legend: {
                rtl: true,
                position: "bottom",
                labels: {
                    font: {
                        family: "IranYekan",
                        weight: "bold",
                        size: 15
                    }
                }
            }
        }
    }
});

