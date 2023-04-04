#include <iostream>

int main(int argc, char **argv)
{
    std::cout << "Hello World" << std::endl;
    int value = 8 / 0;
    std::cout << value << std::endl;
    return 0;
}