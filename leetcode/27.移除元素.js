var removeElement = function(nums, val) {
    //快慢指针法，慢指针指向第一个为val的值，快指针指向第一个不为val的值。
    //边界条件：fast < nums.length
    let low = 0, fast = 1;

    while(fast <= nums.length && low < nums.length){
        if(nums[low] === val){
            while(nums[fast]===val && fast < nums.length){
                fast = fast + 1;
            }
            if(fast < nums.length){
                nums[low] = nums[fast];
                nums[fast] = val;   
            }else{
                return low ;
            }
        }
        low = low + 1;
        fast = fast + 1;
    }
    
    return low;
};

let nums = [3,3];
let val = 3;
let res = removeElement(nums, val)
console.log(res)
