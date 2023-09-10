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


// amChart 1
am5.ready(function () {
    let root = am5.Root.new("chart-div");
    root._logo.dispose();

    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true
    }));


    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);


    let xRenderer = am5xy.AxisRendererX.new(root, {minGridDistance: 30});
    xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15,
    });

    xRenderer.grid.template.setAll({
        location: 1
    })

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "month",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1
        })
    }));

    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "month",
        tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}"
        })
    }));

    series.columns.template.setAll({cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0});
    series.columns.template.adapters.add("fill", function (fill, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
        return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    let data = [{
        month: "دی",
        value: 2025
    }, {
        month: "بهمن",
        value: 1114
    }, {
        month: "اسفند",
        value: 1809
    }, {
        month: "فروردین",
        value: 1122
    }, {
        month: "اردیبهشت",
        value: 1322
    }, {
        month: "خرداد",
        value: 1882
    }];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);

});
