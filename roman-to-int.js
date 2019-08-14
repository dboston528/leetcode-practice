var romanToInt = function(s) {
    let map=new Map(),len=s.length,sum=0;
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    for(let i=0; i<len-1; i++){
        if(map.get(s.charAt(i))< map.get(s.charAt(i+1))){
          sum-= map.get(s.charAt(i));
        }else{
          sum+= map.get(s.charAt(i));
        }
    }
    sum+=map.get(s.charAt(len-1));
    return sum;
};
