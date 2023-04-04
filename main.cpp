#include <iostream>

int main(int argc, char **argv)
{
    const char * p_message {"Hello From Memory"};
    std::cout << "Hello World" << std::endl;
    std::cout << p_message << std::endl;
    std::cout << * p_message << std::endl;
    return 0;
}