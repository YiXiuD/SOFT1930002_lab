/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    var value = 1;
    var count = 0;
    console.log(value);
    const interval=setInterval(double,5000);
    function double(){
        value*=2;
        count++;
        console.log(value);
        if(count==10){
            console.log("已计数十次");
            value=1;
            clearInterval(interval);
        }
        else if((new Date()).getSeconds()<5){
            console.log("已到整分");
            value=1;
            clearInterval(interval);
        }
    }
}
// testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    const  telCk=/^[1]+[0-9]{10}$/;
    var tel=(telCk.test(telephone))?"right":"wrong";
    const maiCk=/^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
    var mai=(maiCk.test(mail))?"right":"wrong";
    console.log("The telephone is "+tel+" and the mail is "+mai+".");
}
// testMail('12537474747','fwefwefwf@efcibwe.vfe');
/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    var Arr = str.split(" ");
    var Result = new Array();
    for (var i = 0; i < Arr.length - 1; i++) {
        var content1 = Arr[i].toUpperCase();
        var content2 = Arr[i + 1].toUpperCase();
        if (content1 == content2) {
            Result.push(Arr[i] + " " + Arr[i + 1]);
        }
    }
    let arrSort = Result.sort(function (s, t) {
        let a = s.toLowerCase();
        let b = t.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })
    var content3 = " ";
    if (Result.length <= 10) {
        for (var i = 0; i < Result.length - 1; i++) {
            content3 = content3 + " '" + Result[i] + "',";
        }
        content3 = content3 + " '" + Result[i] + "' ";

    } else if (Result.length > 10) {
        for (var i = 0; i < 9; i++) {
            content3 = content3 + " '" + arrSort[i] + "',";
        }
        content3 = content3 + " '" + arrSort[9] + "' ";
    }
    console.log("Set {"+content3+"}");
}

// testRedundancy('Is is the iS is cost of of gasoline going up up Is is the iS is cost of of gasoline going up up Is is the iS is cost of of gasoline going up up');

/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    var wrongNum=0;
    var miss=new Set();
    var wants=wantInput.split("");
    var actuals=actualInput.split("");
    for(let i=0;i<wants.length;i++) {
        if( !(wants[i] == actuals[i-wrongNum])) {
            miss.add(wants[i].toUpperCase());
            wrongNum++;
        }
    }
    console.log(miss);
}
// testKeyBoard('fweflWQ5345FU3124Q12RDQ','fwflW535FU124Q2RD');
/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    var strs=new Array();
    strs=str.split(" ");
    var output="";
    for(var i=0;i<strs.length;i++){
        output=output+strs[strs.length-i-1]+" ";
    }
    console.log(output);
}
// testSpecialReverse('ewfwef weqwe jmyum ertet dvdfv');
/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    var map=new Map();
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target)
                map.set(nums[i],nums[j]);
        }
    }
    console.log(...map);
}

// twoSum([1,2,3,4,5,6,8,9],9);
/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    var map=new Map();
    var max=1;
    var num=0;
    for(var i=0;i<str.length-1;i++){
        if(map.has(str.charAt(i))){
            i=i-num+1;
            num=0;
            map.clear();
        }
        else {
            num++;
            max=Math.max(max,num);
            map.set(str.charAt(i),i);
        }
    }
    console.log(max);
}


// lengthOfLongestSubstring('etlhdeyuwgggsdwyyyyett');

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
function DevelopingCountry() {
    Country.call(this,"发展中国家");
    if(typeof this.sayHi !="function")
        DevelopingCountry.prototype.sayHi=function(){console.log('Hi,i am a developing country.');};
}

function PoorCountry() {
    this.name="穷国";
    if(typeof this.saySad !="function")
        PoorCountry.prototype.saySad=function(){console.log('I am a sad poor country.');};

        }
PoorCountry.prototype = new Country();

function DevelopedCountry() {
   Country.call(this);
    if(typeof this.sayHappy !="function")
        DevelopedCountry.prototype.sayHappy=function sayHappy() {console.log('I am a Happy developed country.');}
}
DevelopedCountry.prototype=Object.create(Country.prototype);
//
// var dvlpg=new DevelopingCountry();
// dvlpg.sayHi();
// var pr=new PoorCountry();
// pr.saySad();
// var dvlpd=new DevelopedCountry();
// dvlpd.sayHappy();
