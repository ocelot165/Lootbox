import { Reward, SelectorProperties } from "@/hooks/useLootboxModule";
import { SlotItem } from "./SlotItem";
import { animated } from "react-spring";

type SlotContainerProps = {
  buffer: Reward[];
  slotWidth: number;
  slotHeight: number;
  numItems: number;
  slotSpacing: number;
  selectorProperties?: SelectorProperties;
  slotRef: any;
  selectorRef: any;
};

export function SlotContainer({
  buffer,
  slotWidth,
  slotHeight,
  numItems,
  slotSpacing,
  selectorProperties,
  slotRef,
  selectorRef,
}: SlotContainerProps) {
  return (
    <>
      <animated.div
        ref={slotRef}
        style={{
          width: numItems * slotWidth,
          height: slotHeight,
          display: "flex",
          flexShrink: "0",
          overflowX: "hidden",
          position: "relative",
          gap: slotSpacing,
        }}>
        {buffer.map((item, index) => (
          <SlotItem
            width={slotWidth}
            height={slotHeight}
            index={index}
            item={item}
          />
        ))}
      </animated.div>

      {selectorProperties && (
        <img
          ref={selectorRef}
          width={selectorProperties.width}
          height={selectorProperties.height}
          src={selectorProperties.imgURI}
          style={{
            position: "absolute",
            top:
              selectorProperties.position === "across"
                ? "0"
                : selectorProperties.position === "top"
                ? -slotHeight
                : slotHeight,
            left: "50%",
            zIndex: "1",
            ...selectorProperties.style,
          }}
        />
      )}
    </>
  );
}
