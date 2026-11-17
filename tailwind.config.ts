import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ivory:'#F6F3ED', champagne:'#E8DFD1', gold:'#B79A70', ink:'#292927' }, fontFamily: { display:['Georgia','serif'] } } }, plugins: [] };
export default config;
