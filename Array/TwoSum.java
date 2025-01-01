package Array;

import java.util.Map;
import java.util.HashMap;
import java.util.Arrays;

class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        int[] res = new int[2];
        Map<Integer, Integer> set = new HashMap<>();
        for(int i=0; i < nums.length; i++){
            if(set.containsKey(nums[i])){
                res[0] = set.get(nums[i]);
                res[1] = i;
                return res;
            }
            set.put(target - nums[i], i);
        }
        return null;
    }

    public static void main(String[] args) {
        int[] i = {2,7,11,15};
        System.out.println(Arrays.toString(twoSum(i, 9)) );
        int[] j = {3,2,4};
        System.out.println(Arrays.toString(twoSum(j, 6)));
        int[] k = {3,3};
        System.out.println(Arrays.toString(twoSum(k, 6)));
    }
}