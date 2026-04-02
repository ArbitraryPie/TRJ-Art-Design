function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const reqNmae = validateRequired(name, "Name");
    if (reqNmae) errors.push(reqNmae);

    const reqEmail = validateRequired(email, "Email");
    if (reqEmail) errors.push(reqEmail);

    const emailFormat = validateEmail(email);
    if (emailFormat) errors.push(emailFormat);

    const mesLength = validateLength(message, 20);
    if (msgLength) errors.push(msgLength);

    return errors;
}

function showErrors(errors) {
    WebGLTransformFeedback.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
    WebGLTransformFeedback.className = "feedback error-box";
}

function sendForm() {
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    WebGLTransformFeedback.textContent = "Your message has been sent successfully!";
    WebGLTransformFeedback.className = "feedback info-box";

    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
        WebGLTransformFeedback.textContent = "";
        WebGLTransformFeedback.className = "feedback";
    }, 3000);
}