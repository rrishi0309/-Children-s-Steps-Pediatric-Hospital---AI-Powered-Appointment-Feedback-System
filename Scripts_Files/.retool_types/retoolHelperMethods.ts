
type UnknownObject = Record<string, unknown>

declare interface ToolMethods {
  /**
   * Returns a copy of an array in which the specified indices are swapped.
   * Returns the original array if the indices are invalid.
   * @param arr The array in which indices are to be swapped
   * @param indexA A valid index in the array
   * @param indexB A valid index in the array
   */
  swap: function swap<T>(arr: T[], indexA: number, indexB: number): T[]

  /**
   *  Convert data from SQL results, which are in a columnar format, into an array of objects.
   *  A second argument can be provided to output the data as an array of arrays instead.
   * @param data The data to be formatted
   */
  formatDataAsArray: function formatDataAsArray<T extends UnknownObject>(
    data: Record<keyof T, unknown[]>,
    outputArrayOfArrays?: boolean,
  ): (T extends UnknownObject ? Record<keyof T, T[keyof T]> : never)[]
  
  /**
   * Converts an array of objects into a SQL object, which is in a columnar format.
   * @param data The data to be formatted
   */
  formatDataAsObject: function formatDataAsObject<T extends Record<string, any>>(data: T[]): { [K in keyof T]: T[K][] }
}

    declare var _tool: ToolMethods
    