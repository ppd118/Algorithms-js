var mySqrt = function(x) {
    // 迭代法算整数的算数平方根
    if(x === 1)return 1;
    var max = x;
    var min = 0;
    while(max - min > 1){
        let m = parseInt((max + min)/2);
        if(x/m < m){  // 小于时说明m大了，需要向前缩小搜索范围。用x/m是为了防止m*m溢出
            max = m;
        }else{
            min = m;
        }
    }

    return min;
};

var res = mySqrt(3)