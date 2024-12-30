//Solution code using optional chaining and nullish coalescing

const databaseRef = ref(database, 'users/' + userId);

// ... other Firebase initialization code ...

onValue(databaseRef, (snapshot) => {
  const userData = snapshot.val();
  const username = userData?.username ?? 'Guest'; // Optional chaining and nullish coalescing
  console.log(username); // This will log 'Guest' if 'username' doesn't exist in userData
  // ... rest of your code
});