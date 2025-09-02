import type { SVGProps } from "react"
import type { JSX } from "react/jsx-runtime"

export const SuccessResultIcon = (ages: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...ages}>
        <path opacity="0.2" d="M45 1.73205C46.8564 0.660255 49.1436 0.660254 51 1.73205L86.5692 22.268C88.4256 23.3397 89.5692 25.3205 89.5692 27.4641V68.5359C89.5692 70.6795 88.4256 72.6603 86.5692 73.732L51 94.268C49.1436 95.3397 46.8564 95.3397 45 94.268L9.43078 73.732C7.57438 72.6603 6.43078 70.6795 6.43078 68.5359V27.4641C6.43078 25.3205 7.57438 23.3397 9.43078 22.268L45 1.73205Z" fill="#00CFF4" />
        <path d="M45 14.7321C46.8564 13.6603 49.1436 13.6603 51 14.7321L76.1769 29.268C78.0333 30.3397 79.1769 32.3205 79.1769 34.4641V63.5359C79.1769 65.6795 78.0333 67.6603 76.1769 68.7321L51 83.268C49.1436 84.3397 46.8564 84.3397 45 83.268L19.8231 68.7321C17.9667 67.6603 16.8231 65.6795 16.8231 63.5359V34.4641C16.8231 32.3205 17.9667 30.3397 19.8231 29.268L45 14.7321Z" fill="url(#paint0_linear_2589_75713)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M64.745 38.8429L60.9715 35.0693L42.104 53.9368L35.0284 46.8612L31.2549 50.6348L38.3305 57.7103L38.3303 57.7105L42.1038 61.484L64.745 38.8429Z" fill="white" />
        <defs>
            <linearGradient id="paint0_linear_2589_75713" x1="84.5505" y1="133.835" x2="111.16" y2="-40.3862" gradientUnits="userSpaceOnUse">
                <stop stop-color="#01FEAB" />
                <stop offset="0.575" stop-color="#00CFF4" />
            </linearGradient>
        </defs>
    </svg>

}