function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    attemptCount++;

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

const tracker = createLoginTracker({ username: "user1", password: "password123" });

console.log(tracker("wrongpass")); // Login failed (Attempt 1)
console.log(tracker("123456"));    // Login failed (Attempt 2)
console.log(tracker("password123"));// Login successful
console.log(tracker("password123"));// Login successful (or locked if count was already 3)