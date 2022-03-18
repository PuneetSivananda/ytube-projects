#include <iostream>
using namespace std;

/**
  Given three distinct integers A, B and C are sides of a triangle.
  print if they can form a triangle.
Input:
  The input consists of three lines.
  The first line contains a single integer A.
  The second line contains a single integer B.
  The third line contains a single integer C.
Output:
  Print the "YES" or "NO" to the console.
*/
int main() {
  int iA, iB, iC;
  cin >> iA >> iB >> iC;

  if (iA + iB> iC && iB+iC > iA && iA+iC > iB) cout <<"YES"<<endl;
  else cout <<"NO"<<endl;

  return 0;
}