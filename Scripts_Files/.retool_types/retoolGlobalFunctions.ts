
type UnknownObject = Record<string, unknown>

/**
 *  Convert data from SQL results, which are in a columnar format, into an array of objects.
 *  A second argument can be provided to output the data as an array of arrays instead.
 * @param data The data to be formatted
 */
function formatDataAsArray<T extends UnknownObject>(
  data: Record<keyof T, unknown[]>,
  outputArrayOfArrays?: boolean,
): (T extends UnknownObject ? Record<keyof T, T[keyof T]> : never)[] {}

/**
 * Converts an array of objects into a SQL object, which is in a columnar format.
 * @param data The data to be formatted
 */
function formatDataAsObject<T extends Record<string, any>>(data: T[]): { [K in keyof T]: T[K][] } {}
  