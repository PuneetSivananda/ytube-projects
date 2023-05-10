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

int main()
{
    string result;
    result = (IsNumberSix(6) == 1) ? "Yes" : "No";
    cout << result << endl;
    result = (IsNumberSix(4) == 1) ? "Yes" : "No";
    cout << result << endl;
    return 0;
}