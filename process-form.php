<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $brief = $_POST['brief'];

    // Example: Output the received data (you can replace this with your processing logic)
    echo json_encode(['status' => 'success', 'message' => 'Form submitted successfully', 'data' => compact('fullname', 'email', 'phone', 'brief')]);
} else {
    // Respond with an error if not a POST request
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}

?>