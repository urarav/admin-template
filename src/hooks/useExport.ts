import { blobValidate } from "@/utils/validate";
import { saveAs } from 'file-saver'
import { ElMessage } from "element-plus";

export async function useExport(api: Function, queryData: Record<keyof any, any>) {
    try {
        const { data, headers } = await api(unref(queryData))
        const { isStream, value } = await blobValidate(data)
        if (isStream) {
            const { 'content-disposition': contentDisposition } = headers
            const [, filename_encode] = contentDisposition.match(/filename=(.*).xls/) ?? []
            if (filename_encode) {
                const filename_decode = decodeURIComponent(filename_encode)
                saveAs(value, filename_decode)
            }
        } else {
            ElMessage.error(value.msg)
        }
    } catch (e) {
        console.warn(e)
    }
}
