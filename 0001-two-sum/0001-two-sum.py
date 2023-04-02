class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        result: dict = {}
        for i, value in enumerate(nums):
            if value in result:
                return [result.get(value), i]
            else:
                result[target-value] = i
