#include <iostream>
#include <string>

using namespace std;

class Animal
{
public:
    Animal();
    ~Animal();

    void MakeSound();

private:
    string sound;
    string name;
};
