# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Task Explaination

Use the Fake Store API to fetch a list of products. // done
Display the fetched products in a user-friendly format on the main page. // done 
Each product should display key information, such as the product image, title, price, and add to cart button. // done
When the add to cart button is clicked it should add the product in the cart. // done
When the product is already added to the cart display the Alert with the message  “Item already added to the cart”. // done
Ensure that the products are displayed in a responsive layout. // done
Display the current cart items count in a Navbar component. // done
A modal should open, If a user clicks the "Cart" button which contains no.of.products in the cart. // done
The modal should display all the products which are added in the cart. // done
Include a "Remove from Cart" button for all the products within the modal, when clicked, removes the product from the cart. // done
Pass necessary data (product details, cart state, etc.) down to the child components using props. // done
Ensure that the cart value updates correctly when products are added. // done
Clean, readable, and well-documented code. // done
A responsive design that works well on both desktop and mobile devices. // done

