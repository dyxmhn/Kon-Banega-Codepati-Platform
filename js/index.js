
// {
//     question:"",
//     a:"",
//     b:"",
//     c:"",
//     d:"",
//     correct:"",
// },

const kbcQuestions =
    [
        // ----------------- 1 --------------
        [
            {
                question: "Which of the following is NOT a programming language?",
                a: "HTML",
                b: "Java",
                c: "Python",
                d: "CSS",
                correct: "HTML"
            },
            {
                question: "What is the extension of a JavaScript file?",
                a: ".js",
                b: ".java",
                c: ".jscript",
                d: ".jsc",
                correct: ".js"
            },
            {
                question: "What is the default port number for HTTP connections?",
                a: "80",
                b: "8080",
                c: "443",
                d: "21",
                correct: "80"
            },
            {
                question: "What is the hexadecimal equivalent of the binary number '1010'?",
                a: "A",
                b: "B",
                c: "C",
                d: "D",
                correct: "A"
            },
            {
                question: "Which SQL keyword is used to retrieve unique rows from a table?",
                a: "UNIQUE",
                b: "DISTINCT",
                c: "UNIQUE_ROWS",
                d: "UNIQUE_VALUES",
                correct: "DISTINCT"
            },
            {
                question: "What is the purpose of the 'git clone' command in Git?",
                a: "To create a new branch",
                b: "To copy a repository from a remote server",
                c: "To merge branches",
                d: "To commit changes to a repository",
                correct: "To copy a repository from a remote server"
            },
            {
                question: "Which of the following data structures uses the 'divide and conquer' strategy?",
                a: "Queue",
                b: "Heap",
                c: "Stack",
                d: "Binary Search Tree",
                correct: "Binary Search Tree"
            },
            {
                question: "Which organization is known for the slogan 'We are Legion. We do not forgive. We do not forget.'?",
                a: "Lizard Squad",
                b: "Syrian Electronic Army",
                c: "Anonymous",
                d: "Shadow Brokers",
                correct: "Anonymous"
            },
            {
                question: "Which is anomalous condition where a process attempts to store data beyond the boundaries of a fixed-length buffer?",
                a: "Buffer Excess",
                b: "Buffer Torrent",
                c: "Buffer Overflow",
                d: "Buffer Cascade",
                correct: "Buffer Overflow"
            },
            {
                question: "In the MERN stack, which technology is commonly used for building RESTful APIs?",
                a: "MongoDB",
                b: "Express.js",
                c: "React",
                d: "Node.js",
                correct: "Express.js"
            }            
            ],
        //----------- 2 -----------
        [
            {
                question: "What does a pointer store?",
                a: "Actual value of a variable",
                b: "Address of a variable",
                c: "Both actual value and address",
                d: "None of the above",
                correct: "Address of a variable"
            },
            {
                question: "What is the output of the following code of c++?\n\nint arr[10]={14,18,19,24,9};\nint i=1;\n++i;\ncout<< i[arr]++ +1;",
                a: "19",
                b: "Error",
                c: "20",
                d: "21",
                correct: "20"
            },            
            {
                question: "How do you comfort a JavaScript bug?",
                a: "You console it.log.",
                b: "You promise it'll get fixed in the next commit.",
                c: "You wrap it in a try-catch block.",
                d: "You tell it to 'be calm and carry on coding'.",
                correct: "You console it.log."
            },
            {
                question: "What is the primary function of a 'for' loop in programming?",
                a: "Performing a task once",
                b: "Looping through a block of code multiple times",
                c: "Declaring a variable",
                d: "Executing code conditionally",
                correct: "Looping through a block of code multiple times"
            },
            {
                question: "What is the purpose of the HTML div tag?",
                a: "To create a hyperlink",
                b: "To define a division or a section in an HTML document",
                c: "To insert an image",
                d: "To create a numbered list",
                correct: "To define a division or a section in an HTML document"
            },
            {
                question: "What is the primary function of an API (Application Programming Interface)?",
                a: "To execute code remotely",
                b: "To provide a user interface for applications",
                c: "To facilitate communication between software components",
                d: "To display graphical elements on a screen",
                correct: "To facilitate communication between software components"

            },
            {
                question: "“AUX” is short for which word in technology terms?",
                a: "Auxiliary",
                b: "Automatic",
                c: "Auxiliary Unit Extension",
                d: "Automatic Unit Exchange",
                correct: "Auxiliary"
            },
            {
                question: "A list of commands which are executed by a certain program have which name?",
                a: "Script",
                b: "Batch",
                c: "Code",
                d: "Algorithm",
                correct: "Script"
            },
            {
                question: "In the context of databases, what is normalization?",
                a: "Adding redundancy to improve performance",
                b: "Removing redundancy to reduce anomalies",
                c: "Increasing the size of the database",
                d: "Combining tables to simplify queries",
                correct: "Removing redundancy to reduce anomalies"
            },
            {
                question: "In which JavaScript library is the core code of BhaiLang written?",
                a: "Angular",
                b: "React",
                c: "jQuery",
                d: "Ember",
                correct: "jQuery"
            },
            {
                question: "What is the name of the protocol used for secure communication over a computer network, commonly seen in HTTPS URLs?",
                a: "FTP",
                b: "SSH",
                c: "SSL/TLS",
                d: "SNMP",
                correct: "SSL/TLS"
            }],
        // ---------- 3 -----------
        [
            {
                question: "Which company's social media platform is the basis for the 2010 film 'The Social Network'?",
                a: "Facebook",
                b: "Twitter",
                c: "Instagram",
                d: "LinkedIn",
                correct: "Facebook"
            },
            {
                question: "Which of the following technologies empowers cryptocurrency?",
                a: "Blockchain",
                b: "Artificial Intelligence",
                c: "Machine Learning",
                d: "Quantum Computing",
                correct: "Blockchain"
            },
            {
                question: "Which company owns the popular code hosting platform GitHub?",
                a: "Google",
                b: "Facebook",
                c: "Microsoft",
                d: "IBM",
                correct: "Microsoft"
            },
            {
                question: "Why did the programmer quit their job?",
                a: "They couldn't C# their way to happiness.",
                b: "Their boss kept telling them to 'git' lost.",
                c: "They got tired of pushing their code uphill.",
                d: "Saare Options",
                correct: "Saare Options"
            },
            {
                question: "Which of the following is a NoSQL database?",
                a: "MySQL",
                b: "PostgreSQL",
                c: "MongoDB",
                d: "SQLite",
                correct: "MongoDB"
            },
            {
                question: "Which is the world’s ‘first fully autonomous’ AI software engineer?",
                a: "Gemini",
                b: "Kevin",
                c: "Devin",
                d: "Soft AI",
                correct: "Devin"
            },
            {
                question: "How many times do the minute and hour hands of a clock overlap in a day?",
                a: "12",
                b: "22",
                c: "24",
                d: "48",
                correct: "22"
            },
            {
                question: "Why did the programmer bring a shovel to the hackathon?",
                a: "To dig deep into the code",
                b: "To bury his bugs underground",
                c: "To shovel through the layers of abstraction",
                d: "To plant seeds of innovation in the tech soil",
                correct: "To dig deep into the code"
            },
            {
                question: "Which is anomalous condition where a process attempts to store data beyond the boundaries of a fixed-length buffer?",
                a: "Buffer Excess",
                b: "Buffer Torrent",
                c: "Buffer Overflow",
                d: "Buffer Cascade",
                correct: "Buffer Overflow"
            },
            {
                question: "Which is a standalone tool that converts the workflows using a target browser such as Internet Explorer, Chrome, Edge, or Firefox, making them target another browser, such as Chrome, Edge, or Firefox.",
                a: "Google Browser Automation Tool",
                b: "Pathway Browser Migration Tool",
                c: "UiPath Browser Migration Tool",
                d: "Kelvin Browser Migration Tool",
                correct: "UiPath Browser Migration Tool"
            }
        ],
        //-------------- 4 -----------------
        [
            {
                question: "Which programming language is often used for building dynamic web applications?",
                a: "HTML",
                b: "CSS",
                c: "JavaScript",
                d: "PHP",
                correct: "JavaScript"
            },
            {
                question: "Why was the computer cold?",
                a: "It left its Windows open",
                b: "It caught a byte",
                c: "Its Java froze",
                d: "It was running a virus scan",
                correct: "It left its Windows open"
            },
            {
                question: "What SQL clause is used to filter the results of a query?",
                a: "FILTER BY",
                b: "SELECT BY",
                c: "WHERE",
                d: "LOCATE",
                correct: "WHERE"
            },
            {
                question: "What is the role of RAM (Random Access Memory) in a computer?",
                a: "Long-term storage of data",
                b: "Temporary storage of data and instructions for processing",
                c: "Displaying graphics on the screen",
                d: "Cooling down the CPU",
                correct: "Temporary storage of data and instructions for processing"
            },
            {
                question: "Which of the following is not a type of cloud computing service?",
                a: "Infrastructure as a Service (IaaS)",
                b: "Platform as a Service (PaaS)",
                c: "Software as a Solution (SaaS)",
                d: "Device as a Service (DaaS)",
                correct: "Device as a Service (DaaS)"
            },
            {
                question: "Which sorting algorithm has the best average-case time complexity?",
                a: "Quick Sort",
                b: "Merge Sort",
                c: "Bubble Sort",
                d: "Insertion Sort",
                correct: "Merge Sort"
            },
            {
                question: "What is the purpose of a VPN (Virtual Private Network) in cybersecurity?",
                a: "To create a secure and encrypted connection over a public network",
                b: "To speed up internet browsing",
                c: "To host websites anonymously",
                d: "To prevent hardware malfunction",
                correct: "To create a secure and encrypted connection over a public network"
            },
            {
                question: "What is the purpose of version control systems like Git?",
                a: "To manage changes to source code files over time",
                b: "To optimize website performance",
                c: "To analyze user behavior on websites",
                d: "To secure network connections",
                correct: "To manage changes to source code files over time"
            },
            {
                question: "In machine learning, what does the term 'overfitting' refer to?",
                a: "Model generalization",
                b: "Model underperformance",
                c: "Model memorization",
                d: "Model convergence",
                correct: "Model memorization"
            },
            {
                question: "What is the purpose of a cron job in Unix-like operating systems?",
                a: "System backup",
                b: "Task scheduling",
                c: "Network monitoring",
                d: "File encryption",
                correct: "Task Scheduling"
            }
        ],
        //-------------- 5 --------------
        [
            {
                question: "Which data structure operates in a Last In, First Out (LIFO) manner?",
                a: "Queue",
                b: "Stack",
                c: "Linked List",
                d: "Tree",
                correct: "Stack"
            },
            {
                question: "Which of the following programming languages is primarily used for developing mobile applications compatible with iOS devices?",
                a: "Java",
                b: "Swift",
                c: "Kotlin",
                d: "C#",
                correct: "Swift"
            },
            {
                question: "In object-oriented programming, what is the process of combining data and functions into a single unit called?",
                a: "Encapsulation",
                b: "Inheritance",
                c: "Polymorphism",
                d: "Abstraction",
                correct: "Encapsulation"
            },
            {
                question: "What does the term 'URL' stand for in web technology?",
                a: "Uniform Resource Locator",
                b: "Universal Resource Language",
                c: "Unified Resource Link",
                d: "Unique Resource Location",
                correct: "Uniform Resource Locator"
            },
            {
                question: "What is the purpose of a compiler in programming?",
                a: "To convert high-level programming languages into machine code",
                b: "To optimize database queries",
                c: "To manage network traffic",
                d: "To create user interfaces",
                correct: "To convert high-level programming languages into machine code"
            },
            {
                question: "What is used as the database in the MERN stack?",
                a: "MySQL",
                b: "SQLite",
                c: "MongoDB",
                d: "PostgreSQL",
                correct: "MongoDB"
            },
            {
                question: "Which of the following is an example of a front-end web development framework?",
                a: "Django",
                b: "Express.js",
                c: "React",
                d: "Flask",
                correct: "React"
            },
            {
                question: "What is the time complexity of the binary search algorithm?",
                a: "O (log n)",
                b: "O(n)",
                c: "O(n^2)",
                d: "O (1)",
                correct: "O (log n)"
            },
            {
                question: "Which sorting algorithm has the best time complexity in the worst-case scenario?",
                a: "Quick Sort",
                b: "Merge Sort",
                c: "Bubble Sort",
                d: "Insertion Sort",
                correct: "Merge Sort"
            },
            {
                question: "What is the function of a CDN (Content Delivery Network) in web hosting?",
                a: "To register domain names",
                b: "To provide server security",
                c: "To distribute website content to multiple servers.",
                d: "To manage databases",
                correct: "To distribute website content to multiple servers."
            }
        ],
        // --------------- 6 -----------------
        [
            {
                question: "Which component of a computer system is responsible for temporarily storing data that is actively being used?",
                a: "CPU Cache",
                b: "RAM",
                c: "Hard Disk",
                d: "CPU Registers",
                correct: "RAM"
            },
            {
                question: "What does the term 'IoT' stand for in the context of technology?",
                a: "Internet of Things",
                b: "Input/Output Terminal",
                c: "Integrated Operating Technology",
                d: "Intelligent Object Tracking",
                correct: "aInternet of Things"
            },
            {
                question: "“Life’s Good” is the slogan of which tech company?",
                a: "Apple",
                b: "LG",
                c: "Samsung",
                d: "Sony",
                correct: "LG"
            },
            {
                question: "What is the purpose of a CAPTCHA system on websites?",
                a: "To verify the identity of users",
                b: "To block spam bots and automated scripts",
                c: "To encrypt sensitive data",
                d: "To improve website design",
                correct: "To block spam bots and automated scripts"
            },
            {
                question: "In the MERN stack, what is the purpose of Node.js?",
                a: "Database management",
                b: "Frontend user interface",
                c: "Backend server",
                d: "Client-side routing",
                correct: "Backend server"
            },
            {
                question: "Why do Java developers wear glasses?",
                a: "To see better",
                b: "Because they can't C#",
                c: "To look smarter",
                d: "To block out the glare from their screens",
                correct: "Because they can't C#"
            },
            {
                question: "What does the term 'SSL' stand for in web security?",
                a: "Secure Socket Layer",
                b: "Secure Server Language",
                c: "Server Side Language",
                d: "Software Security Layer",
                correct: "Secure Socket Layer"
            },
            {
                question: "What is the purpose of a BIOS (Basic Input/Output System) in a computer?",
                a: "To display graphical user interfaces",
                b: "To manage network connections",
                c: "To initialize hardware components during startup",
                d: "To encrypt data transmissions",
                correct: "To initialize hardware components during startup"
            },
            {
                question: "What is the purpose of a VPN (Virtual Private Network) in cybersecurity?",
                a: "To create a secure and encrypted connection over a public network",
                b: "To enhance website performance",
                c: "To host websites anonymously",
                d: "To prevent hardware malfunctions",
                correct: "To create a secure and encrypted connection over a public network"
            },
            {
                question: "Which one in Integration service in Google Cloud?",
                a: "Apigee",
                b: "Profiler",
                c: "Spanner",
                d: "Dataplex",
                correct: "Apigee"
            }
        ],
        // ------------ 7 -----------
        [
            {
                question: "What is the result of 10 % 3?",
                a: "3",
                b: "1",
                c: "0",
                d: "2",
                correct: "1"
            },
            {
                question: "What is the primary purpose of a destructor?",
                a: "To initialize the class members",
                b: "To allocate memory for the object",
                c: "To delete any dynamic memory allocated by the object",
                d: "To copy the object",
                correct: "To delete any dynamic memory allocated by the object"
            },
            {
                question: "What does the sizeof() function in C return ?",
                a: "Size of the variable",
                b: "Size of the pointer",
                c: "Size of the data type",
                d: "Size of the array",
                correct: "Size of the data type"
            },
            {
                question: "Which of the following programming languages is often used for statistical computing and data visualization?",
                a: "Java",
                b: "R",
                c: "Swift",
                d: "C#",
                correct: "R"
            },
            {
                question: "Which of the following is a common protocol used for secure communication over the internet?",
                a: "HTTP",
                b: "FTP",
                c: "HTTPS",
                d: "SMTP",
                correct: "HTTPS"
            },
            {
                question: "What is the purpose of a QR code in mobile technology?",
                a: "To store text-based information",
                b: "To make phone calls",
                c: "To encode website URLs",
                d: "To provide contactless payments",
                correct: "To encode website URLs"
            },
            {
                question: "What does the term 'metadata' refer to in the context of digital information?",
                a: "Data that describes other data",
                b: "Encrypted data for secure transmission",
                c: "Data stored on magnetic tapes",
                d: "Data compression techniques",
                correct: "Data that describes other data"
            },
            {
                question: "Who is known as the “father of the World Wide Web”?",
                a: "Tim Berners-Lee",
                b: "Steve Jobs",
                c: "Bill Gates",
                d: "Larry Page",
                correct: "Tim Berners-Lee"
            },
            {
                question: "What is the purpose of a BIOS (Basic Input/Output System) in a computer?",
                a: "To display graphical user interfaces",
                b: "To manage network connections",
                c: "To initialize hardware components during startup",
                d: "To encrypt data transmissions",
                correct: "To initialize hardware components during startup"
            },
            {
                question: "What is the difference between a stack overflow and a heap overflow in programming?",
                a: "A stack overflow occurs when too much memory is allocated on the stack, while a heap overflow occurs when too much memory is allocated on the heap",
                b: "A stack overflow occurs when too much memory is allocated on the heap, while a heap overflow occurs when too much memory is allocated on the stack",
                c: "A stack overflow is a type of runtime error, while a heap overflow is a type of compile-time error",
                d: "There is no difference; they both refer to the same type of memory allocation error",
                correct: "A stack overflow occurs when too much memory is allocated on the stack, while a heap overflow occurs when too much memory is allocated on the heap"
            }
        ],
        // ------------- 8 ----------------
        [
            {
                question: "What does the HTTP status code 404 indicate?",
                a: "Server Error",
                b: "Forbidden Access",
                c: "Page Not Found",
                d: "Unauthorized Access",
                correct: "Page Not Found"
            },
            {
                question: "Which organization developed the first AI software engineer named 'Devin'?",
                a: "OpenAI",
                b: "IBM",
                c: "NVIDIA",
                d: "Cognition",
                correct: "Cognition"
            },
            {
                question: "What is the difference between a class and an object in OOP?",
                a: "Class is blueprint, object is instance",
                b: "Class is instance, object is blueprint",
                c: "No difference",
                d: "Class is data, object is behavior",
                correct: "Class is blueprint, object is instance"
            },
            {
                question: "What does the 'href' attribute in HTML stand for?",
                a: "Header Reference",
                b: "Hyperlink Reference",
                c: "Hypertext Reference",
                d: "HTML Reference",
                correct: "Hypertext Reference"
            },
            {
                question: "What is the correct HTML tag for the largest heading?",
                a: "h6",
                b: "heading",
                c: "h1",
                d: "head",
                correct: "h1"
            },
            {
                question: "What is the difference between a class and an interface in object-oriented programming?",
                a: "A class defines implementation, an interface defines behavior",
                b: "A class defines behavior, an interface defines implementation",
                c: "A class is a blueprint, an interface is an instance",
                d: "There is no difference",
                correct: "A class defines implementation, an interface defines behavior"
            },
            {
                question: "What is the purpose of the 'try...catch' statement in programming?",
                a: "To handle exceptions and errors",
                b: "To loop through code blocks",
                c: "To define a function",
                d: "To declare variables",
                correct: "To handle exceptions and errors"
            },
            {
                question: "What is the difference between a primary key and a foreign key in a relational database?",
                a: "A primary key is a unique identifier, a foreign key references another table",
                b: "A primary key references another table, a foreign key is a unique identifier",
                c: "A primary key is used for sorting, a foreign key is used for filtering",
                d: "There is no difference",
                correct: "A primary key is a unique identifier, a foreign key references another table"
            },
            {
                question: "What is the purpose of a blockchain in the context of cryptocurrency?",
                a: "To securely store and transfer digital currency",
                b: "To encrypt and decrypt messages",
                c: "To manage and allocate IP addresses",
                d: "To filter out malicious traffic",
                correct: "To securely store and transfer digital currency"
            },
            {
                question: "What is the difference between a compiler and an interpreter in programming?",
                a: "A compiler translates code into machine code, an interpreter executes code line by line",
                b: "A compiler executes code line by line, an interpreter translates code into machine code",
                c: "A compiler is used for high-level languages, an interpreter is used for low-level languages",
                d: "There is no difference, they are the same thing",
                correct: "A compiler translates code into machine code, an interpreter executes code line by line"
            }
        ],
        // ------------- 9 ------------
        [
            {
                question: "Which of the following is not a type of computer network topology?",
                a: "Star",
                b: "Ring",
                c: "Oval",
                d: "Mesh",
                correct: "Oval"
            },
            {
                question: "What does the term 'bandwidth' refer to in computer networking?",
                a: "The amount of data that can be transmitted over a network in a given amount of time",
                b: "The speed of a processor",
                c: "The size of a hard drive",
                d: "The resolution of a display screen",
                correct: "The amount of data that can be transmitted over a network in a given amount of time"
            },
            {
                question: "What is the purpose of an IDE (Integrated Development Environment)?",
                a: "To manage databases",
                b: "To facilitate software development by providing tools like code editors, debuggers, and compilers",
                c: "To host websites",
                d: "To encrypt network traffic",
                correct: "To facilitate software development by providing tools like code editors, debuggers, and compilers"
            },
            {
                question: "Which of the following is an example of a front-end web development framework?",
                a: "Django",
                b: "Flask",
                c: "Angular",
                d: "Express.js",
                correct: "Angular"
            },
            {
                question: "What is the purpose of a cache in computer systems?",
                a: "To store temporary data for faster access",
                b: "To encrypt sensitive information",
                c: "To cool down the CPU",
                d: "To provide electrical power backup",
                correct: "To store temporary data for faster access"
            },
            {
                question: "What is the purpose of a DNS (Domain Name System) server?",
                a: "To convert domain names into IP addresses",
                b: "To encrypt data transfer over the internet",
                c: "To store and manage website content",
                d: "To filter out malicious traffic",
                correct: "To convert domain names into IP addresses"
            },
            {
                question: "What is the purpose of an IP address in computer networking?",
                a: "To identify the brand of a computer",
                b: "To identify the type of operating system",
                c: "To uniquely identify a device on a network",
                d: "To determine the internet speed",
                correct: "To uniquely identify a device on a network"
            },
            {
                question: "Which of the following is a characteristic of a distributed computing system?",
                a: "Centralized control",
                b: "High latency",
                c: "Single point of failure",
                d: "Scalability",
                correct: "Scalability"
            },
            {
                question: "Which data structure is used to implement a recursive algorithm?",
                a: "Queue",
                b: "Stack",
                c: "Array",
                d: "Linked List",
                correct: "Stack"
            },
            {
                question: "What is the purpose of a load balancer in web server architecture?",
                a: "To distribute incoming traffic across multiple servers",
                b: "To prevent unauthorized access to web servers",
                c: "To encrypt data transfer between servers",
                d: "To convert domain names into IP addresses",
                correct: "To distribute incoming traffic across multiple servers"
            }
        ],
        // ----------- 10 --------------
        [
            {
                question: "Which company develops the Windows operating system?",
                a: "Apple",
                b: "Google",
                c: "Microsoft",
                d: "Amazon",
                correct: "Microsoft"
            },
            {
                question: "Which of the following is a popular email service provider?",
                a: "Twitter",
                b: "Facebook",
                c: "Gmail",
                d: "Instagram",
                correct: "Gmail"
            },
            {
                question: "What is the term used for malicious software designed to harm a computer system?",
                a: "Bug",
                b: "Glitch",
                c: "Virus",
                d: "Feature",
                correct: "cVirus"
            },
            {
                question: "What does the term 'SEO' stand for in web development?",
                a: "Search Engine Optimization",
                b: "Software Engineering Online",
                c: "Secure Email Operation",
                d: "System Efficiency Optimization",
                correct: "Search Engine Optimization"
            },
            {
                question: "What is the purpose of a VPN (Virtual Private Network) in cybersecurity?",
                a: "To create a secure and encrypted connection over a public network",
                b: "To enhance website performance",
                c: "To host websites anonymously",
                d: "To prevent hardware malfunctions",
                correct: "To create a secure and encrypted connection over a public network"
            },
            {
                question: "What is the purpose of 'salting' in password hashing?",
                a: "To increase the computational complexity of password cracking",
                b: "To store passwords in plaintext",
                c: "To encrypt passwords using a symmetric key",
                d: "To authenticate users during login",
                correct: "To increase the computational complexity of password cracking"
            },
            {
                question: "What is the purpose of a hash table data structure?",
                a: "To store key-value pairs and provide efficient retrieval and insertion operations",
                b: "To sort a list of elements in ascending or descending order",
                c: "To find the shortest path between two nodes in a graph",
                d: "To encrypt data stored on a computer",
                correct: "To store key-value pairs and provide efficient retrieval and insertion operations"
            },
            {
                question: "Which scheduling algorithm ensures fairness by giving each process an equal share of CPU time over a period?",
                a: "Round Robin",
                b: "First-Come, First-Served (FCFS)",
                c: "Shortest Job Next (SJN)",
                d: "Priority Scheduling",
                correct: "Round Robin"
            },
            {
                question: "What is the purpose of the Huffman coding algorithm in computer science?",
                a: "Data compression",
                b: "Error detection and correction",
                c: "Encryption",
                d: "Sorting algorithm",
                correct: "Data compression"
            },
            {
                question: "What is the purpose of a defragmentation tool in computer systems?",
                a: "To optimize the performance of storage devices by reorganizing fragmented data",
                b: "To encrypt data stored on a computer",
                c: "To prevent unauthorized access to a network",
                d: "To convert domain names into IP addresses",
                correct: "To optimize the performance of storage devices by reorganizing fragmented data"
            }
        ]
    ];
