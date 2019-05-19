<?php
    if ($_POST["message"]) {
        mail("greavesandy@yahoo.com.au", "Form to email message",
        $_POST["message"], "From: " + Email);
    }
?>