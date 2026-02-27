# Specification

## Summary
**Goal:** Add a Job Application form section to the Gulf Careers Portal so that visitors can submit their details directly on the site.

**Planned changes:**
- Create a new `ApplicationSection.tsx` component with a form containing fields for Full Name, Email, Phone Number, Nationality, Position Applied For, Years of Experience, and Resume/CV upload
- Apply client-side validation (required fields, valid email format) and show a success message on submission
- Style the form to match the existing site theme (colors, typography, card styling)
- Render `ApplicationSection` in `App.tsx`
- Link the Hero section's "Apply" button to scroll to `ApplicationSection`
- Add an "Apply Now" navigation link in the Header (desktop and mobile menus) that smoothly scrolls to `ApplicationSection`

**User-visible outcome:** Users can navigate to or scroll to a job application form from both the header menu and the hero section's Apply button, fill in their details and upload a CV, and receive a success confirmation after submitting.