const page1Sound = new Audio("./sounds/Kaun_Banega_Crorepati_Bgm.mp3");
const welcomeSound = new Audio("./sounds/page2_kbc_intro_audio.mp3")
const timerSound1 = new Audio("./sounds/KBC_30.mp3");
const timerSound2 = new Audio("./sounds/KBC_60.mp3");
const timerSound3 = new Audio("./sounds/KBC_90.mp3");
const timerSound4 = new Audio("./sounds/KBC_45.mp3");
const wrongAnswerSound = new Audio("./sounds/wrong_with_dramatic.mp3");
const correctAnswerSound = new Audio("./sounds/kbc_background.mp3");
const answerLockSound = new Audio("./sounds/ans_lock2.mp3");
const lifelineComesUpSound = new Audio("./sounds/lifeline-comesUp.mp3");
const audiencePollSound = new Audio("./sounds/audience_poll.mp3");
const audiencePollImplementationSound = new Audio("./sounds/audiencePoll_Implementation.mp3");
const doubleDipWrongAnswerSound = new Audio("./sounds/wrong_ans.mp3");
const themeMusic = new Audio("./sounds/THEME_MUSIC2.mp3");

let contestantIndex = 1;
let currentQuestIndex = 0;
let currentRandomQuestIndex;
let currQuestObject;
let prevQuestIndex;
let currSetTimeoutId;
let fiftyfiftytimer;

