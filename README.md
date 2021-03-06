# InterviewPrompts
This is a repository for posting Interview Prompt technical questions. 

## Submit new prompts to the repository
If you would like to contribute more interview prompts to this repo please do the following:
- Clone down **this repo**
- Create a feature branch `git checkout -b feat/nameOfPrompt` 
  - Ex. `git checkout -b feat/deleteTelephoneContacts`
- Add a folder to the main directory with the name of the prompt 
  - Ex. deleteTelephoneContacts
- Add a .js file with the problem prompt to the folder  
  - Ex. ./deleteTelephoneContacts/deleteTelephoneContacts.js
- Add any other files needed for this prompt
- Commit any new changes with the final commit being: `add [name of folder] to repo` 
  - Ex. add deleteTelephoneContacts to repo
- then `git push -u origin feat/nameOfPrompt` 
  - Ex. `git push -u origin feat/deleteTelephoneContacts`
- from the repo select `Pull Request` and then create a `New pull request`.
  - Have the title be the name of the new branch
  - And in the message use: `@EvaFro Could you please approve this new prompt?`
- Click `Send pull request`

**Note that the pull request is just to make sure that your prompt is not missing any key features and is understandable.**

## Add a Working solution
You may add working solutions to each of the file promts if you so choose.
- Clone down **this repo**
- Create a feature branch `git checkout -b feat/solutionsNameOfPrompt` 
  - Ex. `git checkout -b feat/solutionDeleteTelephoneContacts`
- Within the designated folder either navigate to or create a Solutions folder 
  - Ex. ./deleteTelephoneContacts/Solutions/
- Add your solution.js to the folder 
  - please label the solution file yourLastNameNameOfPrompt.js 
  - Ex. frolliDeleteTelephoneContacts.js
  -  **Please make sure that you only commit a working solution to the repo**
- Commit any new changes with the final commit: `add [name of folder] to solutions` 
  - Ex. add frollideleteTelephoneContacts to solutions
- then `git push -u origin feat/nameOfPrompt` 
  - Ex. `git push -u origin feat/deleteTelephoneContacts`
- from the repo select `Pull Request` and then create a `New pull request`.
  - Have the title be the name of the new branch
  - And in the message use: `@EvaFro Could you please approve this new solution?`
- Click `Send pull request` 

**Note that the pull request is just to make sure that your solution is not missing any key features and is understandable.**

## Getting a Copy of the Repo to practice with
If you haven't already, **please fork** the repository on GitHub and clone your newly created repo down to your computer. 

## Updating Forked copy of the Repo
To check if there are new prompts and solutions you will have to sync your version of the repo with the original. Since Git won't automatically pull in new upstream changes you will have to do so. The following steps will allow you to update your local repo:

- Navigate inside of the InterviewPrompts folder on your local computer. 
- Then in the terminal copy and past the following:
  - `git remote add upstream https://github.com/HRSF89/InterviewPrompts.git`

After you have done the above. Any time you want to update your repo run the following comands in the terminal.
- `git checkout master   // this will switch you to your fork's master branch`
- `git pull upstream master // this will pull any new material to your local computer`





