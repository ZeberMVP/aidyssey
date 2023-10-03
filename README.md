# AIdyssey
Welcome to [AIdyssey](https://aidyssey.vercel.app/), the AI-powered SaaS. Here, you can inquire, generate code snippets, images, short music compositions, and videos – all with the assistance of OpenAI and Replicate APIs. You're entitled to up to 5 free generations. After that, you'll need to subscribe to a pro plan (which is not genuine – I'll explain later how you can subscribe for free).

**WARNING: This project is purely for demonstration purposes. While all features are operational, please note that AIdyssey is not an actual company, nor is it generating any profits.**

## Features
- **Landing Page**: Users are greeted with a landing page before signing in.
- **Authentication**: Utilize [Clerk](https://clerk.com/) for authentication, including Oauth sign-up with Google, GitHub, and Discord. Also support email and password sign-up, as well as password reset functionality.
- **Dashboard**: Present users with an organized dashboard featuring a collapsible sidebar for easy navigation.
- **Content Generation**: Enable users to generate various types of content, including conversations, images, videos, music, and code snippets.
- **Free Generations**: Offer users 5 complimentary content generations, clearly displayed with a counter to track usage.
- **Subscription Plans**: Provide the option for users to subscribe to a premium plan using [Stripe](https://stripe.com/)
- **Subscription Management**: Allow users to manage their subscription through the settings page.

## Tips
- **Sign In for Dashboard Access**: Access to the dynamic dashboard, where all the exciting features are available, requires signing in.
- **Subscription for Continued Usage**: To continue enjoying uninterrupted access beyond the usage limit, it's necessary to subscribe to the pro plan.
- **Using a Fake Stripe Card**: To test the subscription process, you can employ a mock Stripe card. Feel free to use the following details:
   - 4242 4242 4242 4242
   - Any valid expiration date (for example 05/55)
   - Any name
   - Any CVV (for example 555)

## Technologies I used
<p align="left">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>
<a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a>
<a href="https://www.prisma.io/" target="_blank" rel="noreferrer"><img src="readme_files/prisma.png" width="36" height="36" alt="Prisma" /></a>
<a href="https://clerk.com/" target="_blank" rel="noreferrer"><img src="readme_files/clerk.png" width="36" height="36" alt="Clerk" /></a>
<a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer"><img src="readme_files/shadcn-ui.png" width="36" height="36" alt="shadcn/ui" /></a>
<a href="https://stripe.com/" target="_blank" rel="noreferrer"><img src="readme_files/stripe.png" width="36" height="36" alt="Stripe" /></a>
</p>

## Views from the web app
![image](https://github.com/ZeberMVP/aidyssey/assets/106594858/31ae298b-a48a-4129-8174-963414811639) <br> <br>
![image](https://github.com/ZeberMVP/aidyssey/assets/106594858/fb7a47e8-bf2a-4cee-9a5c-445b6cbd0d90) <br> <br>

