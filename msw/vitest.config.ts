import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // globals: true :전역 변수와 전역 함수를 테스트 파일에서 직접 사용할 수 있음
      globals: true,
      // 테스트가 Node.js 환경이 아닌 브라우저 환경을 에뮬레이션하는 JSDOM 환경에서 실행됨
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
    },
  })
);
