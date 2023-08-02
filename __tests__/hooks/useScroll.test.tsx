import { useScroll } from "@/app/hooks/useScroll";
import { act, renderHook } from "@testing-library/react";

describe("useScroll", () => {
  it("should responde to scroll events", () => {
    const { result } = renderHook(() => useScroll());
    expect(result.current).toBeFalsy();

    act(() => {
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBeTruthy();

    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBeFalsy();
  });
});
