class Printer {
	//Write your code here
	public static <E> void printArray(E[] array) {
		for (E item : array) {
			System.out.println(item);
		}
	}
}
