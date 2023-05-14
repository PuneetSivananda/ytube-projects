#include "Animal.h"

Animal::Animal(/* args */)
{
    sound = "No Animal";
    name = "No Sound";
}

Animal::~Animal()
{
}

void Animal::MakeSound()
{
    cout << name << ": " << sound << endl;
}
