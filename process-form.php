<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'C:\Users\kvviingu\vendor\autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $brief = $_POST['brief'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.mailgun.org'; // Replace with your SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'xxx'; // Replace with your SMTP username
        $mail->Password   = 'xxx'; // Replace with your SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->Port       = 587; // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        // Recipients
        $mail->setFrom($email, $fullname);
        $mail->addAddress('xxx'); // Replace with the recipient's email address

        // Content
        $mail->isHTML(false); // Set email format to plain text
        $mail->Subject = 'New Form Submission';
        $mail->Body    = "Name: $fullname\nEmail: $email\nPhone: $phone\nProject Brief: $brief";

        // Send email
        $mail->send();
        
        echo json_encode(['status' => 'success', 'message' => 'Form submitted successfully']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => 'Failed to submit form. Error: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}
