class Grade(Student):
    def __init__(self, firstName, lastName, phone, score):
        super(Grade, self).__init__(firstName, lastName, phone)
        self.score = score

    def calculate(self):
        grade = None
        if self.score < 40:
            grade = "D"
        elif self.score < 60:
            grade = "B"
        elif self.score < 75:
            grade = "A"
        elif self.score < 90:
            grade = "E"
        elif score <= 100:
            grade = "O"
        return grade
