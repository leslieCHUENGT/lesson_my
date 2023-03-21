const findTargetSumWays = (nums, target) => {
    const sum = nums.reduce((p,v)=>p+v);
    if(Math.abs(target)>sum)return 0;
    if((target+sum)%2)return 0;
    const halfSum = (target+sum)/2;
    let dp=new Array(halfSum+1).fill(0);
    dp[0]=1;
    for(let i=0;i<nums.length;i++){
        for(let j=halfSum;j>=nums[i];j--){
            dp[j]+=dp[j-nums[i]];
        }
        console.table(dp)
    }
    
};
findTargetSumWays([1,3,2,3,2,2],1)