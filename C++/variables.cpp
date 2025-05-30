#include <iostream> // input output strem
// g++ helloWorld.cpp -o hello  // compilar
int main() {
    int a = 1;
    int b = 2;
    int temp = a;
    a = b;
    b = temp;


    int file_size = 100;
    int counter = 0;
    double sales = 9.99;
    std::cout << a; // std standart library
    return 0; // interpreta q deu tudo certo, qualquer outro valor sem ser 0 seria erro
}