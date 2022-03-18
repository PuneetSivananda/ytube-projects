#include <iostream>
using namespace std;

int main() {
  int N, i, j;
  cin >> N;
  for(i=1; i<=N; i++){
    for(j=0; j < N-i;j++){
      cout << " ";
    }
    for(j=0;j<i;j++){
      cout << "*";
    }
    cout << endl;
  }
  return 0;
}