import clsx from "clsx"
import { observer } from "mobx-react-lite"
import { ComponentProps, useEffect, useState } from 'react'
import {
  type Control,
  Controller, type FieldValues, type Path, RegisterOptions, UseFormSetValue,
} from 'react-hook-form'

import { numberToImg } from "../../../../lib/numbers/numberToImg.tsx"
import { filterData, IFilterData } from "../lib/filter.ts"
import classes from './Input.module.scss'

export interface ControlledInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  placeholder?: string
  rules?: RegisterOptions
  onChange?: () => void
  error?: unknown
  validateParams?: Omit<IFilterData, 'value'>
  setValue: UseFormSetValue<T>
}

export interface InputControlProps<T extends FieldValues> extends ComponentProps<'input'>{
  controlledInputProps: ControlledInputProps<T>
  isError?: boolean
  className?: string
  errorMessage?: string
  background?: string
}

export const Input = observer(<T extends FieldValues>({
  controlledInputProps,
  className,
  errorMessage,
  isError,
  background,
  ...inputProps
}: InputControlProps<T>) => {


  const [value, setValue] = useState<string>('')

  useEffect(() => {
    const value = filterData({
      value: controlledInputProps.control?._defaultValues[controlledInputProps.name] ?? '',
      ...controlledInputProps.validateParams,
    })
    if (value === undefined) return

    // @ts-ignore
    controlledInputProps.setValue(controlledInputProps.name, value)
    setValue(value)
  }, [controlledInputProps.control._defaultValues[controlledInputProps.name]])


  return (
    <Controller
      control={controlledInputProps?.control}
      name={controlledInputProps?.name}
      rules={controlledInputProps?.rules}
      render={({ field }) => (
        <label className={classes.wrapper}>
          <input
            {...inputProps}
            {...field}
            className={clsx(classes.input, {
              [classes._error]: isError,
            })}
            onChange={(e) => {
              const value = filterData({
                value: e.target.value,
                ...controlledInputProps.validateParams,
              })
              setValue(value)
              // @ts-ignore
              console.log(e)
              field.onChange({
                ...e,
                target: {
                  ...e.target,
                  value,
                },
              })
            }}
          />
          <img  className={classes.bgNumbers} src={background} />
          <div
            className={classes.numbers}
          >
            {numberToImg(value).map((item, index) => {
              if (!item) return null

              return (
                <div key={index} className={classes.imgResultContainer}>
                  <img src={item} />
                </div>
              )
            })}
          </div>
        </label>
      )}
    />
  )
})
