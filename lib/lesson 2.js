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
        // 所以newValue就是true, oldValue就是false
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

        // 另外，當我們在watch一個data物件的時候，如果我們觀察的是整個物件的變化，就可以用上面的寫法
        // 但是，如果我們要監聽的是一個物件裏面的任何一個value的變化，那我們就要加上`deep: true`屬性
        // data() {
        //     return {
        //         userData: {
        //             name: 'John',
        //             age: 30,
        //         },
        //     };
        // }
        // 像這樣如果我們有修改userData裏面的屬性的話，我們就要使用另外一種寫法：
        // watch: {
        //     userData: {
        //         handler(newVal, oldVal) {
        //         console.log('userData changed');
        //         },
        //         deep: true,
        //     },
        // },
        // watch下面一樣放data()裏面的名稱，然後裏面塞入一個handler方法，并且在handler方法外面、userData裏面加入deep: true 屬性





    }
});
app.mount('#app');