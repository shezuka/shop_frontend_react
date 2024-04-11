import { randomBytes } from "crypto";

export function generateRandomString(length: number): string {
  const randomBytesBuffer = randomBytes(length);
  const randomString = randomBytesBuffer.toString("hex");
  return randomString;
}
