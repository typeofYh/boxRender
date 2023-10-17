import { useMemo } from "react";
const RenderBox = ({ width, height, door, color, children }) => {
  const doorStyle = useMemo(() => {
    const doorHeight = 20;
    return {
      top: {
        top: -doorHeight,
        left: 0,
        width,
        height: doorHeight,
        points: [
          { x1: 0, y1: doorHeight, x2: width / 2 - 10, y2: 0 },
          { x1: width, y1: doorHeight, x2: width / 2 + 10, y2: 0 }
        ]
      },
      bottom: {
        top: height,
        left: 0,
        width,
        height: doorHeight,
        points: [
          { x1: 0, y1: 0, x2: width / 2 - 10, y2: doorHeight },
          { x1: width, y1: 0, x2: width / 2 + 10, y2: doorHeight }
        ]
      },
      left: {
        left: -28,
        top: 0,
        height: width,
        width: doorHeight,
        points: [{ x1: 0, y1: doorHeight, x2: 30, y2: 0 }]
      },
      right: {
        left: width,
        top: 0,
        height: width,
        width: 28,
        points: [{ x1: 0, y1: 28, x2: 30, y2: 0 }]
      }
    };
  }, [width, height, door]);
  return (
    <div
      style={{
        width: width,
        height: height,
        border: `1px solid ${color}`,
        boxSizing: "border-box",
        padding: 2,
        position: "relative"
      }}
    >
      {door.map((val, i) => {
        return (
          <svg
            key={i}
            width={doorStyle[val].width}
            height={doorStyle[val].height}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              ...doorStyle[val]
            }}
          >
            {doorStyle[val].points.map((item, i) => (
              <line key={i} {...item} style={{ stroke: color }}></line>
            ))}
          </svg>
        );
      })}
      <div
        style={{
          border: `1px solid ${color}`,
          boxSizing: "border-box",
          width: "100%",
          height: "100%"
        }}
      >
        {children}
      </div>
    </div>
  );
};
const RenderBoxTransformer = ({ config, style }) => {
  return (
    <div
      style={{
        display: "flex",
        ...style
      }}
    >
      {config.layout.map((val) => (
        <div
          className="colbox"
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {val.row.map((item, i) => (
            <RenderBox
              key={i}
              width={item.width * config.zoom}
              height={item.height * config.zoom}
              door={item.door}
              color="#000"
            >
              box
            </RenderBox>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RenderBoxTransformer;
