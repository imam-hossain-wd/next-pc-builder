I successfully implemented the following tasks as part of this project:

Built a clean and intuitive PC Builder website using Next.js.
Created a responsive navigation bar with a "PC Builder" button and "Categories" dropdown.
Developed a home page with featured products and clickable category sections.
Designed featured category sections with clickable links and product cards.
Designed a product detail page with comprehensive component details.
Developed the PC Builder tool with category-specific "Choose" buttons and component cards.
Integrated "Add to Builder" functionality to assemble custom PC configurations.
Implemented user authentication using NextAuth with social login providers.
Added success alerts upon completing a PC build.


The PC Builder website is a comprehensive platform developed using Next.js that allows users to create custom PC configurations by selecting various components. The website includes several key features:

Navigation:

The website features a navigation bar with a "PC Builder" button that directs users to the PC Builder tool.
A "Categories" dropdown offers quick access to different component categories, each with its corresponding route.

Home Page:

The home page showcases a selection of 6 random "Featured Products" to entice users.
Each featured product card displays essential details like image, product name, category, price, availability status, rating, and a link to the product detail page.
Users can explore product categories via clickable sections.
Featured Category Sections:

Clicking on a featured category redirects users to a page displaying 3 products from that category.
Product cards on this page present details like image, name, category, price, status, rating, and a link to the product detail page.
Product Detail Page:

The product detail page provides in-depth information about each PC component.
Details include image, name, category, availability status, price, description, key features, individual and average ratings, and user reviews.
PC Builder Page:

The PC Builder tool allows users to assemble their custom PCs.
Categories (CPU, RAM, etc.) feature "Choose/Select" buttons, leading to pages displaying available components.
Component cards on these pages show relevant details and an "Add to Builder" button.
Clicking "Add to Builder" adds the selected component to the user's configuration.
Complete Build and User Authentication (Bonus):

Users can build a complete PC configuration by selecting components from different categories (at least 5-6 components).
The "Complete Build" button confirms a successful build and triggers a success alert.
User authentication is implemented using NextAuth with social login providers (Google/Github).
The PC Builder page is protected and accessible only to logged-in users.
Responsive Design:

The entire website is designed to be responsive, ensuring optimal user experience on both desktop and mobile devices.
Additional Features:

The home page includes a hero/banner section and a footer to enhance its aesthetics and usability.
Completed Tasks:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel



