# localstorage-test
A test of localStorage capabilities in browsers, specifically using AngularJS

### Data size

Entities in array  | Size (KB)
------------- | -------------
1  | 4
250  | 557
500  | 1126
1000  | 2252

### Browsers tested

Chrome 48.0.2564.97

Firefox 44

Safari 9.0.2 (11601.3.9)

### System tested
2014 Macbook Pro

 - 2.8 GHz Intel Core i7
 - 16GB 1600MHz DDR3 RAM
 - 512GB SSD

### Accessing data 1000 times from localStorage

Cache cleared before each run

Entities  	| Chrome 	| Firefox	| Safari
-------------	| ------- | -----	| -----
1  				| 0.028 	| 0.011	| 0.011
250  			| 6.241 	| 2.5		| 2.368
500  			| 13.752 	| 5.059	| 5.116
1000  			| 28.377 	| 10.137	| 10.113
Time-to-run 	| 46887 	| 17876	| 17679

### Accessing data 1000 times from Service local variable

Cache cleared before each run

Entities   	| Chrome 	| Firefox	| Safari
-------------	| ------ 	| -----	| ----
1  				| 0			| 0			| 0
250  			| 0   		| 0			| 0
500  			| 0			| 0.001	| 0
1000  			| 0			| 0			| 0.001
Time-to-run 	| 163		| 165		| 116

### Conclusion
Put data into Service local variable, and work with that

Periodically (every 500ms for example) save the data back to localStorage