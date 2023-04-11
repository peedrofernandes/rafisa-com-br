import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

export default function useImgUrl(url) {
  return `${publicRuntimeConfig.basePath}${url}`
}