import { useEffect, forwardRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

/* `Chart.register(ChartDataLabels);` está registrando o plugin `ChartDataLabels` com o `Chart`
objeto da biblioteca `chart.js`. Isso permite que o plug-in seja usado na configuração do gráfico e
permite a exibição de rótulos de dados no gráfico. */
Chart.register(ChartDataLabels);
/* `Chart.defaults.font.size = 16;` está definindo o tamanho de fonte padrão para todos os gráficos criados usando o
objeto `Chart` da biblioteca `chart.js` para 16 pixels. Isso significa que todos os elementos de texto no
gráfico, como rótulos e dicas de ferramentas, terá um tamanho de fonte de 16 pixels, a menos que seja explicitamente substituído
na configuração do gráfico. */
Chart.defaults.font.size = 16;

/* O código define um componente funcional chamado `RadarChart` usando a função `forwardRef` de
Reagir. O componente recebe três props: `data`, `labels` e `label`. Ele também recebe um `ref`
objeto. */
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