let lifelineFlag = {
    fiftyFiftyFlag: 1,
    expertAdviceFlag: 1,
    doubleDipMarker: 0,
}

let quitFlag = {
    wrongAnswerFlag: 0,
    timeUpFlag: 0,
    quitButtonFlag: 0,
    oneCroreFlag: 0,
    winningAmount: 0,
}

let colors = {
    page2btn: "rgb(30, 115, 125)",
}


const disableNextButton = () => {
    ele = document.getElementById("Next");
    if (ele.classList.contains("pointer-events-none") == false)
        document.getElementById("Next").classList.add("pointer-events-none");
}

const enableNextButton = () => {
    document.getElementById("Next").classList.remove("pointer-events-none");
}


const disableQuitButton = () => {
    ele = document.getElementById("Quit");
    if (ele.classList.contains("pointer-events-none") == false)
        document.getElementById("Quit").classList.add("pointer-events-none");
}

const enableQuitButton = () => {
    document.getElementById("Quit").classList.remove("pointer-events-none");
}

const optButtonDisabled = () => {
    document.querySelectorAll(".answer-opt").forEach((e) => {
        e.classList.add("pointer-events-none");
    })
}

const optButtonEnabled = () => {
    document.querySelectorAll(".answer-opt").forEach((e) => {
        e.classList.remove("pointer-events-none");
    })
}

