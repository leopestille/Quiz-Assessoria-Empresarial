import { useEffect, useRef, forwardRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);
Chart.defaults.font.size = 16;

const RadarChart = forwardRef(({ data, labels }, ref) => {
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
                data,
                backgroundColor: [
                  "rgb(147, 112, 219)",                  
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
                    pointLabels: {
                      font: {
                        size: 18,                        
                      }
                    }
                }
            },
            plugins: {
                datalabels: {
                    color: "rgb(0, 0, 0)",
                    display: function(context) {
                        return context.dataset.data[context.dataIndex] !== 0;
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
