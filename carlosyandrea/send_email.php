<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $numPersons = $_POST['numPersons'];
    $attendance = $_POST['attendance'];
    $message = $_POST['message'];

    $to = "kmzaragozab@gmail.com"; // Cambia esto por tu dirección de correo electrónico

    $subject = "Confirmación de Asistencia";
    
    $email_body = "Hola $name,\n\nGracias por confirmar tu asistencia a la boda.\n\nDetalles de confirmación:\nNúmero de personas: $numPersons\nAsistencia: $attendance\nMensaje: $message";

    $headers = "From: $email";

    if (mail($to, $subject, $email_body, $headers)) {
        echo "<script>alert('Gracias por confirmar tu asistencia.');</script>";
    } else {
        echo "<script>alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');</script>";
    }
}
?>
