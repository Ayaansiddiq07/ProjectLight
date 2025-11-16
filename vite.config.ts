import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    middlewareMode: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Disable source maps in production to prevent code inspection
    sourcemap: false,
    // Minify the code
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console statements
        drop_debugger: true, // Remove debugger statements
        passes: 3, // Multiple compression passes for better optimization
        pure_funcs: ["console.log", "console.info"],
      },
      format: {
        comments: false, // Remove comments
      },
      mangle: true, // Mangle variable names for smaller size
    },
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
          animations: ["framer-motion"],
          utils: ["clsx", "tailwind-merge"],
          icons: ["lucide-react"],
        },
        // Optimize output format
        format: "es",
        // Optimize entry points
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 800,
    // CSS code splitting
    cssCodeSplit: true,
    // Optimize assets - inline small assets
    assetsInlineLimit: 2048,
    // Report compressed size
    reportCompressedSize: false,
    // Minify CSS
    cssMinify: true,
    // Optimize dependencies
    target: "esnext",
    // Enable rollup tree-shaking
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      tryCatchDeoptimization: false,
    },
  },
  // Disable source maps for dev as well
  define: {
    __DEV__: JSON.stringify(mode === "development"),
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
    ],
    exclude: ["@vite/client"],
  },
}));
