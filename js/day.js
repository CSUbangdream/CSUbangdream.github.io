var d = new Date();
m = d.getMonth() + 1;
dd = d.getDate();
y = d.getFullYear();

// 节假日
if (m == 8 && dd == 30) {//拉帮结派
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是拉邦结派only哦~");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 8 && dd == 23) {//沪ppp
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是poppin'party上海live哦~");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 1 && dd == 1) {//元旦节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(y.toString() + "年元旦快乐！🎉");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 9 && dd == 7) {//开学
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("孩子们，开学了：(");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 10 && dd == 1) {//劳动节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("国庆快乐！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 10 && dd == 4) {//盐生日
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("咸盐生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 3 && dd == 20) {//黄瓜生日
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("黄瓜生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 3 && dd == 5) {//星昴生日
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("星昴生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 11 && dd == 11) {//lori
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("lori生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 25) {//圣诞节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("圣诞节快乐！🎄");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 8 && dd == 3) {//牧光
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("牧光生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 10 && dd == 13) {//木香
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("木香生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 2 && dd == 14) {//阿影
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("阿影生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 7 && dd == 20) {//934
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("九笙肆生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 8) {//穿山甲
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("穿山甲生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 5 && dd == 21) {//mbq
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("曼不群生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 12) {//果蔬
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("果蔬生日快乐！🎂");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 10 && dd == 11) {//沪鸡狗
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是Mygo&Mujica上海live哦~");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 11 && dd == 15) {//RAS
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是RAS live哦~");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 11 && dd == 22) {//r
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是R团亚巡哦~");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 11 && dd == 11) {//go
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是Mygo 8th哦~");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 11 && dd == 11) {//拉刺
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是拉刺对邦哦~");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 1 && dd == 3) {//ppp
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是ppp单独live哦~");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

var lunar = calendarFormatter.solar2lunar();

//农历采用汉字计算，防止出现闰月导致问题

if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初六") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初五") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初四") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初三") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初二") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初一") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "三十") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "廿九")) {
    //春节，本来只有大年三十到初六，但是有时候除夕是大年二十九，所以也加上了
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(y.toString() + "年新年快乐\n🎊祝你心想事成，诸事顺利🎊");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "十五")) {
    //元宵节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("元宵节快乐\n送你一个大大的灯笼🧅");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "五月" && lunar["IDayCn"] == "初五")) {
    //端午节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("端午节快乐\n请你吃一条粽子🍙");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "七月" && lunar["IDayCn"] == "初七")) {
    //七夕节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("七夕节快乐\n黄昏后,柳梢头,牛郎织女来碰头");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "八月" && lunar["IDayCn"] == "十五")) {
    //中秋节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("中秋节快乐\n请你吃一块月饼🍪");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "九月" && lunar["IDayCn"] == "初九")) {
    //重阳节
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("重阳节快乐\n独在异乡为异客，每逢佳节倍思亲");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

// 切换主题提醒
// if (y == 2022 && m == 12 && (dd >= 18 && dd <= 20)) {
//     if (sessionStorage.getItem("isPopupWindow") != "1") {
//         Swal.fire("网站换成冬日限定主题啦⛄");
//         sessionStorage.setItem("isPopupWindow", "1");
//     }
// }
