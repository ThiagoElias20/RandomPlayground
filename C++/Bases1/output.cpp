#include <iostream>

using namespace std; // não e necessario escrever mais std apos colocar o using

int main() {
    int x = 10;
    int y = 20;
    cout << "x = " << x << endl // endl é end of the line
         << "y = " << y << endl;

    double sales = 95000;
    double state_tax = sales * .04;
    double county_tax = sales * .02;
    double totalTax = state_tax + county_tax;

    cout << "sales = " << sales << endl
    << "state tax = " << state_tax << endl
    << "county tax = " << county_tax << endl
    << "total tax = " << totalTax << endl;

    return 0;
}