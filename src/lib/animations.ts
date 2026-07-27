export interface AnimationItem {
  slug: string;
  name: string;
  category: string;
  description: string;
  framerCode: string;
}

export const ANIMATIONS: AnimationItem[] = [
  {
    slug: "fade-up",
    name: "Fade Up Reveal",
    category: "Entry Animations",
    description: "Smooth entry animation sliding elements upwards with opacity easing.",
    framerCode: `<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Fade Up Content
</motion.div>`,
  },
  {
    slug: "scale-bounce",
    name: "Spring Scale Bounce",
    category: "Interaction",
    description: "Playful spring physics scaling elements up on entry or click.",
    framerCode: `<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ type: "spring", stiffness: 300, damping: 15 }}
>
  Spring Bounce Box
</motion.div>`,
  },
  {
    slug: "magnetic-button",
    name: "Magnetic Hover Button",
    category: "Cursor Interactions",
    description: "Button slightly pulls toward mouse cursor location on hover.",
    framerCode: `const [position, setPosition] = useState({ x: 0, y: 0 });

<motion.button
  animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
  transition={{ type: "spring", stiffness: 150, damping: 15 }}
>
  Hover Magnetic Button
</motion.button>`,
  },
  {
    slug: "glow-pulse",
    name: "Pulsing Glow Aura",
    category: "Glow & Effects",
    description: "Continuous breathing ambient background glow aura effect.",
    framerCode: `<motion.div
  animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  className="bg-purple-600/30 blur-2xl rounded-full"
/>`,
  },
  {
    slug: "text-stagger",
    name: "Text Stagger Reveal",
    category: "Typography",
    description: "Letter by letter staggered reveal animation for high-impact titles.",
    framerCode: `const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };

<motion.h1 variants={container} initial="hidden" animate="show">
  {"ForgeUI Motion".split("").map((letter, idx) => (
    <motion.span key={idx} variants={item}>{letter}</motion.span>
  ))}
</motion.h1>`,
  },
  {
    slug: "flip-card",
    name: "3D Flip Card",
    category: "3D Motion",
    description: "Interactive card flipping 180 degrees on hover to expose hidden content.",
    framerCode: `<motion.div
  whileHover={{ rotateY: 180 }}
  transition={{ duration: 0.6 }}
  style={{ transformStyle: "preserve-3d" }}
>
  Card Front / Back
</motion.div>`,
  },
];
