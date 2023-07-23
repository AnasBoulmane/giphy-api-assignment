# Giphy API Assignment

This repository contains the solution for the Full Stack Developer take-home assignment as described [here](https://chihabjraoui.notion.site/Take-Home-Assignment-Full-Stack-Developer-782d9ae4efb4454d914c735f2f468381).

## Overview

The application is a simple web-based GIF search tool that uses the Giphy API. It allows users to search for GIFs by entering a search term. The results are displayed in a grid format, and users can load more GIFs by clicking a button.

## Features

- **Search**: Users can search for GIFs using any keyword. The search is debounced to optimize performance and reduce unnecessary API calls.
- **Manual Pagination**: Users can load more GIFs by clicking a button, providing a seamless experience.
- **Error Handling**: Proper error handling is implemented for the API calls.
- **State Management**: The application uses Zustand for state management, keeping track of the search term, the list of GIFs, and the pagination data.
- **Image Loading State**: The application keeps track of the loading state of each image, displaying a placeholder until the image is fully loaded.

## Tech Stack

The application is built using Next.js, TypeScript, and Zustand for state management. It is styled using Tailwind CSS.

## Setup

Instructions for setting up the project locally are provided in the README. You will need to provide your own Giphy API key in a `.env` file.

## Live Demo

A live demo of the application is available at [link-to-live-demo](https://giphy-api-assignment.vercel.app/).

Please note that the actual performance may vary depending on the rate limits of the Giphy API.

## Future Improvements

While the application is fully functional, there are several potential improvements that could be made in the future, such as:

- **Infinite Scroll**: As users scroll down, more GIFs could be loaded automatically, providing an "infinite scroll" experience.
- **React Query**: The application could use React Query for data fetching, caching, and automatic background updates. This would provide a smooth user experience and optimize performance.
- Adding tests, improving accessibility, and adding more features like GIF detail view, user favorites, etc.
