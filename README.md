# localstorage-test
A test of localStorage capabilities in browsers, specifically using AngularJS

## TL;DR

Accessing localStorage is slow, writing is fast.

Load to localStorage at the start, work with that, and periodically save that variable back to localStorage

## Some notes

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

## Test 1

Getting file over AJAX, then repeatedly access the variable.

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

## Test 2

Getting file over AJAX, save to Service local variable, then repeatedly save back to localStorage.

### Saving data 1000 times to localStorage

Cache cleared before each run

Entities  	| Chrome 	| Firefox	| Safari
-------------	| ----- | -----	| -----
1  				| 0.005 | 0.002	| 0.001
250  			| 0.026 | 0.002	| 0.001
500  			| 0.031 | 0.002	| 0
1000  			| 0.046 | 0.002	| 0
Time-to-run 	| 302 	| 124	| 152

### Conclusion
Saving data takes little time

## Test 4

Getting file over AJAX, then repeatedly loop through every item in the array (simulating finding a specific item)

### Accessing data 1000 times from localStorage

Cache cleared before each run

Entities  	| Chrome 	| Firefox	| Safari
-------------	| ------- | -----	| -----
1  				| 0.03 	| 0.019	| 0.013
250  			| 7.388 	| 2.664		| 2.534
500  			| 16.525 	| 5.365	| 5.217
1000  			| 32.727 	| 10.205	| 11.122
Time-to-run 	| 56836 	| 18471	| 18982

### Accessing data 1000 times from Service local variable

Cache cleared before each run

Entities   	| Chrome 	| Firefox	| Safari
-------------	| ------ | -----	| ----
1  				| 0.001	 | 0			| 0
250  			| 0.001  | 0			| 0.001
500  			| 0		 | 0	| 0
1000  			| 0.001	 | 0.001			| 0.001
Time-to-run 	| 130	 | 67		| 83