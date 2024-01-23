import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "Hello VuePress",
  description: "Just playing around",
  locales: {
    "/": {
      lang: "en-US",
      title: "ENGLISH",
    },
    "/it/": {
      lang: "it-IT",
      title: "ITALIAN",
    },
  },
  theme: defaultTheme({
    locales: {
      "/": {
        selectLanguageText: "Languages",
        selectLanguageName: "English",
        selectLanguageAriaLabel: "English",
        sidebar: {
          "/": [
            "home" /* home.md */,
            "link" /* link.md */,
          ],
        },
      },
      "/it/": {
        selectLanguageText: "Lingue",
        selectLanguageName: "Italiano",
        selectLanguageAriaLabel: "Italiano",
        sidebar: {
          '/it/': [
            "home" /* home.md */,
            {
              text: 'Link',
              link: 'link',
              rel: 'en/link.html',
            },
          ],
        }
      },
    },
  }),
});
