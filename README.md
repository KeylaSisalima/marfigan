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
    --azul:#0b3c5d;
    --celeste:#1ca3ec;
    --gris:#f4f6f8;
    --oscuro:#1e1e1e;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    color:var(--oscuro);
    scroll-behavior:smooth;
}

/* ===== ANIMACIÓN ===== */
@keyframes fadeUp{
    from{opacity:0; transform:translateY(40px);}
    to{opacity:1; transform:translateY(0);}
}

section, .hero-content, .card, .product-card{
    animation:fadeUp 1s ease both;
}

/* ===== HEADER ===== */
header{
    background:
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url("https://images.unsplash.com/photo-1598514983318-9b7b0c82f7fa?auto=format&fit=crop&w=1600&q=80");
    background-size:cover;
    background-position:center;
    height:100vh;
    color:white;
    display:flex;
    flex-direction:column;
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:25px 8%;
    background:rgba(0,0,0,0.45);
}

nav h1{
    font-size:28px;
    font-weight:700;
}

nav ul{
    list-style:none;
    display:flex;
    gap:30px;
}

nav ul li a{
    color:white;
    text-decoration:none;
    font-weight:500;
}

nav ul li a:hover{
    color:var(--celeste);
}

.hero{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:0 10%;
}

.hero h2{
    font-size:50px;
    margin-bottom:20px;
}

.hero p{
    font-size:18px;
    max-width:750px;
}

/* ===== SECCIONES ===== */
section{
    padding:80px 10%;
}

.section-title{
    text-align:center;
    margin-bottom:50px;
}

.section-title h2{
    font-size:36px;
    color:var(--azul);
}

/* ===== CARDS ===== */
.about{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:40px;
}

.card{
    background:white;
    padding:35px;
    border-radius:14px;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

/* ===== PRODUCTOS ===== */
.products{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.product-card{
    background:white;
    border-radius:14px;
    overflow:hidden;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

.product-card img{
    width:100%;
    height:200px;
    object-fit:cover;
}

.product-card .content{
    padding:20px;
}

.product-card h3{
    color:var(--azul);
    margin-bottom:10px;
}

.product-card a{
    display:inline-block;
    margin-top:15px;
    padding:10px 20px;
    background:var(--celeste);
    color:white;
    text-decoration:none;
    border-radius:6px;
}

.banner{
    background:var(--azul);
    color:white;
    text-align:center;
    padding:70px 15%;
}

footer{
    background:#111;
    color:white;
    text-align:center;
    padding:30px;
}

/* ===== RESPONSIVE ===== */
@media(max-width:768px){
    .hero h2{font-size:34px;}
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
<div class="hero-content">
<h2>Excelencia en Producción Camaronera</h2>
<p>Empresa ecuatoriana dedicada al cultivo, procesamiento y exportación de camarón de alta calidad.</p>
</div>
</div>
</header>

<section id="nosotros">
<div class="section-title"><h2>¿Quiénes Somos?</h2></div>
<div class="about">
<div class="card"><h3>Misión</h3><p>Producir camarón de clase mundial bajo estándares de calidad y sostenibilidad.</p></div>
<div class="card"><h3>Visión</h3><p>Ser líderes en el sector acuícola nacional e internacional.</p></div>
<div class="card"><h3>Compromiso</h3><p>Responsabilidad ambiental y social.</p></div>
</div>
</section>

<section id="productos" style="background:var(--gris);">
<div class="section-title"><h2>Nuestros Productos</h2></div>

<div class="products">

<!-- 10 PRODUCTOS -->
<script>
</script>

<div class="product-card"><img src="https://images.unsplash.com/photo-1604908177522-0501f1e98d5b?auto=format&fit=crop&w=900&q=80"><div class="content"><h3>Camarón Entero</h3><p>Producto fresco de alta calidad.</p><a href="#contacto">Más información</a></div></div>

<div class="product-card"><img src="https://images.unsplash.com/photo-1626078299010-7e44c3c1b80d?auto=format&fit=crop&w=900&q=80"><div class="content"><h3>Camarón Congelado</h3><p>Procesado bajo estándares internacionales.</p><a href="#contacto">Más información</a></div></div>

<div class="product-card"><img src="https://images.unsplash.com/photo-1617196035090-6e04f6f1a4b0?auto=format&fit=crop&w=900&q=80"><div class="content"><h3>Camarón Exportación</h3><p>Seleccionado por talla y calidad.</p><a href="#contacto">Más información</a></div></div>

<div class="product-card"><img src="https://images.unsplash.com/photo-1589927986089-35812388d1d4?auto=format&fit=crop&w=900&q=80"><div class="content"><h3>Camarón Premium</h3><p>Producto de alto valor comercial.</p><a href="#contacto">Más información</a></div></div>

<div class="product-card"><img src="https://images.unsplash.com/photo-1559737558-2f5a35f3b1c5?auto=format&fit=crop&w=900&q=80"><div class="content"><h3>Camarón Natural</h3><p>Cultivo responsable y sostenible.</p><a href="#contacto">Más información</a></div></div>

<div class="product-card"><img src="https://images.unsplash.com/photo-1562158070-622a7a1d58b8?auto=format&fit=crop&w=900&q=80"><div class="content"><h3>Camarón Blanco</h3><p>Alta demanda internacional.</p><a href="#contacto">Más información</a></div></div>

<div class="product-card"><img src="https://images.unsplash.com/photo-1598514982881-d32c0f33e32b?auto=format&fit=crop&w=900&q=80"><div class="content"><h3>Camarón Procesado</h3><p>Listo para exportación.</p><a href="#contacto">Más información</a></div></div>

<div class="product-card"><img src="https://images.unsplash.com/photo-1606755962773-0c7b8aab5f42?auto=format&fit=crop&w=900&q=80"><div class="content"><h3>Camarón Seleccionado</h3><p>Control sanitario garantizado.</p><a href="#contacto">Más información</a></div></div>

<div class="product-card"><img src="https://images.unsplash.com/photo-1615486364460-5c4f5e8ff1cd?auto=format&fit=crop&w=900&q=80"><div class="content"><h3>Camarón Fresco</h3><p>Calidad directa de piscina.</p><a href="#contacto">Más información</a></div></div>

<div class="product-card"><img src="https://images.unsplash.com/photo-1589308078053-fb35e4f87b6a?auto=format&fit=crop&w=900&q=80"><div class="content"><h3>Camarón Industrial</h3><p>Producción a gran escala.</p><a href="#contacto">Más información</a></div></div>

</div>
</section>

<section id="contacto">
<div class="section-title"><h2>Contacto</h2></div>
<p style="text-align:center;">📧 marfigansahotmail.com</p>
</section>

<footer>
© 2026 MARFIGAN | Empresa Camaronera
</footer>

</body>
</html>
