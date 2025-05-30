#include <iostream>

int main() {
    std::cout << "temperature in celsius" << std::endl;
    double celsius;
    std::cin >> celsius;
    double fahrenheit = (celsius * 1.8) + 32;
    std::cout << "fahrenheit = " << fahrenheit << std::endl;
    return 0;
}