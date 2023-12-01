import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// mock window matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

beforeAll(() => {
  vi.mock("next/font/google", () => ({
    // eslint-disable-next-line camelcase
    League_Spartan({}) {
      return {
        className: "",
      };
    },
    Montserrat({}) {
      return {
        className: "",
      };
    },
  }));
});

afterEach(() => {
  cleanup();
});

// beforeEach(() => {
//   vi.mock('next/router', () => ({
//     useRouter() {
//       return {
//         route: '/',
//         pathname: '',
//         query: '',
//         asPath: '',
//         locale: 'en',
//       };
//     },
//   }));
// });
