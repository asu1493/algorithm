class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        result: dict = {}
        for i in range(0, len(nums)):
            if nums[i] in result:
                return [result.get(nums[i]), i]
            else:
                result[target-nums[i]] = i