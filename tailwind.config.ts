import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundBtnColor: {
                gradient: "linear-gradient(180deg, #F18101 0%, #DF3F00 100%)",
            },
            colors: {
                bg_notes: '#FFDABF',
                new_order: '#F16101',
                text_new_order: '#E67524',
                text_delivered_order: '#37AA73',
                text_transit: '#3750AA',
                text_packaging: '#292F3D',
                transmit_order: '#3750AA1A',
                bg_delivered_order: '#37AA731A',

                cancel_order: '#D51E33',
                return_order: '#111827',
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
} satisfies Config;
