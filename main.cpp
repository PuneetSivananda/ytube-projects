#include <iostream>

int main(int argc, char **argv)
{
    int value {45};
    std::cout<<"The Value is: "<<value<<std::endl;
    std::cout<<std::endl;
    value+=5;
    std::cout<<"The Value after +5 is: "<<value<<std::endl;
    return 0;
}