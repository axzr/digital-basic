import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  ssr: false, // switch off for now, as the CodeEditor component uses context
  presets: [vercelPreset()],
} satisfies Config;
