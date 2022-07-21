# testing front-end apps

## who write tests?

-developers test their own code
-dedicated testing team


## WHY write tests?
-make sure dependencies apis, etc, everything works
-avoid logging in app
-easier to dedug
-gives you confidence to refactor old code
-helps you enable continous delivery -- if you have automated confidence in the reliability of your app, you can deploy a new version every week
-prevent bugs from recurring
-serve as verifiable documentation for the code -- if you're being onboarde to a new project, read the tests first!



## different types of tests

- unit
  - tests the smallest testable unit of your application
  - typically, this is a single function
  - to make unit testing easy, you should build your app with functions that take input, return output, and produce no other side effects
  - unit tests should be fast
  common js unit testing frameworks:
    - jasmine
    - mocha
    - chai
    - jest (a library from fb that is commonly used with react)

- integration






## if api is too slow--- create integration tests and run API tests in there
integration tests models/db or API

###ideally do both integration and unit test to test api call function


## e2e end to end test -- black box testing
- demo with puppeteer

## when to write tests?
- test important features (signup/login) bc testing is expensive
- basic: write tests after you complete a feature to make sure it works, won't break in the future, and document what you did
- reactive: when a bug happens in production, fix the bug and write a test to make sure it doesn't happen again
- TDD (test driven dev): write a test that defines how the features should work. The test will fail, because there is no application code. Then, write the application code so that the test passes.
  - this style of programming slows down the development while reducing bugs

## when to run tests?
- basic: run tests namually after making major changes
 and before you deploy
- continous integration (CI) - run tests automatically, so you can deploy automatically
- if your tests are fast enough to run in seconds, you can configure your editor to run them when you save a file
- if your tests are fast enough to run in minutes, you can configure git to run them every time you commit
    -- .git folder
        -- hooks folder