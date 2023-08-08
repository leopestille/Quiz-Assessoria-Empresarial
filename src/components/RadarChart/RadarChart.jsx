import { useEffect, forwardRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

/* `Chart.register(ChartDataLabels);` is registering the `ChartDataLabels` plugin with the `Chart`
object from the `chart.js` library. This allows the plugin to be used in the chart configuration and
enables the display of data labels on the chart. */
Chart.register(ChartDataLabels);
/* `Chart.defaults.font.size = 16;` is setting the default font size for all charts created using the
`Chart` object from the `chart.js` library to 16 pixels. This means that all text elements in the
chart, such as labels and tooltips, will have a font size of 16 pixels unless explicitly overridden
in the chart configuration. */
Chart.defaults.font.size = 16;

/* The code defines a functional component called `RadarChart` using the `forwardRef` function from
React. The component takes in three props: `data`, `labels`, and `label`. It also receives a `ref`
object. */
const RadarChart = forwardRef(({ data, labels, label }, ref) => {
  const canvasRef = ref;

  useEffect(() => {
    if (canvasRef.current) {
      let diagnosticoDataInsight = new Chart(
        canvasRef.current.getContext("2d"),
        {
          type: "radar",
          data: {
            labels,
            datasets: [
              {
                label,
                data,
                backgroundColor: [
                  "rgba(147, 112, 219, 0.60)",                  
                ],
              },
            ],
          },
          options: {
            scales: {
                r: {               
                    ticks: {
                      fontSize: 16,
                      callback: function(value, index, values) {
                        if (value === 100) {
                          return value;
                        } else {
                          return "";
                        }
                      }                      
                    },                  
                    angleLines: {
                        display: false
                    },
                    suggestedMax: 100,
                    suggestedMin: 0,
                    pointLabels: {
                      color: "rgb(0, 0, 0)",
                      font: {
                        size: 18,                        
                      }
                    },
                    grid: {
                      color: "rgb(0, 0, 0)",
                    }
                }
            },
            plugins: {
                datalabels: {
                    color: "rgb(0, 0, 0)",
                    display: function(context) {
                        return context.dataset.data[context.dataIndex] !== null;
                    },
                    formatter: function(value) {
                        return value
                    }
                }               
            }
          }
        }
      );
      return () => {
        diagnosticoDataInsight.destroy();
      };
    }
  }, [labels, data, canvasRef]);

  return <canvas ref={canvasRef} style={{ visibility: "hidden"}} />;
});

RadarChart.displayName = "DiagnosticoDataInsight";

export default RadarChart;
