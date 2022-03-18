#include <iostream>
using namespace std;

int evenNumbers(int n){
  int SumEven = 0;
  for (int i=1; i<=n; i++){
    std::cout << n << std::endl;
    SumEven = SumEven + (i*2);
  }
  return SumEven;
}

int oddNumbers(int n){
  int SumOdd = 1;
  int k = 1;
  for (;;) {
    std::cout << n << std::endl;
    k = k+2;
    SumOdd = SumOdd + k;
    n--;
    if(n == 1) break;
  }
  return SumOdd;
}


int main() {
  long long N;
  
  long long SumEven = 0;
  long long SumOdd = 0;

  std::cin >> N; 
  if (N == 1 && N > 0) {
    std::cout << N << " " << N+1; 
    return EXIT_SUCCESS; 
  }
  if (N > 0){
    SumEven = evenNumbers(N);
    SumOdd = oddNumbers(N);
    std::cout << SumOdd << " " << SumEven<<std::endl;
    return EXIT_SUCCESS; 
  }
  return EXIT_FAILURE; 
}