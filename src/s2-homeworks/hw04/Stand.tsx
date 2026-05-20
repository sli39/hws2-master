import React, { useState } from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'

const Stand = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)

    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                <SuperInputText
                    id={'hw4-super-input-like-old'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                />
                <SuperInputText
                    id={'hw4-super-input-with-error'}
                    value={inputValue}
                    onChangeText={setInputValue}
                    error={error}
                    onEnter={() => {
                        setError(inputValue.trim() ? '' : 'Error')
                        setInputValue('')
                    }}
                />
            </div>

            <div className={s.buttons}>
                <SuperButton id={'hw4-super-button-default'}>default</SuperButton>
                <SuperButton id={'hw4-super-button-red'} xType={'red'}>
                    red
                </SuperButton>
                <SuperButton id={'hw4-super-button-disabled'} xType={'red'} disabled>
                    disabled
                </SuperButton>
                <SuperButton id={'hw4-super-button-secondary'} xType={'secondary'}>
                    secondary
                </SuperButton>
            </div>

            <div className={s.checkboxes}>
                <SuperCheckbox
                    id={'hw4-super-checkbox-with-text'}
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                </SuperCheckbox>
                <SuperCheckbox
                    id={'hw4-super-checkbox-like-old'}
                    checked={checked}
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                />
            </div>
        </div>
    )
}

export default Stand

