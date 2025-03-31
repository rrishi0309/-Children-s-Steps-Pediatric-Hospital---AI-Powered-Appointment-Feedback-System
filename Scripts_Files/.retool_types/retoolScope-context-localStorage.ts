const localStorage = {
  "_selector": ["localStorage"] as const,
    /**
  * Store a value to Retool's localStorage
  * @param key
  * @param newValue
  **/
  setValue: (key: string | number, newValue: object | number | boolean | string | void): unknown => undefined as unknown,
  /**
  * Clears all keys and values from Retool's localStorage
  **/
  clear: (): unknown => undefined as unknown,
  "values": {
    "_selector": ["localStorage","values"] as const
  } as const
} as const
