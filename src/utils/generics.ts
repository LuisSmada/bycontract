import { UniqueID } from "../core/model/entities";

export function assertsNonNullable<T>(
  val: T,
  msg = "should not be null or undefined"
): asserts val is NonNullable<T> {
  if (val === null || val === undefined) {
    throw new Error(msg);
  }
}

let seed = Date.now();

export const uniqueId = (): UniqueID => {
  seed += 1;
  return `id-${seed}`;
};

export const momentDateFormat = "DD-MM-YYYYTHH:mm:ss";
