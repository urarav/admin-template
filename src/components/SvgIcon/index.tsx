import type { SetupContext } from 'vue'

const SvgIcon = (
  props: { 'icon-class': string; 'class-name'?: string },
  { slots }: SetupContext
) => {
  const { 'icon-class': iconClass, 'class-name': className } = props
  const iconName = `#icon-${iconClass}`
  const svgClass = className ? `svg-icon ${className}` : 'svg-icon'
  return (
    <el-icon>
      {slots.default ? (
        slots.default()
      ) : (
        <svg aria-hidden={true} class={svgClass}>
          <use xlinkHref={iconName}></use>
        </svg>
      )}
    </el-icon>
  )
}

export default SvgIcon
