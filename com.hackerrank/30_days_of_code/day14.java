// Add your code here
public Difference (int[] a) {
	this.elements = a;
}

public void computeDifference() {
	int min = this.elements[0];
	int max = min;

	for (int i=1; i < this.elements.length; i++) {
		int curr = this.elements[i];
		if (curr > max) {
			max = curr;
		} else if (curr < min) {
			min = curr;
		}
	}

	this.maximumDifference = max - min;
}
