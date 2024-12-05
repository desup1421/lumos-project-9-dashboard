import "@testing-library/jest-dom";
// Berhubungan dengan react router
import { TextDecoder, TextEncoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;