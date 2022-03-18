#include <iostream>
using namespace std;

int main() {
  int N;
  cin >> N;
  int Array[N];
  for (int i = 0; i< N; i++){
    cin >> Array[i];
  }
  for (int j=N-1; j >= 0; j--){
    cout << Array[j]<<" ";
  }
  return 0;
}