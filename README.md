# Task Overview
You are tasked with implementing a persistent theme toggling feature in a React application using a custom hook. The goal is to enable users to easily switch between light and dark modes, with their choice immediately reflected in the UI and reliably saved across browser reloads.

# Guidance
- Focus on implementing a reusable custom hook to handle theme logic.
- Ensure theme selection persists using browser local storage.
- Remember to respect the user's system theme preference when no prior selection exists.
- Apply theme changes directly to the page to provide immediate UI feedback.
- The toggle should be easily accessible and have responsive feedback.

# Objectives
- Create a custom hook that manages theme state, initialization, toggling, and persistence.
- Integrate the hook with the main app so that users can switch themes via a button.
- Guarantee that the theme updates instantly and is remembered after a page reload.
- Ensure the app applies the correct appearance by updating the document body to reflect the selected theme.

# How to Verify
- Start the application and check that the correct theme is applied based on the user's preference or system settings.
- Confirm that toggling the theme updates the UI immediately.
- Refresh the page and ensure the last chosen theme is retained and correctly reflected in the interface.
- Test on both light and dark system preferences, and observe that the default is correct when local storage is cleared.