#include <iostream>
#include <cstring> // para o memset
#define LOG(x) std::cout << x << std::endl
int main() {
    // raw pointers
    // a pointer is just an integers that holds and memory address
    void* ptr = nullptr; // void is typeless, 0 is not a valid memory address
    // null pointer is the memory address of 0, is not valid but is simple

    int var = 8; // every variable that we make has an memory address
    LOG(var);
    int* otherPtr = &var; // onde na memoria estamos guardando o var, ex = 0x7ffe2cad8074

    *otherPtr = 10;
    LOG(var);

    // pela mudança no pointer que apontava para o var que era 8 para 10, var virou 10
    // um pointer aponta para um local da memoria

    char* buffer = new char[8]; // alocamos 8 bytes ja que um char é 1 byte
    memset(buffer, 0, 8);

    char** doubleP = &buffer; // double pointer (um pointer apontado para um pointer)

    delete[] buffer; // como é um dado alocado no heap devemos deletar

    // no fim pointers são integers que guardam endereços de memoria
    return 0;
}