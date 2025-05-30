#include <iostream>

int main() {
    // * e / tem prioridade maior q + e -. () muda a ordem como na matematica normal
    double x = 10;
    double y = 5;
    double z = (x + 10) / (3 * y);
    std::cout << z;
    return 0;
}