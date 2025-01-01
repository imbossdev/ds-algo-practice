package Array;

import java.util.HashSet;
import java.util.Set;

public class PairOfSum {

    //Naive O(n^2)
    public static boolean findPairHasGivenSum(int[] pairs, int sum) {
        for (int i = 0; i < pairs.length; i++) {
            for (int j = 0; j < pairs.length; j++) {
                if(i != j && pairs[i]+pairs[j]==sum){
                    return true;
                }
            }
        }
        return false;
    }

    //Better O(n)
    public static boolean findPairHasGivenSum1(int[] pairs, int sum) {
        Set<Integer> complements = new HashSet<>();
        for (int number : pairs) {
            if(complements.contains(number)) {
                return true;
            }
            complements.add(sum-number);
        }
        return false;
    }

    public static void main(String[] args) {
        int[] pairs = {1,2,5,4,4};
        System.out.println(findPairHasGivenSum(pairs, 3));
        System.out.println(findPairHasGivenSum1(pairs, 3));
    }
}