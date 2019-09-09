<template>
  <div class="content">
    <h4>De Opdracht</h4>
    <p>
      Maak een SPA met de volgende eisen:
    </p>
    <ul>
      <li>
        Een welkom pagina met het totaal aantal klanten.
      </li>
      <li>
        Een klanten pagina waar de klanten data (JSON) in een tabel weergeven wordt, gezocht kan worden op klanten en de details van klanten ingezien kunnen worden.
        Bonus is het aanmaken en verwijderen van klanten via Vuex.
      </li>
      <li>
        In de weergave moet de gebruiker altijd de huidige tijd en datum kunnen zien.
      </li>
    </ul>
    <p>
      In de repository staat in src/assets/demoData.json een voorbeeld database om mee te werken.
      Voor deze opdracht hoef je hem alleen in te laden en niet te schrijven, maar probeer het te benaderen alsof het een echte API is.
    </p>
    <h4>Extra vragen</h4>
    <ul>
      <li>
        Op wat voor een manier zou je ervoor kunnen zorgen dat het weergave component van een klant ook voor andere resources (zoals gebruikers, of huizen) gebruikt kan worden? Houdt er rekening mee dat resources andere velden kunnen hebben, en sommige velden zijn niet tekstvelden, maar getallen of datums.
      </li>
      <li>
        Hoe zou je de routes van de applicaties maar 1 keer declareren, in plaats van nu in de sidebar en in router.js?
      </li>
    </ul>
    <h4>Links</h4>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd" target="_blank" rel="noopener">React to Vue</a></li>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
