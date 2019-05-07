// 简单枚举，取默认值
var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tue"] = 2] = "tue";
    Days[Days["wed"] = 3] = "wed";
    Days[Days["thu"] = 4] = "thu";
    Days[Days["fri"] = '243'] = "fri";
    Days[Days["sat"] = 483] = "sat";
})(Days || (Days = {}));
;
console.log(Days["sun"]); // 0
console.log(Days.mon); // 1
console.log(Days.fri); // fri
// 计算所得项
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = "12345".length] = "Blue";
})(Color || (Color = {})); // 可以写在后面不能写在前面
console.log('计算所得项: ', Color["Blue"]);
var directCon = [422 /* Up */, 423 /* Down */, 32 /* Left */, 33 /* Right */];
console.log('常数枚举: ', directCon);
var directDec = [DirectionsDec.Up, DirectionsDec.Down, DirectionsDec.Left, DirectionsDec.Right];
console.log('外部枚举: ', directDec);
