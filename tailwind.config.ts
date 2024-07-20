import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import flowbite from "flowbite-react/tailwind";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      "very-dark-navy": "#0B0D17", 
      "light-blue": "#D0D6F9",
      "white": "#FFFFFF",
    },
    extend: {
        backgroundImage: {
            'home-bg-desktop': "url('/home/background-home-desktop.jpg')",
            'home-bg-tablet': "url('/home/background-home-tablet.jpg')",
            'home-bg-mobile': "url('/home/background-home-mobile.jpg')",
            "destination-bg-desktop": "url('/destination/background-destination-desktop.jpg')",
            "destination-bg-tablet": "url('/destination/background-destination-tablet.jpg')",
            "destination-bg-mobile": "url('/destination/background-destination-mobile.jpg')",
            "crew-bg-desktop": "url('/crew/background-crew-desktop.jpg')", 
            "crew-bg-tablet": "url('/crew/background-crew-tablet.jpg')",
            "crew-bg-mobile": "url('/crew/background-crew-mobile.jpg')",
            "technology-bg-desktop": "url('/technology/background-technology-desktop.jpg')",
            "technology-bg-tablet": "url('/technology/background-technology-tablet.jpg')",
            "technology-bg-mobile": "url('/technology/background-technology-mobile.jpg')",
        }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }){
      addUtilities({
        ".desktop-heading-xl": {
          fontSize: "144px",
          fontFamily: "var(--font-bellefair)",
        },
        ".desktop-heading-l": {
          fontSize: "100px", 
          fontFamily: "var(--font-bellefair)"
        }, 
        ".desktop-heading-m": {
          fontSize: "56px", 

          fontFamily: "var(--font-bellefair)"
        },
        ".desktop-heading-s": {
          fontSize: "32px", 
          fontFamily: "var(--font-bellefair)"
        },
        ".desktop-heading-xs": {
          fontSize: "28px", 
          letterSpacing: "4px",
          fontFamily: "var(--font-barlow-condensed)"
        },
        ".desktop-subheading-l": {
          fontSize: "28px",
          fontFamily: "var(--font-bellefair)"
        },
        ".desktop-subheading-s": {
          fontSize: "14px",
          letterSpacing: "2px",
          fontFamily: "var(--font-barlow-condensed)"
        },
        ".desktop-nav-text": {
          fontSize: "16px",
          letterSpacing: "2px",
          fontFamily: "var(--font-barlow-condensed)"
        },
        ".desktop-body": {
          fontSize: "18px",
          fontFamily: "var(--font-barlow)"
        },
        ".tablet-heading-l": {
          fontSize: "80px", 
          fontFamily: "var(--font-bellefair)"
        },
        ".tablet-heading-m": {
          fontSize: "40px", 
          fontFamily: "var(--font-bellefair)"
        },
        ".tablet-heading-s": {
          fontSize: "24px", 
          fontFamily: "var(--font-bellefair)"
        },
        ".tablet-heading-xs": {
          fontSize: "20px", 
          fontFamily: "var(--font-barlow-condensed)"
        },
        ".tablet-body":{
          fontSize: "16px", 
          fontFamily: "var(--font-barlow)"
        },
        ".mobile-heading-xl": {
          fontSize: "80px", 
          fontFamily: "var(--font-bellefair)"
        },
        ".mobile-heading-l": {
          fontSize: "56px", 
          fontFamily: "var(--font-bellefair)"
        },
        ".mobile-heading-m": {
          fontSize: "24px", 
          fontFamily: "var(--font-bellefair)"
        },
        ".mobile-heading-s": {
          fontSize: "18px", 
          fontFamily: "var(--font-bellefair)"
        },
        ".mobile-heading-xs": {
          fontSize: "16px", 
          fontFamily: "var(--font-barlow-condensed)"
        },
        ".mobile-nav-text": {
          fontSize: "14px", 
          letterSpacing: "2px",
          fontFamily: "var(--font-barlow-condensed)"
        },
        ".mobile-body": {
          fontSize: "15px", 
          fontFamily: "var(--font-barlow)"
        },
      });
    }),
    flowbite.plugin(),
  ],
};
export default config;
