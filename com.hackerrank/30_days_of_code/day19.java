//Write your code here
final class Calculator implements AdvancedArithmetic {
    public int divisorSum(int n) {
        int sum = 0;
        int quotient;
        for (int i=1; i <= Math.sqrt(n); i++ ) {
            if ((n % i) == 0) {
                sum += i;
                quotient = n/i;
                if (quotient != i) {
                    sum += quotient;
                }
            }
        }
        return sum;
    }
}
