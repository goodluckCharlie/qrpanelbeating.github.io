<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect form data safely
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $mobile  = htmlspecialchars($_POST['mobile']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email settings
    $to = "qrpanelbeating@gmail.com";
    $email_subject = "Website Contact: " . $subject;

    $email_body = "
    You have received a new message from your website contact form.

    Name: $name
    Email: $email
    Mobile: $mobile

    Message:
    $message
    ";

    $headers  = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.history.back();</script>";
    } else {
        echo "<script>alert('Message failed to send. Please try again.'); window.history.back();</script>";
    }
}
?>
