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
    return 0;
}