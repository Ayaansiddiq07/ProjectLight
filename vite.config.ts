import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
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
        passes: 2, // Multiple compression passes for better optimization
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
        },
        // Optimize output format
        format: "es",
      },
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // CSS code splitting
    cssCodeSplit: true,
    // Optimize assets - inline small assets
    assetsInlineLimit: 8192,
    // Report compressed size
    reportCompressedSize: false,
    // Minify CSS
    cssMinify: true,
  },
  // Disable source maps for dev as well
  define: {
    __DEV__: JSON.stringify(mode === "development"),
  },
}));
