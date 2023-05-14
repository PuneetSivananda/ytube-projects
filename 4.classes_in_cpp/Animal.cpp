#include "Animal.h"

Animal::Animal(/* args */)
{
    sound = "Moo";
    name = "Cow";
}

Animal::~Animal()
{
}

void Animal::MakeSound()
{
    cout << name << ": " << sound << endl;
}
