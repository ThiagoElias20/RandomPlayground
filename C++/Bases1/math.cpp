#include <iostream>

int main() {
    double x = 10;
    x = x + 5;
    x = x * 5;
    x++;
    x--;
    int y = 3;
    int z = x + y;
    double divide = x / y;

    int x2 = 10; // 12
    int y2 = x2++; // 10 // como posfixo primeiro o 10 do x2 é armazenado no y2 na mameoria depois incrementa
    int z2 = ++x2; // 12 // como prefixo primeiro o x2 é aumentado por 1 depois é armazenado o resultado na memoria
    std::cout << x2;
    std::cout << y2;
    std::cout << z2;

    return 0;
}