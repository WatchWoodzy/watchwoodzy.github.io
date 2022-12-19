<?php

$to = 'kodyjwood3@gmail.com';
$subject = 'Contact Form Submission';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$body = "From: $name\n E-Mail: $email\n Message:\n $message";

if (mail($to, $subject, $body)) {
  echo 'Your message has been sent!';
} else {
  echo 'There was an error sending your message.';
}
