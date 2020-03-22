module.exports = function transform( arr ) {
    if (!Array.isArray(arr)){
    throw 'Not array';
    }
    for (let i=0;i<arr.length;i++){
        if (arr[i]==='--discard-next'){
            arr.splice[i,2]
        }
        if (arr[i]==='--discard-prev')
        {   
            arr.splice[i-1,2]
        }
        if (arr[i]==='--double-next')
        {
            arr.splice[i,0,i+1]
            arr.splice[i,1]
        }
        if (arr[i]==='--double-prev')
        {
            arr.splice[i-1,0,i-1]
            arr.splice[i,1]
        }


        
    }
    return arr
    // remove line with error and write your code here
};
