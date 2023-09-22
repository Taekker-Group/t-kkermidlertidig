<script setup>
import moenster from '../assets/styles/rødtmønster.png'
</script>

<template>
    <main>
        <section class="image-header">
            <div class="taekker-banner">
                <p>Tækker</p>
                <svg width="52" height="38" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.528 30C30.1747 18.7843 40.6069 8 40.6069 8C44.8622 10.732 50.4901 8.71895 52 13.3203C40.6069 17.634 35.528 30 35.528 30Z" fill="#fff"/>
                    <path d="M22.7303 38C22.7303 34.1596 19.9259 14.6638 0 9.49434C3.54239 3.58643 11.8079 5.94959 15.0551 0.0416757C16.5311 -1.14006 42.2134 23.0824 22.7303 38Z" fill="#fff"/>
                </svg>

            </div>
        </section>
        <section class="flex-section">
            <h1>VI ARBEJDER PÅ RE-DESIGN / ET NYT DESIGN AF TAEKKER.DK</h1>
            <div class="flex-container">
                <div class="contact">
                    <div class="contact-card">
                        <div class="square" style="background-color: #f45c2a;"></div>
                        <address>
                            <h2>KONTAKT TÆKKER</h2>
                            <p>Telefon: <span style="width: 10px; margin-right: 30px"></span> +45 86 19 18 44</p>
                            <p>Mail: <span style="width: 10px; margin-right: 50px"></span> info@taekker.dk</p>
                            <p style="margin-top: 20px;">FAKTURAER SENDES TIL:</p>
                            <p>Mail: <span style="width: 10px; margin-right: 50px"></span> bogholderi@taekker.dk</p>
                        </address>
                    </div>
                    <div class="contact-card">
                        <span class="square" style="background-color: #ff8000;"></span>
                        <address>
                            <h2>KONTAKT TÆKKER ADMINSTRATION</h2>
                            <p>Telefon: <span style="width: 10px; margin-right: 30px"></span> +45 86 19 18 44</p>
                            <p>Mail: <span style="width: 10px; margin-right: 50px"></span> info@taekker.dk</p>
                            <p style="margin-top: 20px;">FAKTURAER SENDES TIL:</p>
                            <p>Mail: <span style="width: 10px; margin-right: 50px"></span> bogholderi@taekker.dk</p>
                        </address>
                    </div>
                </div>
                <div class="contact">
                    <div class="contact-card">
                        <div class="square" style="background-color: #A6CE3C;"></div>
                        <address>
                            <h2>KONTAKT TÆKKER RÅDGIVENDE INGENIØRER</h2>
                            <p>Telefon: <span style="width: 10px; margin-right: 30px"></span> +45 86 19 18 44</p>
                            <p>Mail: <span style="width: 10px; margin-right: 50px"></span> info@taekker.dk</p>
                            <p>www: <span style="width: 10px; margin-right: 47px"></span> taekker-ingenioerer.dk</p>
                            <p style="margin-top: 20px;">FAKTURAER SENDES TIL:</p>
                            <p>Mail: <span style="width: 10px; margin-right: 50px"></span> bogholderi@taekker.dk</p>
                        </address>
                    </div>
                    <div class="contact-card">
                        <div class="square" style="background-color: #0FB9E1;"></div>
                        <address>
                            <h2>KONTAKT TÆKKER UDLEJNING OG SALG</h2>
                            <p>Telefon: <span style="width: 10px; margin-right: 30px"></span> +45 86 19 18 44</p>
                            <p>Mail: <span style="width: 10px; margin-right: 50px"></span> info@taekkerrealestate.dk</p>
                            <p>www: <span style="width: 10px; margin-right: 47px"></span> taekkerrealestate.dk</p>
                            <p style="margin-top: 20px;">FAKTURAER SENDES TIL:</p>
                            <p>Mail: <span style="width: 10px; margin-right: 50px"></span> bogholderi@taekker.dk</p>
                        </address>
                    </div>
                </div>

            </div>
        </section>
        <footer>
            <address class="adresse">Tækker Group · Toldkammeret · Hack Kampmanns Plads 1-3, st. tv. · DK-8000 Aarhus C · Telefon +45 8619 1844 · CVR- nr. 21533335</address>
        </footer>
    </main>
</template>

<style>
body {
    height: 100%;
    background-image: url(../assets/styles/rødtmønster.png);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
}
main {
    overflow: hidden;
    max-width: 100vw;
    height: 100%;
    /* padding: 1% 20%; */
    font-family: Arial, Helvetica, sans-serif;
}


footer {
    width: 100%;
    height: 100px;
    position: relative;
    bottom: 0;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.image-header {
    height: 100px;
    padding: 20px;
    display: flex;
    justify-content: center;
    background-image: url(../assets//styles//banner.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.taekker-banner {
    background-color: #f45c2a;
    height: 100px;
    width: 200px;
    padding-top: 15px;
    padding-left: 5px;
    display: flex;
}

.taekker-banner > p {
    margin-left: 20px;
    margin-top: 30px;
    color: white;
    font-size: 150%;
    font-weight: 500;
}

.taekker-banner > svg {
    position: relative;
    width: 20%;
    left: -20px;
    margin-left: 20px;
    margin-top: 10px;
}

.flex-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

h1 {
    margin-top: 100px;
    width: 100%;
    text-align: center;
    color: #f45c2a;
    font-weight: 500;
    font-size: 25px;
    margin-bottom: 50px;
}
address {
    font-style: normal;
}

.flex-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    align-items: center;
    gap: 2rem;
}

.contact {
    width: 70%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}

.contact-card {
    display: flex;
    width: auto;
    flex-basis: 300px;
}

.square {
    width: 10px;
    height: 10px;
    aspect-ratio: 1/1;
    margin-right: 10px;
}

h2 {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
}

p {
    font-size: 12px;
    margin-bottom: 12px;
}

.adresse {
    font-size: 10px;
    text-align: center;
}

@media only screen and (min-width: 1000px) {
    main {
    padding: 1% 10%;
    }

    body {
        background-size: 80%;
        height: 100vh;
    }

    .image-header {
        height: 200px;
        justify-content: flex-end;
    }

    .taekker-banner {
        height: 150px;
        width: 250px;
    }

    .taekker-banner > p {
        margin-left: 20px;
        margin-top: 30px;
        color: white;
        font-size: 300%;
        font-weight: 500;
    }

    .taekker-banner > svg {
        position: relative;
        width: 20%;
        left: -20px;
        margin-left: 20px;
        margin-top: 10px;
    }

}

</style>