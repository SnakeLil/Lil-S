import React from 'react'
import classNames from 'classnames'
export enum ButtonSize {
  small = 'small',
  large = 'large',
  huge = 'huge'
}
export enum ButtonType {
  default = 'default',
  primary = 'primary',
  cool = 'cool',
  danger = 'danger',
  text = 'text',
  black = 'black',
  link = 'link',
  lovely = 'lovely',
  warm = 'warm',
  purple = 'purple',
  green = 'green',

}
interface BaseButtonProps {
  className?: string
  /** 按钮文本 */
  children?: React.ReactNode
  /** 按钮类型 */
  btnType?: ButtonType
  /** 按钮尺寸 */
  size?: ButtonSize
  /** 按钮是否禁用 */
  disabled?: boolean
  /** 按钮是否加载中 */
  loading?: boolean
  /** 按钮是否为幽灵按钮 */
  ghost?: boolean
  /** 按钮是否为圆角 */
  round?: boolean
  

  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
export default function Button(props:ButtonProps) {
  const {
    className,
    children,
    btnType = props.btnType?props.btnType:ButtonType.default,
    size,
    disabled = props.disabled?props.disabled : false,
    loading = false,
    ghost = false,
    round = false,
    ...restProps
  } = props
  const classes = classNames('btn',className,{
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`btn-ghost`]: ghost,
    [`btn-round`]: round,
    [`btn-loading`]: loading,
    [`btn-disabled`]: disabled,
    [`btn-link`] : btnType === ButtonType.link,
  })
  return (
    <button
    className={classes} 
    disabled = {disabled}
    {...restProps}
    >
      {children}
    </button>
  )
}