const TimeUpSound = () => {
    wrongAnswerSound.currentTime = 3.6;
    wrongAnswerSound.play();
}

const timeUp = () => {
    TimeUpSound();
    quitFlag.timeUpFlag = 1;
    document.getElementById("result").innerText = "Time Up";
    disableLifelineButton();
    disableQuitButton();
    optButtonDisabled();
    setTimeout(() => {
        correctAns = currQuestObject.correct;
        correctOptionId = correctOptionAnsEle(correctAns);
        document.getElementById(correctOptionId).style.background = " linear-gradient(to bottom, #c5e1a5, #94d82d)";
        document.getElementById(correctOptionId).style.color = "black";
    }, 8000)
    setTimeout(openQuitPage, 8000);
}

const stopWatch = () => {
    let timerDuration;
    if (currentQuestIndex < 3) {
        timerDuration = 30;
        document.querySelector(".timer").innerText = timerDuration;
        tikTikSound1();
    } else if (currentQuestIndex < 6) {
        timerDuration = 60;
        document.querySelector(".timer").innerText = timerDuration;
        tikTikSound2();
    } else {
        timerDuration = 90;
        document.querySelector(".timer").innerText = timerDuration;
        tikTikSound3();
    }
}

const tikTikSound1 = () => {
    timerSound1.currentTime = 0;
    timerSound1.play();
    tikTikText();
}
const tikTikSound2 = () => {
    timerSound2.currentTime = 0;
    timerSound2.play();
    tikTikText();
}
const tikTikSound3 = () => {
    timerSound3.currentTime = 0;
    timerSound3.play();
    tikTikText();
}

