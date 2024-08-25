import { Reward } from "@/hooks/useLootboxModule";

type SlotItemProps = {
  width: number;
  height: number;
  item: Reward;
  index: number;
};

export function SlotItem({ width, height, item, index }: SlotItemProps) {
  return (
    <div
      key={item.name + index}
      style={{
        width,
        height,
        position: "relative",
        ...(item.style ?? {}),
      }}>
      <img
        width={item.imageProps.imageWidth}
        height={item.imageProps.imageHeight}
        src={item.imgURI}
        style={{
          margin: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          ...item.imageProps.style,
        }}
      />
    </div>
  );
}
