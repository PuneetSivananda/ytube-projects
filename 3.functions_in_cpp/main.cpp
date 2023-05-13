#include <iostream>
#include <string>

using namespace std;

bool IsNumberSix(int number)
{
    if (number == 6)
    {
        return true;
    }
    else
    {
        return false;
    }
}

void GreetPerson(string name)
{
    cout << "Hi " << name << "!" << endl;
    printf("print a number: %i", 4);
}

bool WantToGreet(string name)
{
    if (name == "Link")
    {
        return true;
    }
    else
    {
        return false;
    }
}

int main()
{
    string result;
    result = (IsNumberSix(6) == 1) ? "Yes" : "No";
    cout << result << endl;
    result = (IsNumberSix(4) == 1) ? "Yes" : "No";
    cout << result << endl;

    GreetPerson("Bob");
    cout << endl;
    result = (WantToGreet("Bob") == 1) ? "Yes" : "No";
    cout << result << endl;
    return 0;
}