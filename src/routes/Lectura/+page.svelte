
<title>Libros y Ventanas Modales</title>



<h1>Libros</h1>
<div class="book-list">
    <button class="book-button" data-modal="modal1">Libro 1</button>
    <button class="book-button" data-modal="modal2">Libro 2</button>
    <button class="book-button" data-modal="modal3">Libro 3</button>
    <button class="book-button" data-modal="modal4">Libro 4</button>
    <button class="book-button" data-modal="modal5">Libro 5</button>
    <button class="book-button" data-modal="modal6">Libro 6</button>
    <button class="book-button" data-modal="modal7">Libro 7</button>
    <button class="book-button" data-modal="modal8">Libro 8</button>
</div>

<!-- Ventanas modales -->
<div id="modal1" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Libro 1</h2>
        <p></p>
    </div>
</div>

<div id="modal2" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Libro 2</h2>
        <p>Descripción del Libro 2.</p>
    </div>
</div>

<div id="modal3" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Libro 3</h2>
        <p>Descripción del Libro 3.</p>
    </div>
</div>

<div id="modal4" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Libro 4</h2>
        <p>Descripción del Libro 4.</p>
    </div>
</div>

<div id="modal5" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Libro 5</h2>
        <p>Descripción del Libro 5.</p>
    </div>
</div>

<div id="modal6" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Libro 6</h2>
        <p>Descripción del Libro 6.</p>
    </div>
</div>

<div id="modal7" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Libro 7</h2>
        <p>Descripción del Libro 7.</p>
    </div>
</div>

<div id="modal8" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Libro 8</h2>
        <p>Descripción del Libro 8.</p>
    </div>
</div>


<style>
	.book-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.book-button {
		padding: 10px;
		background-color: #007bff;
		color: white;
		border: none;
		cursor: pointer;
		border-radius: 5px;
	}

	.book-button:hover {
		background-color: #0056b3;
	}

	.modal {
		display: none;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.4);
	}

	.modal-content {
		background-color: #fefefe;
		margin: 15% auto;
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
	}

	.close {
		color: #aaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
</style>
