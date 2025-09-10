import type { SVGProps } from "react"
import type { JSX } from "react/jsx-runtime"

export const ClockIcon = (args: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (<svg width="12" height="11" viewBox="0 0 12 11" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" {...args}>
        <path d="M6 0.25C8.8995 0.25 11.25 2.60051 11.25 5.5C11.25 8.3995 8.8995 10.75 6 10.75C3.10051 10.75 0.75 8.3995 0.75 5.5C0.75 2.60051 3.10051 0.25 6 0.25ZM6 2.52539C5.66977 2.52539 5.40234 2.79282 5.40234 3.12305V5.5C5.40234 5.56731 5.41308 5.632 5.43359 5.69238C5.46214 5.77648 5.5101 5.8558 5.57715 5.92285L7.18066 7.52734C7.41406 7.7607 7.79284 7.76049 8.02637 7.52734C8.25986 7.29385 8.25984 6.91515 8.02637 6.68164L6.59766 5.25195V3.12305C6.59766 2.79288 6.33014 2.5255 6 2.52539Z" />
    </svg>
    )
}