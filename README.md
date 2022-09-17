# PasswordGenerator-WK3

<h2 align="center"><img width="550" alt="Static" src="https://user-images.githubusercontent.com/82792300/190870686-eb3ace1c-9cdc-415a-ab4c-e9767fc4aeb0.png"></h2>

## TLDR 👀

A password generator coded with JS. Generate a password based on user's answers to prompt and confirm boxes. 

**\*Extra\* - I went beyond the challenge**: 
- After the first password, user can click the button again for another password without answering all the prompt and confirm boxes again.
- The page work intuitively, means the cancel button do what the cancel button does, so that the boxes stop pestering users to answer while keeping some constraints on user's input.

[You can visit the deployed project here](https://ryantrian.github.io/passwordGenerator-WK3/)

## Demo

<img width="1207" alt="Demo" src="https://user-images.githubusercontent.com/82792300/190870684-96ef20b2-64bf-45c3-9c4f-d97f6bbb69f4.gif">

## Usage

1. Click the "Generate Password" button
2. Answer how long the password should be
3. Confirm or Cancel four boxes that ask if lower-case, upper-case, number or special characters should be included
4. Click the button again, then confirm the box If want another password.
5. Reset the page if want to apply different rules to the password.


## Challenges 🤔

- A quite common solution is pool whichever characters array that user want to a new array and math.random that new array. I think with that solution, it could create a password which has one type of character more than the other, ex. too many lower case letter. 
  - Therefore, I used **nested arrays** instead. A new array that will contain the character-array users want, then have math.random pick one of the nested array, and math.random again to pick an element inside that array. It required some if logic to create the array that hold user's choices. 
- After doing multiple tests, I didn't like that to create a second password I have to answers all the questions again. So I added an If logic inside the "Generate Password" button's click event. User just need to click the button again and confirms they want another password, a different password will generate with the same rules from the previous one. 

  - <img width="1207" alt="Generate-another" src="https://user-images.githubusercontent.com/82792300/190870685-f4fb47c4-8c9f-46b7-b068-44a88d6f6eed.png">

- Finally, I ran into a major issue due to the extra feature I want to add. It was due to variable scoping. However, thanks to this problem, I now had some practice with global, local scoping, and debugging too.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details