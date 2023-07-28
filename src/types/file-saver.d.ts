declare module 'file-saver' {
  export function saveAs(blob: Blob | string, name: string, opt?: { autoBom: boolean }): void
}
