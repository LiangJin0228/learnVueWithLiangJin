const app = Vue.createApp({
    data() {
        return {
            click : false,
            countDown : 5,
            timer : null
        };
    },
    computed: {
        // 計算屬性，能夠使用計算的方式動態回傳一個值或數組
        isClicked() {
            return this.click ? "隱藏 " + this.countDown : "展開";
        }
    },
    methods: {
        clickEvent() {
            this.click = !this.click;
        }
    },
    watch: {
        // watch方法是監視你的data裏面的值，所以你的data裏面的key叫什麽名字，watch就必須一模一樣
        // 下面這行的意思就是,目前我們的click預設是false，但是當我們按下按鈕，它會變成true
        // 所以newValue就是truo, oldValue就是false
        click(newValue, oldValue) {
            if (newValue) {
                this.countDown = 5;
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
                this.timer = setInterval(() => {
                    this.countDown -= 1;
                    if (this.countDown === 0) {
                        this.click = false;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000);
            }
        }
    }
});
app.mount('#app');