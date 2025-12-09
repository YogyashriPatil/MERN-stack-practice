function getMax(nums: number[]): number{
    let maxValue = -100000000

    for(let i=0;i<nums.length; i++)
    {
        if(nums[i] > maxValue)
        {
            maxValue = nums[i]
        }
    }
    return maxValue
}
getMax([1,2,4,7,2,7,3])