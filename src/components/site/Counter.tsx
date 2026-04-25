import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export const Counter = ({
  end,
  suffix = "",
  prefix = "",
  duration = 1800,
  format = "number",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  format?: "number" | "percent" | "plus";
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  const display = value.toLocaleString("de-DE");
  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default Counter;