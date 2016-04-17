function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		// SOLUTION GOES HERE
		return submittedUsers
			.every(function (x) {
				return goodUsers
					.some(function (y) {
						return x.id === y.id
					})
			})
	};
}

module.exports = checkUsersValid
