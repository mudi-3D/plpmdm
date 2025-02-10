const SKUS = ["MAQ100106-002", "SEG020106-001", "MAQ0054", "MAQ0057", "MAQ0060", "MAQ0021"];

/** Contador para detener la busqueda y revisión de las "cards" */
let counterSearch = 0;

function createModal(sku) {

    /** create variables */
    let flagAR = false;

    /** We create a shell for the MUDI modal */
    const
        modalMudi = document.createElement('DIV');
    modalMudi.id = `modalMudi`;
    modalMudi.classList.add(`mudiModal`);
    modalMudi.innerHTML = `
        <div class="iframeMudi3D">
            <button class="closeModalMudi" style="color: rgba(0,113,206,.95)">X</button>
            <iframe class="modelMudi" src="https://viewer.mudi.com.co/v1/web/?id=436&sku=${sku}"></iframe>
            <div class="containerBtnsActions">
                <svg xmlns="http://www.w3.org/2000/svg" id="imgARBtn" class="imgBtnAR" viewBox="0 0 317 112">
                <defs>
                    <style>
                    .cls-1_modal{fill:rgba(0,113,206,.95);stroke: rgba(0,113,206,.95);stroke-miterlimit:10;stroke-width:3px;}
                    .cls-2_modal{font-family:FrutigerBold, Frutiger;font-size:19.04px;fill:white}
                    .cls-3_modal{stroke-width:0px;fill:white;}
                    </style>
                </defs>
                
                <rect class="cls-1_modal" x="9.52" y="9" width="292.07" height="87" rx="5" ry="5"/>
                    <path class="cls-3_modal" d="m42.64,46.07c.66,0,1.19-.53,1.19-1.19v-8.1c0-.66-.53-1.19-1.19-1.19s-1.19.53-1.19,1.19v8.04c0,.66.53,1.19,1.19,1.19"/>
                    <path class="cls-3_modal" d="m59.58,28.25c.21,0,.42-.06.6-.16l6.4-3.67,6.4,3.68c.57.33,1.31.13,1.64-.44.33-.57.13-1.31-.44-1.64h0l-7.13-4.01c-.37-.21-.83-.21-1.19,0l-6.94,4.02c-.57.34-.75,1.07-.41,1.64.23.38.64.6,1.08.58"/>
                    <path class="cls-3_modal" d="m66.5,59.88c.66,0,1.19-.53,1.19-1.19v-8.03c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2,1.2v8.04c0,.66.53,1.19,1.19,1.19"/>
                    <path class="cls-3_modal" d="m90.39,46.07c.66,0,1.19-.53,1.19-1.19,0,0,0,0,0-.01v-8.09c0-.66-.53-1.19-1.19-1.19s-1.19.53-1.19,1.19v8.04c0,.66.53,1.19,1.19,1.19"/>
                    <path class="cls-3_modal" d="m42.64,65.58c.66,0,1.19-.53,1.19-1.19v-7.99c0-.66-.53-1.19-1.19-1.19s-1.19.53-1.19,1.19v8.04c.03.64.56,1.14,1.19,1.14Z"/>
                    <path class="cls-3_modal" d="m90.39,65.58c.64,0,1.17-.5,1.19-1.14v-8.04c0-.66-.53-1.19-1.19-1.19s-1.19.53-1.19,1.19h0v8.04c.03.64.56,1.14,1.19,1.14"/>
                    <path class="cls-3_modal" d="m66.5,33.02c.66,0,1.19-.53,1.19-1.19v-8.77c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2,1.2v8.77c0,.66.53,1.19,1.19,1.19"/>
                    <path class="cls-3_modal" d="m66.5,79.45c.66,0,1.19-.53,1.19-1.19h0v-8.04c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2,1.2v8.04c0,.66.53,1.19,1.19,1.19,0,0,0,0,.01,0"/>
                    <path class="cls-3_modal" d="m66.5,79.45c.21,0,.42-.06.6-.16l7-4.04c.57-.33.77-1.06.44-1.64-.33-.57-1.06-.77-1.64-.44h0l-6.4,3.7-6.3-3.66c-.57-.33-1.31-.14-1.64.44s-.14,1.31.44,1.64l6.91,4c.18.11.39.16.6.16"/>
                    <path class="cls-3_modal" d="m66.5,51.83c.19,0,.37-.04.54-.12l6.97-4.02c.57-.33.77-1.06.44-1.64-.33-.57-1.06-.77-1.64-.44l-6.4,3.68-6.4-3.68c-.57-.33-1.31-.14-1.64.44s-.14,1.31.44,1.64h0l7.08,4.02c.18.11.39.16.6.16"/>
                    <path class="cls-3_modal" d="m49.61,42.05c.66.01,1.2-.52,1.21-1.18,0-.44-.23-.85-.62-1.06l-6.95-4.02c-.59-.3-1.31-.07-1.61.52-.28.54-.1,1.2.4,1.54l6.95,4.02c.18.1.39.16.6.16"/>
                    <path class="cls-3_modal" d="m42.65,38.03c.21,0,.42-.06.6-.16l6.97-4.02c.57-.33.77-1.06.44-1.64s-1.06-.77-1.64-.44h0l-6.97,4.02c-.58.32-.79,1.05-.47,1.62.21.39.62.62,1.06.62"/>
                    <path class="cls-3_modal" d="m83.42,42.05c.21,0,.42-.06.6-.16l6.97-4.04c.57-.33.77-1.06.44-1.64-.33-.57-1.06-.77-1.64-.44l-6.95,4.02c-.58.32-.79,1.05-.47,1.62.21.39.62.62,1.06.62"/><path class="cls-3_modal" d="m90.39,38.03c.66.01,1.2-.52,1.21-1.18,0-.44-.23-.85-.62-1.06l-6.95-4.01c-.57-.33-1.31-.13-1.64.44-.33.57-.13,1.31.44,1.64l6.95,3.99c.18.1.39.16.6.16"/>
                    <path class="cls-3_modal" d="m49.62,69.66c.66.01,1.2-.52,1.21-1.18,0-.44-.23-.85-.62-1.06l-6.98-3.97c-.57-.33-1.31-.13-1.64.44s-.13,1.31.44,1.64h0l6.98,3.97c.18.1.39.16.6.16"/>
                    <path class="cls-3_modal" d="m42.64,65.58c.21,0,.42-.06.6-.16l6.97-4.02c.57-.33.77-1.06.44-1.64-.33-.57-1.06-.77-1.64-.44h0l-6.97,4.13c-.58.32-.79,1.05-.47,1.62.21.39.62.62,1.06.62"/>
                    <path class="cls-3_modal" d="m83.42,69.66c.21,0,.42-.06.6-.16l6.97-4.02c.51-.42.57-1.18.15-1.68-.33-.39-.87-.53-1.35-.34l-6.95,4.02c-.58.32-.79,1.05-.47,1.62.21.39.62.62,1.06.62"/>
                    <path class="cls-3_modal" d="m90.39,65.58c.66.01,1.2-.52,1.21-1.18,0-.44-.23-.85-.62-1.06l-6.94-4.02c-.57-.33-1.31-.14-1.64.44-.33.57-.14,1.31.44,1.64l6.94,4.07c.18.1.39.16.6.16"/>
            
                    <text class="cls-2_modal" transform="translate(103.37 58.47)"><tspan x="0" y="0">VER EN TU ESPACIO</tspan></text>
                </svg>

                <div id="containerQR" class="containerQRMudi" style="background-color:rgba(0,113,206,.95)">
                    <img class="mudiQR" src="https://viewer.mudi.com.co/v1/qr/?id=436&sku=${sku}" >

                    <div class="containerText">
                        <div class="titleContainer">
                            <h4>ESCANÉAME PARA <br><b>VER EN TU ESPACIO</b></h4>
                            <hr class="hrTitle">
                        </div>

                        <div class="titleContainer">
                            <div class="iconTitle">
                                <img class="stepMudi step1" src="https://cdn.jsdelivr.net/gh/mudi-3D/plpmdm@latest/assets/step3.webp">
                            </div>
                            <p class="textInfoMudi">Apunta el teléfono al piso.</p>
                        </div>

                        <div class="titleContainer">
                            <div class="iconTitle">
                                <img class="stepMudi step2" src="https://cdn.jsdelivr.net/gh/mudi-3D/plpmdm@latest/assets/step4.webp">
                            </div>
                            <p class="textInfoMudi">Desplaza para visualizar.</p>
                        </div>

                        <div class="titleContainer">
                            <div class="iconTitle">
                                <img class="stepMudi step3" src="https://cdn.jsdelivr.net/gh/mudi-3D/plpmdm@latest/assets/step2.webp">
                            </div>
                            <p class="textInfoMudi">Amplia y detalla el producto.</p>
                        </div>

                        <div class="titleContainer">
                            <div class="iconTitle">
                                <img class="stepMudi step4" src="https://cdn.jsdelivr.net/gh/mudi-3D/plpmdm@latest/assets/step1.webp">
                            </div>
                            <p class="textInfoMudi">Toca dos veces para restablecer.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `;

    /** We close the MUDI modal*/
    modalMudi.querySelector(`.closeModalMudi`).addEventListener('click', () => {
        document.body.querySelector('#modalMudi').remove();
    });

    /** Init ARExperience */
    modalMudi.querySelector(`#imgARBtn`).addEventListener('click', () => {

        if (window.innerWidth > 1000) {
            !flagAR
                ? (
                    document.body.querySelector('.containerQRMudi').style.right = "-11%",
                    changeStyleBtnAR(flagAR, rgba(0, 113, 206, .95)),
                    flagAR = !flagAR
                )
                : (
                    document.body.querySelector('.containerQRMudi').style.right = "-150%",
                    changeStyleBtnAR(flagAR, rgba(0, 113, 206, .95)),
                    flagAR = !flagAR
                )
        }
        else {
            window.open(`https://viewer.mudi.com.co/v1/ar/?id=436&sku=${sku}`, "_BLANK");
        }
        flagAR && this.sendEventInteraction('AR')
    });

    /** Verify Style Bttn AR  */
    function changeStyleBtnAR(flagAR, color) {

        let icon = document.body.querySelectorAll('.cls-3_modal')

        flagAR
            ? (
                document.body.querySelector('.cls-1_modal').style.fill = color,
                icon.forEach((icon) => icon.style.fill = "white"),
                document.body.querySelector('.cls-2_modal').style.fill = "white"
            )
            : (
                document.body.querySelector('.cls-1_modal').style.fill = "white",
                icon.forEach((icon) => icon.style.fill = color),
                document.body.querySelector('.cls-2_modal').style.fill = color
            )
    };

    document.body.appendChild(modalMudi)
};

const createStylesPLP = () => {
    if (document.head.querySelector('#PLPStyle')) return;
    const link = document.createElement('LINK')
    link.rel = "stylesheet";
    link.id = "PLPStyle";
    link.href = "https://cdn.jsdelivr.net/gh/mudi-3D/plpmdm@latest/index.css";
    document.head.appendChild(link);
};

const searchCards = () => {


    if (counterSearch === 1000) return;

    const allCards = document.querySelectorAll('.product-element-top')


    if (allCards.length == 0) {
        counterSearch++;
        requestAnimationFrame(searchCards);
        return

    };

    createStylesPLP();

    for (let i = 0; i < allCards.length; i++) {

        let numberSKu = document.querySelector(`#id`);

        if (SKUS.includes(numberSKu)) {
            /** Contenido de la imagen icono identificador 3D  */
            let ImageElement = document.createElement('DIV');
            ImageElement.classList.add('icon3DPLP');
            ImageElement.addEventListener('click', () => { createModal(numberSKu) })
            const father = allCards[i];
            father.appendChild(ImageElement);
        }

    };


};

searchCards();
console.log('probando PLP latest')
