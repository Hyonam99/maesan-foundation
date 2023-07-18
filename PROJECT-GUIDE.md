# Working on Maesan Foundation Website


## Styling

For creating classNames please adopt the `BEM` style methodology. 
Use the link below to read more about this:
[Bem Style Guide](https://www.devbridge.com/articles/implementing-clean-css-bem-method/) 


## Branching

For creating a new branch please adopt this method:

### Implementing new components
the branch name should be in the format below:
ProjectName-PageName-ComponentName-Task. i.e `maesan-home-hero-implementation`

### Fixing bugs or updates to modules - components
in the event where the implementation is already done and a fix has to be made please adopt this branch name format
ProjectName-PageName-ComponentName-Task-FixAction. i.e `maesan-home-hero-implementation-fix-image-overflow`

**Note: all naming should be short and precise as possible**


## CodeBase and Formatting

Eslint rules for indentation and tab spaces is active:
in the event of any errors in your editor, below are some of the checks to look out for

*4 spaces for indentation and tabs*

*single quotes for strings*

*operator line breaks should be before the element or expression not after, read more [here](https://eslint.org/docs/latest/rules/operator-linebreak)*


## Pushing / Pull Requests and Merging

All updates should be pushed from the branch where the changes were made.
After a successful pull request, please use the `Squash and Merge option` to merge changes to the main branch.