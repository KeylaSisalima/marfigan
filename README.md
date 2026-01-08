<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MARFIGAN | Camaronera Industrial</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --azul: #0b3c5d;
            --celeste: #1ca3ec;
            --gris: #f4f6f8;
            --oscuro: #1e1e1e;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: #ffffff;
            color: var(--oscuro);
            line-height: 1.6;
            scroll-behavior: smooth;
        }

        /* ===== ANIMACIONES ===== */
        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        section, .hero div, .product-card, .card {
            animation: fadeUp 1s ease forwards;
        }

        /* ===== HEADER ===== */
        header {
            background:
                linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                url('https://images.unsplash.com/photo-1626078299010-7e44c3c1b80d?auto=format&fit=crop&w=1600&q=80');
            background-size: cover;
            background-position: center;
            height: 100vh;
            color: white;
            display: flex;
            flex-direction: column;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px 8%;
            background-color: rgba(0,0,0,0.45);
        }

        nav h1 {
            font-size: 28px;
            font-weight: 700;
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 30px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: var(--celeste);
        }

        .hero {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 10%;
        }

        .hero h2 {
            font-size: 50px;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 18px;
            max-width: 720px;
            margin: auto;
        }

        section {
            padding: 80px 10%;
        }

        .section-title {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-title h2 {
            font-size: 36px;
            color: var(--azul);
        }

        .about, .products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
        }

        .card {
            background: white;
            padding: 35px;
            border-radius: 14px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transition: transform 0.3s;
        }

        .card:hover {
            transform: translateY(-10px);
        }

        /* ===== PRODUCTOS ===== */
        .product-card {
            background: white;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transition: transform 0.3s;
        }

        .product-card:hover {
            transform: translateY(-10px);
        }

        .product-card img {
            width: 100%;
            height: 220px;
            object-fit: cover;
        }

        .product-card .content {
            padding: 25px;
        }

        .product-card a {
            display: inline-block;
            margin-top: 15px;
            padding: 10px 22px;
            background-color: var(--celeste);
            color: white;
            text-decoration: none;
            border-radius: 6px;
            transition: background 0.3s;
        }

        .product-card a:hover {
            background-color: var(--azul);
        }

        .banner {
            background-color: var(--azul);
            color: white;
            text-align: center;
            padding: 70px 15%;
        }

        footer {
            background-color: #111;
            color: white;
            text-align: center;
            padding: 30px;
            font-size: 14px;
        }

        @media(max-width: 768px){
            .hero h2 {
                font-size: 34px;
            }
        }
    </style>
</head>
<body>

<header>
    <nav>
        <h1>MARFIGAN</h1>
        <ul>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>

    <div class="hero">
        <div>
            <h2>Producción Camaronera de Clase Mundial</h2>
            <p>
                Camarón ecuatoriano cultivado con estándares internacionales,
                sostenibilidad y tecnología de punta.
            </p>
        </div>
    </div>
</header>

<section id="nosotros">
    <div class="section-title">
        <h2>¿Quiénes Somos?</h2>
    </div>
    <div class="about">
        <div class="card">
            <h3>Nuestra Empresa</h3>
            <p>MARFIGAN es una empresa camaronera comprometida con la calidad y el desarrollo sostenible.</p>
        </div>
        <div class="card">
            <h3>Misión</h3>
            <p>Producir camarón de alta calidad con responsabilidad ambiental.</p>
        </div>
        <div class="card">
            <h3>Visión</h3>
            <p>Ser referente del sector acuícola a nivel nacional e internacional.</p>
        </div>
    </div>
</section>

<section id="productos" style="background-color: var(--gris);">
    <div class="section-title">
        <h2>Nuestros Productos</h2>
    </div>

    <div class="products">
        <div class="product-card">
            <img src="https://images.unsplash.com/photo-1617196035090-6e04f6f1a4b0">
            <div class="content">
                <h3>Camarón Entero</h3>
                <p>Camarón fresco cultivado bajo estrictos controles sanitarios.</p>
                <a href="#contacto">Más información</a>
            </div>
        </div>

        <div class="product-card">
            <img src="https://images.unsplash.com/photo-1604908177522-0501f1e98d5b">
            <div class="content">
                <h3>Camarón Congelado</h3>
                <p>Producto procesado y conservado para exportación.</p>
                <a href="#contacto">Más información</a>
            </div>
        </div>

        <div class="product-card">
            <img src="https://images.unsplash.com/photo-1627485937980-bcfe3c6d594a">
            <div class="content">
                <h3>Camarón de Exportación</h3>
                <p>Seleccionado por talla y calidad premium.</p>
                <a href="#contacto">Más información</a>
            </div>
        </div>
    </div>
</section>

<section id="contacto">
    <div class="section-title">
        <h2>Contacto</h2>
    </div>
    <div class="about">
        <div class="card">
            <p><strong>Email:</strong> marfigansa@hotmail.com</p>
            <p><strong>Ubicación:</strong> Ecuador</p>
        </div>
    </div>
</section>

<footer>
    © 2026 MARFIGAN | Empresa Camaronera
</footer>

</body>
</html>
