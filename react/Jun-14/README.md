## Jun-14, 2022

--> Context
--> It allows us to pass data from ancestor to descendant without doing prop drilling.
--> It allows us to maintain the code easily.

--> Problems with Prop Drilling
--> Readability
--> Memory
--> Not so efficient


--> In context, there are 2 parts.
--> Provider (This will PROVIDE the data)
--> Consumer (This will CONSUME the data)


Step 1:
Create a context
createContext()
Step 2:
the context which we created, export it.
Step 3:
Where we have the data, give the provider.
Step 4: Whereever we want to use it, just import and use consumer.
NOTE: Consumer needs a FUNCTION.