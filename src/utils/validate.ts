const isExternal = (path: string): boolean => /^(https?:|mailto:|tel:)/.test(path)

const blobValidate = async (blob: Blob) => {
    try {
        const resText = await blob.text()
        const text = JSON.parse(resText)
        return { isStream: false, value: text }
    } catch (e) {
        return { isStream: true, value: blob }
    }
}

export { isExternal, blobValidate }
