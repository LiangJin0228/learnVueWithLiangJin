### 在開始學習 Vue 之前,應該先把我們的環境設置和 Vue 安裝好

**使用前安裝工具:** <br>
1.vscode
2.ESLint
3.Volar
4.Prettier
5.Live Server

**Vue 的安裝:** <br>
可以有好幾種方式，可以透過 npm,yarn……
我們可以簡單用 CDN 的方式引入就好，就跟在一般專案引入 jQuery 一樣，直接在 html 的 Head 部分加上： <br>
`<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>` <br>

**lesson 1:** <br>
教你如何開始一個使用 Vue 3 的專案, Vue 的基礎語法以及一些常用的指令(data(), if/else, for loop) <br>

**lesson 2:** <br>
我們一般在寫程式的時候，都會需要處理某些事件的發生，在 HTML 的事件裏，我們有(onclick, onchange, onblur, onfocus, onsubmit, onreset)等等,而這些事件在 Vue 的寫法裏是使用 v-on 功能，後面直接接上 click, change……等等(eg. `<button v-on:click=""></button>`)。 <br>
和之前 v-bind 一樣，因爲太長用到，u 偶一我們也會用"@"來簡寫 v-on, 這樣使用的時候就不用加冒號( @click )。
