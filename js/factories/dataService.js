(function(){

 	angular
 		.module("intFacts")
 		.factory("DataService", DataService);

 		function DataService() {


 			var dataObj = {
 				progData: progData,
 				quizQuestions: quizQuestions,
 				correctAnswers: correctAnswers
 			};

 			return dataObj;
 		}
	var correctAnswers = [1 ,1 ,3 ,3 ,0 ,0 ,1 ,2 ,3 ,2];
	var quizQuestions  = [
        {
            type: "text",
            text: "Choose the correct function which can return a reminder by dividing -10.0/3.0?",
            possibilities: [
                {
                    answer: "rem = mod(-10.0, 3.0);"
                },
                {
                    answer: "rem = fmod(-10.0, 3.0);"
                },
                {
                    answer: "rem = modf(-10.0, 3.0);"
                },
                {
                    answer: "Division of floating point values can’t return reminder"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What will happen if static modifier is removed from the signature of the main method?",
            possibilities: [
                {
                    answer: "Compilation Error."
                },
                {
                    answer: "RunTime Error: NoSuchMethodError."
                },
                {
                    answer: "Program will compile and run without any output."
                },
                {
                    answer: "Program will compile and run to show the required output"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of the following is Merge Sort?",
            possibilities: [
                {
                    answer: "https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_2.jpg"
                },
                {
                    answer: "https://i.stack.imgur.com/AirFU.jpg"
                },
                {
                    answer: "http://codingfox.com/wp-content/uploads/2013/10/clip_image001_00022.gif"
                },
                {
                    answer: "http://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Merge-Sort.png"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: " Which of the following defines a measurement relative to a font's x-height?",
            possibilities: [
                {
                    answer: "%"
                },
                {
                    answer: "cm"
                },
                {
                    answer: "em"
                },
                {
                    answer: "ex"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the default value of byte variable?",
            possibilities: [
                {
                    answer: "0"
                },
                {
                    answer: "0.0"
                },
                {
                    answer: "null"
                },
                {
                    answer: "not defined"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following attribute is used to group elements?",
            possibilities: [
                {
                    answer: "item"
                },
                {
                    answer: "itemprop"
                },
                {
                    answer: "itemcheck"
                },
                {
                    answer: "itemgroup"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following attribute triggers event when the browser starts to load the media data?",
            possibilities: [
                {
                    answer: "onloadedmetadata"
                },
                {
                    answer: "onloadstart"
                },
                {
                    answer: "onmessage"
                },
                {
                    answer: "onoffline"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following layer in Web Service Protocol Stack is responsible for describing the public interface to a specific web service?",
            possibilities: [
                {
                    answer: "Service Transport"
                },
                {
                    answer: "XML Messaging"
                },
                {
                    answer: "Service Description"
                },
                {
                    answer: "Service Discovery"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the output of print list[2:] if list = [ 'abcd', 786 , 2.23, 'john', 70.2 ] in python?",
            possibilities: [
                {
                    answer: "[ 'abcd', 786 , 2.23, 'john', 70.2 ]"
                },
                {
                    answer: "abcd"
                },
                {
                    answer: "[786, 2.23]"
                },
                {
                    answer: "[2.23, 'john', 70.2]"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following function convert a String to a tuple in python",
            possibilities: [
                {
                    answer: "repr(x)"
                },
                {
                    answer: "eval(str)"
                },
                {
                    answer: "tuple(s)"
                },
                {
                    answer: "list(s)"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var progData = [
        {
            type: "C Programming",
            image_url: "http://www.pskills.org/image/c.png",
            content1: "Loops",
            content2: "Arrays",
            content3: "Pointers",
            content4: "Structures",
            ques1: "What is NULL pointer? ",
       		ques2: "What is Dangling pointer?",
       		ques3: "What is memory leak? Why it should be avoided?",
       		ques4: "What is difference between i++ and ++i?",
       		ques5: "Can a variable be both const and volatile?",
       		ques6: "What is the difference between call by value and call by reference in C?",
       		ques7: "What is pointer in C?",
       		ques8: "What is the difference between malloc() and calloc()?",
       		ques9:  "What is the difference between getch() and getche()?",
       		ques10: "Can the sizeof operator be used to tell the size of an array passed to a function?"
       		
       
        },

        {
            type: "C++ Programming",
            image_url: "http://1.bp.blogspot.com/-OP6RNSQEMkc/U2TM76Y_HdI/AAAAAAAACtE/6eNinrr4ayY/s1600/cplusplus.gif",
            content1: "Inheritence",
            content2: "Overloading",
            content3: "Interface",
            content4: "Exception Handling",
            ques1: "What are the differences between references and pointers?",
       		ques2: "What are virtual functions – Write an example? ",
       		ques3: "What is the difference between C and C++?",
       		ques4: "What are the C++ access specifiers?",
       		ques5: "What is the difference between new() and malloc()?",
       		ques6: "What is function overriding?",
       		ques7: "What is the purpose of delete operator?",
       		ques8: "What does Scope Resolution operator?",
       		ques9:  "What are C++ inline functions?",
       		ques10: "Define the private, protected and public in C++?"
       		
        	
        	},
        {
            type: "Java",
            image_url: "https://s-media-cache-ak0.pinimg.com/736x/85/44/da/8544dac44077c26e351801c7181a9e12--java-resolutions.jpg",
            content1: "Constructors and Destructors",
            content2: "Overloading and Overriding",
            content3: "Arrays and String",
            content4: "Multithreading",
            ques1: "How many types of memory areas are allocated by JVM?",
       		ques2: "What gives Java its 'write once and run anywhere' nature?",
       		ques3: "What is static method?",
       		ques4: "What is difference between static (class) method and instance method?",
       		ques5: "Why multiple inheritance is not supported in java?",
       		ques6: "Difference between method Overloading and Overriding.",
       		ques7: "What is Runtime Polymorphism?",
       		ques8: "What is abstract class?",
       		ques9:  "What is difference between abstract class and interface?",
       		ques10: "What is package?"
       	
        },
        {
            type: "HTML5 & CSS3",
            image_url: "http://www.netakademija.hr/wp-content/uploads/2015/03/html5-css3.png",
            content1: "Web Socket",
            content2: "Geo-location",
            content3: "Canvas and Drag-Drop",
            content4: "Media Queries",
            ques1: "What is the difference between Canvas and SVG graphics?",
       		ques2: "What is difference between session storage and local storage?",
       		ques3: "What are selectors in CSS?",
       		ques4: "What are web workers and why do we need them ?",
       		ques5: "What is the purpose of HTML5 versus XHTML?",
       		ques6: "What is the  <!DOCTYPE>? Is it mandatory to use in HTML5?",
       		ques7: "How to add video and audio in HTML5?",
       		ques8: "What is the sessionStorage Object in html5 ? How to create and access?",
       		ques9:  "What is responsive website?",
       		ques10: "Write syntax for Media Queries."
       		
        },
        {
            type: "JavaScript",
            image_url: "data:image/png;base64,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",
            content1: "Function and Events",
            content2: "Cookies",
            content3: "Animation",
            content4: "Validations",
            ques1: "What is the difference between JavaScript and jscript?",
       		ques2: "What is DOM? What is the use of document object?",
       		ques3: "In which location cookies are stored on the hard disk?",
       		ques4: "What is negative infinity?",
       		ques5: "How to handle exceptions in JavaScript?",
       		ques6: "How to validate a form in JavaScript?",
       		ques7: "What are undeclared and undefined variables?",
       		ques8: "What is ‘this’ keyword in JavaScript?",
       		ques9:  "Does JavaScript support automatic type conversion?",
       		ques10: "What are JavaScript Cookies?"
       		
        },
        {
            type: "Data Structure and Algorithms",
            image_url: "https://lh3.googleusercontent.com/a4Xrc-8oQLu05mOrNPuvA_o2nZEIEnOoTH4wB91Slw_hCvuIu_Qgi440bK9mC8ml-KA=w300",
            content1: "Stack & Queues",
            content2: "Linked Lists",
            content3: "Tree",
            content4: "Sorting",
            ques1: "What are common operations that can be performed on a data-structure?",
       		ques2: "What are asymptotic notations?",
       		ques3: "What are asymptotic notations?",
       		ques4: "What are some examples of divide and conquer algorithms?",
       		ques5: "What operations can be performed on stacks?",
       		ques6: "What is bubble sort and how bubble sort works?",
       		ques7: "What is linear searching?",
       		ques8: "How insertion sort and selection sorts are different?",
       		ques9:  "How breadth first traversal and depth first traversal works?",
       		ques10: "How Kruskal's algorithm works?"
        },
        {
            type: "Web Service",
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEgJ4qUnJkBe5uv7eFYJBY23-l1b3PAM4F1PbZoRXSHL-3hGL",
            content1: "Characteristics",
            content2: "Architecture",
            content3: "Components",
            content4: "Security",
            ques1: "What are the different types of web services?",
       		ques2: "What are the advantages of SOAP web services?",
       		ques3: "What is WSDL?",
       		ques4: "What is UDDI?",
       		ques5: "What is the difference between SOAP and REST web services?",
       		ques6: "What is Interoperability in Web services?",
       		ques7: "What is the usage of Service Transport Layer in Web service protocol stack?",
       		ques8: "What is JAX-WS API?",
       		ques9:  "How to set different status code in HTTP response?",
       		ques10: "What is the use of Accept and Content-Type Headers in HTTP Request?"
        },
        {
            type: "Python",
            image_url: "http://www.pngall.com/wp-content/uploads/2016/05/Python-Logo-PNG-Image-180x180.png",
            content1: "Functions",
            content2: "Cookies",
            content3: "GET and POST",
            content4: "Session",
            ques1: "How memory is managed in Python?",
       		ques2: "What is pickling and unpickling?",
       		ques3: "What are Python decorators?",
       		ques4: "What is lambda in Python?",
       		ques5: "What is unittest in Python?",
       		ques6: "What is negative index in Python?",
       		ques7: "What is module and package in Python?",
       		ques8: "Explain how can you make a Python Script executable on Unix?",
       		ques9:  "Explain how can you generate random numbers in Python?",
       		ques10: "Mention what is the difference between Django, Pyramid, and Flask."
       	}
    ];



})();