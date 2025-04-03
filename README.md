# Mary-2000-Frontend

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![GitHub last commit](https://img.shields.io/github/last-commit/Valentin387/mary-2000-frontend?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/Valentin387/mary-2000-frontend?style=for-the-badge)
![Pull Requests](https://img.shields.io/github/issues-pr/Valentin387/mary-2000-frontend?style=for-the-badge)

Welcome to the **Mary-2000 Frontend**, an Angular-based web application designed to interact with a meal recommendation API powered by OpenAI. This project provides a user-friendly interface for submitting meal preferences and chatting with an AI assistant, leveraging NgRx for state management and Bootstrap for styling.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Context
My grandma is the best cook in the family. I can proudly say that any success brought by any of us is due to the energy and nutrients gotten from her insanely crazy good cuisine. She has over 70 years of experience as a housewife, but she won’t last forever. To preserve the performance and future academic and economic success of the family, I need to learn to cook like her. I know how to use the different tools in a kitchen, so that’s not the problem. The challenge is that all she does comes from her spontaneous generation of unique recipes. For a month and a half, I documented her meals in a structured format saved inside a Google Sheet. I also had to include some legacy recipes where the template is basically: ingredients and cooking process. This project is my attempt to immortalize her culinary genius using technology.

However, it also serves as an Angular frontend template for any app that involves file searching with LLM's development keys

## Folder Structure
```bash
my-angular-project/
├── src/
│   ├── app/
│   │   ├── app-routing.module.ts   # Defines routes for navigation
│   │   ├── app.component.*         # Root component files
│   │   ├── app.module.ts           # Root module for dependency injection
│   │   ├── components/             # Reusable UI components
│   │   │   ├── navbar/             # Navigation bar
│   │   │   ├── about/              # About page
│   │   │   └── assistant/          # Core feature component
│   │   ├── services/               # Business logic and API calls
│   │   │   └── api.service.ts      # HTTP service for backend integration
│   │   └── store/                  # NgRx state management
│   │       ├── assistant.actions.ts   # Action definitions
│   │       ├── assistant.effects.ts   # Side effects (e.g., API calls)
│   │       ├── assistant.reducer.ts   # State updates
│   │       ├── assistant.selectors.ts # State queries
│   ├── environments/               # Configuration for dev/prod
│   ├── index.html                  # Entry point
│   ├── main.ts                     # Bootstrap file
│   └── styles.scss                 # Global styles
├── angular.json                    # Project config
├── package.json                    # Dependencies
└── tsconfig*.json                  # TypeScript configs

```

## Features
- **Meal Recommendation Form:** Select meal types (Desayuno, Almuerzo, Cena) and input preferences to get tailored suggestions.
- **Chat Interface:** Engage in a conversation with the AI assistant after submitting a meal request.
- **Responsive Design:** Built with Bootstrap for a seamless experience across devices.
- **State Management:** Uses NgRx Store for robust and predictable state handling.

## Prerequisites
Before running the project, ensure you have the following installed:

- **Node.js**: Version 20.x or later (recommended: 20.11.0)
- **npm**: Version 10.x or later (recommended: 10.2.3)
- **Angular CLI**: Version 18.x (recommended: 18.0.5)

Verify your versions with:

```bash
node -v
npm -v
ng version
```

## Installation and Running the Project

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/Valentin387/mary-2000-frontend.git
cd mary-2000-frontend
```

### 2. Install Dependencies
```bash
npm install
```
This installs all required packages, including Angular, NgRx, and Bootstrap.

### 3. Run the Development Server
```bash
npm run start
```
Alternatively, use `ng serve` directly.
The app will be available at `http://localhost:4200`.

### 4. Build for Production (Optional)
```bash
ng build --prod
```
Outputs the production-ready files to the `dist/` folder.

## Specifications

- **Angular Version:** 18.0.5
  - Built with Angular CLI 18.0.5 for a modern, module-based architecture.
- **NgRx Store Version:** 18.0.0
  - Uses `@ngrx/store` for state management, `@ngrx/effects` for side effects, and `@ngrx/store-devtools` for debugging.
- **Bootstrap Version:** 5.3.3 (via `@ng-bootstrap/ng-bootstrap` 17.0.0)
  - Provides responsive UI components, including modals and form controls.
- **TypeScript Version:** 5.4.5
  - Ensures type safety and modern JavaScript features.

Check exact versions in `package.json`:

```json
{
  "dependencies": {
    "@angular/core": "^18.0.5",
    "@ngrx/store": "^18.0.0",
    "@ngrx/effects": "^18.0.0",
    "@ngrx/store-devtools": "^18.0.0",
    "@ng-bootstrap/ng-bootstrap": "^17.0.0",
    "bootstrap": "^5.3.3",
    "typescript": "~5.4.5"
  }
}
```

## Usage

### 1. Navigate to the Assistant Page
- Open `http://localhost:4200` in your browser.
- The navbar provides links to the Assistant and About pages.

### 2. Submit a Meal Request
- Select a meal type (Desayuno, Almuerzo, Cena) from the dropdown.
- Enter preferences (up to 200 characters) in the textarea.
- Click "Submit" to send the request (currently pending backend CORS resolution).

### 3. Chat with the Assistant
- After submitting, type messages in the chat textarea and click "Send" to interact with the AI (once backend integration is complete).

- **Future Improvements:**
  - Enhance form validation and UI feedback.
  - Add unit tests for components and services.

## Contributing

Contributions are welcome! Please:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, reach out to [your-email@example.com](mailto:your-email@example.com).

