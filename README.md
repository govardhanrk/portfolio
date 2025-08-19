# PortfolioAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.1.

## 🚀 Quick Start

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Environment Setup

1. Copy the environment template:
```bash
cp env.example .env
```

2. Update `.env` with your actual Formspree form ID:
```
FORMSPREE_FORM_ID=your_actual_form_id_here
```

## 🛠️ Development

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## 🚀 Deployment

### Vercel Deployment

This project is configured for deployment on Vercel with secure environment variable handling.

1. **Connect to Vercel**: Link your GitHub repository to Vercel
2. **Set Environment Variables**: Add `FORMSPREE_FORM_ID` in Vercel dashboard
3. **Deploy**: Vercel will automatically build and deploy your application

For detailed deployment instructions, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

### Environment Variables

- `FORMSPREE_FORM_ID`: Your Formspree form ID for contact form functionality

## 📚 Documentation

- [Email Setup Guide](./EMAIL_SETUP.md) - Configure contact form with Formspree
- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md) - Complete deployment instructions
- [Environment Configuration](./src/environments/) - Environment setup details

## 🔒 Security

✅ **Environment Variables**: All sensitive data stored as environment variables
✅ **Git Safe**: Environment files excluded from version control
✅ **Production Ready**: Configured for secure deployment

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