const tikTikText = () => {
    let innerTextValue = parseInt(document.querySelector(".timer").innerText);
    if (innerTextValue > 0) {
        innerTextValue--;
        document.querySelector(".timer").innerText = innerTextValue;
        clearTimeout(currSetTimeoutId);
        currSetTimeoutId = setTimeout(tikTikText, 1000);
    } else {
        timeUp();
    }
}

const clearStopWatch = () => {
    clearTimeout(currSetTimeoutId);
    timerSound1.pause();
    timerSound2.pause();
    timerSound3.pause();
}

const correctOptionAnsEle = (correctAns) => {
    obj = currQuestObject;
    for (let items in obj) {
        if (obj[items] == correctAns)
            return items;
    }
}

const CorrectAnswerSound = () => {
    correctAnswerSound.currentTime = 0;
    correctAnswerSound.play();
}

const WrongAnswerSound = () => {
    wrongAnswerSound.currentTime = 0;
    wrongAnswerSound.play();
}

const DoubleDipWrongAnswerSound = () => {
    doubleDipWrongAnswerSound.currentTime = 0;
    doubleDipWrongAnswerSound.play();
}

//Result Analysis--------
const resultAnalysis = (e) => {
    answerLockSound.pause();
    contestantAnsObject = e.childNodes;
    contestantAns = contestantAnsObject[1].nodeValue;
    correctAns = currQuestObject.correct;
    if (contestantAns == correctAns) {
        CorrectAnswerSound();
        if (lifelineFlag.doubleDipMarker == 1) {
            lifelineFlag.doubleDipMarker = 0;
        }
        let amount = document.getElementById(currentQuestIndex).innerText;
        amount = amount.replaceAll(",", "");
        quitFlag.winningAmount = parseInt(amount);
        document.getElementById("result").innerText = "Correct Answer";
        e.style.background = " linear-gradient(to bottom, #c5e1a5, #94d82d)";
        enableNextButton();
        enableQuitButton();
        if (currentQuestIndex == 9) {
            setTimeout(openQuitPage, 5000);
            quitFlag.oneCroreFlag = 1;
            disableQuitButton();
        }
    }
    else {
        if (lifelineFlag.doubleDipMarker == 1) {
            DoubleDipWrongAnswerSound();
            doubleDipLogic(e);
        }
        else {
            WrongAnswerSound();
            document.getElementById("result").innerText = "Wrong Answer";
            e.style.background = " linear-gradient(to right, #e57373, #e53935";
            correctOptionId = correctOptionAnsEle(correctAns);
            document.getElementById(correctOptionId).style.background = " linear-gradient(to bottom, #c5e1a5, #94d82d)";
            document.getElementById(correctOptionId).style.color = "black";
            disableQuitButton();
            quitFlag.wrongAnswerFlag = 1;
            setTimeout(openQuitPage, 7000);
        }
    }
}

