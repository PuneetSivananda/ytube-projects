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
    return 0;
}