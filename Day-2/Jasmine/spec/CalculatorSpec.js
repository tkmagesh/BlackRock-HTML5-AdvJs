describe("A calculator",function(){
	describe("An adding operation",function(){
		it("should be able to add two numbers",function(){
			//Arrange
			var number1 = 10, number2 = 20, expectedResult = 30;

			//Act
			var result = add(number1, number2);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to add two numbers in string format",function(){
			//Arrange
			var number1 = "10", number2 = "20", expectedResult = 30;

			//Act
			var result = add(number1, number2);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should return the number when only one argument is passed",function(){
			//Arrange
			var number1 = 10, expectedResult = 10;

			//Act
			var result = add(number1);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should return 0 when no arguments are passed",function(){
			//Arrange
			var expectedResult = 0;

			//Act
			var result = add();

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to add variable length arguments",function(){
			//Arrange
			var expectedResult = 60, number1 = 10, number2 = 20, number3 = 30;

			//Act
			var result = add(number1, number2, number3);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to pass functions that return number",function(){
			//Arrange
			var f1 = function(){ return 10;},
				expectedResult = 10;

			//Act
			var result = add(f1);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to pass functions that return function that return number",function(){
			//Arrange
			var f1 = function(){ return function(){ return 10};},
				expectedResult = 10;

			//Act
			var result = add(f1);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to pass an array of numbers",function(){
			//Arrange
			var numbers = [10,20,30],
				expectedResult = 60;

			//Act
			var result = add(numbers);

			//Assert
			expect(result).toBe(expectedResult);
		});
		it("should be able to pass a nested array of numbers",function(){
			//Arrange
			var numbers = [10,[20,[30]]],
				expectedResult = 60;

			//Act
			var result = add(numbers);

			//Assert
			expect(result).toBe(expectedResult);
		});
	});
});