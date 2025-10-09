import { useRef,useEffect } from "react";
import { createTimeline, splitText, stagger } from "animejs";

const TextRoller = ({ text = "HELLO WORLD" }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    splitText(textRef.current, {
      chars: `<span class="char-3d word-{i}">
        <em class="face face-top">{value}</em>
        <em class="face face-front">{value}</em>
        <em class="face face-bottom">{value}</em>
      </span>`,
    });

    const charsStagger = stagger(100, { start: 0 });
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
      <p ref={textRef}>{text}</p>
    </div>
  );
};

export default TextRoller;
