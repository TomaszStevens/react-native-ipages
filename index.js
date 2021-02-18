import React, { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";

const IPages = ({
  dotsFocusedColor,
  dotsUnfocusedColor,
  hideDots,
  components,
  infiniteScroll,
}) => {
  if (!Array.isArray(components) || components.length === 0)
    throw new Error(
      "Components prop must be non-empty array of react-native components."
    );
  const NUM_PAGES = components.length;
  const WIDTH = Dimensions.get("window").width;
  const [currentPage, setCurrentPage] = useState(0);
  const scrollView = useRef();

  const componentsToRender = infiniteScroll
    ? [...components, ...components, ...components]
    : components;

  const onScroll = (e) => {
    let offset_x = e.nativeEvent.contentOffset.x;
    let closestPageIndex = Math.round(offset_x / WIDTH);
    if (closestPageIndex !== currentPage) setCurrentPage(closestPageIndex);
  };

  const onMomentumScrollEnd = () => {
    if (!infiniteScroll) return;
    if (currentPage < NUM_PAGES || currentPage >= NUM_PAGES * 2)
      scrollView.current.scrollTo({
        x: WIDTH * (NUM_PAGES + (currentPage % NUM_PAGES)),
        y: 0,
        animated: false,
      });
  };

  useEffect(() => {
    if (!infiniteScroll) return;
    scrollView.current.scrollTo({
      x: WIDTH * NUM_PAGES,
      y: 0,
      animated: false,
    });
  }, []);

  const Dots = () => (
    <View
      style={{
        position: "absolute",
        alignSelf: "center",
        bottom: 30,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {Array(NUM_PAGES)
        .fill(0)
        .map((_, i) => (
          <View
            key={i}
            style={{
              height: 5,
              width: 5,
              borderRadius: 3,
              backgroundColor:
                currentPage % NUM_PAGES === i
                  ? dotsFocusedColor ?? "black"
                  : dotsUnfocusedColor ?? "white",
              margin: 5,
            }}
          />
        ))}
    </View>
  );

  return (
    <>
      <ScrollView
        horizontal
        style={{ width: "100%", height: "100%", backgroundColor: "pink" }}
        // snapToInterval={WIDTH}
        bounces={false}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum={true}
        onScroll={onScroll}
        scrollEventThrottle={4}
        ref={scrollView}
        onMomentumScrollEnd={onMomentumScrollEnd}
        pagingEnabled={true}
      >
        {componentsToRender.map((component, i) => (
          <View key={i} style={{ width: WIDTH, height: "100%" }}>
            {component()}
          </View>
        ))}
      </ScrollView>
      {!hideDots && <Dots />}
    </>
  );
};

export default IPages;