const bulletTimeout = (flag, bullets, clearTimeoutId, e) => {
    if (flag == 3) {
        document.querySelector("#game-area-result").classList.remove("checking-bullets-container");
        let resultBack = `<div id="result" class="result">Welcome to Kaun Banega Crorepati</div>`;
        let lifelineBox = `
                <div class="lifeline-box">
                    <div class="lifeline-item fifty-fifty">
                        <div class="cross-mark cross-one "></div>
                        <div class="cross-mark cross-two "></div>
                    </div>
                    <div class="lifeline-item expert-advice">
                        <div class="cross-mark cross-one "></div>
                        <div class="cross-mark cross-two "></div>
                    </div>
                </div>
            `;
        let gameAreaFullItem = resultBack + lifelineBox;
        document.getElementById("game-area-result").innerHTML = gameAreaFullItem;
        resultAnalysis(e);
    }
    else {
        let ele = document.querySelector(".checking-bullets-container");
        ele.innerHTML = bullets;
        ele.children[flag].style.background = " linear-gradient(to right, #ffd700, #ffd700)";
        clearTimeout(clearTimeoutId);
        flag++;
        clearTimeoutId = setTimeout(bulletTimeout, 800, flag, bullets, clearTimeoutId, e);
    }

}

const bulletsRunning = (e) => {
    document.querySelector("#game-area-result").classList.add("checking-bullets-container");
    let bullets = `
      <div class="bullets"></div>
      <div class="bullets"></div>
      <div class="bullets"></div>
    `
    disableNextButton();
    disableQuitButton();
    let clearTimeoutId;
    let flag = 0;
    bulletTimeout(flag, bullets, clearTimeoutId, e);
}

const AnswerLockSound = () => {
    answerLockSound.currentTime = 0;
    answerLockSound.play();
}

const disableLifelineButton = () => {
    document.getElementById("lifeline-button").classList.add("pointer-events-none");
}

const enableLifelineButton = () => {
    document.getElementById("lifeline-button").classList.remove("pointer-events-none");
}

// on click any option by the player----------
const optionFun = () => {
    document.querySelectorAll(".answer-opt").forEach((e) => {

        e.addEventListener("click", () => {
            AnswerLockSound();
            e.style.background = " linear-gradient(to right, #ffd700, #ffd700)";
            e.style.color = "black";
            clearStopWatch();
            optButtonDisabled();
            bulletsRunning(e);
            disableLifelineButton();
        })
    })
}


//Life-line.............

function LifelineImplementationSound() {
    audiencePollSound.currentTime = 4;
    audiencePollSound.play();
}

// Expert Advice lifeline --------------------
const tikTikSound4 = () => {
    timerSound4.currentTime = 0;
    timerSound4.play();
}
const expertAdviceCrossMark = () => {
    let t = document.querySelector(".expert-advice").children;
    for (let i = 0; i < t.length; i++)
        t[i].classList.add("opacity-one");
}

const expertAdviceHandler = () => {
    lifelineFlag["expertAdviceFlag"] = 0;
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    document.getElementById("result").innerText = "Expert Advice";
    document.querySelector(".expert-advice").classList.add("pointer-events-none");
    expertAdviceCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(2000);
    // Start a 45-second timer
    tikTikSound4();
    let timer = 45;
    const timerId = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector(".timer").innerText = timer;
        } else {
            timerSound4.pause();
            clearInterval(timerId);
            document.querySelector(".timer").innerText = "Time's up!";
        }
    }, 1000);
    optButtonEnabled();
    enableQuitButton();
}

const expertAdvice = () => {
    if (lifelineFlag["expertAdviceFlag"]) {
        document.querySelector(".expert-advice").addEventListener("click", expertAdviceHandler);
    }
    else {
        expertAdviceCrossMark();
        document.querySelector(".expert-advice").classList.add("pointer-events-none");
    }
}

// 50-50 lifeline-----------

const fiftyFiftyCrossMark = () => {
    let t = document.querySelector(".fifty-fifty").children;
    for (let i = 0; i < t.length; i++)
        t[i].classList.add("opacity-one");
}

const FiftyFiftySound = () => {
    audiencePollSound.currentTime = 8.2;
    audiencePollSound.play();
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function correctAnsIndex(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == key)
            return i;
    }
    return 0;
}

const fiftyFiftyLogic = () => {
    let arr = ["a", "b", "c", "d"];
    arr = shuffleArray(arr);
    let correctAns = currQuestObject.correct;
    correctOptionId = correctOptionAnsEle(correctAns);
    ansIndex = correctAnsIndex(arr, correctOptionId);

    temp = arr[0];
    arr[0] = arr[ansIndex];
    arr[ansIndex] = temp;

    document.getElementById(arr[1]).innerText = "";
    document.getElementById(arr[2]).innerText = "";
    ele = document.getElementById(arr[1]).style.pointerEvents = "none";
    document.getElementById(arr[2]).style.pointerEvents = "none";
}

