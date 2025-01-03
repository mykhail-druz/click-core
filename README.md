# ClickCore Landing Page

Welcome to the **ClickCore Landing Page** repository! This project is designed to showcase an elegant and functional landing page built using modern technologies. It includes a multi-step form system integrated with Netlify Forms for seamless data submission.

---

## 🚀 Features

- **Multi-Step Form**: User-friendly, step-by-step form interface.
- **Data Validation**: Ensures all required fields are correctly filled before proceeding.
- **Responsive Design**: Fully optimized for all screen sizes.
- **Animations**: Smooth transitions powered by Framer Motion.
- **Integration with Netlify**: Direct form submission using Netlify Forms.

---

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast development
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Hook Form** for form state management
- **Netlify** for hosting and form submission

---

## 📂 Project Structure

```plaintext
click-core/
├── public/                 # Public assets
│   ├── images/             # Static images
│   ├── _static_forms.html  # Example static forms
│   ├── logo.svg            # Logo asset
├── src/                    # Source code
│   ├── components/         # Reusable components
│   ├── constants/          # Static data like form steps
│   ├── pages/              # Main pages of the app
│   ├── styles/             # TailwindCSS configuration
│   ├── types/              # Type definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application file
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles
├── .gitignore              # Ignored files for Git
├── .prettierrc             # Prettier configuration
├── .prettierignore         # Files ignored by Prettier
├── _redirects              # Netlify redirects file (SPA routing)
├── index.html              # Main HTML file
├── netlify.toml            # Netlify configuration
├── package.json            # NPM dependencies and scripts
├── tailwind.config.js      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🚧 Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mykhail-druz/click-core.git
   cd click-core
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

This project is optimized for deployment on **Netlify**. To deploy:

1. Push the repository to GitHub.
2. Connect the repository to your Netlify account.
3. Ensure the `_redirects` file is in the **root directory** for SPA routing.

---

## 📋 How to Contribute

We welcome contributions! To get started:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## 📧 Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: support@clickcore.com
- **GitHub Issues**: Open an issue in this repository.

---

Thank you for checking out ClickCore Landing Page! 🎉
