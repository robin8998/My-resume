import { useEffect } from "react";
import { createTimeline, stagger, splitText } from "animejs";

const TextRoller = () => {
  useEffect(() => {
    // Step 1: Split the text
    splitText("p", {
      chars: `<span class="char-3d word-{i}">
        <em class="face face-top">{value}</em>
        <em class="face face-front">{value}</em>
        <em class="face face-bottom">{value}</em>
      </span>`,
    });

    // Step 2: Create the timeline
    const charsStagger = stagger(1, { start: 0 });

    createTimeline({
      defaults: { ease: "linear", loop: true, duration: 750 },
    })
      .add(".char-3d", { rotateX: -90 }, charsStagger)
      .add(".char-3d .face-top", { opacity: [0.5, 0] }, charsStagger)
      .add(".char-3d .face-front", { opacity: [1, 0.5] }, charsStagger)
      .add(".char-3d .face-bottom", { opacity: [0.5, 1] }, charsStagger);
  }, []);

  return (
    <div className="text-container">
      <p>HELLO WORLD</p>
    </div>
  );
};

export default TextRoller;
