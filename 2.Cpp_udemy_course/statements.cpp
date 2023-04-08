#include <iostream>
#include <string>

using namespace std;

int run()
{
    cout << "2.Statements" << endl;
    int myValue = 4;
    // x<y  if value is less than
    // x>y  if value is bigger than
    // x==y if value is equal to
    // x<=y if value is equal or  less than
    // x>=y if value is equal or  bigger than
    cout << "Testing if bigger than 3" << endl;
    if (myValue > 3)
    {
        cout << "My Value is bigger than 3" << endl;
    }
    else if (myValue == 3)
    {
        cout << "My Value is equal to 3" << endl;
    }
    else
    {
        cout << "My Value is lesser than 3" << endl;
    }
    return 0;
}