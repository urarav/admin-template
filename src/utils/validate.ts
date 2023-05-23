const isExternal = (path: string): boolean => /^(https?:|mailto:|tel:)/.test(path)

export { isExternal }
