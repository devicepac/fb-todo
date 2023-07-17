import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const TodoChart = () => {
  const data = [
    { bottle: "365ml", cola: 1200, cidar: 1000, fanta: 1100 },
    { bottle: "500ml", cola: 2200, cidar: 2000, fanta: 2100 },
    { bottle: "1000ml", cola: 3200, cidar: 3000, fanta: 3100 },
  ];
  const handle = {
    barClick: data => {
      console.log(data);
    },

    legendClick: data => {
      console.log(data);
    },
  };
  return (
    <div className="p-6 mt-5 shadow rounded bg-white">
      <h2>TodoChart</h2>
      <div style={{ height: "400px" }}>
        <ResponsiveBar
          data={data}
          // chart 에서 보여질 데이터 key (측정되는 값)
          keys={["cola", "cidar", "fanta"]}
          // keys 를 그룹화하는 index key (분류)
          indexBy="bottle"
          // 차트 간의 여백 (bar 간의 여백)
          padding={0.3}
          // 차트의 색상
          colors={["olive", "brown", "orange"]}
          // 색상을 적용함.
          colorBy="id"
          // 테마 설정
          theme={{
            /**
             * label style (bar에 표현되는 글씨)
             */
            labels: {
              text: {
                fontSize: 14,
                fill: "#000000",
              },
            },
            /**
             * legend style (default로 우측 하단에 있는 색상별 key 표시)
             */
            legends: {
              text: {
                fontSize: 12,
                fill: "#000000",
              },
            },
            axis: {
              /**
               * axis legend style (bottom, left에 있는 글씨)
               */
              legend: {
                text: {
                  fontSize: 20,
                  fill: "#000000",
                },
              },
              /**
               * axis ticks style (bottom, left에 있는 값)
               */
              ticks: {
                text: {
                  fontSize: 16,
                  fill: "#000000",
                },
              },
            },
          }}
          // axis Bottom 설정

          axisBottom={{
            tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
            tickPadding: 5, // tick padding
            tickRotation: 0, // tick 기울기
            legend: "bottle", // bottom 글씨
            legendPosition: "middle", // 글씨 위치
            legendOffset: 40, // 글씨와 chart간 간격
          }}
          /**
           * axis left 설정
           */
          axisLeft={{
            tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
            tickPadding: 5, // tick padding
            tickRotation: 0, // tick 기울기
            legend: "price", // left 글씨
            legendPosition: "middle", // 글씨 위치
            legendOffset: -60, // 글씨와 chart간 간격
          }}
          /**
           * label 안보이게 할 기준 width
           */
          labelSkipWidth={36}
          /**
           * label 안보이게 할 기준 height
           */
          labelSkipHeight={12}
          /**
           * bar 클릭 이벤트
           */
          onClick={handle.barClick}
          /**
           * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
           */
          legends={[
            {
              dataFrom: "keys", // 보일 데이터 형태
              anchor: "bottom-right", // 위치
              direction: "column", // item 그려지는 방향
              justify: false, // 글씨, 색상간 간격 justify 적용 여부
              translateX: 120, // chart와 X 간격
              translateY: 0, // chart와 Y 간격
              itemsSpacing: 2, // item간 간격
              itemWidth: 100, // item width
              itemHeight: 20, // item height
              itemDirection: "left-to-right", // item 내부에 그려지는 방향
              itemOpacity: 0.85, // item opacity
              symbolSize: 20, // symbol (색상 표기) 크기
              effects: [
                {
                  // 추가 효과 설정 (hover하면 item opacity 1로 변경)
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
              onClick: handle.legendClick, // legend 클릭 이벤트
            },
          ]}
        />
      </div>
    </div>
  );
};

export default TodoChart;
