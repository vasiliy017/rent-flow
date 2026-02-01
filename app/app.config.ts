export default defineAppConfig({
    ui: {
        primary: 'indigo',
        gray: 'zinc',
        button: {
            rounded: 'rounded',
            font: 'font-normal font-sans',
            default: {
                size: 'xl',
                variant: 'solid',
                color: 'primary'
            },
            padding: {
                xl: 'px-8 py-5'
            },
            size: {
                xl: 'text-[20px] leading-[24px]'
            },
            variant: {
                solid: 'bg-[#0B6FDD] text-white hover:bg-[#0550AE] focus-visible:ring-2 focus-visible:ring-[#0B6FDD]',
                outline: 'ring-1 ring-[#D1E8FA] text-[#0B6FDD] bg-transparent hover:bg-[#BEE0FB] focus-visible:ring-2 focus-visible:ring-[#0B6FDD]',
                ghost: 'text-[#0C4D94] bg-[#F0F4F8] hover:bg-[#D1E8FA] focus-visible:ring-2 focus-visible:ring-[#0B6FDD]'
            }
        }
    }
})
