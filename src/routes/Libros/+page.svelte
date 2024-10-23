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
            content: "Meter el diablo en el infierno En la ciudad de Cafsa, en Berbería, hubo hace tiempo un hombre riquísimo que, entre otros hijos, tenía una hijita hermosa y donosa cuyo nombre era Alibech; la cual, no siendo cristiana y oyendo a muchos cristianos que en la ciudad había alabar mucho la fe cristiana y el servicio de Dios, un día preguntó a uno de ellos en qué materia y con menos impedimentos pudiese servir a Dios. El cual le repuso que servían mejor a Dios aquellos que más huían de las cosas del mundo, como hacían quienes en las soledades de los desiertos de la Tebaida se habían retirado. La joven, que simplicísima era y de edad de unos catorce años, no por consciente deseo sino por un impulso pueril, sin decir nada a nadie, a la mañana siguiente hacia el desierto de Tebaida, ocultamente, sola, se encaminó; y con gran trabajo suyo, continuando sus deseos, después de algunos días a aquellas soledades llegó, y vista desde lejos una casita, se fue a ella, donde a un santo varón encontró en la puerta, el cual, maravillándose de verla allí, le preguntó qué es lo que andaba buscando. La cual repuso que, inspirada por Dios, estaba buscando ponerse a su servicio, y también quién le enseñara cómo se le debía servir. El honrado varón, viéndola joven y muy hermosa, temiendo que el demonio, si la retenía, lo engañara, le alabó su buena disposición y, dándole de comer algunas raíces de hierbas y frutas silvestres y dátiles, y agua a beber, le dijo: -Hija mía, no muy lejos de aquí hay un santo varón que en lo que vas buscando es mucho mejor maestro de lo que soy yo: irás a él. Y le enseñó el camino; y ella, llegada a él y oídas de este estas mismas palabras, yendo más adelante, llegó a la celda de un ermitaño joven, muy devota persona y bueno, cuyo nombre era Rústico, y la petición le hizo que a los otros les había hecho. El cual, por querer poner su firmeza a una fuerte prueba, no como los demás la mandó irse, o seguir más adelante, sino que la retuvo en su celda; y llegada la noche, una yacija de hojas de palmera le hizo en un lugar, y sobre ella le dijo que se acostase. Hecho esto, no tardaron nada las tentaciones en luchar contra las fuerzas de este, el cual, encontrándose muy engañado sobre ellas, sin demasiados asaltos volvió las espaldas y se entregó como vencido; y dejando a un lado los pensamientos santos y las oraciones y las disciplinas, a traerse a la memoria la juventud y la hermosura de esta comenzó, y además de esto, a pensar en qué vía y en qué modo debiese comportarse con ella, para que no se apercibiese que él, como hombre disoluto, quería llegar a aquello que deseaba de ella. Y probando primero con ciertas preguntas que no había nunca conocido a hombre averiguó, y que tan simple era como parecía, por lo que pensó cómo, bajo especie de servir a Dios, debía traerla a su voluntad. Y primeramente con muchas palabras le mostró cuán enemigo de Nuestro Señor era el diablo, y luego le dio a entender que el servicio que más grato podía ser a Dios era meter al demonio en el infierno, adonde Nuestro Señor lo había condenado. La jovencita le preguntó cómo se hacía aquello; Rústico le dijo: -Pronto lo sabrás, y para ello harás lo que a mí me veas hacer. Y empezó a desnudarse de los pocos vestidos que tenía, y se quedó completamente desnudo, y lo mismo hizo la muchacha; y se puso de rodillas a guisa de quien rezar quisiese y contra él la hizo ponerse a ella. Y estando así, sintiéndose Rústico más que nunca inflamado en su deseo al verla tan hermosa, sucedió la resurrección de la carne; y mirándola Alibech, y maravillándose, dijo: -Rústico, ¿qué es esa cosa que te veo que así se te sale hacia afuera y yo no la tengo? -Oh, hija mía -dijo Rústico-, es el diablo de que te he hablado; ya ves, me causa grandísima molestia, tanto que apenas puedo soportarlo. Entonces dijo la joven: -Oh, alabado sea Dios, que veo que estoy mejor que tú, que no tengo yo ese diablo. Dijo Rústico: -Dices bien, pero tienes otra cosa que yo no tengo, y la tienes en lugar de esto. Dijo Alibech: -¿El qué? Rústico le dijo: -Tienes el infierno, y te digo que creo que Dios te haya mandado aquí para la salvación de mi alma, porque si ese diablo me va a dar este tormento, si tú quieres tener de mí tanta piedad y sufrir que lo meta en el infierno, me darás a mí grandísimo consuelo y darás a Dios gran placer y servicio, si para ello has venido a estos lugares, como dices. La joven, de buena fe, repuso: -Oh, padre mío, puesto que yo tengo el infierno, sea como queréis. Dijo entonces Rústico: -Hija mía, bendita seas. Vamos y metámoslo, que luego me deje estar tranquilo. Y dicho esto, llevada la joven encima de una de sus yacijas, le enseñó cómo debía ponerse para poder encarcelar a aquel maldito de Dios. La joven, que nunca había puesto en el infierno a ningún diablo, la primera vez sintió un poco de dolor, por lo que dijo a Rústico: -Por cierto, padre mío, mala cosa debe ser este diablo, y verdaderamente enemigo de Dios, que aun en el infierno, y no en otra parte, duele cuando se mete dentro. Dijo Rústico: -Hija, no sucederá siempre así. Y para hacer que aquello no sucediese, seis veces antes de que se moviesen de la yacija lo metieron allí, tanto que por aquella vez le arrancaron tan bien la soberbia de la cabeza que de buena gana se quedó tranquilo. Pero volviéndole luego muchas veces en el tiempo que siguió, y disponiéndose la joven siempre obediente a quitársela, sucedió que el juego comenzó a gustarle, y comenzó a decir a Rústico: -Bien veo que la verdad decían aquellos sabios hombres de Cafsa, que el servir a Dios era cosa tan dulce; y en verdad no recuerdo que nunca cosa alguna hiciera yo que tanto deleite y placer me diese como es el meter al diablo en el infierno; y por ello me parece que cualquier persona que en otra cosa que en servir a Dios se ocupa es un animal. Por la cual cosa, muchas veces iba a Rústico y le decía: -Padre mío, yo he venido aquí para servir a Dios, y no para estar ociosa; vamos a meter el diablo en el infierno. Haciendo lo cual, decía alguna vez: -Rústico, no sé por qué el diablo se escapa del infierno; que si estuviera allí de tan buena gana como el infierno lo recibe y lo tiene, no se saldría nunca. Así, tan frecuentemente invitando la joven a Rústico y consolándolo al servicio de Dios, tanto le había quitado la lana del jubón que en tales ocasiones sentía frío en que otro hubiera sudado; y por ello comenzó a decir a la joven que al diablo no había que castigarlo y meterlo en el infierno más que cuando él, por soberbia, levantase la cabeza: -Y nosotros, por la gracia de Dios, tanto lo hemos desganado, que ruega a Dios quedarse en paz. Y así impuso algún silencio a la joven, la cual, después de que vio que Rústico no le pedía más meter el diablo en el infierno, le dijo un día: -Rústico, si tu diablo está castigado y ya no te molesta, a mí mi infierno no me deja tranquila; por lo que bien harás si con tu diablo me ayudas a calmar la rabia de mi infierno, como yo con mi infierno te he ayudado a quitarle la soberbia a tu diablo. Rústico, que de raíces de hierbas y agua vivía, mal podía responder a los envites; y le dijo que muchos diablos querrían poder tranquilizar al infierno, pero que él haría lo que pudiese; y así alguna vez la satisfacía, pero era tan raramente que no era sino arrojar un haba en la boca de un león; de lo que la joven, no pareciéndole servir a Dios cuanto quería, mucho rezongaba. Pero mientras que entre el diablo de Rústico y el infierno de Alibech había, por el demasiado deseo y por el menor poder, esta cuestión, sucedió que hubo un fuego en Cafsa en el que en la propia casa ardió el padre de Alibech con cuantos hijos y demás familia tenía; por la cual cosa Alibech de todos sus bienes quedó heredera. Por lo que un joven llamado Neerbale, habiendo en magnificencias gastado todos sus haberes, oyendo que esta estaba viva, poniéndose a buscarla y encontrándola antes de que el fisco se apropiase de los bienes que habían sido del padre, como de hombre muerto sin herederos, con gran placer de Rústico y contra la voluntad de ella, la volvió a llevar a Cafsa y la tomó por mujer, y con ella de su gran patrimonio fue heredero. Pero preguntándole las mujeres que en qué servía a Dios en el desierto, no habiéndose todavía Neerbale acostado con ella, repuso que le servía metiendo al diablo en el infierno y que Neerbale había cometido un gran pecado con haberla arrancado a tal servicio. Las mujeres preguntaron: -¿Cómo se mete al diablo en el infierno? La joven, entre palabras y gestos, se los mostró; de lo que tanto se rieron que todavía se ríen, y dijeron: -No estés triste, hija, no, que eso también se hace bien aquí, Neerbale bien servirá contigo a Dios Nuestro Señor en eso. Luego, diciéndoselo una a otra por toda la ciudad, hicieron famoso el dicho de que el más agradable servicio que a Dios pudiera hacerse era meter al diablo en el infierno; el cual dicho, pasado a este lado del mar, todavía se oye. Y por ello vosotras, jóvenes damas, que necesitáis la gracia de Dios, aprended a meter al diablo en el infierno, porque ello es cosa muy grata a Dios y agradable para las partes, y mucho bien puede nacer de ello y seguirse."
        
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
				<br />
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
	
	.container-items {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
	}

	.item {
		border-radius: 10px;
	}

	.item:hover {
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	.item img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 10px 10px 0 0;
		transition: all 0.5s;
	}

	.item figure {
		overflow: hidden;
	}

	.item:hover img {
		transform: scale(1.2);
	}

	.info-product {
		padding: 15px 10px;
		line-height: 2;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.info-product button {
		margin-top: auto;
		border: none;
		background: none;
		background-color: #000;
		color:rgb(255, 255, 255);
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
		background-color: rgb(255, 255, 255);
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

