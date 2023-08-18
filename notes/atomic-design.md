# Atomic Design
- Atomic design, developed by Brad Frost and Dave Olsen.
- Is a methodology for crafting design systems with five fundamental building blocks, which, when combined, promote consistency, modularity, and scalability.
  

# Atomic Development
atoms > molecules > organisms > templates > pages

![atomic-design](atomic-design.png)


# File Structure
![](atomic-react-01.png)
![](File-Structure.png)

# Atoms
are the basic structure of matter, applied to web atoms are like HTML tags, a label, an input or a button.
# Molecules:
Grouping atoms together, such as combining a button, input and form label to build functionality.
# Organisms:
Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)
# Templates:
Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.
# Pages:
An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application

# Problems
I know there are several examples of atomicity out there, so I want to focus on the problems I encountered during my experiments while working with React, showing some concepts and an example of code that you can find linked at the end of the article.

* Duplicate Behavior (mainly between molecules and atoms)

* Inability to reuse code between projects

* Lack of visibility and understanding of component state

* Great impact on development time by creating more components than needed

* Difficult code maintainability due to lack of standardization


# Repo

https://github.com/natamvo/rethinking-atomic-react.git