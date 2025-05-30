#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    // long elapsedSeconds = time(nullptr); // seconds from Jan 1 1970, nullptr is null pointer
    srand(time(nullptr)); // seed rand
    int number = rand() % 10; // get numbers from 0 to 9
    std::cout << number;
    
    return 0;
}