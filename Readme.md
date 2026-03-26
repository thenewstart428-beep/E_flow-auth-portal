# E‑Flow Auth Portal

E‑Flow is a small prototype authentication system I built while learning how to structure multi‑page web applications.  
It includes a landing page, a signup page, and a login page.  
The goal of this project was to practice form handling, validation, and basic session simulation.

## Pages

- **index.html** — Landing page with navigation
- **signup.html** — Signup form with validation
- **login.html** — Login form with fake session message

## Features

- Email + password signup
- Email + password login
- Basic client-side validation
- Fake session message after login
- Shared CSS and JS across all pages
- Simple navigation bar

## Functions

### `setupSignup()`
Attaches a submit handler to the signup form, validates fields, and simulates a signup flow.  
This function later evolved into the real Supabase signup logic in my ecommerce project.

### `setupLogin()`
Attaches a submit handler to the login form, validates fields, and simulates a login flow.  
This function became the foundation for my final project's login system.

## Why this project exists

This was one of my early experiments with multi‑page structure and form handling.  
It helped me understand:

- How to attach JS to multiple pages
- How to validate user input
- How to simulate sessions
- How to organise shared CSS and JS

These ideas directly influenced the authentication system in my final ecommerce project.
