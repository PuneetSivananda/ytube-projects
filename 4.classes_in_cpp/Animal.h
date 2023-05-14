#include <iostream>
#include <string>

using namespace std;

#pragma once
class Animal
{
public:
    Animal();
    ~Animal();

    void MakeSound();

protected:
    string sound;
    string name;
};
