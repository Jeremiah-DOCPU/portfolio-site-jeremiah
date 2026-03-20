/*
    Version 7 JavaScript file

    In this version, I added functionality for my contact form.
    When the form is submitted, the script takes the values entered
    by the user and opens their email client using a mailto link.

    This approach works for the assignment because I am not using
    a server-side language such as PHP.
*/

console.log("Version 6 loaded successfully.");

/*
    Select the contact form by its ID.
    This form only exists on the contact page.
*/
const contactForm = document.getElementById("contactForm");

/*
    Only add this functionality if the form exists.
    This prevents errors on pages that do not include the form.
*/
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        /*
            Prevent the browser from submitting the form normally.
            I do this because I want to generate a custom mailto link instead.
        */
        event.preventDefault();

        /*
            Get the values entered into the form fields.
        */
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        /*
            Create the subject line for the email.
            encodeURIComponent makes the text safe to include in a URL.
        */
        const subject = encodeURIComponent("Portfolio Website Contact");

        /*
            Create the body of the email in a clean format.
            This avoids showing name=, email= and message=.
        */
        const body = encodeURIComponent(
            `Name: ${name}

Email: ${email}

Message:
${message}`
        );

        /*
            Open the user's default email application.
            I need to replace the email address below with my real email address in the future.
        */
        window.location.href =
            `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    });
}