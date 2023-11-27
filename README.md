# React + Vite


## Button组件

<p align="center" >
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/button.png"/>
</p>
| 属性 | 类型 | 值 |
| --- | --- | --- |
| className | string |  |
| children | React.ReactNode |  |
| btnType
 | ButtonType  | enum{
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
取其一 |
| size | ButtonSize | enum{
small = 'small',
large = 'large',
huge = 'huge'
}
取其一 |
| disabled | boolean |  |
| loading（是否加载状态） | boolean |  |
| ghost（是否幽灵按钮） | boolean |  |



## Alert组件

<p align="center" >
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert1.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert2.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert3.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert4.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert5.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert6.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert7.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert8.png"/>
  <img align="center" src="https://github.com/SnakeLil/SnakeLil/blob/main/static/components/alert9.png"/>
</p>
| 属性 | 类型 | 值 |
| --- | --- | --- |
| className | string |  |
| children | React.ReactNode |  |
| visible(//控制显示隐藏) | boolean   |  |
| setVisible( //控制显示隐藏的函数) | (value: React.SetStateAction<boolean>) => void |  |
| title | string |  |
| desc | string |  |
| type | AlertType | enum AlertType {
    success = 'success', 
    error = 'error',
    info = 'info',
    warning = 'warning',
    cool = 'cool',
    black = 'black',
    purple = 'purple',
    green = 'green',
    lovely = 'lovely'
} |
| icon |  |  |
| center（ //垂直方向居中） | boolean |  |
| middle（ //水平方向居中） | boolean  |  |
| onClose（ //关闭回调） | （）⇒void |  |
| closable(//是否显示关闭按钮) | boolean  |  |
| autoclose(//自动关闭/ 5s) | boolean  |  |
