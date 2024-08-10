import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { users } from "./appwrite.config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.log(error);
  }
};

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);
