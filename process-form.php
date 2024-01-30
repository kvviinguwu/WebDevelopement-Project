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

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.mailgun.org'; 
        $mail->SMTPAuth   = true;
        $mail->Username   = 'xxx'; 
        $mail->Password   = 'xxx'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
        $mail->Port       = 587; 

        $mail->setFrom($email, $fullname);
        $mail->addAddress('xxx'); 

        $mail->isHTML(false); 
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
