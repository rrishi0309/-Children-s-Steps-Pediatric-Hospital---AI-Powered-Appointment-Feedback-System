// It's important that the selector is listed first, so that it doesn't get truncated in the type hint
type RetoolArrayWrapper<selector, T extends Readonly<Array<any>>, L = number> = Omit<T, 'length'> & {
  length: L
  selector: selector
}
