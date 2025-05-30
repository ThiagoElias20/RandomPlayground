#include <iostream>
#include <cmath>
// https://cplusplus.com/

int main() {
    double result = floor(1.2);
    double res2 = pow(2, 3);


    // program to calculate the area of a circle based on users input of radius
    double radius;
    std::cout << "radius of a circle" << std::endl;
    std::cin >> radius;

    const double area = 3.14 * pow(radius, 2);
    
    std::cout << area;

    /*
    comments
    */
    return 0;
}