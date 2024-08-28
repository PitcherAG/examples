import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import appJson from "./public/app.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log("mode:", mode);
  return {
    define: {
      VITE_APP_NAME: JSON.stringify(appJson.name),
      VITE_APP_VERSION: JSON.stringify(appJson.version),
    },
    base: mode === "production" ? "" : "/" + appJson.name,
    // base:  "",
    resolve: {},
    plugins: [react()],
  };
});
