import "./styles.css";
import RenderBoxTransformer from "./components/RenderBoxTransformer";
import { useMemo } from "react";
export default function App() {
  const boxTransformConfig = useMemo(() => {
    return {
      zoom: 1.5,
      layout: [
        {
          // col:1
          row: [
            {
              width: 240,
              height: 114,
              direction: "row",
              content: [
                {
                  title: "低压室",
                  key: "lowVoltage"
                }
              ],
              door: ["top"]
            },
            {
              width: 240,
              height: 114,
              direction: "row",
              content: [
                {
                  title: "高压室",
                  key: "highVoltage"
                }
              ],
              door: ["bottom"]
            }
          ]
        },
        {
          row: [
            {
              width: 135,
              height: 228,
              direction: "column",
              content: [
                {
                  title: "变压器室",
                  key: "transformerVoltage"
                }
              ],
              door: ["bottom", "top"]
            }
          ]
        }
      ]
    };
  }, []);
  const boxTransformConfig1 = useMemo(() => {
    return {
      zoom: 1.5,
      layout: [
        {
          // col:1
          row: [
            {
              width: 135,
              height: 228,
              direction: "column",
              content: [
                {
                  title: "低压室",
                  key: "lowVoltage"
                }
              ],
              door: ["top", "bottom"]
            }
          ]
        },
        {
          // col:1
          row: [
            {
              width: 135,
              height: 228,
              direction: "column",
              content: [
                {
                  title: "低压室",
                  key: "lowVoltage"
                }
              ],
              door: ["top", "bottom"]
            }
          ]
        },
        {
          row: [
            {
              width: 135,
              height: 228,
              direction: "column",
              content: [
                {
                  title: "变压器室",
                  key: "transformerVoltage"
                }
              ],
              door: ["bottom", "top"]
            }
          ]
        }
      ]
    };
  }, []);
  const boxTransformConfig2 = useMemo(() => {
    return {
      zoom: 1.5,
      layout: [
        {
          // col:1
          row: [
            {
              width: 135,
              height: 228,
              direction: "column",
              content: [
                {
                  title: "低压室",
                  key: "lowVoltage"
                }
              ],
              door: ["top", "bottom"]
            }
          ]
        },
        {
          // col:1
          row: [
            {
              width: 240,
              height: 114,
              direction: "row",
              content: [
                {
                  title: "低压室",
                  key: "lowVoltage"
                }
              ],
              door: ["top"]
            },
            {
              width: 240,
              height: 114,
              direction: "row",
              content: [
                {
                  title: "变压器室",
                  key: "transformerVoltage"
                }
              ],
              door: ["bottom"]
            }
          ]
        }
      ]
    };
  }, []);
  return (
    <div className="App">
      <RenderBoxTransformer
        config={boxTransformConfig}
        style={{ margin: 100 }}
      />
      <RenderBoxTransformer
        config={boxTransformConfig1}
        style={{ margin: 100 }}
      />
      <RenderBoxTransformer
        config={boxTransformConfig2}
        style={{ margin: 100 }}
      />
    </div>
  );
}
