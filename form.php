<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = 'your-email@example.com';
  $subject = 'Form Submission';
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  
  mail($to, $subject, $body);
?>