const startStopWatch = () => {
    if (currentQuestIndex < 3) {
        timerSound1.play();
        tikTikText();
    } else if (currentQuestIndex < 6) {
        timerSound2.play();
        tikTikText();
    } else {
        timerSound3.play();
        tikTikText();
    }
}

const fiftyFiftyHandler = () => {
    lifelineFlag["fiftyFiftyFlag"] = 0;
    disableQuitButton();
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    document.getElementById("result").innerText = "Implementing 50-50 ...";
    LifelineImplementationSound();
    document.querySelector(".fifty-fifty").classList.add("pointer-events-none");
    fiftyFiftyCrossMark();
    lifelineNum = document.querySelector(".lifeline-no").innerText;
    lifelineNum--;
    document.querySelector(".lifeline-no").innerText = lifelineNum;
    setTimeout(() => {
        document.getElementById("result").innerText = "Two Wrong Answers Removed!!";
        fiftyFiftyLogic();
        startStopWatch();
        if (document.querySelector(".lifeline-no").innerText > 0)
            enableLifelineButton();
        optButtonEnabled();
        enableQuitButton();
    }, 4250);
}

const fiftyFifty = () => {
    if (lifelineFlag["fiftyFiftyFlag"]) {
        document.querySelector(".fifty-fifty").addEventListener("click", fiftyFiftyHandler);
    }
    else {
        fiftyFiftyCrossMark();
        document.querySelector(".fifty-fifty").classList.add("pointer-events-none");
    }
}

const lifelineApplied = () => {
    let lifelineNum = document.querySelector(".lifeline-no").innerText;
    if (lifelineNum > 0) {
        document.getElementById("lifeline-button").addEventListener("click", () => {
            clearStopWatch();
            optButtonDisabled();
            disableNextButton();
            disableLifelineButton();
        })
    }
}

function shuffleOptions(currQuestObject) {
    one = currQuestObject.a;
    two = currQuestObject.b;
    three = currQuestObject.c;
    four = currQuestObject.d;
    arr = [one, two, three, four];
    arr = shuffleArray(arr);
    currQuestObject.a = arr[0];
    currQuestObject.b = arr[1];
    currQuestObject.c = arr[2];
    currQuestObject.d = arr[3];

    return currQuestObject;
}
const buildKBCquestions = () => {
    questSetLength = kbcQuestions[contestantIndex].length;
    if (currentQuestIndex >= questSetLength) {
        // Move to the next contestant (i.e., the next array of questions)
        contestantIndex++;
        currentQuestIndex = 0;
    }
    currQuestObject = kbcQuestions[contestantIndex][currentQuestIndex];
    currQuestObject = shuffleOptions(currQuestObject);
    const kbcQuestionsContent = `
        <div class="timer-container">
            <div class="timer">0</div>
        </div>
        <div class="question-box">
            <div class="question">${currQuestObject.question}</div>
        </div>
        <div class="answer-box">
            <div id="a" class="answer-opt"><span>A)</span>${currQuestObject.a}</div>
            <div id="b" class="answer-opt"><span>B)</span>${currQuestObject.b}</div>
            <div id="c" class="answer-opt"><span>C)</span>${currQuestObject.c}</div>
            <div id="d" class="answer-opt"><span>D)</span>${currQuestObject.d}</div>
        </div>
    `;

    document.querySelector(".game-area-ques-ans").innerHTML = kbcQuestionsContent;
    optionFun();
    lifelineApplied();
    fiftyFifty();
    expertAdvice();
}


const nextButtonFun = () => {
    if (currentQuestIndex < kbcQuestions.length - 1) {
        currentQuestIndex++;
        buildKBCquestions();
        buildMoneyArea();
        questForSpecificPrizeMoney();
        clearStopWatch();
        stopWatch();
        correctAnswerSound.pause();
        wrongAnswerSound.pause();
        if (document.querySelector(".lifeline-no").innerText > 0)
            enableLifelineButton();
        quitButton();
        disableNextButton();
    }
}

const buildMoneyArea = () => {
    let moneyAreaPrizes = `
            <div id="0" class="each-prize">100</div>
            <div id="1" class="each-prize">200</div>
            <div id="2" class="each-prize">300</div>
            <div id="3" class="each-prize">400</div>
            <div id="4" class="each-prize">500</div>
            <div id="5" class="each-prize">600</div>
            <div id="6" class="each-prize">700</div>
            <div id="7" class="each-prize">800</div>
            <div id="8" class="each-prize">900</div>
            <div id="9" class="each-prize">1000</div>
    `;
    document.querySelector("#money-area").classList.add("money-area");
    document.querySelector("#money-area").innerHTML = moneyAreaPrizes;
    document.getElementById('2').style.color = "gold";
    document.getElementById('5').style.color = "gold";
    document.getElementById('4').style.color = "blue";
    let prizeId = `${currentQuestIndex}`;
    document.getElementById(prizeId).style.backgroundColor = colors.page2btn;
    document.getElementById(prizeId).style.borderRadius = "5px";
}

const questForSpecificPrizeMoney = () => {
    let prizeId = `${currentQuestIndex}`;
    let prizeValue = document.getElementById(prizeId).innerText;
    document.getElementById("result").innerText = `Question for ${prizeValue}`;
}

function congratulationComment(ind) {
    let comment;
    if (ind < 2)
        comment = "Well";
    else if (ind >= 2 && ind < 5)
        comment = "Well Played";
    else if (ind >= 5 && ind < 7)
        comment = "Great Game";
    else if (ind >= 7 && ind < 9)
        comment = "You Rock";
    else
        comment = "fabulous performance";

    return comment;
}

function lastEndComment(money) {
    let com;
    if (money >= 600)
        com = "congratulation for winning such a huge amount!";
    else if (money > 0)
        com = "It was a good game. played nicely!!";
    else
        com = "Sorry you could not win anything.";

    return com;
}

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
function formatedMoney(money) {
    let m = money.toString();
    let temp = "";
    if (m.length == 5) {
        for (let i = 0; i < 5; i++) {
            if (i == 2)
                temp += ',';
            temp += m[i];
        }
        return temp;
    }
    else if (m.length > 5) {
        for (let i = m.length - 1; i >= 0; i--) {
            if (i == m.length - 4 || i == m.length - 6)
                temp += ',';
            temp += m[i];
        }
        temp = reverseString(temp);
        return temp;
    }
    else
        return m;
}

