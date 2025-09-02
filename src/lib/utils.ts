import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DIAMOND_ADDRESS: `0x${string}` =
  "0x666F717bD00911ac9a391b1e75122E251cbaa1dc";

export const USDC_ADDRESS: `0x${string}` =
  "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913";

export const sleep = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slept");
    }, timeout);
  });
};
