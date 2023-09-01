// const app = Vue.createApp()
// 這個方法表示創建一個Vue應用,這個應用叫做app
const app = Vue.createApp({
    // 在這邊定義資料,在前端可以直接使用key將value提取出來
    // 但是要記得data裏面的資料不能直接當成html tag的屬性
    // 如 <div class="{{ occupation }}"></div> 這樣是不被允許的
    // 正確的方式應該是使用v-bind指令
    data() {
        return {
            name : "LiangJin",
            occupation : "full-stack developer",
            age : 23,
            // 用這個link當作示範使用v-bind指令
            link : "https://www.google.com",
            // 用這個todo來示範如何使用
            todos : ["洗澡","吃飯","睡覺"],
            // 用這個objectV_for來示範如何用for loop來遍歷數組物件
            // 也順便展示在data裏面的資料不一定是string,也可以是int, boolean...
            objectV_for :[
                {
                    id : 1,
                    name : "小可愛",
                    class : "高一理科",
                    bool : true
                },
                {
                    id : 2,
                    name : "冷漠哥",
                    class : "高三文商科",
                    bool : false
                }
            ],
            // 用這個books來示範v-if, v-else-if, v-else 搭配v-for來使用
            books : [
                {
                    title : "我的第一本書",
                },
                {
                    title : "English Book",
                },
                {
                    title : "Essentials of the Java Programming Language, Part 1",
                }
            ]
        }
    }
});
// 下面這一行代表的是將最上面建的const app = Vue.createApp();這個東西和html上的某個被取名id="app"的元素挂載(連接)在一起
app.mount("#app");