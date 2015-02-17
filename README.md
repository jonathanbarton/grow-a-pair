# grow-a-pair

Rules for the Pairing Tool:
1. No more than 2 times pairing with the same user per month
2. No pairing with the previous week's paired user
3. Sick/Holiday flag

Domain Objects:

### User
- fullname
- email
- availability

### Pairings
- week id
- [pair,..]

### Pair
- [user1,user2]
- notes

# API

/users
View: listing of users with availability flag checkbox by their name and a generate button

/pairs
View: listing of user1/user2 pairings and a link beside their name

/pair/id
View: user1/user2 and notes for that week's pairing