function ThemeMusic() {
    themeMusic.currentTime = 0;
    themeMusic.play();
}

function openQuitPage() {
    contestantName = document.getElementById("contestant-name").innerText;
    let congratulation;
    let money;
    let lastComment;
    if (quitFlag.oneCroreFlag) {
        congratulation = congratulationComment(9);
        money = "1000 Rupees";
        lastComment = "Congratulation to the winner of KBC";
    }
    else if (quitFlag.timeUpFlag) {
        let temp;
        temp = currentQuestIndex - 1;
        congratulation = congratulationComment(temp);
        money = quitFlag.winningAmount;
        lastComment = lastEndComment(money);
        money = formatedMoney(money);
    }
    else if (quitFlag.wrongAnswerFlag) {
        let temp = currentQuestIndex - 1;
        congratulation = congratulationComment(temp);
        if (quitFlag.winningAmount >= 600)
            money = 600;
        else if (quitFlag.winningAmount >= 300)
            money = 300;
        else
            money = 0;
        lastComment = `Your prize money comes down from ${quitFlag.winningAmount} to ${money} due to wrong answer.`;
        money = formatedMoney(money);
    }
    else {
        let temp = currentQuestIndex - 1;
        congratulation = congratulationComment(temp);
        money = quitFlag.winningAmount;
        lastComment = lastEndComment(money);
        money = formatedMoney(money);
    }
    quitContent = `  
    <div class="quit-container">
        <div class="transfer-image"></div>
        <div class="quit-info-container">
            <div class="people">
                <div class="person-image"></div>
                <div class="person-info">
                    <p id="contestant-name">${contestantName}</p>
                    <span>contestant</span>
                </div>
            </div>
            <div class="congratulation">${congratulation}</div>
            <div class="prize-money-earned">Prize Money Earned :</div>
            <div class="money">${money}</div>
            <div class="last-comment">${lastComment}</div>
        </div>
    </div>

    `;
    ThemeMusic();
    document.querySelector(".game-area").innerHTML = quitContent;

}

function quitButton() {
    document.querySelector("#Quit").addEventListener("click", () => {
        quitFlag.quitButtonFlag = 1;
        correctAns = currQuestObject.correct;
        correctOptionId = correctOptionAnsEle(correctAns);
        document.getElementById(correctOptionId).style.background = "linear-gradient(to bottom, #c5e1a5, #94d82d)";//yellowgreen
        document.getElementById(correctOptionId).style.color = "black";
        DoubleDipWrongAnswerSound();
        optButtonDisabled();
        clearStopWatch();
        correctAnswerSound.pause();
        setTimeout(openQuitPage, 5000);
    });
}

document.querySelector(".lets-play-image").addEventListener("click", () => {
    buildKBCquestions();
    buildMoneyArea();
    questForSpecificPrizeMoney();
    welcomeSound.pause();
    stopWatch();
    document.querySelector("#Next").addEventListener("click", nextButtonFun);
    document.querySelector(".lifeline-box").classList.remove("show-lifeline");
    quitButton();
    disableNextButton();
})

const openingSound = () => {
    page1Sound.currentTime = 0;
    page1Sound.play();
}

const WelcomeSound = () => {
    welcomeSound.currentTime = 0;
    welcomeSound.play();
}

// just to show the money stack before the game begins..
const showMoneyStack = () => {
    let moneyAreaPrizes = `
            <div id="0" class="each-prize">100</div>
            <div id="1" class="each-prize">200</div>
            <div id="2" class="each-prize">300</div>
            <div id="3" class="each-prize">400</div>
            <div id="4" class="each-prize">500</div>
            <div id="5" class="each-prize">600</div>
            <div id="6" class="each-prize">700</div>
            <div id="7" class="each-prize">800</div>
            <div id="8" class="each-prize">900</div>
            <div id="9" class="each-prize">1000</div>
    `;
    document.querySelector("#money-area").classList.add("money-area");
    document.querySelector("#money-area").innerHTML = moneyAreaPrizes;
    document.getElementById('2').style.color = "gold";
    document.getElementById('5').style.color = "gold";
    document.getElementById('4').style.color = "blue";
}

const hoverLifeline = () => {
    let beforeInnerText = document.getElementById("result").innerText;
    document.querySelectorAll(".lifeline-item").forEach((ele) => {
        ele.addEventListener("mouseover", () => {
            document.getElementById("result").innerText = ele.classList[1];
        })
    })
}

const LifelineComesUpSound = () => {
    lifelineComesUpSound.currentTime = 0;
    lifelineComesUpSound.play();
}

const showLifeline = () => {
    document.querySelector("#lifeline-button").addEventListener("click", () => {
        document.querySelector(".lifeline-box").classList.toggle("show-lifeline");
        hoverLifeline();
        LifelineComesUpSound();

    })
}

// adding modal on clicking sitHotSeat button
const sitOnTheHotSeatFun = () => {
    let contestantName = document.getElementById("contestant-name-input").value;
    if (contestantName == "")
        contestantName = "Anonymous";
    page1Sound.pause();
    WelcomeSound();
    document.getElementById("page2").classList.add("show-modal");
    document.getElementById("contestant-name").innerText = contestantName;
    showMoneyStack();
    showLifeline();
}
document.getElementById("sitOnTheHotSeat").addEventListener("click", sitOnTheHotSeatFun);



// adding modal on clicking rules button
document.getElementById("btn-rules").addEventListener("click", () => {
    document.getElementById("modal-container-rules").classList.add("show-modal");
})

document.getElementById("close-modal-btn").addEventListener("click", () => {
    document.getElementById("modal-container-rules").classList.remove("show-modal");
})



//show that the button is clicked by flicking shadow
const allBtns = document.querySelectorAll('.btn');
allBtns.forEach((ele) => {
    ele.addEventListener("click", () => {
        buttonSelect(ele);
        transitionEndListener(ele);
    })
})



const buttonDeselect = (element) => {
    element.style.boxShadow = "none";
}

const transitionEndListener = (element) => {
    element.addEventListener("transitionend", () => {
        buttonDeselect(element);
    })
}