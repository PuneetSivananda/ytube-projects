#include <iostream>
#include <string> //duplicate
#include "statements.cpp"

using namespace std;

int main()
{
    int myFirsint = 5;
    float myFirstFloat = 3.4f;
    bool myFirstBool = true;
    char myFirstChar = 'a'; // single quote for chars
    std::string myFirstStr = "hello";
    string mySecondString = "My second string";
    std::cout << "Hello World!" << std::endl;
    double myFirstDouble = 2.3;
    long long int myFirstHugeInt = 1000000000;
    run();
    system("read -p 'Press Enter to continue...' var");
    return 0;
}