export const embedConfig = {
  version: "next",
  imageUrl:
    "https://res.cloudinary.com/dsrjjqkjs/image/upload/v1756788827/ff2decf2-f11a-45e0-b948-ba2da9f5b65c-removebg-preview_e5tt1p.png",
  button: {
    title: "Add your Beat",
    action: {
      type: "launch_frame",
      name: "The Book of Zora",
      url: "https://boz-frontend.vercel.app/",
    },
  },
} as const;

/**
 * Main App Configuration
 */
export const config = {
  embed: embedConfig,
} as const;
