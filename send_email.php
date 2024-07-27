<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['user-name']);
    $phone = htmlspecialchars($_POST['user-phone']);
    $email = htmlspecialchars($_POST['user-email']);
    $comment = htmlspecialchars($_POST['user-comment']);
    $product = isset($_POST['product-name']) ? htmlspecialchars($_POST['product-name']) : 'Без продукта';
    $price = isset($_POST['product-price']) ? htmlspecialchars($_POST['product-price']) : 'Без цены';

    $to = "contact@web-impuls.com";
    $subject = "Нове повідомлення з форми";
    $message = "Ім'я: $name\nТелефон: $phone\nE-mail: $email\nКоментар: $comment\nПродукт: $product\nЦіна: $price";
    $headers = "From: contact@web-impuls.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
    exit();
}
?>
