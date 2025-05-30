#include <iostream>

int main() {
    // Fundamental data types
    // c++ is statically typed languages, need to declare the type of a variable, js for examples is dinamically types languages
    short y = 10; // 2 bytes of memory, -32,768 to 32,768
    int x = 0; // integer, 4 bytes of memory, -2 billion to 2 bilion
    long z = 90000L; // 4 bytes of memory, same as int. Type an L to not confuse compiler
    long long a = 0; // 8 bytes of memory, big range

    //floating numbers
    float x2 = 3.67F; // 4 bytes of memory, -34E38 to 3.4E38. Type an f after a float number to not confuse with double
    double z2 = 0; // 8 bytes of memory, -1,7E308 to 1.7E308
    long double y2 = 0; // 8 bytes of memory, -3.4E932 to 1.7E4832

    bool ex = true; // 1 byte, true/false
    char c = 'a'; // 1 byte, a character

    auto example = 'a'; // make compiler understand the type


    //another way of declaring variables
    int number {1};

    //binaries and hexadecimals numbers
    int bnumber = 0b11111111; // 255 in binary
    int xnumber = 0xff; // 255 in hexadecimal

    // non negative numbers
    unsigned int exnumb = 100; // 100 cannot be negative because of unsigned

    return 0;
}