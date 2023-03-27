class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])
        self.answer = [[-1]*m for _ in range(n)]
        ans = self.dp(n-1, m-1, grid)
        return self.answer[n-1][m-1]
        
        
    def dp(self, n, m, grid):
        if self.answer[n][m]!=-1:
            return self.answer[n][m]
        elif n==0 and m==0:
            self.answer[0][0] = grid[0][0]
            return grid[0][0]
        elif n==0:
            self.answer[n][m] = self.dp(n, m-1, grid)+grid[n][m]
            return self.dp(n, m-1, grid)+grid[n][m]
        elif m==0:
            self.answer[n][m] = self.dp(n-1, m, grid)+grid[n][m]
            return self.dp(n-1, m, grid)+grid[n][m]
        else:
            self.answer[n][m] = self.dp(n-1, m, grid) + grid[n][m] if self.dp(n-1, m, grid) < self.dp(n, m-1, grid) else self.dp(n, m-1, grid) + grid[n][m]
            return self.answer[n][m]