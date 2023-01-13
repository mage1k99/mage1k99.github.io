import { defineNuxtConfig } from "nuxt/config";
import transformerDirective from "@unocss/transformer-directives";
const builtAt = new Date().toISOString();

export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },
  modules: [
    [
      "@unocss/nuxt",
      {
        uno: true,
        icons: true,
        attributify: true,
        shortcuts: [],
        transformers: [transformerDirective()],
        rules: [],
        theme: {
          colors: {
            heading: "#2E2E2E",
            subheading: "#16221C",
            body: "#555555",
          },
        },
      },
    ],
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lexend: true,
          Inter: [400],
        },
      },
    ],
  ],
  css: ["normalize.css", "assets/css/style.css"],
  app: {
    head: {
      titleTemplate: "%s - MageshBabu",
      title: "MageshBabu",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Developer with experince in working in full stack applications and deploying them. also has experince in creating mobile applications",
        },
        { name: "msapplication-TileColor", content: "#603cba" },
        { name: "theme-color", content: "#ffffff" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@mage1k99" },
        {
          property: "twitter:title",
          content: "MageshBabu - A Developer",
        },
        {
          property: "twitter:description",
          content:
            "Developer with experince in working in full stack applications and deploying them. also has experince in creating mobile applications",
        },
        {
          property: "twitter:image",
          content: "/images/seo_cover.webp",
        },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "og:type", content: "website" },
        { property: "og:updated_time", content: builtAt },
        { property: "og:title", content: "MageshBabu - A Developer" },
        {
          property: "og:description",
          content:
            "Developer with experince in working in full stack applications and deploying them. also has experince in creating mobile applications",
        },
        {
          property: "og:image",
          content: "/images/seo_cover.webp",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicons/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons//apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicons/site.webmanifest" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/favicons/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/favicons/android-chrome-512x512.png",
        },
      ],
    },
  },
});
