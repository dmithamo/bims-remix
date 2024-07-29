import { type ChangeEventHandler, type ReactElement } from 'react';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  GapOption,
  JustifyOption,
} from '~/components/flex/flex-container';
import { WidthOption } from '~/components/utils/styles.utils';
import { elementRounding } from '~/utils/styling-constants';
import { type InputType } from '~/components/utils/enums';
import { getInputPattern } from '~/utils/validators/input-validation';
import { clsx } from 'clsx';

interface Props {
  name?: string;
  label?: string;
  type?: InputType;
  placeholder?: string;
  error?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isDisabled?: boolean;
  required?: boolean;
}

export const InputField = (props: Props): ReactElement => {
  const {
    name,
    label,
    placeholder,
    type,
    error,
    value,
    onChange,
    isDisabled,
    required,
  } = props;

  const inputPattern = type ? getInputPattern(type) : undefined;

  return (
    <label htmlFor={name} className={'w-full'}>
      <FlexContainer
        width={WidthOption.full}
        direction={DirectionOption.column}
        align={AlignOption.start}
        justify={JustifyOption.start}
        gap={GapOption.minimum}>
        <p className={clsx('text-xs text-primary/75')}>{label}</p>

        <input
          className={clsx(
            'w-full py-2 px-3 sm:py-3',
            'text-base placeholder-slate-400',
            'bg-background-input/50',
            elementRounding,
            'border-2',
            'border-background-input',
            'focus:outline-none focus:border-black focus:ring-1 focus:ring-transparent focus:bg-white',
            'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none',
            {
              'border-error text-error focus:border-error focus:text-error':
                !!error,
            },
          )}
          name={name}
          type={type}
          placeholder={placeholder ?? label}
          value={value}
          onChange={event => {
            if (!onChange) return;
            if (inputPattern && !inputPattern.test(event.target.value)) {
              return;
            }

            onChange(event);
          }}
          autoComplete={'off'}
          disabled={isDisabled}
          required={required}
        />
        {error ? (
          <span className={clsx('text-sm text-error')}>{error}</span>
        ) : (
          <></>
        )}
      </FlexContainer>
    </label>
  );
};
