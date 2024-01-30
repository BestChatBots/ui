/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function interopDefaultCJSImport<T>(module: T): T {
  // eslint-disable-next-line no-underscore-dangle
  // @ts-ignore
  if (module.__esModule) {
    // @ts-ignore
    return module.default;
  }

  return module;
}
