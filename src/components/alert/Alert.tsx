import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

export enum AlertSize {
    large = 'large',
    small = 'small',
}
export enum AlertType {
    success = 'success', 
    error = 'error',
    info = 'info',
    warning = 'warning',
    cool = 'cool',
    black = 'black',
    purple = 'purple',
    green = 'green',
    lovely = 'lovely'
}
export interface MenuProps {
    className?: string 
    size?: AlertSize  //大小（默认/large/small）
    title?: string  //标题
    desc?: string //描述文本
    type?: AlertType //卡片类型
    icon?: {} //图标
    center?: boolean  //垂直方向居中
    middle?: boolean  //水平方向居中
    onClose?: any  //关闭回调
    closable?: boolean  //是否显示关闭按钮
    autoclose?: boolean //自动关闭
    visible?: boolean  //控制显示隐藏
    setVisible: (value: React.SetStateAction<boolean>) => void //控制显示隐藏的函数
}
export default function Alert(props: MenuProps) {
    const {
        className,
        size,
        title = props.title ? props.title : '',
        desc = props.desc ? props.desc : '',
        type = props.type ? props.type : '',
        icon,
        center,
        middle,
        onClose,
        closable = props.closable === false ? false : true,
        autoclose,
        visible,
        setVisible
    } = props
    useEffect(() => {
        let timer: any
        if (autoclose) {
             timer = setTimeout(() => {
                setVisible(false)
            }, 5000)
        }
        return ()=>{
            clearTimeout(timer)
        }
    }, [visible])
    const classes = classNames('alert', className, {
        [`alert-${type}`]: type,
        [`alert-${size}`]: size,
        'alert-closable': closable ? true : false,
        'alert-with-icon': icon ? true : false,
        'alert-center': center ? true : false,
        'alert-middle': middle ? true : false
    })
    const ref = useRef<HTMLDivElement | null>(null)
    return (
        <>
            {visible ?
                <div
                    ref = {ref}
                    className={classes}>
                    <span>{title}</span>
                    {desc ? <p className='desc'>{desc}</p> : null}
                    {closable ?
                        <span className='lil-close' onClick={(e) => {
                            onClose(ref.current)
                            setVisible(false)
                        }}>
                            <i>✖</i>
                        </span>
                        : null
                    }
                </div>
                : null}
        </>
    )
}
