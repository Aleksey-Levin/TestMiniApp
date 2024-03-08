import clsx from "clsx"
import * as React from "react"
import { forwardRef } from "react"
import { Link } from "react-router-dom"

import classes from "./Button.module.scss"
import { ButtonSpinner } from './ButtonSpinner'

export type ButtonVariant = "primary" | 'secondary'
interface BaseButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant

  isDisabled?: boolean;
  isLoading?: boolean;
  size?: 'xsm' | 'sm' | 'md' | 'lg';
  fullSize?: boolean
}

export interface RegularButtonProps
  extends BaseButtonProps,
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  as: "button";
}

export interface AnchorButtonProps
  extends BaseButtonProps,
  React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as: "a";
  href: string;
}

export interface LinkButtonProps extends BaseButtonProps {
  as: "link";
  to: string;
}


export type ButtonProps =
  RegularButtonProps |
  AnchorButtonProps |
  LinkButtonProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    children,
    variant = "primary",
    isDisabled,
    isLoading,
    size,
      fullSize,
    ...other
  } = props

  const buttonClasses = clsx(classes.button, className, {
    [classes._primary]: variant === "primary",
    [classes._secondary]: variant === "secondary",
    [classes._xsm]: size === "xsm",
    [classes._sm]: size === "sm",
    [classes._md]: size === "md",
    [classes._lg]: size === "lg",
    [classes._fullSize]: fullSize,
  })

  if (other.as === "button") {
    return (
      <button
        ref={ref}
        className={buttonClasses}
        {...other}
        disabled={isDisabled}
      >
        {children}
        <ButtonSpinner isLoading={isLoading} />
      </button>
    )
  }

  if (other.as === "a") {
    return (
      <a className={buttonClasses} {...other}>
        {children}
        <ButtonSpinner isLoading={isLoading} />
      </a>
    )
  }

  if (other.as === "link") {
    return (
      <Link className={buttonClasses} {...other}>
        {children}
        {isLoading && (
          <ButtonSpinner isLoading={isLoading} />
        )}
      </Link>
    )
  }

  throw new Error("Button as prop must be one of: button, a, link")
})
