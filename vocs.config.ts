import { defineConfig } from "vocs";

export default defineConfig({
  title: "Wallet V2 Quickstart",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Environment Setup",
      link: "/environment-setup",
    },
    {
      text: "Examples",
      items: [
        {
          text: "Create an EVM Account",
          link: "/create-evm-account",
        },
        {
          text: "Fund an EVM Account",
          link: "/fund-evm-account",
        },
        {
          text: "Create an EVM Smart Account",
          link: "/create-smart-account",
        },
        {
          text: "General Transactions",
          link: "/general-transactions",
        },
      ],
    },
    {
      text: "Deploy",
      items: [
        {
          text: "Next.js Project",
          link: "/next-project-deployment",
        },
      ],
    },
  ],
});
