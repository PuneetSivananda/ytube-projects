#include <iostream>
using namespace std;

/**
  Given three distinct integers A, B and C, print the second largest number among them.
Input:
  The input consists of three lines.
  The first line contains a single integer A.
  The second line contains a single integer B.
  The third line contains a single integer C.
Output:
  Print the second largest number among A, B and C, in a separate line.
*/
void swap(int *x, int* y)
{
  int tmp; 
  tmp = *x; 
  *x = *y; 
  *y = tmp;
}
int main() {
  int iA, iB, iC;
  cin >> iA >> iB >> iC;
  if (iB < iA) swap(&iB, &iA);
  if (iC < iB) swap(&iC, &iB);
  if (iB < iA) swap(&iB, &iA);
  cout <<iB << endl;
  return 0;
}