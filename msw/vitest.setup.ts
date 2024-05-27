import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./src/mocks/server";

beforeAll(() => {
  // MSX 서버가 준비되어 API 모킹을 할 수 있음
  //server.listen :msw 서버 시작
  //onUnhandledRequest: "error"  : 처리되지 않은 요청 발생 시 에러 발생
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  // 등록된 핸들러 초기화
  server.resetHandlers();
});

afterAll(() => {
  //MSW 서버 종료
  server.close();
});
