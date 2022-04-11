## Question list for HTML concepts.

1. What is HTML?

A. It is a markup language used to structure any data. Most commonly used as a skeleton of a webpage. Also, HTML is not a programming language.


2. What is Markup Language?

A. Markup Language is a way (a set of rules) used to organize and structure the data/content. It is made up of various elements containing the data. Examples are, HTML, XML, XHTML, LaTex (TeX), SGML.


3. Why is HTML not a programming language?

A. Because it doesn't have any logic.

4. What are tags?

A. Tag is a way to format/structure and display the document/data/content. It is basically anything inside angular brackets. 
For example, `<a>, <button>, <p>, <ul>, <li>`.


5. What are elements and how are they different from tags?

A. Any tag with the content inside it is an HTML element. Content can be in plain text or it can container other HTML elements as well. (Attached image as well from Digital Ocean).


6. What is an opening and a closing tag?

A. Opening tags marks beginning/start of any HTML element. Closing tag marks closing/end of that element. Syntax, <tag_name> is opening and </tag_name> is closing.


7. What are HTML Entities?

A. HTML entities are used to show reserved characters of HTML language. For example, `<>/&,<spaces>`. Syntax for this is it starts with & symbol followed by the code and ends with semi colon;. For example `&lt; &gt; &copy; &nbsp; &emsp;`.


8. What are attributes?

A. These are addition (supplimentary) properties which are in a key value format/syntax and are written in the opening tag of an element. They are used to give additional features, looks, functionality to any HTML element. Note, not all elements support all attributes. Also, value is optional, for example (input required).


9. Is class and id an attribute? Prove why?

A. They are attributes. We can use attribute selectors [id="something"] in the CSS to prove that id and classes are valid attributes.


10. What will be the output:
```
#special {
  color: #FF0000;
}

[id="special"] {
  color: #0000FF;
}
```

A. The ID selector has higher specificity than the attribute selector, therefore the red color will be applied.


11. What is CSS?

A. It is a stylesheet language that is used to design any webpage/website. It describes how any element should look and feel (rendered) on the viewport/browser. A single CSS file can be reused to give style to multiple webpages.


12. Examples of Stylesheet langauges?

A. CSS, SaSS, SCSS, LESS, Stylus, XSL, PostCSS, Qt


13. What is the difference between a website and a webpage? What is a Web Application?

A. A webpage is a single page whereas a website is a collection of webpages. Website is used to show the data (1 way interaction). Web app is used for user to interact. (2 way interaction).


14. Different selectors in CSS.

A. Univesal (*), Class (.), ID (#), attribute ([]), pseudo (:, ::), type (a, p, button), group(, ).


15. Combinators in CSS.

A. A combination of two selectors in a relationship. (Child (>), Descendant (<space>), General Sibling (~), Adjacent Sibling (+))


16. What are pseudo classes and pseudo elements?

A. Pseudo classes are denoted by writing : and they change the style of the whole element whereas pseudo elements, which are denoted by :: and they change only some part of that element.


17. Why are they called pseudo?

A. They need a base selector to work. We cannot use just a pseudo selector alone. That is why they are not real selectors, but fake. AKA pseudo.

18. What is box model?

A. In a document. There are elements. For eevery element there is a rectangular box rendered by the browser. This box can have 4 major parts. 1. Content, 2. Padding - Space inside the element. 3. Margin - Space outside the element, 4 Border - The border of the element.

19. What are the ways in which we can write padding and margin?

A. margin/padding: 2px (All 4 sides 2px).
margin/padding: 2px 3px (2px top and bottom, 3px left and right)
margin/padding: 3px 4px 5px (3px for top, 4px left+right, 5px for bottom).
margin/padding: 3px 4px 5px 6px (top, right, bottom, left).

20. Different ways to position an element?

A. static -> Default position of rendering as decided by the browser. (User Agent)
relative -> Relative to it's initial position.
fixed -> fix with respect to the viewport.
absolute -> it is relative to the nearest positioned ancestor.

absolute, sticky.

Assignment:- Complete CSS Diner 
(https://flukeout.github.io/)