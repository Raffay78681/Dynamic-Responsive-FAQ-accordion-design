#Dynamic & Responsive FAQs Accordion design  
---
This design used HTML, CSS and JavaScript. It's dynamic so it responds to user's clicks by expanding and contracting the answer part.  
#Working  
---
The QnA container divs have an event-Listener attached to them which looks for click event.  
Whenever the click event is triggered, JavaScript toggles the display type from `display: block` to `display: none` and vise versa.  

  
The code uses a CSS rule to expand the answer whenever the QnA container has a particular class as its attribute.  
The CSS rules then give it a display of block or none. 

*Note: I used different logics for the display functions of icons and answers top practice versatility and variation. Therefore, JS  
displays for icons whereas, CSS rules specify display for answers.*
