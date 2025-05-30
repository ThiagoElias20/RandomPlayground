#include <iostream>

int main() {
    std::cout << "enter a value: ";
    double value;
    std::cin >> value;
    std::cout << value << std::endl;

    double x;
    double y;

    std::cin >> x >> y;
    std::cout << x + y << std::endl;
    return 0;
}