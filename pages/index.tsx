import { useLootboxModule } from "@/hooks/useLootboxModule";

const IMG_PROPS = {
  imageWidth: 50,
  imageHeight: 50,
};

const rewards = [
  {
    imgURI: "/tokens/ARB.png",
    name: "reward0",
    description: "reward 0 description",
    style: {
      boxShadow: "0 0 10px 5px  black inset",
      border: "2px black solid",
      borderLeft: "10px black solid",

      borderRight: "10px black solid",
    },
    imageProps: {
      ...IMG_PROPS,
      style: { boxShadow: "0 0 100px 10px #0ff" },
    },
  },
  {
    imgURI: "/tokens/MIM.png",
    name: "reward1",
    description: "reward 1 description",
    style: {
      boxShadow: "0 0 10px 5px  black inset",

      border: "2px black solid",
      borderLeft: "10px black solid",
      borderRight: "10px black solid",
    },
    imageProps: {
      ...IMG_PROPS,
      style: { boxShadow: "0 0 100px 10px #4ced82" },
    },
  },
  {
    imgURI: "/tokens/USDs.png",
    name: "reward2",
    description: "reward 2 description",
    style: {
      boxShadow: "0 0 10px 5px  black inset",

      border: "2px black solid",
      borderLeft: "10px black solid",
      borderRight: "10px black solid",
    },
    imageProps: {
      ...IMG_PROPS,
      style: { boxShadow: "0 0 100px 10px #a84bcc" },
    },
  },
  {
    imgURI: "/tokens/PLS.png",
    name: "reward3",
    description: "reward 3 description",
    style: {
      boxShadow: "0 0 10px 5px  black inset",

      border: "2px black solid",
      borderLeft: "10px black solid",
      borderRight: "10px black solid",
    },
    imageProps: {
      ...IMG_PROPS,
      style: { boxShadow: "0 0 100px 10px #f50031" },
    },
  },
  {
    imgURI: "/tokens/wstETH.png",
    name: "reward4",
    description: "reward 4 description",
    style: {
      boxShadow: "0 0 10px 5px  black inset",
      border: "2px black solid",

      borderLeft: "10px black solid",
      borderRight: "10px black solid",
    },
    imageProps: {
      ...IMG_PROPS,
      style: { boxShadow: "0 0 100px 10px #1fffc7" },
    },
  },
  {
    imgURI: "/tokens/XCAL.png",
    name: "reward5",
    description: "reward 5 description",
    style: {
      boxShadow: "0 0 10px 5px  black inset",
      border: "2px black solid",

      borderLeft: "10px black solid",
      borderRight: "10px black solid",
    },
    imageProps: {
      ...IMG_PROPS,
      style: { boxShadow: "0 0 100px 10px #eb8c34" },
    },
  },
];

const returnRandomReward = () =>
  rewards[Math.floor(Math.random() * rewards.length)];

const probabilities = [16.7, 16.7, 16.7, 16.7, 16.7, 16.7];

function SlotPage() {
  const { component, startAnimation, containerRef, reset, isRunning } =
    useLootboxModule({
      queries: [0, 768],
      slotWidths: { 0: 100, 768: 200 },
      slotHeights: { 0: 100, 768: 200 },
      probabilities,
      rewards,
      slotSpacing: 0,
      selectorProperties: {
        imgURI: "",
        position: "across",
        width: 0,
        height: 200,
        style: {
          border: "2px white solid",
        },
      },
      onCompleteHandler: () => {},
      soundURL: "/sounds/slotSound.mp3",
    });

  return (
    <div
      ref={containerRef as any}
      style={{
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}>
      {component}{" "}
      <button
        onClick={() => startAnimation(returnRandomReward())}
        disabled={isRunning}>
        click
      </button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}

export default SlotPage;
