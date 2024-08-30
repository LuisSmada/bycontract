export function assertsNonNullable<T>(
  val: T,
  msg = "should not be null or undefined"
): asserts val is NonNullable<T> {
  if (val === null || val === undefined) {
    throw new Error(msg);
  }
}
