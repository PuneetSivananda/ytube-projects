#include <iostream>
using namespace std;

int main() {
  int N, searchString;
  int flag = -1;
  cin >> N;
  cin >> searchString;
  int Array[N];
  for (int i = 0; i< N; i++){
    cin >> Array[i];
  }
  for (int j=0; j < N; j++){
    if (Array[j] == searchString){
      flag = 1;
      break;
    }
    else {
      flag =  -1;
    }
  }
  cout << flag;
  return 0;
}