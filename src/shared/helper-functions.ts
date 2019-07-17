import { IAnyKeyValuePair } from "./types";

export function objectHasKeys(obj: IAnyKeyValuePair) {
  return Boolean(Object.keys(obj).length);
}
