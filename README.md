# Practicum
This practicum was designed to test some of your skills including: working with Github, Angular, NgRx and clean code practices. 

You will start by duplicating the repository, then fixing few bugs, adding a simple feature, and finaly duing some code reivew. 

👀 Please read the following instuctions carfully 

## Part 1: Setting up your repository
1. First you need to create a new GitHub ⚠️ **private** repository 
2. Next, please **duplicate** this repository to your newly created one
   you can follow these instructions how to [duplicate a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository)
   
   ⚠️ Do **not** fork . If you do you will not be able to change the repo to _private_
3. To enable the remote API you will need to provide a key

   The key will be sent to you by email. 
   
   🔑 To add the key: open the `environment.ts` file and past the key in the placeholder. 
   

### How to submit 🚀
**For each bug and feature (part 2) create new pull request** (5 PRs in total).

We suggest to name the branches something like `fix\bug-<N>\<...>` and `feat\<...>`.

Part of the evaluation will be testing your github skills:
   - Create a new branches for every fix and feature.
   - Create a **pull request for each branch** for each branch. We will be using the PR to discuss your work. 
   
     ⚠️ **Do not merge the pull requests** 

## Part 2: Bugs & Feature 
In this part you are required to fix 3 bugs and implement 1 feature.

Reminder: create a new branch and open a new PR for each bug and feature.

  - ## Issue fixing (15 points for bugs, 20 for style) 
    Each issue was designed to test a different Angular skill. You will find all the information and instructions in each of the issues:
    
    🪲 [Bug #1](https://github.com/natanbr/angular-practicum/issues/1)
    
    🪲 [Bug #2](https://github.com/natanbr/angular-practicum/issues/2)
    
    🪲 [Bug #3](https://github.com/natanbr/angular-practicum/issues/3)

    🎨 [style](https://github.com/natanbr/angular-practicum/issues/6)
    
    💡 Hint: Bug 2 and Bug 3 can be fixed with 1-3 lines of code each, try to think about the simplest way to fix them.
    If a bug takes you more then 30min consider moving on to the next task.
    
  - ## New feature (25 points)
    ✨ you are required to implement a global notification. In this [feature request](https://github.com/natanbr/angular-practicum/issues/4) you will find all the requirements and an example. 
    
   ⚠️ Do not use any external library. In this part we are interested in seeing your code. 
   
## Part 3: Code review (10 points) 👀
  Lastly, in this part you are required to do a quick code review.
  Our goal is to see if you can recognize all the problematic and "smelly" code issues. 
  - ### Instructions:
    1. Create a new pull request of `code-review-task` into `main` branch
    2. Navigate to that pull request and add your review as comments
  - ### 💡 Tips:
    - In your daly work you will create code review request and you will review other developers code. Think of this as a real review you are doing to one of your co-workers.
    - You are **NOT** required to understand or refactor the logic, you just need to suggest the developer what you think he should do to improve the quality of his code.
    - You don't need to repeat the same comment in each line you find the same problem, Single example for each issue you find is sufficient. 

## When you done
Please give dominique@blockchaingroup.io and nathan.braslavski@blockchaingroup.io
access to your private repo.

### To Compile:

#### using `yarn`
run the project install the dependencies by running the command `yarn` and to run the development server use `yarn start`

**Good luck!**
