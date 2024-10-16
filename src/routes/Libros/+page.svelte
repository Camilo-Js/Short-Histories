<script>
    import { goto } from '$app/navigation';
    import Logo from './Logo_sin_fondito.png';
    let showModal = false;
    let selectedBook = {};

    const books = [
        {
            title: "Meter Al Diablo en el Infierno",
            author: "Giovanni Boccaccio",
            image: "https://static-1.ivoox.com/audios/4/b/9/f/4b9fbef7ef90007ea17385197590b84a.jpg",
            content: "En un tiempo en que los hombres eran guiados por sus pasiones y deseos, se decía que el Diablo, astuto y engañoso, buscaba constantemente nuevas almas para llevar al infierno. Un día, decidió que era momento de hacer una prueba. Se disfrazó de un hombre común y se dirigió a la tierra de los vivos. Allí, se encontró con un grupo de jóvenes que se entregaban a la vida disoluta, riendo y despreciando cualquier advertencia sobre la justicia divina. El Diablo, con su astucia, comenzó a seducir a los jóvenes con promesas de riquezas y placeres sin fin. Sin embargo, uno de ellos, un joven llamado Antonio, comenzó a sentir una inquietud en su interior. Recordando las enseñanzas que había recibido de su madre, decidió que no podía dejarse llevar por el engaño del Diablo. En lugar de sucumbir a la tentación, se enfrentó al Diablo y le dijo:\n\n—No te temo, porque sé que lo que ofreces es solo ilusión. Prefiero caminar por el sendero del bien, aunque sea más difícil.\n\nEl Diablo, sorprendido por la valentía del joven, se retiró furioso, sabiendo que había perdido una alma esa vez. Regresó al infierno, donde se sentó en su trono, reflexionando sobre la naturaleza humana. Aprendió que no todas las almas eran fáciles de atrapar, y que a veces, la luz de la virtud podía brillar incluso en los corazones más oscuros.\n\nDesde entonces, el Diablo se volvió más astuto en sus engaños, pero el ejemplo de Antonio perduró como una lección para todos aquellos que se encontraban en la encrucijada entre el bien y el mal."

        },
        {
            title: "Principe Hamlet",
            author: "William Shakespeare",
            image: "https://lsjbbtc.wordpress.com/wp-content/uploads/2022/05/image-51.png",
            content: "Contenido del libro 'Principe Hamlet'."
        },
        // Agregando más libros aquí...
        {
            title: "El Cocinero Chichibio",
            author: "Giovanni Boccaccio",
            image: "https://image.isu.pub/190414161154-e7eaead2de383727ecb26db47d94c108/jpg/page_1.jpg",
            content: "Contenido del libro 'El Cocinero Chichibio'."
        },
        {
            title: "El retrato oval",
            author: "Edgar Allan Poe",
            image: "https://quelibroleo.com/images/libros/libro_1416153898.png",
            content: "Contenido del libro 'El retrato oval'."
        },
        // Continúa con los demás libros...
    ];

    function openModal(book) {
        selectedBook = book;
        showModal = true;
    }

    function closeModal() {
        showModal = false;
    }
</script>

<div class="container-icon">
    <p class="logo"><img src={Logo} height="50px" width="350" alt="" /></p>
</div>

<div class="container-items">
    {#each books as book}
        <div class="item">
            <figure>
                <img src={book.image} alt="producto" />
            </figure>
            <div class="info-product">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <br>
                <button on:click={() => openModal(book)}>Empezar a leer</button>
            </div>
        </div>
    {/each}
</div>

{#if showModal}
    <div class="modal">
        <div class="modal-content">
            <span class="close" on:click={closeModal}>&times;</span>
            <h2>{selectedBook.title}</h2>
            <p><strong>Autor:</strong> {selectedBook.author}</p>
            <p>{selectedBook.content}</p>
        </div>
    </div>
{/if}

<style>

.info-cart-product{
    display: flex;
    justify-content: space-between;
    flex: 0.8;
}

.titulo-producto-carrito{
    font-size: 20px;
}

.precio-producto-carrito{
    font-weight: 700;
    font-size: 20px;
    margin-left: 10px;
}

.cantidad-producto-carrito{
    font-weight: 400;
    font-size: 20px;
}

.icon-close{
    width: 25px;
    height: 25px;
}

.icon-close:hover{
    stroke: red;
    cursor: pointer;
}

.cart-total{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
}

.cart-total h3{
    font-size: 20px;
    font-weight: 700;
}

.total-pagar{
    font-size: 20px;
    font-weight: 900;
}

.hidden-cart{
    display: none;
}

.container-items{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.item{
    border-radius: 10px;
}

.item:hover{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.20);
}

.item img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    transition: all .5s;
}

.item figure{
    overflow: hidden;
}

.item:hover img{
    transform: scale(1.2);
}

.info-product{
    padding: 15px 10px;
    line-height: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.price{
    font-size: 18px;
    font-weight: 900;
}

.info-product button{
    margin-top: auto;
    border: none;
    background: none;
    background-color: #000;
    color: #fff;
    padding: 15px 10px;
    cursor: pointer;
    line-height: 20px;
    width: 100%;
    text-align: under;
}
	
.modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
        background-color: white;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
}
.close {
    color: red;
    float: right;
    font-size: 28px;
    font-weight: bold;
    }
</style>


