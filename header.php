<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Стоматологическая клиника</title>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="animate.css">
    <link rel="stylesheet" type="text/css" href="../owlcarousel/dist/assets/owl.carousel.min.css">
    <link rel="stylesheet" type="text/css" href="../owlcarousel/dist/assets/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style_dent.css">
</head>
<body>
<div class="overlay"></div>
<div class="main">

<div class="container">
    <?php require "modal.php" ?>
    <?php require 'modal1.php' ?>
    <header>
        <div class="row">
            <div class="logo"><a href="dent.php"><img src="img/logo.png"></a> </div>
            <div class="adr">
                <div><img src="img/Vector1.png"></div>
                <span>Калининград,<br>
                    ул. Виллима Фермора, 3</span>
            </div>
            <div class="adr smDel">
                <div><img src="img/Vector.png"></div>Пн-Пт 09:00 до 20:00<br> Сб 10:00 до 14:00
            </div>
            <div class="callback"><p>+7 (4012) 39-11-19</p>
                <input type="button" class="btn_mod" value="Я хочу записаться на прием">
                <p class="smDel">Перезвоним и подтвердим запись</p>
            </div>
        </div>
        <div id="hamb">
            <span></span><span></span><span></span>
        </div>
        <div class="row navbar">
            <div><a href="dent.php">Главная</a></div>
            <div><a href="dent1.php">О клинике</a></div>
            <div><a href="servis.php">Услуги</a></div>
            <div><a href="our_doctor.php">Наши врачи</a></div>
            <div><a href="grafik_raboty.php"> График работы</a></div>
            <div><a href="price.php"> Цены</a></div>
            <div><a href="comment.php"> Отзывы</a></div>
            <div><a href="article.php">Статьи</a></div>
            <div><a href="contact.php"> Контакты</a></div>
        </div>
    </header>
</div><!--end container-->
</div>
