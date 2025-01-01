package Array;

public class ReverseString {

    public static String reverse(String str){
        if (null == str || str.isEmpty()) {
            return str;
        }

        //String[] strArr = str.split("");
        char[] strArr = str.toCharArray();
        StringBuffer b = new StringBuffer();

        for (int i = strArr.length - 1; i >= 0; i--) {
            b.append(strArr[i]);
        }

        return b.toString();
    }

    public static String reverse1(String str){
        return new StringBuilder(str).reverse().toString();
        //return new StringBuffer(str).reverse().toString();
    }

    public static void main(String[] args) {
        System.out.println(reverse("imran"));
        System.out.println(reverse(null));
        System.out.println(reverse(""));
        System.out.println(reverse("you better get it right!"));
        System.out.println(reverse1("you better get it right!"));
    }

}
