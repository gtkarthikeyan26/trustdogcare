import React, { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { Apple2Icon } from '../../atoms/icons';
import { TRANSLATION_KEY } from '../../constants';
import { useTranslation } from 'react-i18next';

export type SocialLoginButtonProps = ComponentPropsWithoutRef<'button'>;
const iconStyles = '!mr-2 h-6 w-6 text-black';

const SocialLoginButton = forwardRef<HTMLButtonElement, SocialLoginButtonProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ className = null, children, type = 'button', ...rest }, ref) => {
        return (
            <>
                <button
                    ref={ref}
                    className="nowrap bg-white inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-solid border-grey-300 p-4 font-semibold text-grey-700 hover:bg-grey-100 active:opacity-40 disabled:bg-grey-100"
                    type={type}
                    {...rest}
                >
                    {children}
                </button>
            </>
        );
    }
);

export default SocialLoginButton;

export const FacebookLoginButton = forwardRef<
    HTMLButtonElement,
    SocialLoginButtonProps
>((props, ref) => {
    return (
        <SocialLoginButton ref={ref} {...props}>
            <div className="mr-2 flex h-[48px] w-[20px] flex-col justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 21 20"
                >
                    <g>
                        <path
                            fill="#0866FF"
                            d="M20.5 10c0-5.523-4.477-10-10-10S.5 4.477.5 10c0 4.69 3.229 8.625 7.584 9.706v-6.65H6.022V10h2.062V8.683c0-3.403 1.54-4.981 4.882-4.981.634 0 1.727.124 2.174.248v2.77a12.83 12.83 0 00-1.155-.037c-1.64 0-2.274.621-2.274 2.236V10h3.267l-.561 3.056H11.71v6.87C16.663 19.33 20.5 15.114 20.5 10z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M14.417 13.056l.56-3.056h-3.266V8.92c0-1.616.634-2.237 2.274-2.237.509 0 .919.013 1.155.038V3.95c-.447-.125-1.54-.25-2.174-.25-3.341 0-4.882 1.579-4.882 4.982V10H6.022v3.056h2.062v6.65a10.023 10.023 0 003.627.22v-6.87h2.706z"
                        ></path>
                    </g>
                </svg>
            </div>
            {props.children}
        </SocialLoginButton>
    );
});

export const AppleLoginButton = forwardRef<
    HTMLButtonElement,
    SocialLoginButtonProps
>((props, ref) => {
    const { t } = useTranslation(TRANSLATION_KEY);
    return (
        <SocialLoginButton ref={ref} {...props}>
            <Apple2Icon className={iconStyles} />
            {t('components_social_login', { provider: 'Apple' })}
        </SocialLoginButton>
    );
});
