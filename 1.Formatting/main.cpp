#include <iostream>
#include <iomanip>

int main()
{
    std::cout << std::endl;
    std::cout << "Hello";
    std::cout << std::endl;
    std::cout << "World" << std::endl;

    std::cout << "Flushes the buffer when called" << std::endl
              << std::flush;

    int col_width{10};

    std::cout << std::left;
    std::cout << std::setw(col_width) << "Lastname" << std::setw(col_width) << "Firstname" << std::setw(4) << std::endl;
    std::cout << std::setw(col_width) << "Moore" << std::setw(col_width) << "Roger" << std::setw(4) << std::endl;
    std::cout << std::setw(col_width) << "Smith" << std::setw(col_width) << "Dave" << std::setw(4) << std::endl;

    std::cout << std::right;
    std::cout << std::setw(col_width) << "Lastname" << std::setw(col_width) << "Firstname" << std::setw(4) << std::endl;
    std::cout << std::setw(col_width) << "Dave" << std::setw(col_width) << "Rave" << std::setw(4) << std::endl;
    std::cout << std::setw(col_width) << "Sanders" << std::setw(col_width) << "Dole" << std::setw(4) << std::endl;

    // internal justified
    std::cout << std::endl;
    std::cout << "Internal Justified:" << std::endl;
    std::cout << std::right;
    std::cout << std::setw(10) << -123.45 << std::endl;
    std::cout << std::internal;
    std::cout << std::setw(10) << -123.34 << std::endl;

    // fill empty space with dashes
    std::cout << std::left;
    std::cout << std::setfill('-');
    std::cout << std::setw(col_width) << "Lastname" << std::setw(col_width) << "Firstname" << std::setw(4) << std::endl;
    std::cout << std::setw(col_width) << "Dave" << std::setw(col_width) << "Rave" << std::setw(4) << std::endl;
    std::cout << std::setw(col_width) << "Sanders" << std::setw(col_width) << "Dole" << std::setw(4) << std::endl;

    // display boolean data
    bool condition{true};
    bool other_condition{false};

    std::cout << std::endl;
    std::cout << "condition:" << condition << std::endl;
    std::cout << "other_condition:" << other_condition << std::endl;

    std::cout << std::endl;
    std::cout << std::boolalpha; // or use nooolaplha to disable it
    std::cout << "condition:" << condition << std::endl;
    std::cout << "other_condition:" << other_condition << std::endl;

    return 0;
}